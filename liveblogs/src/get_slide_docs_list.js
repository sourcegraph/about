// Execute this in the browser dev tools when viewing the of slide files, e.g. https://drive.google.com/drive/u/0/folders/1kv9EAiTTbKjfqzbuEo_JISLMjlhjq1E1

let docs = [];

document.querySelectorAll('div[data-target="doc"]').forEach((el) => {
	docs.push({
		name: el.querySelector('div[aria-label]').textContent.replace('.docx', ''),
        id: el.getAttribute('data-id')
	})
})

let rows = ''
docs.forEach(el => rows+= `${el.name}\thttps://drive.google.com/open?id=${el.id}\n`)  
copy(rows)
