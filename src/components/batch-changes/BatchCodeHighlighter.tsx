import React, { useEffect, FunctionComponent } from 'react'

import classNames from 'classnames'
import Prism from 'prismjs'
import 'prismjs/components/prism-yaml'

import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/keep-markup/prism-keep-markup'

interface BatchCodeHighlighterProps {
    tabNumber: 1 | 2 | 3 // Specifies which tab is active for displaying the code. Accepts the integers 1, 2, or 3 corresponding to the respective code tab.
}

const BatchCodeHighlighter: FunctionComponent<BatchCodeHighlighterProps> = ({ tabNumber }) => {
    useEffect(() => {
        Prism.highlightAll()
    }, [tabNumber])

    const preClassName = tabNumber === 1 ? '!py-6' : '!py-4'
    return (
        <div className="batch-code mt-6 overflow-hidden rounded-2xl border border border-black border-[#E4E9F4] md:mt-8">
            <pre className={classNames(preClassName, 'line-numbers !bg-[#1F2A37] !text-sm')}>
                <code
                    className="language-yaml"
                    dangerouslySetInnerHTML={{
                        __html: codes[tabNumber - 1],
                    }}
                />
            </pre>
        </div>
    )
}

const codes: string[] = [
    `name<em>:</em> update-circle-ci-docker-user
description<em>:</em> Changes the Docker Hub username used for Circle CI

# Search for repositories containing a circle-ci.yml file with the old usename
on<em>:</em>
  <strong>-</strong> repositoriesMatchingQuery<em>:</em> mydockerhub-user file:circle-ci.[yaml|yml]

# In each repository
steps<em>:</em>
  # replace the old with the new username in the found files
  <strong>-</strong> run<em>:</em> |
      for file in <mark>“\${{ join repository.search_results_paths “ “ }}”;</mark>
       do
        sed -i <mark>‘s/mydockerhub-user/ci-dockerbhub-user/g;’</mark> ;$\{file}
       done
     container<em>:</em> alpine:3

# Describe the changeset (e.g., Github pull request) you want for each repository.
changesetTemplate<em>:</em>
  title<em>:</em> Use new Docker Hub username in Circle CI config
  body<em>:</em> This change replaces the old Docker Hub user with the new, CI Specific user account.
  branch<em>:</em> batches/update-ci-user
  commit<em>:</em>
    message<em>:</em> Update Docker user in CI
  published<em>:</em> false`,
    `name<em>:</em> sprintf-to-itoa
description<em>:</em> |
  \fThis campaign uses [Comby](https://comby.dev) to replace \`fmt.Sprintf\` calls
  in Go code with the equivalent but clearer \`strconv.Itoa\` call.
  
on<em>:</em>
  <strong>-</strong> repositoriesMatchingQuery<em>:</em> lang:go fmt.Sprintf("%d", :[v]) patterntype:structural
  
steps<em>:</em>
  # Use Comby to replace \`fmt.Sprintf\` calls
  <strong>-</strong> run<em>:</em> comby -in-place <mark>'fmt.Sprintf(“%d”, <mark>:[v]</mark>)’ ‘strconv.Itoa(“[v]’ </mark> 
      \${{ join repository.search_results_paths <mark>“ ”</mark> }}
    container: comby/comby
  # Run \`goimports\` over the just-modified files to import \`fmt\` if necessary
  <strong>-</strong> run<em>:</em> goimports -w \${{ join previous_step.modified_files <mark>“ “</mark> }}
    container<em>:</em> unibeautify/goimports
  
changesetTemplate<em>:</em>
  title<em>:</em> Replace fmt.Sprintf with equivalent strconv.Itoa
  body<em>:</em> This batch change replaces \`fmt.Sprintf\` with \`strconv.Itoa\`
  branch<em>:</em> batches/sprintf-to-itoa
  commit<em>:</em>
    message<em>:</em> Replacing fmt.Sprintf with strconv.Itoa
  published<em>:</em> false`,
    `name<em>:</em> pin-docker-base-images
description<em>:</em> Pin Docker images using the \`:latest\` tag to a specific image digest.
  
on<em>:</em>
 # Find all repositories that contain Dockerfiles with a \`:latest\` tag in a base image.
  <strong>-</strong> repositoriesMatchingQuery<em>:</em> ^FROM (\\\\w+\\\\)?\\\\w+:latest($|\\\\s) [file:Dockerfile]
      patternType:regexp
# In each repository...
steps<em>:</em>
  # Use dockerlint to pin the images in the Dockerfiles we found:
  <strong>-</strong> run<em>:</em> |
       for file in <mark>\`\${{ join repository.search_results_paths “ “ }}\`</mark>;
       do
         dockerlint -w \${file}
       done
    container<em>:</em> sourcegraph/dockerlint-run:latest 
# Describe the changeset (e.g., Github pull request) you want for each repository.
changesetTemplate<em>:</em>
  title<em>:</em> Pin Docker \`:latest\` image tags to digest
  body<em>:</em> |
    The \`:latest\` tag changes, so future pulls of this image may retrieve a different image
    with different (and possibly erroneous, unexpected, or dangerous) behavior.
    Pin the image to an <b>[</b>image digest<b>]</b> (https://docs.docker.com/engine/reference/commandline/pull/#
pull-an-image-by-digest-immutable-identifier)
    for deterministic behavior.
    *See also: <b>[</b>Hadolint error DL3007<b>]</b>(https://github.com/hadolint/hadolint/wiki/DL3007).*
  branch<em>:</em> batches/pin-docker-images
  commit<em>:</em>
    message<em>:</em> Pin Docker \`:latest\` image tags to digest
  published<em>:</em> false`,
]

export default BatchCodeHighlighter
