---
title: "Strange Loop 2019 - Digital and Social Resilience through the NYC Mesh"
description: "NYC Mesh is a community-run mesh network that helps over three-hundred homes connect to high-speed Internet; making it one of the largest mesh networks in the world. We work with anyone interested in reclaiming ownership over their Internet, but specifically engage with underserved populations including residents in low-income housing and community centers. Built by a combination of consumer-grade materials and donated fiber-optic cable, this network gives people ownership and control over their Internet usage."
authors:
  - name: Shanti Chellaram
    url: https://shanti.wtf
publishDate: 2019-09-13T00:00-14:30
tags: [
  strange-loop
]
slug: strange-loop-2019-digital-and-social-resilience-through-the-nyc-mesh
heroImage: /blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-6 m-0">
        <span className="liveblog-presenters__name">Michael Donatz</span>
        <a href="https://twitter.com/donutsonhudson" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/donutsonhudson" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
      </p>
  <p className=" mr-6 m-0">
        <span className="liveblog-presenters__name">Jillian Murphy</span>
        <a href="https://www.linkedin.com/in/jillianemurphy" target="_blank" title="LinkedIn"><i className="fa fa-linkedin pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

NYC Mesh is a community-run mesh network that helps over three-hundred homes
connect to high-speed Internet; making it one of the largest mesh networks in
the world. We work with anyone interested in reclaiming ownership over their
Internet, but specifically engage with underserved populations including
residents in low-income housing and community centers. Built by a combination
of consumer-grade materials and donated fiber-optic cable, this network gives
people ownership and control over their Internet usage.

---

# Digital and Social Resilience through NYC Mesh

Hi everyone, and thank you for coming to our talk! We're Jillian and Michael,
and we are volunteers at a non-profit called NYC Mesh.

So, this talk is split into two main sections. In the first section, we'll talk
about the  social and political realities of internet connectivity in New York
City: the basics of the network technology, and the inspiration for our
organization, NYC Mesh. In the second half, we'll focus on the organization
structure of NYC Mesh: how our volunteers cooperate, how we reach out to and
foster community involvement, and how we are trying to increase the overall
awareness of mesh networks.

*Note:* Neither of us are network engineers. We're going to simplify
explanations a lot for the purpose of this talk, but that'll get us halfway
there.

## What is the internet?

The global internet, in a nutshell, is a network of networks. It connects 3.5
billion people - about half of the people in the world.

It accomplishes this through standardized protocols that define how messages
should go over the network, and the behavior of the hardware that carries a
physical signal. Most networks use fiber optics, copper wire, and radio
antennas, but anything that can carry messages and data can be used to build a
network - carrier pigeons, thumb drives hidden in sneakers, or planes full of
hard-drives.

NYC Mesh builds most of its network with radio antennas.

Many large continental networks are connected with massive undersea cables

Here's an image of the undersea cable network that connects the global
internet. This high-bandwidth network of networks forms what's called the
"internet backbone".

![map of undersea cables constituting the "internet backbone"](/blog/strange-loop-2019/nyc-mesh-1.png)

Connecting your own home to this global network is called the "Last Mile
Problem", and is the responsibility of an ISP.

## What is an ISP?

ISP stands for Internet Service Provider.

ISPs started back in the 80s as a competitive market, providing dial-up
internet access to end users who wanted to connect to a global internet.

Then, with the dominance of broadband internet access, cable companies had a
huge advantage as they already had built direct lines to customers' homes.

The infrastructure is built with profit in mind, so wealthier communities tend
to have high-end connectivity while poorer communities have slower speeds or no
connectivity at all.

With the amount of services that now have moved to the internet, this impacts
the ability of poor to get access to critical sevices.

This disparity is called the **digital divide**.

## Connectivity in NYC

![map of home internet connectivity in NYC, showing Harlem, the Bronx and Queens as underserved](/blog/strange-loop-2019/nyc-mesh-2.png)

These maps show how limited the connectivity is - red is less. Manhattan is
basically white, while the outer boroughs are much less connected. In the
Bronx, only 70% of homes have access to broadband.

NYC has "compromised connectivity". Most people have only 1 or 2 broadband
providers, and are still at the mercy of their ISPs.

Half of all small businesses in NYC are unable to get gigabit internet - this
limits what kind of business can exist in what neighborhoods.

## Solution: NYC Mesh

NYC Mesh aims to provide a solution to the shortcomings of ISPs. Rather than
being profit-driven, it attempts to be community-driven. It's predicated on the
belief that everyone deserves a connection that is high-speed, affordable, and
reliable. 

"Trust of your internet extends beyond your home, and to the broader community
to which you are connected."

We dynamically route through nearby nodes rather than traveling through a
singular lossy access point. The idea of a mesh network has been around since
the 80s. But, it's only recently that the tech became cheap, available, and
user-friendly enough to allow for true community-owned networks.

![connectivity graph of the Jefferson street neighborhood hub](/blog/strange-loop-2019/nyc-mesh-3.png)

Example: here's how we can add additional nodes in between to offer more
resilience across the nodes.

## Other Meshes Worldwide

We're not alone! Guifi and others run mesh networks around the world. Guifi has
35k active nodes, and they're located in Catalonia in Spain and they are the
gold standard of mesh networks. Catalonia is also famous for grassroots and
community organizing.

There is also Freifunk in Germany, wlan slovenija, and WasabiNet right here in
St. Louis!

We were particularly inspired by the 4 tenets listed in Guifi's Network Commons
License:

* Participants are free to use the network in any way that does not limit
  others' ability to do the same.
* Participants are free to know how the network and its components function
* Participants are free to offer and accept services on the internet on their
  own terms
* By joining the free network you agree to extend the network to others under
  the same rules

## Resilient Communities

Now it's time to take a deep dive into the ways in which NYC Mesh is a
resilient network and community.

NYC Mesh the organization is run cecentralized, and we maintain a very flat
organization. We are conservative when selecting tools, nad we remain sensitive
to hidden costs - money spent traveling to install sites, and human time costs
in operational complexity.

Regarding being tied into the community - we engage in outreach to try and
increase engagement, turning end-users into hobbyists into activists.

We host monthly events, and try to focus on education.

"When I went out and did the first community outreach, it became clear that
people really just wanted a cheap internet, and didn't care about the greater
mission so much."

I also believe that building a diverse community is important and that we
should make this kind of mesh networking is available to people who are not
very technical.

We try to create opportunities for people to contribute that highlight their
own individual strengths, regardless of whether or not those are technical. We
also try to encourage new people to take leadership roles in areas that align
with their passion and vision.


## Breaking down the barriers to entry

Running an organization this way is really hard - not everyone has the time
required to volunteer, how do we keep those people relevant?

We run organizational meetings with frequency, but we changed how they were run
over time. It used to be at a bar, which was intimidating to people who didn't
feel comfortable with drinking, and there have been other observations like
that.

We now don't do that any more because it was exclusionary. We hold our meetings
in a common community space.


Our org meeting this past month, we had folks from the Queens Digital Tech Lab
present, which is one of the ways we try to collaborate with other
organizations and build community that way.

We want to keep these meetings productive, and try to always leave with a
project plan.

Also, a lot of attendees don't have internet - we try to make sure that all of
our materials are accessible both physically and digitaly.

We also run general classes and talks - try to keep the messaging oriented
around event and non-profit oriented so as to not scare away people who are
intimidated by attending a tech event.

## Mentorship

There's a mentorship model - Install Leaders take Install Novices with them on
node installations. After a number of node installations, Novices get promoted
to leaders and can carry on the tradition. This is part of the install leader
trainings. There's also a classroom style process where they teach people how
to run these installs.

Group Installations are a way for people to get past the idea of the daunting
learn  This one on the left had 70 attendees. At least 30% of the people there
have been actively engaged in other projects.

![photos of happy volunteers installing routers](/blog/strange-loop-2019/nyc-mesh-6.png)

Photos of new members, happy volunteers. They historically have little to no
training and are exciting about where they're connecting to and building a
sense of community.


# Where are we?

We're mostly situated in Manhattan and Brooklyn.

We cover a wide variety of buildings, from 4-story walk-ups to entire apartment
complexes. The Saratoga node, a housing unit run by the NYC Housing Authority,
is our first foray into public-private partnerships.

![front view of St. Francis School for the Deaf](/blog/strange-loop-2019/nyc-mesh-5.png)

This picture was taken at the St. Francis school for the deaf, which we've
helped get on the mesh.

People are chomping at the bit. In Queens people have stopped waiting for us to
be ready and are just willing to go and build their own mesh. We are trying to
figure out how we're trying to meet that demand for leadership.

Smaller scale group installations in the Greenpoint network - we're getting
connectivity and meshing happening in the neighborhood over the summer.

We're getting things going at block parties in BedStuy in brooklyn. We've been
speaking  at block parties and getting people interested. We managed to
outcompete a neighbroing build-your-own-ice-cream stand.

We are lucky to be in NYC, get lots of free journalism. People like free or
affordable internet, it's a great conversation starter.

Our outreach surpasses NYC - we have a Slack group. There are other people
around the country curious about how to build mesh networks. We invite them to
reach out to the Slack group. We also go to conferences to share our learnings,
like Strangeloop and BattleMesh.

BattleMesh started off as a big conference of mesh protocols to compete with
each other, but now has more of a collaborative learning atmosphere.

We've learned a lot. We're good at surviving on a small amount of money. We're
the only self-sustaining community network. We've been able to scale up
volunteers over time. Interest has spiked since the repeal of net neutrality.

![graph showing dramatic increase in install rate and install request rate after vote of net neutrality](/blog/strange-loop-2019/nyc-mesh-4.png)

We still have problems, though!  We haven't figured out how to structure
ourselves as a distributed organization. We're not sure how to secure funding.
We don't know how we're going to be able to hire employees, and pay people for
their work. We're also still really bad at reaching consensus.

We're hoping that once we reach 1000 nodes, we might be able to pay some people
for their hard work. We're also open to hosting applications on the mesh network
that empower the local communities, like chat and emergency response.

Thank you! *[applause]*

## Q&A

We can take a few qustions but just a reminder: We are not network engineers.

**Audience 1:** How does a decentralized organization sign contracts / function with other ISPs?

**J:** We used to be project of the internet society ISOC, and they were
the fallbacks for that. However it still relied on individuals for that. We're
in the process of applying for a 501c3 so that we can be our own organization.
We're trying really hard to not centralize the organization for this.
Specifically, establishing a board has been really tricky.

**Audience 2:** Do you have plans for how to reduce your reliance on ISPs for
longer-distance connections?

**M:** Short: no. There'es always going t obe  longer-distnace issues
where ISPs are going to be things. Maybe we can join with a regional mesh
network. 

**J:** Another issue is being located on backbone, where we're located,
NYC, doesn't have much connectivity.

**Audience 3:** Do you have a relationship with HUD (NYC Housing and Urban
Development)?

**M:** We try to! NYC is very beauracratic. We're hoping that Saratoga is
an experiment in that space, trying to show we're reliable. Howvevr they are
already contracting with Sprint.

**Audience 4:** What's the cost of a typical node install?

**M:** We're Ubiquity fanboys, for lightbeams they run about $110. For Hub
nodes its about $160. That's for the sector beams that need to travel a few
hundred feet.

**J:** We try in our installation price to offer a $50 volunteer fee. We try to
subsidise installation fees and help out other people. It's a volunteer thing, so if people 

**Audience 5:** Can you talk about how you patch your network and that sort of thing?

**J:** We're compromisable over physical sitations. We are password protected.
Our general guidance is to keep your network transmission as secure as you
would in a coffee shop.

**Audience 6:** Have you had to overcome organized opposition? We had to tear
down the mesh network in Seattle because it was being part of a camera - so
mesh network has a bad taste there.

**M:** No, not really.

**J:** This is where our education plays into this, and teaching how the tech
works. For example, we're trying to combat the notion that we're just a tool of
the police because we're not associated with them at all.

**Audience 7:** Have you developed strategies to maintain a non-heirarchical organization?

**J:** This is where we tie in to working with neighborhood groups. It's
definitely challenging. It's still a work in progress. It's something we're
working on this year.

**Audience 8:** You said you're fearing the day that ISPs notice. What happens
when the FTC makes this illegal?

**M:** I don't want to say on camera.

*[laughter and applause]*

Thank you for coming to this talk!

*This talk was originally given at Strangeloop 2019.*