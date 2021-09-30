// Load and render Mermaid diagrams:
// - Load only on pages where Mermaid is used.
// - Allow customization of:
//    - `data-rendered-width`: specify fixed width vs chart scrolling
//    - `data-scroll-right`: don't scroll all the way to the beginning of time in the chart
window.addEventListener('load', () => {
  var sg_codefences = document.querySelectorAll('pre.language-sourcegraph, pre.sourcegraph')
  sg_codefences.forEach(element => {
    var sg_codeblock = element.querySelectorAll('code.language-sourcegraph, pre.chroma')
    var link = document.createElement('a')
    link.href = 'https://sourcegraph.com?q=' + encodeURIComponent(sg_codeblock[0].innerText)
    link.innerText = 'Open on Sourcegraph: '
    link.className = 'language-sourcegraph-link'
    element.prepend(link)
  })
  if (document.querySelector('pre.mermaid')) {
    const element = document.createElement('script')
    element.src = 'https://unpkg.com/mermaid@8.0.0-alpha.6/dist/mermaid.min.js'
    document.head.appendChild(element)
    element.addEventListener('load', function () {
      mermaid.mermaidAPI.initialize({
        startOnLoad: false,
        flowchart: {
          useMaxWidth: false,
          htmlLabels: true,
        },
      })
      const elements = document.querySelectorAll('pre.mermaid')
      for (const [i, element] of elements.entries()) {
        const id = 'mermaid-' + i
        mermaid.mermaidAPI.render(id, element.innerText, function (svg) {
          const overrideWidth = element.dataset.renderedWidth
          const scrollRight = element.dataset.scrollRight

          const container = document.createElement('div')
          container.innerHTML = svg
          element.replaceWith(container)
          container.firstChild.style.height = 'auto'
          if (overrideWidth) {
            container.style.overflow = 'auto'
            container.firstChild.style.width = overrideWidth
          }
          if (scrollRight) {
            container.scrollTo(((container.scrollWidth - container.clientWidth) * parseInt(scrollRight)) / 100, 0)
          }
        })
      }
    })
  }
})
