# Test page

```sourcegraph
patterntype:structural repo:^github\.com/gitpod-io/openvscode-server$@5c8a1f file:^src/vs/code/browser/workbench/workbench\.ts create(document.body, {:[1]})
```

```ruby
def hello
```

<script>
    var sg_codefences = document.querySelectorAll('pre.language-sourcegraph')
    sg_codefences.forEach(element => {
        var sg_codeblock = element.querySelectorAll('code.language-sourcegraph')
        var link = document.createElement('a')
        link.href = 'https://sourcegraph.com?q=' + encodeURIComponent(sg_codeblock[0].innerText)
        link.innerText = 'Open on Sourcegraph: '
        link.className = 'language-sourcegraph-link'
        element.prepend(link)
    })
</script>
