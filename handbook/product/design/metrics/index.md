# Analytics and product design


Analytics is an important part of two critical phases of the design process:

* Discovery  
  * When tackling problems such as retention, user flows, and traction it is important to understand existing user behaviors. By reviewing analytics, we can find areas where product design can be improved.
* Measurement
  * Design decisions can be subjective, which can introduce uncertainty.  Setting goals and reviewing how our designs perform against those goals removes some of this uncertainty.  

A practical example of using discovery and measurement to improve an OKR:

> Improving retention is a key OKR. The search product team included video in a recent homepage update. While reviewing the events correlated with high retention, it is discovered that users who view the video are more likely to retain, but that the overall views of the video (and thus retained users) are small.

From this discovery, a designer could place greater importance on the video to elicit more views and thus improve retention for more users.

## Analytics tooling
Sourcegraph has three solutions for analytics:

### Amplitude
Amplitude provides session-based event data of Sourcegraph cloud features.  Designers can use it for both discovery and measurement of user retention, usage metrics, funnels, path journeys, and other quantitative analysis needs.

[Learn more about using Amplitude as a designer](/test)

### Looker
Looker provides access to all event log data across both on-premise installations and cloud products from a single interface. Because Looker data is provided primarily from ‘ping’ data, it can answer cumulative questions about events but does not provide events related to individual user sessions.

### Google Analytics
Google Analytics provides session-based data that is useful for reviewing how users interact with the cloud product. Useful information which can be derived from Google Analytics includes frequency, technology (browser, mobile device, etc.), conversion against goals and behavior (content, flows, and events). Data is only available for users who have accepted the Sourcegraph cookies.
