## Google Ads:
- Google Tag Manager - Tags send website events to Google Analytics. These events are very broad + general, such as "All button clicks on about.sourcegraph.com". 
- Google Analytics defines Goals. These Goals listen for the Events defined by the Tags mentioned above. These Goals are more specific, though. They will match on things like the button's text, or the page's URL. So they only "convert" when a button click was on a button with specific text, or when on pages with a specific URL.
- In Google AdWords, we'll see conversions when one of the Goals in Google Analytics gets triggered.
## Bing Ads:
- Google Tag Manager - Tags send website events to Microsoft  Advertising (the Microsoft equivalent of Google Analytics)
- Bing Ads defines Conversion Goals. These Conversion Goals align with the ones listed for Google Analytics above, and will also specify the same drill-down parameters. 
- In the Microsoft Advertising platform, we'll see conversions when these Conversion Goals are hit.
## LinkedIn:
- Google Tag Manager - This is different from the providers above. For LinkedIn, they don't specify conversions in their platform. Rather, they produce pixels that you attach to tags in GTM. So, we create specific Triggers for exactly the Conversion Goals that we want. These would match the definition of Conversion Goals in Microsoft Bing Advertisements and Goals in Google AdWords
- In LinkedIn Campaign Manager, you add a Conversion. You specify the name, window of time (30 days and 1 day) that conversions should log after clicking an ad, and the campaigns to track conversions. Then, you get an event specific pixel. Copy this.
- In GTM, create Tags that mirror the Conversion Goals in Microsoft Bing Ads and Google AdWords, using the Triggers you created in step 1. For each tag, copy the associated pixel you got from creating the corresponding Conversion from the LinkedIn Campaign Manager.