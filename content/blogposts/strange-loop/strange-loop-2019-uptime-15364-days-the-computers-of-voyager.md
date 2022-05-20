---
title: "Strange Loop 2019 - Uptime 15,364 days - The Computers of Voyager"
description: "The Voyager 1 and Voyager 2 space probes, both launched in 1977, each had a primary objective to explore Jupiter and Saturn. This goal was achieved by 1981. Yet Voyager, NASA's longest running mission, has continued to this day. Both Voyager probes are still operating, and returning scientific data from outside our solar system. This talk explores the computing systems of Voyager - the systems which enable remote control of the spacecraft, and provide for the recording and return of data to Earth. These systems have proved to be both adaptable, durable, and resilient in support of a scientific undertaking now in it's fifth decade."
authors:
  - name: Gabe Ortiz for the Strange Loop 2019 Liveblog
    url: https://twitter.com/signalnine
publishDate: 2019-09-13T00:00-15:30
tags: [
  strange-loop
]
slug: strange-loop-2019-uptime-15364-days-the-computers-of-voyager
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true

---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Aaron Cummings</span>
        <a href="https://twitter.com/btvaaron" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/aaroncummings" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
        <a href="http://aaroncummings.com" target="_blank" title="Speaker's site"><i className="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

The Voyager 1 and Voyager 2 space probes, both launched in 1977, each had a primary objective to explore Jupiter and Saturn. This goal was achieved by 1981. Yet Voyager, NASA's longest running mission, has continued to this day. Both Voyager probes are still operating, and returning scientific data from outside our solar system. This talk explores the computing systems of Voyager - the systems which enable remote control of the spacecraft, and provide for the recording and return of data to Earth. These systems have proved to be both adaptable, durable, and resilient in support of a scientific undertaking now in it's fifth decade.

---

## History
Voyager is a pari of space probes launched in 1977. They're still out there returning data from the edges of the solar system, it's NASA's longest-running mission.
!(/blog/strange-loop-2019/voyager01.jpg)
In 1964 Voyager was conceived as a "grand tour of the outer planets," using a gravity assist to get from one planet to the next.

We needed a space probe that could gather data and return it to Earth & run for a decade or longer mostly autonomously due to the speed of light.

The Voyager probes were designed with triple redundant systems and 5x redundancy on the core system with voting logic. Plutonium 238 was chosen as the energy source in the RTG. Voyager had three of those with a total of 13.5kg of plutonium.
!(/blog/strange-loop-2019/voyager03.jpg)
The Grand Tour wasn't approved for budgetary reasons but a scaled back program was approved and became the Voyager program. Operational lifetime was originally designed to be 5 years.
!(/blog/strange-loop-2019/voyager02.jpg)

## Design
The Voyager program was designed to be reconfigurable, redundant and resilient. 

It was discovered that Jupiter has intense ionization belts so the spacecraft was designed to have significant shielding. 

The computer systems onboard were
* CCS 
* AACA 
* FDS
!(/blog/strange-loop-2019/voyager04.jpg)

## CCS
The CCS controls things like the power system, temperature and attitude and navigation

It was interrupt driven with timers and subsystem events

Memory consisted of fixed procedures and uplinked events, all reconfigurable and consisted of nonvolitle plated wire memory.

The hardware was very similar to previous designs used in the Viking missions.

In terms of architecture it had 18 bit words split into a 6 bit opcode and a 12 bit address
It's capable of about 11 thousand IOPs. 

## AACA 
The AACA keeps the spacecraft pointed in the right direction. The CCS decided WHAT to do and the AACA figured out how to do it.
The hardware was basically the same as the CCS. 

Using digital control systems made it easier to update the systems as needed.

## FDA

The FDA handles Collection, transmissiona and storage of data collected by the sensors. It used CMOS memory which was volatile and needed a lot of shielding, being vulnerable to radiation.
The system was a new design. Because there was very lmited storage, the data collection happens in realtime. 
Golay encoding was used as a form of parity checking, since there is no ability to retry. Voyager does have a tape drive for when it can't relay data. The camera has a resolution of 800x800 pixels with 8 levels of gray.

## Voyager 0
The National Air and Space museum has a engineering prototype of Voyager that's handy for troubleshooting.


## Post-Launch

Post-launch there was an issue with the control transmission and the primary receiver on Voyager 1 failed after an automated failover attempt. There's a short in a capacitor on the secondary receiver so it although it works it's somewhat tempermental.
They managed to get more funding to get to Uranus and Neptune. They added a data compression algorithm to deal with the transmission rate decreasing due to signal attenuation. They switched the probe to use both processors, one to deal with the compression.
Power available has been decreasing slowly, the thermocouples are degrading and about half of the Plutonium has been used up. NASA has been turning off and cycling the systems to conserve power. We expect Voyager to last maybe another 5 years. After it ceases operation it'll still continue out into the galaxy, carrying the Voyager golden record. 

