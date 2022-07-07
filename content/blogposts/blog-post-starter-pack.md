---
title: Blog Post Starter Pack
description: This is a template for writing content on the Sourcegraph blog!
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

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png"
  alt="Blog Post Starter Pack"
/>

<Alert>To preview this template, set the frontmatter to `published: true` and visit `/blog/starter-pack`.</Alert>

This template surfaces components and patterns commonly used in the Sourcegraph Blog. All of the sections below are ready for you to copy and paste into your blog post today!

To start a new blog post, create a new `[slug].md` file under the current year's directory.

<hr/>

## Frontmatter

At the top of this Markdown file is a section called `frontmatter`. These properties configure the post metadata. 

```
---
title: Blog Post Starter Pack
description: This is a template for writing content for the Sourcegraph blog!
authors:
  - name: Sourcegraph
    url: https://twitter.com/sourcegraph
publishDate: 2022-07-01T18:00+02:00
tags: [blog]
slug: starter-pack
published: true
---
```

### `title` & `description`

The `title` will automatically appear at the top of your post. The description will appear on the published list of posts at `/blog`.

### `slug`

Determine the URL for your post using the `slug`. For example, `slug: my-blog-post` will set the URL to `/blog/my-blog-post`.

### `author`

Blog posts support multiple authors. Add another author using `- name`.

### `published`

A post with `published: true` will appear in the list of published posts at `/blog`. To unpublish a post, set `published: false`.

### `socialImage` & `heroImage`

To set the thumbnails for this post, link to an image file using `socialImage` and `heroImage`. By default, blog posts use the Sourcegraph OG image. Using these properties in the frontmatter overrides the default. 

- `socialImage` determines the image appearing on shareable links
- `heroImage` determines the cover image appearing on `/blog`

<hr/>

## Components

The Sourcegraph Blog is implemented in Next.js and MDX. One strength of this implementation is the ability to incorporate components in Markdown. The following components are available for blog posts:

1. Alert
2. BlockquoteWithBorder
3. Figure
4. TableWrapper
5. Video
6. YouTube
7. EmbeddedHubSpot

Use these components to bring our blog post to life. Here are a few examples:

### Alert

Sometimes a piece of information needs to stick out. You can use the `Alert` component to call out these important points!

<Alert>Hey, this is important to know!</Alert>

You can also change the color of the Alert by setting its `type`. You can choose between:

- `primary`
- `secondary`
- `success`
- `danger`
- `warning`
- `info`
- `light`
- `dark`

<Alert type="info">This Alert is blue!</Alert>

Or, you may want to include a link within your Alert:

<Alert type="secondary">Check out Sourcegraph <a href="https://www.sourcegraph.com/search">Search.</a></Alert>


### Blockquote

Include a `BlockquoteWithBorder` to highlight a key quote. Optionally, you can also provide context above the quote with a `headline`. 

<BlockquoteWithBorder
  quote="Onboard to a new codebase, find answers faster, and identify security risks with universal code search."
  author="Sourcegraph"
  headline="Search your code. All of it."
/>


### Figure

Images help tell your story. Add them to your blog posts with the `Figure` component. If you would like to include a description, use the `caption` property. This will automatically be styled, so there is no need to include a separate `figcaption` description below an image.

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png"
  alt="Sourcegraph thumbnail"
  caption="The Sourcegraph logo"
/>


### TableWrapper

Tables are a straightforward way to present and compare data. When preparing a table, please include the `TableWrapper` component to ensure that the table adapts to different screen sizes. To support your preference, our blog accepts tables written in both Markdown and HTML.

This table is written in **Markdown**:

<TableWrapper>
| Id   | Species     | Sepal Length (cm) | Sepal Width (cm) | Petal Length (cm) | Petal Width (cm) |
|------|-------------|-------------------|------------------|-------------------|------------------|
| 1    | Iris Setosa | 5.1               | 3.5              | 1.4               | 0.2              |
| 2    | Iris Setosa | 4.9               | 3.0              | 1.4               | 0.2              |
</TableWrapper>

This is the same table, but written in **HTML**:

<TableWrapper>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Sepal Length (cm)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Iris Setosa</td>
        <td>5.1</td>
        <td>3.5</td>
        <td>1.4</td>
        <td>0.2</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Iris Setosa</td>
        <td>4.9</td>
        <td>3.0</td>
        <td>1.4</td>
        <td>0.2</td>
      </tr>
    </tbody>
  </table>
</TableWrapper>


### YouTube

You can easily embed YouTube videos using the `YouTube` component. The `id` value is found at the end of the URL for any YouTube video. To display the title below the video, add the `showTitle` property.

<YouTube
  title="Accelerate developer onboarding with Sourcegraph" 
  id="DgwvhRW1Cbc"
  showTitle={true}
/>


### Video

The `Video` component supports .mp4 and .webm files. First, upload the two versions of the video to Google Cloud. Then, add the root names of these files to the `source` property, without including their extensions. You can choose to repeat a video by including the `loop` property, or display the caption using the `showCaption` property.

<Video 
  source={{webm: 'blog/shift-left/01-code-reuse', mp4: 'blog/shift-left/01-code-reuse'}} 
  loop={true}
  title="Code reuse"
  caption="An example of code search with Sourcegraph"
  showCaption={true}
/>


### HubSpot Form Example

Use the `EmbeddedHubSpot` component to drop a custom HubSpot form into your post. In most cases, the `formId` is the only property that needs to be updated. This is the same `formId` dictated by the HubSpot console. Once added to your post, the HubSpot form will render wherever you place the `div` using the specified `id` value.

<EmbeddedHubSpot 
  portalId='2762526' 
  formId='08e6c442-0e7c-4892-a262-76dae55ab497' 
  targetId='#sign-up-form' />

<div id="sign-up-form"></div>


## Code

Any code you write, you can style! The Blog uses Prism for code formatting. Specify the language at the front of the code block. 

**TypeScript**

```ts
export const BlogPost<BlogPostProps> = ({title, text}) = {
  <h1>{title}</h1>
  <p>{text}</p>
  …
}
```


## Links

Add links with an anchor tag as you usually would: 

<div className="text-center mb-5">
  <a href="https://www.sourcegraph.com/search">Check out Sourcegraph Search!</a>
</div>

If you are wrapping an image in a link, please include a `title` on the anchor tag for accessibility, this way screen readers can pick up all the content.

<a href="https://www.sourcegraph.com/search" title="Go to Sourcegraph Code Search">
  <Figure 
    src="https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png"
    alt="Sourcegraph thumbnail"
  />
</a>


## TrySourcegraph CTA

Note: A footer that includes the "Try Sourcegraph" CTA is automatically included at the end of each blog post.

<hr/>

## Need support?

Please reach out to the Content Platform Team in #content-platform with any questions!

