# Web Team Goals and Priorities 

**_The web team has two areas of focus:_**

  1. **_Extensibility: delivering the full, unique value of Sourcegraph across [extensions](https://docs.sourcegraph.com/extensions) and_ [_code host integrations_](https://docs.sourcegraph.com/dev/background-information/web/code_host_integrations).**
  1. **_Frontend platform: creating and maintaining a highly usable and intentionally designed webapp interface_**

**_Until it has fully staffed its own team, the web team also "parents" the code insights team [TODO update with link]_** 

## Goals

See also our [completed goals](goals_completed.md).

### Make Sourcegraph extensions a platform with an active ecosystem (_extensibility_)

**Problem:** 

- Customers' extension usage is currently untracked and (presumably) low, so we can't quantify if users are getting value from existing extensions. 
- Sourcegraph's native extensions UI has problems of scale, such as displaying very many extensions. 
- Sourcegraph's extensions registry has UI problems that make it harder for users or CE/Sales folks to find or share valuable extensions.
- Nearly all of the most commonly-used extensions were built by Sourcegraph rather than third-party developers. This won't scale – Sourcegraph has neither the resources nor the insight that third-party developers have when it comes to building useful extensions. 

**Milestones:**

1. We can collect anonymized, aggregate usage data of our extensions to determine the popularity and usage of (existing and future) extensions ([RFC 267](https://docs.google.com/document/d/1HKgwTyG-IcRM81xLAmussWV4EdK95uy7GjKFIG8vgU4/edit#heading=h.trqab8y0kufp)). 
1. The on-Sourcegraph extensions UI (action bar and contribution points) is clear and scalable, to help users discover and use extensions. 
1. The extensions registry promotes discovery of relevant extensions and third-party extensions. 
1. Sourcegraph partners with relevant third-party services to publish their own extensions. 
1. Sourcegraph can safely control the extensions ecosystem of third-party contributions without needing to individually review published extensions. 
1. Third-party extensions publishers can see metrics and adoption of their own extensions. 

**Outcomes:**

- We can measure usage and adoption of extensions, by extension ID, across our customers in order to make informed product decisions. 
- TODO N% of Sourcegraph server users use at least one extension a week. 
- The Sales and CE teams are excited and confident when showing off the extensions registry and extensions features to customers. 
- Three custom extensions have been built by customers. 
- One custom extension has been publicly published by an existing customer and is used by developers not at that customer. 
- Three "partnership" extensions have been built by Sourcegraph partners. 
- One of the five most-used Sourcegraph extensions was built by a non-Sourcegrapher. 

### Support seamless code host integration for all of Sourcegraph's features (_extensibility_)

**Problem:** 

- Right now, the Sourcegraph browser extensions and code host integrations only support a limited number of (the most popular) code hosts. 
- The ways one can use Sourcegraph features and extensions are limited to a few specific UI touchpoints rather than all the interactions available on Sourcegraph natively. 
- If one wants to use multiple Sourcegraph instances on a code host, one has to manually change the URL of the Sourcegraph instance every time.
- To run Sourcegraph searches, you have to navigate to Sourcegraph and away from the code host. 

**Milestones:**

1. The Sourcegraph browser extension supports Gerrit. 
1. The Sourcegraph code host integrations expose all of Sourcegraph's extension features on the code host UI, like directory decorations or extensions action bar and status bar functionality. 
1. The browser extension automatically falls back to Sourcegraph.com when configured with a private instance but on a public repo. 
1. The browser extension can support multiple private Sourcegraph instances for code intelligence. 
1. Sourcegraph searches can be run on or from the code host. 

**Outcomes:**

- Sales closes deals with customers that primarily use Gerrit ([primary customer metric](https://github.com/sourcegraph/customer/issues/138)).
- Usage of Sourcegraph code host integrations at customers with a supported code host is N%. 
- N_Todo% of users use multiple Sourcegraph instances for code intelligence on their code host. 

### Create an IDE extension that brings Sourcegraph into the IDE (_extensibility_)

**Problem:** 

Right now you can only use Sourcegraph's search features on Sourcegraph in a browser. Integrating search, code intelligence, and Sourcegraph extensions with an IDE like VSCode would massively spread the Sourcegraph's usefulness and ease-of-adoption for our users. 

**Milestones:**

1. A user can run a basic string Sourcegraph search in an IDE. 
1. A user can run a complex (regex or structural, all filters and tags) Sourcegraph search in an IDE. 
1. A user can get basic code intelligence in their IDE. 
1. A user can get advanced code intelligence in their IDE.
1. A user can use Sourcegraph extensions from within their IDE.

**Outcomes:**

- N% of Sourcegraph users use the IDE extension. 
- N% of new "free tier" users start using Sourcegraph in their IDE. 
- The Sourcegraph IDE extension increases DAU of Sourcegraph N% across our customer base. 
- The Sourcegraph IDE extension reaches TODO N,000 developers. 

### Make the web app UI consistent, accessible, and scalable (_frontend platform_)

**Problem:** 

The Sourcegraph web platform has accumulated lots of design debt, since much of it was built before we had a design team. Additionally, the existing UI components don't scale to Sourcegraph's feature growth. The web platform should be more accessible, delightful, customizable, and scalable in order to empower Sourcegraph's users and Sourcegraph's internal teams' development.

### Milestones: 
- Sourcegraph's core navigation effectively highlights our core features and scales to new ones. 
- Sourcegraph's UI lets users customize themes, colors, and font attributes. 
- Sourcegraph's UI components are clean and intentionally designed.

**Outcomes:**
- The Sourcegraph UI meets all WCAG accessibility standards. 
- The Sourcegraph frontend is easy for other teams to develop on top of. 
- The Sourcegraph UI contributes to the Sourcegraph brand to the point where it is clear what "feels like" and "does not feel like" Sourcegraph. 

### Short term

Our goals for the current iteration can be found in our [iteration goals living Google Doc](https://docs.google.com/document/d/1n9WKjieKmd2YYkNrEsOfdmxRYUrbowLWjq05phLoQ6s/edit).

The individual tasks and progress of the current iteration can be found as GitHub issues in our [GitHub project board](https://github.com/orgs/sourcegraph/projects/45?fullscreen=true).

## Roadmap

1. ✅ Existing sourcegraph extensions are more discoverable ([RFC 209](https://docs.google.com/document/d/1I5BMEGp3QuB81AjSzLCQwq_XJV1sXevlU0lpB4O1pj8/edit#))
1. ✅ The Sourcegraph browser extension is more discoverable and easy to congifure ([RFC 221](https://docs.google.com/document/d/19f4xleYBU1zZZdqMmXlLmFxeR-fwEpOwTOgViOFOnyo/edit))
1. ✅ Build new and improved Sourcegraph extensions to showcase the value and opportunity of extensions ([RFC 246](https://docs.google.com/document/d/1HngEeLNAe7_QzVJr6UPi0Si4ZALqTzb7uonOxUiJP6g/edit))
1. ✅ Improve the Sourcegraph extensions (internal) development experience ([RFC 155](https://docs.google.com/document/d/1ikrUNVe3YVbR-JpegxhjrFdmRkTGzTLcOMkKHnOyjuE/edit)) and (external) documentation
1. ✅ Code insights migration prototype and directory decoration
1. ✅ Safari browser extension
1. 🔄 Sourcegraph web app navigation is clearer and intentionally designed ([RFC 248](https://docs.google.com/document/d/1AEeCuXuYGlu2kU9HfTuh5rMuoL2ASxy-G4LFje_ySFE/edit?usp=drive_web&ouid=110069214620879702746))
1. 🔄 Page title breadcrumbs are unified and useful 
1. The extensions action bar is scalable and extensions can contribute to a status bar
1. Later-stage code insights work 