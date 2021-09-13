# Amplitude for designers

Amplitude provides session-based event data of Sourcegraph cloud features. This guide describes several key concepts and provides a tutorial on how designers can use Amplitude for both discovery and measurement of user activities.

## Key concepts

### Events
Events are recorded when a Sourcegraph EventLog action is triggered as defined in the product. Events include clicks against tracked elements, page views, and other interactions defined when building product features. All Sourcegraph EventLog events are ingested into Amplitude as soon as they are released.



### Segmentation

Segmentation is a way to limit the group of users you are analyzing to users matching with specific attributes. Users can be segmented by whether they are new or active, have cloud accounts, have added repositories, or if they belonged to a specific cohort (weekly group of users) or participated in an a/b test.

By selecting a user segment you can answer questions like “Are users from before or after feature X was released more likely to do Y”? Another example: “Are users with property A, more likely to perform event B more than 5 times a week?”

### Notebooks

Amplitude’s notebook feature is incredibly useful for telling the story behind data in a way charts and dashboards cannot. Designers can use these notebooks to collect multiple charts that describe user behaviors, to report the results of their designs or hypothesize about how to improve key metrics.

### Dashboards

Amplitude’s dashboards are a handy way to save related charts for later reference.

---

## Getting started with Amplitude

Let’s start with asking the question: “How often do users view the sign-up page?“ and build a chart that tracks this data.

- Click + New in the sidebar and click chart
- Under ‘Events’, click the blue event box and select “Sign-up viewed”
- Under "...performed by Any user" > All, click the 'where' button, add the user property has_cloud_account and select ‘none’ from the resulting popup
- Add another 'where' fitler by clicking '+ where' and select is_sourcegraph_teammate = none.

We now have a view that represents the counts of daily views of the sign-up page over the last month (events), by users who do not have a cloud account and are not teammates (segmentation).

### Extend the timeline

Change the chart to weekly and extend the timeline to 12w with the button group on the top right of the chart. The chart now provides some data on how sign-up views have grown over the last few months and compares the last week to the current week.

### Adding additional events and segments

Let’s track other associated events and improve the segmentation of users.

- Under events, add the event “sign-up initiated”

We now have events on the screen that give us an idea of how many of the viewers could initiate sign up and how many actually do. We can segment this chart to only new users as well:

- In the heading “…performed by Any user” change 'Any' to ‘New’ to segment to only new users.

[View the example](https://analytics.amplitude.com/sourcegraph/chart/528n3wq?source=redirect%3A+chart+saved)

## Improving the chart to show a funnel of events

The chart we previously defined could be better described as a funnel chart that shows the percentage of users who are making it through each of a series of defined steps.

To create a funnel from this chart, simply change the chart type at the top from Event Segmentation to Funnel Analysis. Note that the events are now numbered and the line chart has become a bar chart.

The first bar represents all views of the sign-up page. The second bar represents all users who initiated signup.

[View the example](https://analytics.amplitude.com/sourcegraph/chart/5ad7ri3?source=redirect%3A+chart+saved)

## Exploration via segments

Often when exploring how a design impacts user actions, we need to determine if users who performed one action are more likely to trigger a specific event than users who did not. To chart this, we can create a segment who experienced the feature ('and who performed' My feature >= 1) and a segment who did not experience the feature ('and who performed' My feature = 0).

> For example, if you would like to determine if users who viewed the homepage video are more likely to have view the sign-up page than those who do not, you would create two segments, one with 'who performed Home page video... >= 1 time' and one with 'who performed Home page video... = 0. Then change the type of chart from uniques to Active %.

[View the example chart.](https://analytics.amplitude.com/sourcegraph/chart/6w426co?source=workspace)
