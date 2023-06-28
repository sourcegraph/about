---
title: "All You Need Is Cody"
authors:
  - name: Steve Yegge
    url: https://handbook.sourcegraph.com/team/#steve-yegge
publishDate: 2023-06-28T10:00-07:00
description: "Stevey’s “Cheating With Cody” blog series, Episode 3"
tags: [blog]
slug: 'all-you-need-is-cody'
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/all-you-need-is-cody.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/all-you-need-is-cody.png
---

Whoever put me in charge of the company blog today is gonna live to regret it. I've tried so many versions of this story and tried to dodge the F-word, and they were sooooo… ugh.

So fuck it. You're gonna hear true unfiltered Stevey, ain't even going through Comms this time, because I'm honestly gettin' too old to be bothered with filters.

Let's go.

Do you want to know what my _lowest_ points have been, during my career as a professional programmer? I'll tell you. It's when someone hands me a nasty ancient old undocumented uncommented unholy fuck-all gigantic gob of code, and says, " **Stevey, you're senior. Own this code, and make the following changes in the following time frame."**

And I spend a week, just sorta trying to get a bird's-eye view of what the hell is going on, and then another week, and another week, and it's starting to look like I am NEVER going to understand this fuckin' code. And it becomes one of those moments when you realize you fucked up, and god knows how you got here, but the only honorable way out is career suicide. And you leave the job, the team, even the company, in misery and disgrace.

You'd be a liar if you said this has _never_ happened to you. Or maybe you're truly in the 1% of all devs that can read undocumented code in languages you've never seen, like the Franz Liszt of code understanding, and if so, bully for you. For the rest of us, _it ain't like that._

Just to make absolutely certain, between you and me, that you know I am not a liar, I'll tell you some of my most miserable career failures. Shit that absolutely pains me to talk about. Shit I try to keep secret. Screw it. Today's the day. This hurts my very soul, but you need to hear it.

1990, my first programming job while in college, some statistics prof hired me because I'd taken some programming courses, and they handed me five hundred (500) source files in FORTRAN on a floppy disk. Not Fortran-77 or anything nice like that. FORTRAN. It had no comments, and the prof who hired me told me some handwavy stuff about the pilfger gromak and the weasel snarfs. And yeah. Took my first check and ran as fast as my cowardly legs could carry me. What even _was_ that. I was out hunting bokoblins and they handed me a Gleeok. I mean, seriously.

2005, Amazon.com. Been there 6+ years, decorated hero, luncheoning with big B on the side, and one summer day I somehow manage to be the last person touching my nose when Werner Vogels decided that someone "senior" (hi STEVEY) needed to implement **software load balancing** , a new concept that had emerged from research in Fucking Whereverville, and Werner had his hands on a copy of the source code from a fellow researcher. It was many thousands of lines of straight K&R C files (because lol ANSI, right?) with its own pointer-arithmetic DSL BS, like a BSL, custom data structures and memory management, no build file, no documentation, and it had all been carefully run through a comment stripper to ensure I would be _maximally_ inconvenienced on this project. I mean, I've spent a _lot_ of time in the Nethack core source code, and I know my C. But this was just insanity. Was it a hit job? I don't know. Perhaps. But it sure did the trick. I left Amazon. Now you know the real story.

#### **The Big Ball of Crap pattern** (_Design Patterns,_ Gamma, Helm, Johnson, Vlissides, 1994)

I have had other failures. Several others. Big ones. I have been vanquished by big balls of crap multiple times in my career. In fact it happens so often–and I hear my senior engineer friends complaining about it happening to them as well, _even at Google_–that I know I'm not alone here.

I know for a fact that many of you are right here with me, sitting alone in Imposterville because nobody wanted to show up to your party with that nasty old code you're working in.

It totally sucks. Doesn't it? You know it does.

When you get handed a crummy old codebase, and they expect you to be the owner for it, there is **nothing** that will kick you harder in the self-worth than realizing you're gonna have trouble understanding it, and you're not gonna get the help you need. _Nothing_ is worse than that, as a programmer. And I have been there _many_ times. 1996, Geoworks. 2005, Amazon. 2016, Android. And others.

Somehow everyone wants to hand you their shitty code and make you deal with it, and sometimes it's too much.

And it makes you feel like a fraud. An absolute fuckin' fraud.

And it's ironic, because I've written and shipped a ton of code, in a ton of systems. But you never remember that stuff, do you? You just remember the times you sucked and you failed.

And it feels so incredibly _unfair_ when it happens, because what the actual is this code anyway? Who wrote this? A troll? Dammit!

#### Baby it doesn't have to be that way ♫

Well now we get to the punchline, and it's why I've been raving like a lunatic at _everyone_, even my good friends (sorry Ronald!) about this for the past month or so.

Because if I'd had Cody–today's Cody–at _any point_ in my career during one of those crises, I would have come through like a **storybook friggin' superhero**.

Ah, me.

It's really the ultimate "thought of a great comeback in the shower" moment for a guy 35 years into his career. All the could haves, should haves, would haves.

Well I'm happy to say, _at least_ ***it doesn't have to happen to YOU***, ever again.

All you need is Cody.

<img
  style={{marginTop: "0px", marginBottom: "20px", width: "30%"}}
  src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image1.png"
  alt="Cody logo"
/><br/>

For the rest of this post, Imma just show you stuff. Random shit I can do with Cody on my own private personal code on my local disk. These examples won't even scratch the surface. And you can do it too, right along with me.

You're going to wish you've had this since forever.

To work along with me on your own code, and ask Cody about your own random legacy shit ball, and watch what a fuckin' wizard Cody is with your undocumented ugly-ass ancient twice-acquired COBOL/Perl-DSL 790k-line career-ending ass-hairball that your team happens to own at this particular moment, then [**click here to get Cody for free**](https://about.sourcegraph.com/cody). You know that link is legit because no self-respecting phishing bot would _ever_ have said that.

It doesn't matter what language you're using, how big your godawful codebase is, how many repos it's spread across, what code host(s) you're using, how many goats you regularly sacrifice to the single engineer at the company who understands the code, _Cody will 100% understand it and help you accomplish your goals with the code._

Ah, to be young again. Idealistic, even. Cody makes me excited to program again, even on literally the worst code ever. Speaking of which, let's start with my own personal codebase, [Wyvern](https://ghosttrack.com/)!

Which, by the way, I've finally decided I'm going to open-source. I think the world should see the folly of my ambition. But maybe also find some use for the world's closest thing to a 2D TotK that just forgot the storyline… but also it's hella real-time and massively multiplayer.

Wyvern is like a million lines of code, plus 3 million lines of hand-authored XML content, which have been hacked on by 70+ people for almost 30 years and man, imagine my fucking surprise when unit testing became a thing like 15 years after I started. It's not great code. No. Not great.

Man I'm a loser. Cody, save me!

From here on out, I'm done telling. We're showing. Let's go!

#### Cody Knows _Your_ Code

Cody and I spent a lot of time together demoing Sourcegraph's code, in the early days. But that's kinda [cheating](https://about.sourcegraph.com/blog/cheating-is-all-you-need). Sourcegraph has _good_ code.

No. What _we_ want is a steaming, toxic waste dump of Level 37 Code Barf.

Cody, meet Wyvern!

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image2.png"
/><br/>

OK so as you can see here we have some _straight up fuckin' magic._

I'm in IntelliJ, and have my Wyvern project open – but I only have 2 random files from the project in tabs. I've asked Cody, "Where is the code for vampire shapeshifting defined?"

Cody helpfully replies: _The code for vampire shapeshifting (turning into a bat) is defined in the `VampireSkills.kt` file. Specifically, the `shiftBat()` method handles turning a vampire into a bat, and the `setBat*()` methods handle changing the vampire's image, stats, and equipment when in bat form._

Well well well. I didn't say anything about _bats_ in my question, but Cody is 100% correct. Found the right code and everything. It also distinguished the vampire shift from Naga shape-shifting (nagas can turn into dragons, hydras, etc. in the game), which is a separate codebase, so Cody is definitely making subtle semantic distinctions here.

I can ask Cody more general questions about the code, too. Or really, about _anything_. That's what intelligent automated helper friends are for, right?

For the rest of these demos I'll switch over to VSCode, which is nowhere near as happy with my Java+Kotlin project. But the Cody UI is a lot slicker. Our IntelliJ support is literally coming together in the hours as I write this post, so it's a bit raw still. But it works! 🎉

Let's say I want to find out how enemies can find their way around obstacles to attack me. So how does the path finding work. Let's say that's my starting point–my boss is telling me to learn how it works and make a fix to it, and I've never seen this code before.

 Let's ask Cody.

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image3.png"
/><br/>

It has found the `PathFinder` class, which is a popular wrapper that invokes the A\* search. Note that Cody has figured out that it's an A\* search and has correctly identified the class implementing it, `wyvern.kernel.monsters.AStarSearch`.

Note that I did NOT mention pathfinding in my query. Cody is smaaaaaart. This is exactly what you need when you're looking at someone else's codebase and asking questions. You need Cody.

If you've got a keen Kotlin eye, you'll notice that Cody had a very mild hallucination here–it told me the wrong package name for the PathFinder class. That package exists but it's not the right one for this class. This is the kind of error that our code graph will soon be able to detect and highlight for you. It's the price you pay with LLMs, but Cody helps minimize and detect them.

Right out of the starting gate, we see that Cody's Q&A can be an absolute lifesaver, not just when you're onboarding onto new code, but all day long.

#### Cody can also "do" stuff

But Cody is not just about Q&A! Cody also has recipes.

Continuing with the path finding code, let's open my ugly 20-year-old A\* search code and see what Cody can do with it.

In the next example I've selected the core worker function from the class, and I'll use the popup recipe-chooser to ask Cody to tell me how I can optimize this code.

<br/>
<img
  style={{marginTop: "0px", marginBottom: "20px", width: "80%"}}
  src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image4.png"
/><br/>

Let's see what Cody has to say!

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image5.png"
/><br/>

Okay! For those of you who can't read the screen, Cody has printed out instructions and a lovely table for us:

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/5.1/cody-optimize.png"
/>

```kotlin
privatefunperformSearch(agent:GameObject,map:GameMap,targets:
List\<GameObject\>):List\<String\>?{
    vartime0=System.currentTimeMillis()
    if(!init(agent,map,targets))returnnull
    valstart=setStartNode(agent)
    ...
```

<br/>
It has also drafted an optimized version for me.

Peeps, if you somehow thought Cody was just a fancy autocompleter, I hope you're realizing just how inaccurate that was. Cody is your _everything assistant_.

Oh, remember those missing unit tests I mentioned? I'll just choose the Generate Unit Test recipe while I've got this function selected, et voila!

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image6.png"
/><br/>

I can't believe how easy it's going to be for me to crank out missing unit tests for my old code. Soon I'll even be able to inject my own prompting, to teach Cody where my unit test infrastructure lives and how to write tests using my own fixtures.

Cody is like having a really smart friend who knows your codebase. It's like having a real-time Stack Overflow where no question is too silly or redundant. There is no BBOS that Cody can't de-smell, explain, optimize, fix, or visualize for you.

Cody's explanatory powers are essentially limitless. It can explain SQL, and relate schemas to the code that manipulates them. E.g., here I ask Cody where the database layer is.

<br/>
<img
  style={{marginTop: "0px", marginBottom: "20px", width: "70%"}}
  src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image7.png"
/><br/>

I'll open one of these files, MailDB.java, and ask a specific question about ugly code.

This demo should show you how old this code is. Perl, back in the mid-1990s, had a utility, `array_of_hash_for_cursor`, which would slurp a database result set out into a hashtable with the columns and values from the result set. Back then I ported it to Java, and it has remained an ugly wart in my code for 25 years.

Let's ask Cody to explain what it means and why it's named that way.

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image8.png"
/><br/>

Cody replies with a smart (and correct) answer that matches my tone and answers my question:

>The arrayOfHashForCursor function converts a SQL ResultSet into an array of HashMaps. Each HashMap represents one row from the ResultSet, with column names as keys and column values as values.
>
>This is a bit of a strange construct for Java, you're right. It seems to be emulating an API from another language, possibly Perl. The name itself, "arrayOfHashForCursor", is not very Java-esque.
>
>Typically in Java, you would iterate over a ResultSet directly, or map it to Java objects representing rows rather than using HashMaps.
>
>So this function seems to be a legacy from an earlier version of the codebase, before it was converted to Java. The Java code is still using it, likely to minimize changes, but it sticks out as not being idiomatic Java.
>
>Does this help explain the function? Let me know if you have any other questions!

Yes Cody, _it helps!_

Cody is like having a friend who can help you survive when life is at its hardest. Like, when you are onboarding onto a new codebase, or debugging someone else's code, or being asked to find performance issues in an unfamiliar architecture. Really any time you're stuck, Cody is there to bail you out.

Cody's the helper I needed for my whole goddamned career.

I'm so excited for my nieces and nephews, all of whom are starting to get into programming and are probably embarrassed that Uncle Steve swears so much. I'm excited because they will have Cody. Life as a new programmer will simply be different than it used to be.

But wait. There's more. Quite a bit more actually. Cody is even better than the Stack Overflow Genius Friend who Never Gets Tired and Keeps You From Being Fired. Cody can do a lot more than just Q&A.

A _lot_ more. Seriously you have no idea. You _have_ to try it.

#### Cody goes inline!

OK imma just pop Cody's chat bar closed, and let's take a closer look at some of this code.

What I'm going to do here, and I apologize to those of you who can't read the screen shot for any reason, is I've selected a function, opened VSCode's inline comment UI (like for code reviews), and asked, "Is there a better way we can do this? This is very old Java code."

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image9.png"
/><br/>

Woah! This is new. It looks like Cody has spit out a really pretty new version of this method, along with an explanation of how it's better. Also it's doing it inline, and there's even a little job-status console down at the bottom.

But wouldn't it be nice if we could just have Cody… you know… _fix_ it? I'll go with a simpler example because there's a lot to unpack here. Let's start with asking Cody to convert a classic for-loop into an iterator.

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image10.png"
/><br/>

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image11.png"
/><br/>

Boom! There it is. And you can click on the IDE's built-in diffs to see what changes Cody made.

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image12.png"
/><br/>

And I couldn't really show it in a blog post, but I was able to continue working in the file while Cody was making the change, asynchronously, even though it was only a few seconds. In fact I can kick off multiple async Cody workers and wait for all of them.

So with Cody, you have a _whole bunch_ of helpers. Not just one. It's a team.

The coolest thing about this feature is that it solves the two most annoying problems with chat-bot coding assistants:

1. **You have to wait for the LLM**. It feels like a Charles Barkley golf swing every time.
2. **You have to copy the code over** ; the chatbot doesn't actually modify the code for you.

Inline chat and fixups solve both of those in one swoop. As I've said many times, this is a lot like ordering your code around, Sorcerer Mickey style, making the brooms carry the water.

Except these are very smart brooms – they are Cody workers, each being fed [context from our code graph](https://about.sourcegraph.com/whitepaper/cody-context-architecture.pdf), who understand your code deeply and can perform elaborate and innovative refactorings, code generation, optimizations, documentation, and much much more.

So what you really have with Cody is your own _team_ of programmers working for you. They never tire. They work for free. You can boss 'em how you like. They are smart as fuck.

This is nuts, folks. It's _nuts._

#### Cody's your whole flight crew

So Cody's a wizard chatbot who knows your whole codebase. And Cody is _also_ a team of background workers who can follow your instructions and do stuff to your code in parallel. While you're off playing TotK or whatever.

I mean. Come on. Would you _not_ frigging want this? This feels like science fiction. I can scarcely imagine coding without this now.

And if you sniff around the experimental section, you'll find even _more_ adventurous ways to have Cody work by your side in real-time. This stuff continues to evolve at an insane pace.

I can't even begin to imagine where this is going in other Cody clients, since plugins are going to bust it wide open, and innovation is already flowing in from the community. But I can tell you that we have basic IntelliJ support for Cody today, and Emacs and Neovim are in progress and will be usable very soon. And even other clients are on the way. Cody also now runs on Windows boxes in-house, so we will be launching Windows support very soon too.

Fair warning: There may be some bugs. 🙂 The team has been working _really_ hard to get Cody ready for you today. Send us your feedback and we'll get it into the queue! We want to hear from you.

#### Settle only for the Best

Tip: Don't screw around with non-Embeddings Cody. Or in fact, _any_ coding assistant without embeddings. It ain't worth it. It leads to a totally suboptimal user experience, and you just… just don't screw around with it. Seriously. If your Cody says `NOT INDEXED` then you need to stop and go get embeddings for your repos.

The difference is that without embeddings, it all sort of looks the same, except your new smart Cody workers all just took shrooms, and they are going to hallucinate wildly with incredibly convincing made-up shit about your code. It is at first glance absolutely indistinguishable from your real code, but it can be as high as 30-40% bullshit.

You can actually experiment with this yourself, once you have embeddings for your code. (Embedding only took about 7-8 minutes for Wyvern's repos, and it's a one-time thing that happens when you install the Cody App.)

You can turn them on and off in the Cody Settings:

<Figure
    src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image13.png"
/>

OK let's try to make it hallucinate by turning off embeddings.

First off, I'll ask the keyword-search version where the vampire code is, since I know it's all over the place.

<br/>
<img
  style={{marginTop: "0px", marginBottom: "20px", width: "70%"}}
  src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image14.png"
/><br/>

Interestingly it did OK, but it definitely did not find the main classes that are involved. In particular it doesn't find `VampireSkills.kt`, which is where most of the abilities are implemented.

Now let's turn embeddings back on and try the exact same query.

<br/>
<img
  style={{marginTop: "0px", marginBottom: "20px", width: "70%"}}
  src="https://storage.googleapis.com/sourcegraph-assets/blog/all-you-need-is-cody/blog%20images/image15.png"
/><br/>

There it is! Also found the Races class which has some additional functionality.

You're just gonna get a better experience with embeddings. Don't try to shortcut it. We didn't get it to actively hallucinate this time, but it's always a risk. What if you're dealing with a BBOS that you inherited and know nothing about? How are you going to trust the LLM not to hallucinate?

Well, you're never going to be able to eliminate hallucinations entirely, but Cody with embeddings reduces them to levels that are completely tolerable, at least in my experience. It's worth it. If someone gives me 9 free cool things and one dumb useless thing, I'm not going to complain about the useless thing. I'll just be happy about the 9 free cool things. Cody generates more than enough value to make up for its quirks.

So it will be a little trickier to set up, but don't mess around here – make sure you have the best Cody experience. If you're an enterprise admin, make [sure embeddings are turned on](https://docs.sourcegraph.com/cody/explanations/code_graph_context#configuring-embeddings) for your repos, and let Cody be amazing for your devs.

And then you're off!

I hope Cody is as helpful for you as I wish it could have been for me all those years.

Me? I'm frigging _loving_ it.

#### Epilogue

Well folks, it has been an absolute pleasure writing this trilogy. I knew today was coming, back on March 23, 2023, when I wrote [Cheating is all you Need](https://about.sourcegraph.com/blog/cheating-is-all-you-need). Today I can finally share Cody with you. Now you know why I'm so passionate about this next wave of help for programmers who need it.

Sourcegraph 5.1 shipped today with a ton of amazing updates to Cody, including a bunch of what I showed off in this post. [You can read more about what the Cody team's been working on here](http://about.sourcegraph.com/blog/cody-in-sourcegraph-5-1).

We all need help once in a while. And now, all you need is Cody.

Wrote this one for my old friends at Amazon. Miss ya. Sorry I ran.
