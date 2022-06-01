---
title: "Strange Loop 2019 - Behind The New York Times Crossword"
description: "The New York Times Crossword is serious business. Operated like a startup within the company, the NYT Games Team works tirelessly to keep our 500,000+ subscribers happily solving while driving significant revenue to support great journalism. With serious solvers comes the need for serious technology. Since rewriting the entire platform in Go and migrating it to a serverless ecosystem, the Games Team has driven innovation at The Times with the most cutting edge tools and infrastructure. Take a behind-the-scenes look of how a puzzle makes it from a constructor to our solvers around the world and the tech challenges we've had to overcome to enable it. See how we've built our games platform to handle immense traffic spikes when new puzzles are released, allow us to fearlessly test in and push changes to production, and quickly launch new games for our subscribers to puzzle over."
authors:
  - name: Ali Glenesk
    url: https://twitter.com/aliglenesk
publishDate: 2019-09-13T00:00-10:20
tags: [
  strange-loop
]
slug: strange-loop-2019-behind-the-new-york-times-crossword
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Darren McCleary</span>
        <a href="https://twitter.com/darren_out" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

The New York Times Crossword is serious business. Operated like a startup within the company, the NYT Games Team works tirelessly to keep our 500,000+ subscribers happily solving while driving significant revenue to support great journalism. With serious solvers comes the need for serious technology. Since rewriting the entire platform in Go and migrating it to a serverless ecosystem, the Games Team has driven innovation at The Times with the most cutting edge tools and infrastructure. Take a behind-the-scenes look of how a puzzle makes it from a constructor to our solvers around the world and the tech challenges we've had to overcome to enable it. See how we've built our games platform to handle immense traffic spikes when new puzzles are released, allow us to fearlessly test in and push changes to production, and quickly launch new games for our subscribers to puzzle over.

---

![Darren with the crossword on stage](/blog/strange-loop-2019/crossword1.jpg)

## Preface
Darren gave this talk on behalf of the NYTimes but as of last month he has moved on from the Times. He joined the Times in 2015 after watching a video online about how they use Go at the NYTimes. While he had no interest in Go, he thought this was really progressive of them. He joined and became a Go developer at the Times, then was recruited on to the Games Team. 

## The NYT Games Team
The NYT Games Team is a thing! The games team is responsible for running the games platform which hosts a series of game and supports over half a million paying subscribers. If you subscribe to the Times you know that you have to pay more for the crossword, it doesn't just come with your news subscription. The games team is a company within a company that serves the needs of games subscribers. The NYT Games team creates logic games such as Sudoku, as well as new games, such as Spelling Bee, Letter Boxed, and Tiles. Tiles is the first non-word game of the expansion, which is important because it increases the accessibility of NYT games. 

## The OG, The Crossword
What does the crossword look like? It has rotational symmetry. You can rotate it 180 degrees and it will be the same board. You can play across devices. Who edits these puzzles? Will Shortz is our puzzle master and he has served in this role since 1983. Shortz works with two assistants, as well as a crossword columnist -- Deb Amlen. She writes a column called "What the heck is that?" where she picks a word from the crossword that stumps most users and writes about it! The NYT derive this using puzzle data from BigQuery. 

The puzzle existed since the 1920s, but it wasn't a regular thing in the paper until the 1940s. After Pearl Harbor, they decided at the paper that readers would be seeing quite a lot of bad news in the paper so a form of relaxation was needed so readers had something to look forward to. 

Part of the challenge of making a crossword is coming up with a good original theme. Another thing many folks don't know about the crossword is that it gets progressively harder throughout the week. Thursdays are tricky. They usually have some sort of riddle in them and the theme is a big cryptic. In fact, Dem Amlen our columnist, does a live crossword solve on Periscope Thursdays where she screenshares with readers. 

## Crossword Skills
There are certain skills you'll pick up over time about how to read the clues. For example, if a clue has an abbreviation in it, you'll notice that the answer will also have an abbreviation in it. Similarly, if the clue is in past tense, it will often be in past tense in the puzzle.

![The crossword gets made the old fashioned way!](/blog/strange-loop-2019/crossword2.jpg)

## The Making of the Crossword
All of the puzzles get submitted to us by people who make crosswords. Generally, it is a very difficult problem to generate a crossword puzzle. It is an NP complete problem. It is not just about finding groups of words that interlink together. It is also about making it enjoyable to play. The words have to be knowable by people. 

If you head over to see today's puzzle, you'll see it was submitted by Daniel and Anne Larsen. Daniel submitted his first crossword at the age of 13. For this puzzzle, he roped in his older sister who is a student at Harvard. So, if you want to submit a crossword, you have to do it by hand and mail it in the old-fashioned way. Have a hankering to send in a puzzle? Send to:

Send To:
Will Shortz, Crossword Editor
The New York Times
620 8th Av.
New York, NY 10018

The team receives up to 70 puzzles each week so there is a lot of work to process all submissions. After a puzzle has been edited, they are sorted by weekday and then there is a general repository of puzzles waiting to be published on a particular day. If you submit a puzzle and it is published,the NYT pays you as well. Starting payment is $500.

Creating a puzzle is complex and takes time and effort. That said, there are tools you can use to make it easier. An example tool is called CrossFire. This tool will look through the dictionary for you and find words that will link up with those you've already inputted. 

![Weekly traffic spikes](/blog/strange-loop-2019/crossword3.jpg)


## Handling Puzzler Traffic
Daily the NYTimes sees a huge traffic spike at 10pm when the crossword is published. On the weekends, the puzzle is released at 6pm (rather than 10pm), so you'll see a spike at 6pm and then again at 10pm, from the people who are habituated to checking at the usual 10pm time. In order to handle the traffic, the Times had to build the backend to scale dynamically to traffic. They did this with a serverless backend. Five minutes before 10pm there is a cron job, that notifies the system to increase idle instances to prepare for the traffic. For flexibility, the Times has multiple instances running. By scaling up instances at peak traffic times, the Times is able to handle traffic scalably and cost-effectively.

## Lastly, The Times is Hiring
[Careers](https://www.nytco.com/careers/)
