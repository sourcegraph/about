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
published: false
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
}
export const BlogPost<BlogPostProps> = ({title, text}) = {
  <h1>{title}</h1>
  <p>{text}</p>
  …
}
``` 

## Links

If you are including an external link, use an anchor tag. If you are wrapping an image in an anchor tag, please include a `title` for accessibility.

```html
<a href='https://www.sourcegraph.com/search'>Check out Sourcegraph Search!</a>
```

## Components

Our blog is implemented in Next.js and MDX. One strength of this implementation is the ability to incorporate dynamic components in Markdown. For blogposts, the following components are available:

1. Alert
2. Figure
3. TableWrapper
4. Video
5. YouTube
6. EmbeddedHubspot

### Alert

Call out important information using the `Alert` component!

<Alert>This is important to know!</Alert>

You can change the color of the Alert by setting its `type` to `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'light'`, or `'dark'`.

<Alert type="info">This Alert is blue!</Alert>
<Alert type="warning">This Alert is yellow!</Alert>
<Alert type="success">This Alert is green!</Alert>

You can also include a link within your Alert:

<Alert type="secondary">Check out Sourcegraph <a href="https://www.sourcegraph.com/search">Search.</a></Alert>

### Figure

Images help illustrate your point. You can include them in your blogposts with the `<Figure />` component.

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png"
  alt="Sourcegraph thumbnail"
/>

Include a description below your image using the `caption` property.

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png"
  alt="Sourcegraph thumbnail"
  caption="The Sourcegraph logo"
/>

### YouTube

You can easily embed YouTube videos using the `YouTube` component. To display the title below, add the `showTitle` property.

<YouTube
  title="Accelerate developer onboarding with Sourcegraph" 
  id="DgwvhRW1Cbc"
  showTitle={true}
/>

### Video

If your video is a local file, you can still get animated using the `Video` component. Upload the .webm and .mp4 versions of the video to Google Cloud. You can choose to repeat the video by including the `loop` property or display the caption below the video using the `showCaption` property.

<Video 
  source={{webm: 'blog/shift-left/01-code-reuse', mp4: 'blog/shift-left/01-code-reuse'}} 
  loop={true}
  title="Code reuse"
  caption="Discovering and reusing existing code can help you spin up a MVP ASAP, so you can quickly validate the user need with a rough sketch of the product."
  showCaption={true}
/>

### HubSpot Form Example

<EmbeddedHubSpot 
  portalId='2762526' 
  formId='08e6c442-0e7c-4892-a262-76dae55ab497' 
  targetId='#sign-up-form' />

<div id="sign-up-form"></div>

## TrySourcegraph CTA

A footer is automatically included at the end of each blog post.


