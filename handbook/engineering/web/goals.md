# Web Team Goals and Priorities 

**_The web team has three areas of focus:_**

  1. **_Delivering the full, unique value of Sourcegraph [extensions](https://docs.sourcegraph.com/extensions)_**
  1. **_Maintaining and expanding_ [_code host integrations_](https://docs.sourcegraph.com/dev/background-information/web/code_host_integrations)**
  1. **_Creating and maintaining a highly usable and intentionally designed webapp interface_**

**_TODO MOVE: Until it has fully staffed its own team, the web team also "parents" the code insights team_** 
  1. **_Developing code insights into an entirely new featureset_**

## Goals

### Extensions

**Problems:**

*Extensions ecosystem:* The extensions API gives Sourcegraph users powerful abilities to bring third-party information or custom functionality to Sourcegraph and their code hosts, but customers' extension usage is currently untracked and (presumably) low. Moreover, nearly all of the most commonly-used extensions were built by Sourcegraph, rather than third-party developers. This won't scale – Sourcegraph has neither the resources nor the insight that third-party developers have when it comes to building useful extensions. Sourcegraph's native extensions UI also has problems of scale, such as displaying very many extensions. In order to provide the full value of extensions, we need to move Sourcegraph extensions from "a feature" to "a platform" that others build on top of, and make sure the platform can promote and support heavy adoption. 

*IDE extension:* Sourcegraph provides powerful features, but right now you can only use them on Sourcegraph's site. Integrating search, code intelligence, and Sourcegraph extensions with an IDE like VSCode would massively spread adoption and awareness of Sourcegraph. 

**Milestones – ecosystem:**
1. We can collect anonymized, aggregate usage data of our extensions to determine the popularity and usage of (existing and future) extensions. 
1. The on-Sourcegraph extensions UI (action bar and contribution points) is clear and scalable, to help users discover and use extensions. 
1. The extensions registry promotes discovery of relevant extensions and third-party extensions. 
1. Sourcegraph partners with relevant third-party services to publish their own extensions. 
1. Sourcegraph can safely control the extensions ecosystem of third-party contributions without needing to individually review published extensions. 
1. Third-party extensions publishers can see metrics and adoption of their own extensions. 

**Milestones – IDE extension:**
1. A user can run a basic string Sourcegraph search in an IDE. 
1. A user can run a complex (regex or structural, all filters and tags) Sourcegraph search in an IDE. 
1. A user can get basic code intelligence in their IDE. 
1. A user can get advanced code intelligence in their IDE.
1. A user can use Sourcegraph extensions from within their IDE.

**Outcomes:**
- We can measure usage and adoption of extensions, by extension ID, across our customers in order to make informed product decisions. 
- TODO N% of Sourcegraph server users use at least one extension a week. 
- The Sales and CE teams are excited and confident when showing off the extensions registry and extensions features to customers. 
- Three custom extensions have been built by customers. 
- One custom extension has been publicly published by an existing customer and is used by people who are not at that customer. 
- Three "partnership" extensions have been built by Sourcegraph partners. 
- One of the five most-used Sourcegraph extensions was built by a non-Sourcegrapher. 
- N% of Sourcegraph users use the IDE extension. 
- Sourcegraph extensions provide 
- N% of new "free tier" users start using Sourcegraph in their IDE. 
- The Sourcegraph IDE extension reaches TODO N,000 developers. 

### Code host integrations

**Problems:**

*Code host support:* Right now, the Sourcegraph browser extensions and code host integrations only support a limited number of (the most popular) code hosts. Sourcegraph native integrations are only available for Bitbucket Server and GitLab. On those code hosts, the ways one can use Sourcegraph features and extensions are limited to a few specific UI touchpoints. 

**Milestones:**
1. The Sourcegraph browser extension supports Gerrit. 
1. The Sourcegraph code host integrations expose all of Sourcegraph's extension features on the code host UI, like directory decorations or extensions action bar and status bar functionality. 
1. Sourcegraph searches can be run while on the code host. 
1. TODO 

**Outcomes:**
- Usage of Sourcegraph code host integrations at customers with a supported code host is N%. 
- Sourcegraph code host native integrations and browser extensions support the most common code hosts and browsers. 

- TODO

### Web platform

**Problem:** The Sourcegraph web platform has accumulated lots of design debt, since much of it was built before we had a design team. Additionally, the existing UI components don't scale to Sourcegraph's feature growth. The web platform should be more accessible, delightful, customizable, and scalable in order to empower and accelerate Sourcegraph's growth. 

### Milestones: 
- Sourcegraph's core navigation effectively highlights our core features and scales to new ones. 
- Sourcegraph's UI lets users customize themes, colors, and font attributes. 
- Sourcegraph's UI components are clean and intentionally designed. 

**Outcomes:**
- The Sourcegraph UI meets all WCAG accessibility standards. 
- The Sourcegraph frontend is easy for other teams to develop on top of. 
- The Sourcegraph UI contributes to the Sourcegraph brand to the point where it is clear what "feels like" and "does not feel like" Sourcegraph. 




--- BELOW IS OLD GOALS --- 

**Outcome**: 

* All of these areas of focus are well-maintained, well-designed, well-documented, well-tested, performant, easy to set up, and leave users impressed. 
* The webapp helps users discover and employ the full power of Sourcegraph effectively, with a high quality and highly usable interface. 
* Soucegraph extensions and the extensions API provide powerful capabilities to users and a great experience for extension developers. 
* Code insights expose the value of Sourcegraph's knowledge of your codebase to users at all levels of an organization. 

### Medium term

_These medium-term goals are listed in order of rough priority. This means we preference a sooner-listed goal when making progress on one would conflict with another goal, but it doesn't mean we only work on the first goal until it's done – we balance our iterations in sum so we can make some progress on all of these goals over a quarter. Within each goal, the sub-goals are also listed in (stricter) priority order._ 

1. **Make code insights an entirely new reason to use Sourcegraph.**
   1. Focus on building prototypes to solve the most pressing needs of our customers, to clearly demonstrate the value of code insights. 
   1. Expose more generalizable metrics that let our users measure and track their own goals, whether those are migrations, code smells, security needs, cross-collaboration, or other information about code. 
   1. Expose features that let our users build their own insights. 

1. **Make Sourcegraph extensions a core part of Sourcegraph users' experiences.**
   1. Track anonymized, general usage of extensions to determine which extensions are most successful at adding value for our users to inform our future work.
   1. Build, maintain, and update API endpoints that are robust and immediately useful, to grow adoption of extensions. 
   1. Make the extensions action bar clear and scalable, and help users discover and use our extensions. 
   1. Improve discoverability and design of the extension registry to enable users to find the most useful extensions and make users excited to build their own extension. 

1. **Increase the weekly active users of all our code host integrations.**
   1. Maintain the existing native integrations and browser extensions. 
   1. Build support for new code hosts and new browsers, like Safari and Gerrit. 
   1. Build support for the browser extension to reference both a private Sourcegraph instance and public code on Sourcegraph.com. 

1. **Make the Sourcegraph web interfaces more consistent and improve discoverability of Sourcegraph features.**
   1. Make progress on design debt throughout the web app where the web team owns the design: repo page areas and panels, navigation and headers, general theming, and the blob page (file viewer). 
   1. Build and update designs to help users discover or understand everything Sourcegraph offers, like new navigation menus and header concepts. 

### Short term

Our goals for the current iteration can be found in our [iteration goals living Google Doc](https://docs.google.com/document/d/1n9WKjieKmd2YYkNrEsOfdmxRYUrbowLWjq05phLoQ6s/edit).

The individual tasks and progress of the current iteration can be found as GitHub issues in our [GitHub project board](https://github.com/orgs/sourcegraph/projects/45?fullscreen=true).

## Roadmap

1. ✅ Existing sourcegraph extensions are more discoverable ([RFC 209](https://docs.google.com/document/d/1I5BMEGp3QuB81AjSzLCQwq_XJV1sXevlU0lpB4O1pj8/edit#))
1. ✅ The Sourcegraph browser extension is more discoverable and easy to congifure ([RFC 221](https://docs.google.com/document/d/19f4xleYBU1zZZdqMmXlLmFxeR-fwEpOwTOgViOFOnyo/edit))
1. ✅ Build new and improved Sourcegraph extensions to showcase the value and opportunity of extensions ([RFC 246](https://docs.google.com/document/d/1HngEeLNAe7_QzVJr6UPi0Si4ZALqTzb7uonOxUiJP6g/edit))
1. ✅ Improve the Sourcegraph extensions (internal) development experience ([RFC 155](https://docs.google.com/document/d/1ikrUNVe3YVbR-JpegxhjrFdmRkTGzTLcOMkKHnOyjuE/edit)) and (external) documentation
1. 🔄 Code insights migration prototype and directory decoration
1. 🔄 Safari browser extension
1. Sourcegraph web app navigation is clearer and intentionally designed ([RFC 248](https://docs.google.com/document/d/1AEeCuXuYGlu2kU9HfTuh5rMuoL2ASxy-G4LFje_ySFE/edit?usp=drive_web&ouid=110069214620879702746))
1. Page title breadcrumbs are unified and useful 
1. Later-stage code insights work 
