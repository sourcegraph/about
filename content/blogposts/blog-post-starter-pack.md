---
title: Blog Post Starter Pack
description: This is a template for writing content on the Sourcegraph blog!
authors:
  - name: Sourcegraph
    url: https://twitter.com/sourcegraph
publishDate: 2013-04-19T00:00
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

<Alert>To preview this template visit [`/blog/starter-pack`](https://about.sourcegraph.com/blog/starter-pack).</Alert>

This template surfaces components and patterns commonly used in the Sourcegraph Blog. All of the sections below are ready for you to copy and paste into your blog post today!

To start a new blog post, create a new `[slug].md` file under the current year's sub directory within the `/content/blogposts/` directory.

<hr className="my-6" />

## Frontmatter

This section is called `frontmatter`, it provides the post's metadata.

```yaml
---
title: Blog Post Starter Pack
description: This is a template for writing content for the Sourcegraph blog!
authors:
  - name: The author name
    url: https://example.com/
  - name: Second authors name (optional)
    url: https://example-2.com/
publishDate: 2013-04-19T00:00
tags: [blog]
slug: starter-pack
published: true
heroImage: /blog/thumbnail-image.jpg
socialImage: Use to set large social image i.e.  https://about.sourcegraph.com/blog/sourcegraph-social-img.png
canonical: Use to override the canonical link i.e. https://www.fastcompany.com/90565930/im-deaf-and-this-is-what-happens-when-i-get-on-a-zoom-call
videoID: 'dQw4w9WgXcQ'
---

Your markdown content goes here
```

* The `title` field will automatically appear at the top of your post.
* The `description` field will appear on the published list of posts at `/blog`.
* The `authors` field is for any author of the blog. The url field is optional but recommended. * The indentations on this field are important to keep matching the example. Blog posts support multiple authors using [YAML syntax](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html#yaml-syntax). Add another author using `- name`.
* The `publishDate` field must be in the exact format above. Don't worry about the time, just change the date.
* The `tags` field should be left as blog until we incorporate filtering posts via tags.
* Determine a unique URL for your post using the `slug`. For example, `slug: my-blog-post` will set the URL to `/blog/my-blog-post`.
* A post with `published: true` will appear in the list of published posts at `/blog`. To unpublish a post, set `published: false`.
* To set the thumbnails for this post, link to an image file using `socialImage` and `heroImage`. By default, blog posts use the Sourcegraph OG image. Using these properties in the frontmatter overrides the default. 
*`socialImage` determines the image appearing on shareable links
* `heroImage` determines the cover image appearing on `/blog`
* The `canonical` field is optional and only required to override the canonical link. Important for cross-posting blogs from personal blogs or published news sites. By default, set to `https://about.sourcegraph.com/blog/the-blog-slug`.
* The `videoID` field is an optional YouTube video ID and will take priority even if the `socialImage` is present. This will generate an inline video preview card when sharing on social media. This is supported for all types of posts; blog, podcast, and release posts.

<hr className="my-6" />

## Components

The Sourcegraph Blog is implemented with Next.js with MDX support. One strength of this implementation is the ability to incorporate our custom components in Markdown. The following components are available for blog posts:

<ol>
  <li><a href="#alert">Alert</a></li>
  <li><a href="#badge">Badge</a></li>
  <li><a href="#blockquote">Blockquote</a></li>
  <li><a href="#figure">Figure</a></li>
  <li><a href="#tableWrapper">TableWrapper</a></li>
  <li><a href="#video">Video</a></li>
  <li><a href="#youtube">YouTube</a></li>
  <li><a href="#hubspotform">HubSpotForm</a></li>
</ol>

Use these components to bring your blog post to life. Here are a few examples:

### Alert

Sometimes a piece of information needs to stick out. You can use the `Alert` component to call out these important points!

<Alert>Hey, this is important to know!</Alert>

You can change the color of the Alert by setting its `type` property to one of the following:

`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, or`dark`

<Alert type="info">This Alert is blue!</Alert>

Or, you may want to include a link within your Alert:

<Alert type="secondary">Check out Sourcegraph <a href="https://www.sourcegraph.com/search">Search.</a></Alert>

### Badge

Use the `Badge` component to call out specific topics or versions of content.

<div className="mb-sm">
  <Badge text="Default badge" size="small" />
</div>

<div className="flex justify-between">
  <Badge text="light-gray" size="small" color="light-gray" />
  <Badge text="white" size="small" color="white" />
  <Badge text="white-outlined" size="small" color="white-outlined" />
  <Badge text="dark-gray" size="small" color="dark-gray" />
  <Badge text="blue" size="small" color="blue" />
  <Badge text="blurple" size="small" color="blurple" />
  <Badge text="violet" size="small" color="violet" />
  <Badge text="cerise" size="small" color="cerise" />
  <Badge text="vermillion" size="small" color="vermillion" />
  <Badge text="green" size="small" color="green" />
  <Badge text="lemon" size="small" color="lemon" />
</div>
Change the <b>color</b> of the Badge by setting its `color` property to one of the above options.
```javascript
<Badge text="lemon" size="small" color="blurple" />
```

<div className="mt-sm">
  <Badge text="NEW!" size="small" color="violet" circle={true} />
</div>
<b>Round</b> the edges for a "pill badge" effect, add `circle={true}` property for the markdown.
```javascript
<Badge text="NEW!" size="small" color="violet" circle={true} />
```

<div className="mt-sm">
  <Badge text="Search code" color="cerise" link="https://sourcegraph.com/" size="small" />
</div>
To add a <b>link</b> to your badge, pass the badge a link as seen below:
```javascript
<Badge text="Search code" color="cerise" link="https://sourcegraph.com/" size="small" />
```

<div className="mt-sm">
  <Badge text="BETA" color="vermillion" size="large" />
</div>
To use a <b>larger badge</b>, give the component a `size="large"` property.
```javascript
<Badge text="BETA" color="vermillion" size="large" />
```

<br />

### Blockquote

Include a `Blockquote` to highlight a key quote. Optionally, you can also provide context above the quote with a `headline`. 

<Blockquote
  headline="Search your code. All of it."
  quote="Onboard to a new codebase, find answers faster, and identify security risks with universal code search."
  author="Sourcegraph"
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

You can easily embed YouTube videos using the `YouTube` component. The two required properties are `title` and `id`.

A title should be descriptive for your YouTube video and is used for accessibility and the caption. It is also hidden by default. To optionally display the title below the video as a caption, add the `showTitle` property.

The `id` value is found at the end of the URL for any YouTube video.

<YouTube
  title="Accelerate developer onboarding with Sourcegraph" 
  id="DgwvhRW1Cbc"
  showTitle={true}
/>


### Video

The required properties for the `Video` component are `source`, `loop`, and `title`. 

Since the component supports both `.mp4` and `.webm` file formats, you'll need to upload the two file formats of the video to our Google Cloud [assets bucket](https://console.cloud.google.com/storage/browser/sourcegraph-assets/blog) under an appropriate sub directory. We recommend both files to have the same filename. Then, add the file path starting after `/sourcegraph-assets/` from the Public URL of these files to the `source` property under `mp4` and `webm` respectively, without the file extensions.

You can choose to repeat a video by including the `loop` property, optionally auto play the video by including the `autoPlay` property, or optionally display a caption under the video by passing a filled in `caption` property.

This example is based on both the `mp4` and `webm` file formats living at the following URLs with the same filenames:
- `https://storage.googleapis.com/sourcegraph-assets/blog/shift-left/01-code-reuse.mp4`
- `https://storage.googleapis.com/sourcegraph-assets/blog/shift-left/01-code-reuse.webm`

<Video 
  source={{
    webm: 'blog/shift-left/01-code-reuse',
    mp4: 'blog/shift-left/01-code-reuse'
  }}
  loop={true}
  title="Code reuse sample, title read by screen readers (make these short)"
  caption="An example of code search with Sourcegraph, caption underneath video to further describe (can be the same or different from the title)"
/>


### HubSpotForm

Use the `HubSpotForm` component to drop a custom HubSpot form into your post. In most cases, the `masterFormName` and `chiliPiper` props are the only properties that need to be updated. Once added to your post, the HubSpot form will render in its place. All the options for this component are:

- `formId` - an optional form ID if the form doesn't fall under one of our [master forms](https://docs.google.com/document/d/1qa393uAW_tjwNtH9jHf_d__PCJgmbsxNoxi9cO4XOcE/edit)
- `masterFormName` - an optional master form name; `contactMulti`, `contactEmail`, `gatedMulti`, or `gatedEmail` for general contact forms and gated forms that have multi fields or an email field
- `onFormSubmitted` - an optional callback function for triggering an action after a form is submitted
- `inlineMessage` - an optional message to display after a form is submitted. We have a [generic fallback](https://github.com/sourcegraph/about/blob/main/src/components/HubSpotForm.tsx#L288) if none is provided. 
- `chiliPiper` - an optional boolean (`true`/`false`) to enable Chili Piper. This is false by default.

<HubSpotForm
  masterFormName="contactEmail"
  chiliPiper={true}
/>

## Code

You can add syntax highlighting to any code you write! The Blog uses Prism for code formatting. Specify the language at the front of the code block. 

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

<div className="text-center mb-6">
  <a href="https://www.sourcegraph.com/search">Check out Sourcegraph Search!</a>
</div>

Instead of linking images using Markdown, please use the Figure component. This will allow our images to be more accessible to screen readers. To add a link to an image, provide a `caption` and `link` property to the `Figure` component.

<Figure 
  src="https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png"
  alt="Sourcegraph thumbnail"
  caption="Check out Sourcegraph Search!"
  link="https://www.sourcegraph.com/search"
/>

Add a link icon for links that open in a new window by including the `linkIcon={true}` property to the Figure or Video component:
```javascript
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png"
  alt="Sourcegraph thumbnail"
  caption="Check out Sourcegraph Search!"
  link="https://www.sourcegraph.com/search"
  linkIcon={true}
/>
```
<Figure
  src="https://storage.googleapis.com/sourcegraph-assets/blog/default_hero_social.png"
  alt="Sourcegraph thumbnail"
  caption="Check out Sourcegraph Search!"
  link="https://www.sourcegraph.com/search"
  linkIcon={true}
/>
```javascript
<Video 
  source={{
    webm: 'blog/shift-left/01-code-reuse',
    mp4: 'blog/shift-left/01-code-reuse'
  }}
  loop={true}
  title="Code reuse"
  caption="Docs"
  link="https://docs.sourcegraph.com/"
  linkIcon={true}
/>
```
<Video 
  source={{
    webm: 'blog/shift-left/01-code-reuse',
    mp4: 'blog/shift-left/01-code-reuse'
  }}
  loop={true}
  title="Code reuse sample, title read by screen readers (make these short)"
  caption="Docs"
  link="https://docs.sourcegraph.com/"
  linkIcon={true}
/>

<div className="mt-6" />
## About the author

We encourage our authors to include an "about the author" section to their blog posts. Use the following Markdown for consistency throughout our blog posts.

_Author blurb information goes here. You can chat with [author] on Twitter [@author-name](https://twitter.com/) or our community [Discord](https://discord.com/invite/vqsBW8m5Y8)._

<div className="mt-6" />
## TrySourcegraph CTA

Note: A footer that includes the "Try Sourcegraph" CTA is automatically included at the end of each blog post so there is no need to include it manually.

<hr className="my-6" />

## Need support?

If you have any questions, concerns, or requests, please reach out to the Content Platform Team in #content-platform!

