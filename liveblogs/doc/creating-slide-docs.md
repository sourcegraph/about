## Creating slide docs

We kindly ask speakers to send their slides and speaker notes ahead of time to help livebloggers prepare and resources such as code, images, diagrams etc.

We need then a system by which we can provide each liveblogger with slide info for their talk.

## Restricting slide access to only th5 liveblogger only

We promise to only share links to the slides with the liveblogger. We do this by creating a Google doc for each talk that then contains links to the slides, images, or whatever sent to us by the speaker.

Because we have a one-to-one mapping of session to document, a way of automating the creation and linking to of these slide docs becomes a necessity for conferences like Strange Loop that have over 80 presentations.

This entails:

- Creating a Microsoft word doc for each talk
- Uploading them to Google Drive
- (Optional) Generating a tab separated list of doc name and links that can be pasted into a spreadsheet

## Create a Microsoft word doc for each talk

To generate the word docs, call the `create_slide_docs.py` script, passing it the path to a conference data file. The documents will be created in the same folder.

```bash
./src/create_slide_docs.py src/conferences/strange-loop-2019/sessions.json
```

## Uploading to Google Drive

1. Ensure there is a folder created for this conference, e.g. `Sourcegraph shared > Conferences > Strange Loop 2019 / Slide docs`
1. Upload them to this folder.
1. Select all documents and change permissions to be viewable by anyone with the link (editable only by someone at Sourcegraph).

## Generating a tab separated list of doc name and links

For easy access and sharing with a liveblogger, you may want to create a spreadsheet that lists the talk and the slide doc for it.

There's no easy way programmatically to do this, so here is some JS to generate a tab separated list of doc name and links for easy pasting into a spreadsheet.

```javascript
// Execute this in the browser dev tools when viewing the of slide files, e.g. https://drive.google.com/drive/u/0/folders/1kv9EAiTTbKjfqzbuEo_JISLMjlhjq1E1

let docs = [];

document.querySelectorAll('div[data-target="doc"]').forEach((el) => {
	docs.push({
		name: el.querySelector('div[aria-label]').textContent.replace('.doc', ''),
        id: el.getAttribute('data-id')
	})
})

let rows = ''
docs.forEach(el => rows+= `${el.name}\thttps://drive.google.com/open?id=${el.id}\n`)  
copy(rows)
```
