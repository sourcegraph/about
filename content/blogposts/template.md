---
title: Blogpost Starter Pack
description: This is a template for writing content for the Sourcegraph blog!
authors:
  - name: Sourcegraph
    url: https://twitter.com/sourcegraph
publishDate: 2022-07-01T18:00+02:00
tags: [blog]
slug: starter-pack
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png
published: true
---

![Blogpost Starter Pack](https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png)

## Get started

...

## Code

Any code you write, you can format! Specify the language at the front of the code block.

```ts
interface BlogPostProps {
  title: string
  text: string
  …
}
export const BlogPost<BlogPostProps> = ({title, text}) = {
  <h1>{title}</h1>
  <p>{text}</p>
  …
}
``` 

## Links

Add links using `LinkWrapper`.


## Components

Our blog is implemented in Next.js and MDX. One strength of this implementation is the ability to incorporate dynamic components in Markdown. For blogposts, the following components are available:

1. Alert
2. Figure
3. LinkWrapper
3. TableWrapper
4. Video
5. YouTube

### Alert

Call out important information using the `Alert` component!

```html
<Alert>This is important to know!<Alert/>
```

You can change the color of the Alert by setting its `type` to `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'light'`, or `'dark'`.

```html
<Alert type="info">This Alert is blue!<Alert/>
<Alert type="warning">This Alert is yellow!<Alert/>
<Alert type="success">This Alert is green!<Alert/>
```

### Figure

Images help illustrate your point. You can include them in your blogposts with the `<Figure />` component.

```html
<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png"
  alt="Sourcegraph thumbnail"
/>
```

Include a description below your image using the `caption` property.

```html
<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png"
  alt="Sourcegraph thumbnail"
  caption="The Sourcegraph logo"
/>
```

To make an image link to another page on click, add a `link` such as in the example below.

```html
<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png"
  alt="Sourcegraph thumbnail"
  link={{ href: "https://www.sourcegraph.com/search", alt: "Go to Sourcegraph Search" }}
/>
```

### YouTube

You can easily embed YouTube videos using the `YouTube` component. To display the title below, add the `showTitle` property.

```html
<YouTube
  title="Accelerate developer onboarding with Sourcegraph" 
  id="DgwvhRW1Cbc"
  showTitle={true}
/>
```

### Video

If your video is a local file, you can still get animated using the `Video` component. Upload the .webm and .mp4 versions of the video to Google Cloud. You can choose to repeat the video using `loop`, and you can display the caption using `showCaption`.

```html
<Video 
  source={{webm: 'blog/shift-left/01-code-reuse', mp4: 'blog/shift-left/01-code-reuse'}} 
  loop={true}
  title="Code reuse"
  caption="Discovering and reusing existing code can help you spin up a MVP ASAP, so you can quickly validate the user need with a rough sketch of the product."
  showCaption={true}
/>
```

### HubSpot Form Example

```html
<EmbeddedHubSpot 
  portalId='2762526' 
  formId='08e6c442-0e7c-4892-a262-76dae55ab497' 
  targetId='#sign-up-form' />

<div id="sign-up-form"></div>
```
