# Web Team Goals and Priorities 

## Goals

### Long term

**_Deliver the full, unique value of [extensions](https://docs.sourcegraph.com/extensions) to our users._**

**Outcome**: Our webapp, browser extensions and native integrations, and code insights are great platforms to provide our users unique value. These platforms are well-maintained, well-designed, consistent, easy to setup, well-documented, well-tested, performant, and leave users impressed. The extensions platform and API provide powerful capabilities to extension developers and a great developer experience. The webapp helps users discover and employ the full power of Sourcegraph effectively. Code insights expose the value of code metadata to users at all levels of an organization. 

### Medium term

To reach our long-term goal, we set the following medium-term goals to guide our short-term iteration plans.

1. **Make the Sourcegraph web interfaces more consistent and improve discoverability of Sourcegraph features.**
   Our web app has accumulated a lot of design debt over time, which negatively impacts how we can use it as a vehicle to deliver extensions.
   With areas like the repository page, user settings area (which extensions are configured through), navigation, settings, command palette UI and overall design affected, we want to provide the best possible UX for using Sourcegraph. 
   Our code host integrations, which are an implementation of our extension API, are a huge driver of adoption inside companies and multiply the value of extensions by bringing them into code review workflows, and we want to ensure every user can discover and set them up. 
2. **Make extensions a core part of Sourcegraph users' experiences.**
   Our extension platform includes the workflow around creating, installing and using extensions, the API exposed to developers and its documentation.
   To grow adoption of extensions, these need to be solid, but they are currently lacking on multiple dimensions.
   We have a powerful extension API, but we know of use cases and customer requests that could put adddional endpoints to use. 
   Extensions are much-loved by users, but the extensions registry can be difficult to discover and has room for design improvements around finding the most useful extensions and making someone excited to build their own extension. 
3. **Make insights an entirely new reason to use Sourcegraph.**
   We have a powerful amount of information about a codebase, and we want to expose metrics that let our users measure and track their own goals, whether those are migrations, code smells, security needs, cross-collaboration, or other information about code. We want to focus this project on the most pressing needs of our customers, before expanding it to cover continually more use cases. 

### Short term

Our goals for the current iteration can be found in our [iteration goals living Google Doc](https://docs.google.com/document/d/1n9WKjieKmd2YYkNrEsOfdmxRYUrbowLWjq05phLoQ6s/edit).

The individual tasks and progress of the current iteration can be found as GitHub issues in our [GitHub project board](https://github.com/orgs/sourcegraph/projects/45?fullscreen=true).

## Roadmap

1. ✅ Existing sourcegraph extensions are more discoverable ([RFC 209](https://docs.google.com/document/d/1I5BMEGp3QuB81AjSzLCQwq_XJV1sXevlU0lpB4O1pj8/edit#))
1. ✅ The Sourcegraph browser extension is more discoverable and easy to congifure ([RFC 221](https://docs.google.com/document/d/19f4xleYBU1zZZdqMmXlLmFxeR-fwEpOwTOgViOFOnyo/edit))
1. ✅ Build new and improved Sourcegraph extensions to showcase the value and opportunity of extensions ([RFC 246](https://docs.google.com/document/d/1HngEeLNAe7_QzVJr6UPi0Si4ZALqTzb7uonOxUiJP6g/edit))
1. 🔄 Improve the Sourcegraph extensions (internal) development experience ([RFC 155](https://docs.google.com/document/d/1ikrUNVe3YVbR-JpegxhjrFdmRkTGzTLcOMkKHnOyjuE/edit)) and (external) documentation
1. Code insights TBD
1. Sourcegraph web app navigation is clearer and intentionally designed ([RFC 248](https://docs.google.com/document/d/1AEeCuXuYGlu2kU9HfTuh5rMuoL2ASxy-G4LFje_ySFE/edit?usp=drive_web&ouid=110069214620879702746))
1. Page title breadcrumbs are unified and useful 
1. Later-stage code insights work 

