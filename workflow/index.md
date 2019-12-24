# Sourcegraph workflow

Sourcegraph helps [<!-- personas -->](../handbook/product/personas.md) organizations with the following stages of the development workflow:

- **Code:** Unblock yourself while coding by finding answers in the code and every bit of related information.
- **Review:** Review code, find problems early, and share knowledge.
- **Verify:** Uphold code quality standards and comply with required processes on all code changes.
- **Monitor:** Monitor services and quickly respond to incidents in your production environment.
- **Automate:** Automate error-prone and time-consuming workflows such as refactors and triage, coordinated across projects and teams.
- **Manage:** All of your repositories and users, configured and accessible in one place.

# Other tools

See product comparisons and integrations with:

- [Atlassian Fisheye](tools/atlassian_fisheye_vs_sourcegraph.md)
- [Bitbucket Cloud](tools/bitbucket_cloud_vs_sourcegraph.md)
- [Bitbucket Server](tools/bitbucket_server_vs_sourcegraph.md)
- [GitHub](tools/github_vs_sourcegraph.md)
- [GitLab](tools/gitlab_vs_sourcegraph.md)
- [Google Cloud Source Repositories](tools/google_cloud_source_repositories_vs_sourcegraph.md)
- [Hound](tools/hound_vs_sourcegraph.md)
- [Livegrep](tools/livegrep_vs_sourcegraph.md)
- [OpenGrok](tools/opengrok_vs_sourcegraph.md)
- [Phabricator](tools/phabricator_vs_sourcegraph.md)

([File an issue](https://github.com/sourcegraph/about/issues) if you want us to add a page about another product.)

## Summary feature comparison chart

<style>
    table.comparison-chart {
        table-layout: fixed;
    }
    table.comparison-chart thead th:nth-child(1) {
        width: 20%;
    }
    table.comparison-chart thead th:nth-child(2) {
        width: 20%;
    }
    table.comparison-chart thead th:nth-child(3) {
        width: 20%;
    }
    table.comparison-chart thead th:nth-child(4) {
        width: 20%;
    }
    table.comparison-chart thead th:nth-child(5) {
        width: 20%;
    }
    table.comparison-chart td {
        height: 4em;
        overflow: hidden;
    }
    .green {
        background-color: #42cf68;
    }
    .gray {
        background-color: #222;
    }
    .tooltip .tooltiptext {
        display: none;
        position: absolute;
    }
    .tooltip:hover .tooltiptext {
        display: inline-block;
        visibility: visible;
        width: 250px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        padding: 0.5em 0.5em;

        position: absolute;
        z-index: 1;
        margin-left: 1em;
    }
</style>

<table class="comparison-chart">
<thead>
    <th></th>
    <th>Sourcegraph</th>
    <th>GitHub</th>
    <th>GitLab</th>
    <th>Oracle OpenGrok</th>
    <th>Google Cloud Source Repositories</th>
</thead>

<tr>
    <th>Search</th>
    <th colspan="20"></th>
</tr>

<tr>
    <td>Basic text and file search</td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
</tr>

<tr>
    <td>Symbol search</td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="green"></td>
    <td class="gray"></td>
</tr>

<tr>
    <td>Regex</td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="green"></td>
    <td class="green"></td>
</tr>
<tr>
    <td>Multi-repository regex search</td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="green"></td>
</tr>
<tr>
    <td><a href="https://comby.dev/" target="_blank">Comby syntax</a></td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td>Scales to 100,000s of repositories</td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td class="tooltip">
        Universal search
        <span class="tooltiptext">
            Search across all repositories and code hosts
        </span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>

<tr>
    <th>Code navigation</th>
    <th colspan="20"></th>
</tr>
<tr>
    <td>Basic file browsing</td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
</tr>
<tr>
    <td>Symbol outline</td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="green"></td>
    <td class="green"></td>
</tr>
<tr>
    <td class="tooltip">Basic code intelligence
        <span class="tooltiptext">Jump-to-definition within the same file, in some languages</span>
    </td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td class="tooltip">Universal code intelligence
        <span class="tooltiptext">Jump-to-definition across files and repositories, most languages</span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td>Provides code navigation on all major code hosts</td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>


<tr>
    <th>Other</th>
    <th colspan="20"></th>
</tr>
<tr>
    <td>Integrates with major code hosts and code review</td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td class="tooltip">Extensions
    <span class="tooltiptext">Third-party and internal developer tools integrating directly into search and code browsing UI.<span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td>Open source</td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td class="tooltip">Code-as-data GraphQL API
        <span class="tooltiptext">GraphQL API supports structured information about source code that is used to power smart internal developer tools</span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td>On-prem deployment</td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="gray"></td>
</tr>

</table>
