# Feature Maturity Tracker

Sourcegraph keeps track of how mature each of our feature areas are, to help you make the best decisions about how to use our product. Clicking on the feature name will take you to its documentation.

If you do not see content below, check you have JavaScript enabled then contact Product Management.

## Maturity levels

- ○: not yet available, but on our roadmap
- ◔: available in the product, but may not be ready for production use yet
- ◑: usable for primary jobs to be done, but may lack depth
- ●: a complete feature used extensively by our customers

<script>
  const harvey_balls = ["○", "◔", "◑", "●", "♥"]

  page_content = document.getElementsByClassName('markdown-body')[0];

  const xhr = new XMLHttpRequest();
  xhr.open('GET', '../data/maturity.json', false);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send(null);

  const res = JSON.parse(xhr.responseText);
  var sections = {}

  Object.entries(res).forEach((section) => {
    const [key, value] = section;
    const section_name = key

    if (typeof(sections[section_name]) === 'undefined') {
      sections[section_name] = page_content.appendChild(document.createElement("h2"))
      sections[section_name].innerText = key
    }
    Object.entries(value).forEach((component) => {
      const [key, value] = component;
      const component_name = key
      var maturity
      var documentation_link
      var description
      Object.entries(value).forEach((attribute) => {
        const [key, value] = attribute;
        if (key == 'maturity') {
          maturity = value
        } else if (key == 'documentation_link') {
          documentation_link = value
        } else if (key == 'description') {
          description = value
        }
      });
      if (typeof(maturity) !== 'undefined') {
        var subheading = document.createElement("h3")
        subheading.innerText = component_name
        subheading.innerHTML = '<a href="' + documentation_link + '">' + subheading.innerText + '</a>' + ' '  + harvey_balls[maturity]
        var description_heading = document.createElement("p")
        description_heading.innerText = description
        page_content.appendChild(subheading)
        page_content.appendChild(description_heading)
      }
    });
  });
</script>
