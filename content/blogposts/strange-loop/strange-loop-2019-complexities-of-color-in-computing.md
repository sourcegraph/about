---
title: "Strange Loop 2019 - Complexities of Color in Computing"
description: "Most of us don't question the assumptions we make about color and how we implement it in the technology we build, beyond perhaps a quick contrast check. This inattention to color is a grave mistake, as the history of color in computing is vibrant, and its impact on our lives can be significant! In this talk, we learn about the difference between Euclidean distance and delta-e between colors, and how it can break ADA compliance, crash your AI, and trick your facial recognition software into thinking you don't exist, all without raising an eyebrow."
authors:
  - name: Shubha Rajan
    url: https://shubharajan.com/
publishDate: 2019-09-14T00:00-10:20
tags: [
  strange-loop
]
slug: strange-loop-2019-complexities-of-color-in-computing
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Ellen Wondra</span>
        <a href="https://twitter.com/ln1draw" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/ln1draw" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
        <a href="http://www.ellenwondra.com/" target="_blank" title="Speaker's site"><i className="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Most of us don't question the assumptions we make about color and how we implement it in the technology we build, beyond perhaps a quick contrast check. This inattention to color is a grave mistake, as the history of color in computing is vibrant, and its impact on our lives can be significant! In this talk, we learn about the difference between Euclidean distance and delta-e between colors, and how it can break ADA compliance, crash your AI, and trick your facial recognition software into thinking you don't exist, all without raising an eyebrow.

---
[Watch the video recording here](https://www.youtube.com/watch?v=VCvOwoeOgv8)
## Introduction

![speaker intro](/blog/strange-loop-2019/complexities-intro.jpg)

Ellen Wondra is a web developer based in Tacoma, WA, and a graduate of the inaugural class of Ada Developers Academy, a software engineering training program for women and gender diverse people in Seattle. Before she was a developer, Ellen's first introduction to algorithms was through crafting and knitting, when visiting the clearance section on Michaels. She mostly dabbles in fiber arts. A few years ago, Ellen created the Stitchify Ruby gem, which converts an image into a crossstich pattern made with the available colors. This was more difficult than she thought it would be, and she needed to learn a lot about color in order to complete this project.

![Ellen's cross stitch designs](/blog/strange-loop-2019/cross-stitch-designs1.jpg)
![Ellen's cross stitch designs](/blog/strange-loop-2019/cross-stitch-designs2.jpg)
## What is Color?

Color starts out as white light. when it hits an object, some of the waves bounce off and others are absorbed. The colors that bounce back are the colors we perceive. Off-screen, color is *subtractive*. 

![a bouquet of colorful flowers](/blog/strange-loop-2019/color-flowers.jpg)

A real world example: a bouquet of flowers Ellen's roommate got last week. The same white light, containing all the same groupings on the electromagnetic wavelengths, hits those flowers. But then, the different flowers absorb the light differently. The red flowers absorb most of the light that was sent to them, leaving just a loose wavelength of red remaining to bounce back to your eye.

The purple flowers, on the other hand, don't absorb much color at all. They absorb a couple of wavelengths and send on a very short wavelength of purple light to your eyes.

Occasionally, this energy is enough to translate to noticeable heat, as well; anecdotally, when Ellen taught this lesson to her roommate, and mentioned that the red flowers should be slightly warmer than the purple ones, he was surprised to find it was true.



## Humans vs. Machines

In the human eye, color enters through the pupils, and hits the rods and cones of the retina in the back of the eye. Rods differentiate between light and dark, while cones differentiate color. Colorblindness can be caused by deficiencies in the optic nerve or in rods and cones. Although it is unknown what percentage of the population is actually colorblind (almost all studies are done only exclusively on individuals of Northern European Ancestry).

![diagram of the human eye](/blog/strange-loop-2019/human-eye.jpg)

Regardless, IE 11 is the most popular version of Internet Explorer currently in use, and it was only 2.61 % of the market share of browser clients in August 2019. The most popular ie browser is around half as popular as being colorblind. If developers are encouraged to make their websites accessible for IE 11, they should also account for the prevalence of colorblindness when building websites.

Pixels create color by combining red, green, and blue,against a black background. RGB pixels are typically *color additive*. 

There's a couple more computer colorspaces that come up, including sRGB, which is the standardized RGB created in 1996, hexadecimal which is a way of representing rgb, CYMK which stands for cyan, yellow, magenta black and which is a color-subtractive method of measuring color, and hsl which stands for hue/saturation/light. For the purposes of this talk we're going to focus on rgb, since it's based on the physics of the eye, but also reveals a lot of limitations and interesting cliffs on our understanding--say, for example, in comparing the distance in two colors


A Euclidean distance formula could theoretically calculate the differences between colors.

```text
Color 1 = ( R ₁ , G ₁ , B ₁  )
Color 2 = ( R ₂ , G ₂ , B ₂ ) 
Distance ² =  ( R ₁ - R ₂ ) ² + ( G ₁ - G ₂ ) ² + ( B ₁ - B ₂ ) ²

```

The human eye is more sensitive to differences in shadows to differences in light. It is a lot more sensitive to changes in illumination than it is to changes in color. It is also more sensitive to changes in dark tones than it is in changes in light tones. Delta E is an alternative method to measure color distance, standardized by the International Commission on Illumination. 

It has been changed several times throughout the years as the ability to depict color on a screen has advanced, along with our understanding of color. After the algorithm has been applied, it describes the difference between two colors in a single number. 

Originally, Ellen was going to show the formulas for delta E, but it didn't seem helpful, just intimidating. Suffice it to say that there is an entire branch of color science devoted to exploring why twice as much blue doesn't the same to the human eye as twice as much yellow.

Non-linear processing of visual information comes up again in photography, in a concept called gamma correction. Since the human eye is so much more sensitive to the differences in shadows than it is to the differences in light, but digital cameras default to linear storage and prioritization of light, unencoded images would store light at a linear rate, which leads to some unattractive images that don't pick up on detail in the shadows that our human eyes perceive and that do pick up on details in bright areas that our human eyes do not. 

Luckily, practically all digital photography now uses gamma encoding, which is algorithmic encoding that defines the relationship between a pixel and its actual luminosity. This means that similar to this idea of delta E, it uses the available modern knowledge of the eye and the properties of the hardware taking the picture to make adaptations in the encoding when the picture is taken.  It's more efficient, and it looks better, too.

John Austin did a great talk called RGB to XYZ that went into gamma correction in much more detail. I highly recommend you check it out if the concept interests you.

## Color and Accessibility

The Web Content Accessibility Guidelines extend the Americans with Disabilities Act of 1990. Developers of Beyonce.com, and Amazon.com are in the middle of a class action law suit involving WCAG. None of the websites for Democratic candidates meet WCAG guidelines.

Guidelines: 

- Multiple Indicators: Don't use color as the only indicator that something is wrong or that something has changed.

![right and wrong way to do error notifications](/blog/strange-loop-2019/multiple-indicators.jpg)


- Minimum contrast - AA requirements for minimum contrast between text and background on a page is 4.5:1. AA requirements for adjacent items should have a 3:1 contrast ratio

![contrast of different colors](/blog/strange-loop-2019/contrast.jpg)

- Font size, shape, and size - Can change contrast recommendations

## Relevant History of Color

In the 1950's Kodak sold almost all film. In 1954, Kodak sent out printers and "Shirley cards" to stores. The Shirley card, a photo of a pale-skinned woman, was used to balance color in printers. The use of the Shirley card lead to printers being miscalibrated for dark skinned individuals, because more red ink is required for darker skin tones. 

![the "Shirley card"](/blog/strange-loop-2019/shirley-card.jpg)

Today, we still haven't quite learned the lessons from Shirley. Major facial recognition software has a near 0% fairlure rate for white men, but a 20% failure rate for dark skinned women.  In 2009, HP released a computer that was supposed to use facial recognition to track users, but as you could see on a viral video titled “[HP computers are racist](https://www.youtube.com/watch?v=t4DT3tQqgRM),” it could supposedly only track you if you had light skin. In 2017, the iPhone X used facial recognition to unlock phones, and then had to issue refunds to Chinese customers because their phones couldn't tell them apart.



## Interesting Uses of Color

Color and fabric have historically been used to hide information. 

There's a long history of women, in particular, knitting code into fabric. In World War I and World War II, knitters living by the railroads were powerful forces for the resistance, because they were able to work innocuously, knitting a code in purled and knitted stitches that meant nothing to the enemy but that reported back the information about movement of the troops only to those who knew how to read the scarf.

Today, counter surveillance wearables make use of color. Apple's facial recognition uses depth, but most other facial recognition applications use color using specific facial points, the T-zone, and the Jawline. 

Dazzle is a project created by the avant garde artist and computer scientist [Adam Harvey](https://ahprojects.com/). He created both a set of instructions and a full look book set of computer camouflage, carefully deconstructing the face and the T-Zone. 

Juggalos, fans of the Insane Clown Posse, wear makeup that coincidentally obscures the T-zone and jawline. They managed to confuse a facial recognition system that Ticketmaster tried to use.

![Obscuring the Jawline and T-zone with Makeup](/blog/strange-loop-2019/counter-surveillance-makeup.jpg)

There are some more subtle takes on using color to upset facial recognition software. A team out of Carnegie Mellon developed glasses with dots in certain areas that to humans just looks like a childish fashion statement but to facial recognition software looks like a subtle remapping of your facial structure. The researchers were able to trick the software into thinking that an adult male researcher was Milla Jovavich.


Ellen's favorite is another piece that comes from Adam Harvey in collaboration with Hyphen-Labs NeuroSpeculative AfroFeminism Project, a transmedia exploration of the lives of Black women and the roles they play in technology, society, and culture. The idea behind this piece, which is a prototype, is that instead of obscuring the face and hiding, possibly in some way that makes you vulnerable or stand out to humans, which is cleverly designed with the kinds of dots and shapes that the facial recognition software recognizes as faces. The software sees the scarf, sees hundreds or thousands of potential faces, attempts to make hundreds or thousands of potential matches, and is overwhelmed and crashes.

![Prototype of anti surveillance scarf](/blog/strange-loop-2019/anti-surveillance-scarf.jpg)


## The Dress

Recap: In 2015, Back in 2015 in Scotland, a couple was getting ready for their wedding, and the bride's mother was looking for a dress to wear to the event. She took a picture of the dress she liked and sent it to her daughter for consideration, and the daughter replied that she really liked the gold and yellow one... The problem is that her mother never tried on a gold and yellow dress; she tried on a blue and black dress.

A family friend thought it was funny that the dress looked so different to the different women, so they put the picture online, and it quickly went viral. According to one study, only around 28 percent of people see the dress as blue and black, while 68 percent see it as white and gold. 

And now here's the kicker: today, four years later, we don't actually know for certain why this phenomenon occurred.

Most studies agree that the dress phenomenon has something to do with the assumptions we make about the context in which the image was taken. If you assume the picture was taken in bright sunlight, you're more likely to subtract blue from the picture and see white and gold. 

## Q & A
(Audience) Have you seen research that links color perception and language?

(Ellen) It's been years since I've looked at that research, but if I remember correctly, if people don't have the word for a color they are less likely to perceive it. 

(Audience) Have you seen any attempts out of Hong Kong to disrupt facial recognition?

(Ellen): I know they're literally tearing down cameras, which is effective. I also know they're using lasers or infrared to shine into towers/cameras. 
