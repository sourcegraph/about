// Load and render Mermaid diagrams.
window.addEventListener("load", () => {
    if (document.querySelector('pre.mermaid')) {
        const element = document.createElement('script')
        element.src = 'https://unpkg.com/mermaid@8.0.0-alpha.6/dist/mermaid.min.js'
        document.head.appendChild(element)
        element.addEventListener("load", function() {
            mermaid.mermaidAPI.initialize({
                startOnLoad: false,
                flowchart: {
                    useMaxWidth: false,
                    htmlLabels: true,
                }
            })
            const elements = document.querySelectorAll('pre.mermaid')
            for (const [i, element] of elements.entries()) {
                const id = 'mermaid-' + i
                mermaid.mermaidAPI.render(id, element.innerText, function(svg) {
                    const overrideWidth = element.dataset.renderedWidth
                    const scrollRight = element.dataset.scrollRight
                    
                    const container = document.createElement('div')
                    container.innerHTML = svg
                    element.replaceWith(container);
                    container.firstChild.style.height = "auto"
                    if (overrideWidth) {
                        container.style.overflow = "auto"
                        container.firstChild.style.width = overrideWidth
                    }
                    if (scrollRight) {
                        container.scrollTo((container.scrollWidth - container.clientWidth) * parseInt(scrollRight)/100, 0)
                    }
                })
            }
        })
    }
})