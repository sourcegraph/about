---
title: 'Arming the rebels of the metaverse, with Joseph Nelson, CEO and co-founder of Roboflow'
publishDate: 2021-11-30T10:00-07:00
tags: [podcast]
slug: joseph-nelson
published: true
---

<!-- START AUDIO -->

<audio className="object-center" src="https://www.buzzsprout.com/1097978/9593278-arming-the-rebels-of-the-metaverse-with-joseph-nelson-ceo-and-co-founder-of-roboflow.mp3?download=true" controls preload="none"></audio>

<!-- END AUDIO -->

<!-- START GUESTS -->
<span>
Joseph Nelson, Beyang Liu
</span>
<!-- END GUESTS -->

<!-- START SUMMARY -->

When, and how, will computer vision and machine learning revolutionize the world? In this episode, Joseph Nelson, CEO and co-founder of Roboflow, joins Beyang Liu, co-founder and CTO of Sourcegraph, to discuss how Joseph got started in programming (developing a joke generator for a graphing calculator), to share his experience working as a human Google alert for the United States Congress, and to explain why he finds building developer tools so empowering. Along the way, Joseph explains why he thinks machine learning and computer vision will have greater effects than the Internet and the mobile phone, and shows how Roboflow will accelerate our progress toward that future. And at the end, Joseph tours Beyang through Roboflow, showing him a raccoon detector and chess piece identifier. 

Click the audio player below to listen, or [click here to watch the video](https://youtu.be/AEX7F-HhorA).

<!-- END SUMMARY -->

<!-- START SHOWNOTES -->

Roboflow: https://roboflow.com/
                                                                           
spaCy: https://spacy.io/
                                                                           
General Assembly: https://generalassemb.ly/
                                                                           
MNIST: http://yann.lecun.com/exdb/mnist/
                                                                           
Magic Sudoku: http://magicsudoku.com/
                                                                           
BoardBoss: https://boardboss.com/
                                                                           
Stockfish: https://stockfishchess.org/
                                                                           
Efficientdet: https://github.com/google/automl/tree/master/efficientdet
                                                                           
YOLOv4: https://arxiv.org/abs/2004.10934
                                                                           
YOLOv5: https://github.com/ultralytics/yolov5
                                                                           
Computer Vision Model Library: https://models.roboflow.com/
                                                                           
Roboflow Universe: https://universe.roboflow.com/
                                                                           
Luxonis: https://shop.luxonis.com/
                                                                           
NVIDIA Jetson: https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/
                                                                           
Tensorflow.js: https://www.tensorflow.org/js

<!-- END SHOWNOTES -->

<!-- START TRANSCRIPT -->

**Beyang Liu:**

Hey everyone. Welcome back to another edition of the Sourcegraph Podcast. Today, I'm here with Joseph Nelson. Joseph is the CEO and co-founder of Roboflow, a company that's making advanced computer vision accessible to every software team by focusing on developer experience. So you don't need a PhD in machine learning to build great computer vision in your product–you just need to know how to make use of the Roboflow product and API.

Prior to Roboflow, Joseph founded a company called Represently, which built software to make congressional representatives more accessible and responsive to their constituencies. And as I understand, he also had a side business using data science to identify opportunities in the Iowa farm real estate market. We'll probably get into that in a little bit. 

I should call out two personal connections I have to Joseph. One, I concentrated in computer vision while I was in college. So the problem that he and his company are tackling is a bit near and dear to my heart. And I also happened to grow up in Iowa, where Joseph is from. All to say that, given those two connections, it feels like we're already kind of fast friends. And with that Joseph, welcome to the show.

**Joseph Nelson:**

Thanks so much for having me.

**Beyang Liu:**

Awesome. So we like to kick things off by diving into guests’ personal backgrounds. And the thing I'm always curious to learn is, for you, what was your entry point into the world of computers and code?

**Joseph Nelson:**

So I guess the first computer that came into my life was… We had the family computer in our house. I think it was a Gateway machine running Windows 98 and my siblings and I would always fight for screen time to play various sorts of games: Age of Empires, Total Annihilation, Rollercoaster Tycoon, and things like that. But I wasn't really a childhood prodigy programmer of sorts, as you often hear from startup founders. The first time that I actually got into writing, I guess what you could consider to be code, wasn't until high school. If you recall, the TI-84 calculator era and I don't know if when you were in school, these games playing Mario and stuff like that, kind of went viral among high schoolers. And I was a good enough student in that I could play around on my calculator and still seemingly pass classes and whatnot.

And one of the things I noticed is that writing basic programs on calculators–and I don't mean Basic, the language, I mean like rudimentary, really simple–wasn't so challenging. So one of the very first things that I kind of cooked up in code was... It wasn't much more than just a dictionary with a random number generator, but what that dictionary with the random number generator was, was actually an insult generator. So at my high school, and I think this might have been like eighth grade or freshman year, I don't really know. And at the time when you'd want to pass games to one another, you would connect your two calculators together and then transfer the games and then go about your way. Well, in the background I had been working on, without telling anyone else, this insult generator, which basically, every single day in class, I'd think of one to three sort of silly insults.

I don't know, like, your mom's teeth are so yellow that when she smiles, traffic slows down or silly stuff like that, stuff that I saw on TV or things of that nature. And I knew it was important that traceability didn't come back to me in terms of how this program kind of made its way through the school. And so I just started slipping it into transferring games to one another, because I was one of the first ones to get like Mario and these other sorts of games. And then I would just transfer it onto their calculator. I don't remember what I called the program, but it wasn't like “insult generator.” It was something kind of innocuous, like “quadratic formula” or something like that. So people would open it up and check it out. And lo and behold they'd be hit with these sort of funny jokes.

And it went semi-viral through the school. People were like, where did this come from? What sort of insults do you have on your machine? And it taught me all sorts of things about releasing different versions of software. And I didn't have any idea of version control and things like that. But depending on the day you got the program, you had a different number of insults based on how far into the school year we were. And from there I was like, oh man, I can make these simple, small things that bring a lot of delight and fun. And they were never, particularly, bully sort of stuff. It was actually usually things that would kind of brighten people's days and sort of funny jokes that people would share and things like that.

And from there, I just sort of realized that you could use this for other things, like actually programming the quadratic formula or some of these other things where teachers would be like, "Oh, be sure that you memorize these formulas." And I was like, "Whoa, I mean, we have the calculator that can do the rest of it. Why would we do that?" And that was my first foray, that I remember, into writing code.

**Beyang Liu:**

How long did you keep the secret under wraps that it was you who created this program?

**Joseph Nelson:**

This might be the first time it's publicly announced to everyone really. At Central Academy, it's now on record that that insult generator, yeah, was yours truly.

**Beyang Liu:**

Wow. I'm surprised that you were able to... Did you tell any of your friends or did you just keep it to yourself completely?

**Joseph Nelson:**

I kept it to myself. I actually did a similar thing. One of the first entrepreneurial things that I did once I got to college was, I arrived at school right when Uber was just becoming kind of a thing. My first year, it was just coming to campus and I ran a satirical newspaper so I went to a school that had something called the GW Hatchet–George Washington Hatchet was the name of the paper. So I ran a satirical paper called the GW Axe. And I ran that on Google Sites because, again, I wasn't very proficient as a programmer. And that provided enough of an accessible on-ramp for me to learn a little bit of HTML and CSS so I just kind of hacked together a basic word editor, slotted in some images, and things like that.

And I ran the satirical paper, which again, I told no one else at my school was me, and it was really challenging because it was like the coolest thing I'd ever done and I couldn't tell people the key thing, which is like, "Oh no, no, it was actually me." And I'd hear people talking about it on campus, like, "Did you hear that GW Axe article about George Washington's campus starting construction on construction?" The GW President at one point was the highest paid president of all the universities. And so he sent out this email to the student body that was like, have a happy holiday and things like that. And I identified what the font was and I still remember it was Avenir font, and then got this specific pixel color. And then I added to the bottom of it, I'll be thinking about you all while I'm in The Bahamas. And re-sent that email to the student body and that went pretty viral too.

And I monetized that by–when Uber came to campus, circling back to why that's relevant–the ads on the site were like, try Uber. And I had a custom, and still do, Uber referral code because I didn't want to use my name and early on, they actually just used short alphanumeric strings. And I had free Uber rides for a year. So, that was another kind of early programming experience.

**Beyang Liu:**

Cool. It sounds like you're a bit of a troublemaker at first–the insult generator and then the satirical newspaper/kind of fake email. When did that start? Was that just your personality as a kid always or was there some kind of catalyst or trigger there?

**Joseph Nelson:**

Honestly, this makes me sound a lot cooler than I was in school. And the reason I was able to kind of get away with this stuff is because I was the least suspicious kid. I always got my homework in on time and always focused on doing well and in classes, I kind of kept to myself and–we can just come out and say it–I was one of the nerds at school. But I had this curious side to me of like, I don't know, why not try some of this stuff? So in school, I wasn't like the class troublemaker or something like that. In fact, I was just much more kind of like that quiet kid, who knows what he's up to and working on, which I think probably made it so I could kind of get away with some of this stuff.

**Beyang Liu:**

Yeah. That's awesome. So in college, despite the success that you had with the calculator program, you didn't go into studying computer science as a major, is that right? You studied economics instead?

**Joseph Nelson:**

That's correct, yeah. So my degree is in economics.

**Beyang Liu:**

Cool. What was that like?

**Joseph Nelson:**

I liked it quite a bit. I mean the bad joke I kind of make is that economics is kind of like a gradient descent into machine learning land. Economics is a study that basically takes a representation of the world and then oversimplifies it and uses equations to try to optimize that oversimplification, especially microeconomics, like rent. 

Take rent, for example. If you build more housing, despite what they think in San Francisco, prices will generally go down. And we could probably build an equation that roughly approximates that if we build 100 more units, then we might expect rent to drop even a little bit and that's going to be a very brutal, imperfect representation, but it's directionally correct. And then we can take that formula and optimize it. So, pretty soon, you start to get into econometrics, and I realized it was like, okay, this is all just applied statistics. That’s all this economics stuff is.

And then the deeper I got into the applied statistics side of things, the more I realized that programming is where the action happens. It's like, what model are you using? How can you make sure that things run efficiently? And I guess keeping with my streak now of getting in trouble, I turned in my thesis in Python instead of Stata, which apparently you weren't supposed to do. The argument was it was less reproducible and I was like, are you kidding me? No one has to pay to reproduce my code–here's everything that you need to reproduce my senior thesis and all that sort of stuff. I took a couple of CS classes here and there, but yeah, my degree is economics and lots of stats.

**Beyang Liu:**

Yeah. You were telling me a story earlier about another bit of trouble that you got into involving the chief economist of the World Bank while you were an econ major.

**Joseph Nelson:**

Yeah, I think this will probably be the first time I share this story publicly too.

**Beyang Liu:**

Oh, awesome. We're getting scoops on scoops.

**Joseph Nelson:**

So, during my first year of undergraduate, the university I went to was George Washington in DC. And so they, to kind of flaunt that, attracted prominent professors and people that were in the area. The World Bank, actually, one of the buildings actually happens to rent from George Washington University, like GW owns it and they pay rent to the university. And the chief economist of the World Bank at the time, Dr. Kaushik Basu, was asked to teach a game theory class in conjunction with another professor at GW, Dr. James Foster. And the game theory class was meant to make headlines because there's this kind of fantastical exploration of all sorts of schema and understanding and things like that.

And what's funny actually, I mean, to the point of the dual personality of both being a good student, but also trying to kind of find these crevices, I guess. Dr. Foster's wife also taught at the university, Dr. Irene Foster, and she and I were pretty good friends and I tutored for her classes and she actually advised some of my research work. And then here I was in Dr. James Foster's class. 

And the way the game theory class was structured there were two grades for the entire semester of coursework–there was the midterm and the final. And at the time of the midterm, we got our grades back and I realized the way the midterm was graded. I actually didn't realize how the class was going to be graded in advance.

But the way it was graded was the curve was structured such that the highest score on the midterm was curved to be 100. And then every student was scaled relative to that 100, which is actually kind of a common curve that some classes will use, and then they'll be precise about how big they want the center to be versus the tails and that sort of thing. But what this exposed to me is that if the highest score in the class is a zero, then everyone gets a zero, then everyone gets scaled to a 100. And so in advance of the final, I created this Facebook group and it was called “game the game theory exam” and I organized a boycott. I said, if no one takes the game theory exam, we all get 100 and mind you, I was this pesky freshman. And I mean, they weren't even really allowing young undergraduates into the class. There's a lot of seniors and juniors, so I was lucky to even get a seat.

And so I stir up this controversy. I'm like, okay, everyone, to be clear and I want to be on the record about this–I said this to my peers–you should still study for the exam because this could go wrong and you should study. And people were like, "Well, how are you going to verify no one's going to show up to the exam?" I was like, “Oh, here's what we'll do. We'll show up outside the exam room. There'll be two Nash equilibria–the concept that we learned in game theory. One is that we all stand outside and no one enters the classroom and everyone gets zeros and the plan works as planned. The second Nash equilibria is that one person enters the room and then we all enter the room and we take the exam as planned.

And so my pitch was that it's a no-risk option to play the game. Worst-case scenario, you take the exam just as you planned. Pretty good pitch. Pretty good pitch. But not a good enough pitch. So I put this out there and I draw the payoff matrix and I'm socializing this around. And I learned that there's international students who weren't on Facebook and I go individually visit them and try to lobby. And it's like I'm whipping votes up to try to get people to do this. 

And on the eve of the exam, we get an email from Dr. Foster that's sent to the entirety of the class, but it might as well just said, “Dear, Joseph,” but it was addressed “Dear class.” And it's something along the lines of, “It should be known that if someone were orchestrating a broad scale…” They didn't say the word boycott, but “broad scale disruption to the way the exam is meant to be administered, that person should know that that's grounds for expulsion and academic misconduct. They would lose their scholarships.” And that's how I was even able to attend this insane university.

And it was meant to be a chilling effect. Are you actually going to play this game or not? And so everyone just immediately texts me, emails me, posts on Facebook–people are going nuts. They're like, what are we going to do? Like, what's going on? I'm like, this is the perfect piece. I couldn't have been served a better platter because I was able to screenshot the email, drop into the Facebook group and say, in writing, “Everyone, you can say it's me. Everyone can point and say that this was Joseph's idea and Joseph's doing, and here's the screenshot you need to show in the Facebook group to prove it to them. And so I'll fall on the sword and that's kind of what we'll do.” I was full steam ahead. And so we showed up for the exam the next day and it was a very strange exam day because everyone’s chattering–it's on a Thursday.

And at first, the first five minutes actually, no one entered the room, but then finally someone goes in, so we're like, ah, okay, it's over. So we all went inside and no one was there to administer the exam. The professor wasn't there and we're kind of like, what's going on here?

Then, I remember the TAs came in from the back of the classroom in this large lecture hall and mind you, I didn't share this, but the class was 70+ kids–this wasn't organizing like 20 people. This was a massive class. And so the professors come in from the back and, kind of out of nowhere, 15 minutes late, and administer all the exams. Then, we're taking it as normal and we're doing our thing. The last question on the exam is: “Hypothetically, a student in your class organizes a boycott of the game theory exam. Draw the payoff matrix for what you should do in this situation.” And then the second question, which I think is absolutely brilliant, was “What would you do in this situation? Note, the amount of points you get for this question will be equal to the proportion of the class that also selects your answer.”

So, in other words, if 70% of the class says they would boycott you get 70% of the points of that question. And so I was like, man, that's next level–he really got me. I wrote this long essay. I had some extra time. I was like, oh, you really got me, that was awesome. And then I turned in my exam and I emailed Dr. Foster and I just say, “Well played.” And after that, I think he ended up bumping my grade by a letter. It was a hard fought L, if you will, but certainly a fun experience.

**Beyang Liu:**

It sounds like if you hadn't gone into software and computers, you probably could have had a fairly decent career in politics given the amount of community organizing that went into that effort.

**Joseph Nelson:**

I don't think building companies is that different. You’re trying to convince people that you can take down the giants and build something of lasting value–lots and lots of coordination.

**Beyang Liu:**

The company that you started before Roboflow was this thing called Represently, which was kind of building software for congressional offices. How did you get into that? Was that something that grew out of your college experiences or did it come later?

**Joseph Nelson:**

Yeah, it came out of my college experiences for the most part. So, you summed it up accurately at the beginning. Represently is software that the US Congress uses to respond to their constituents faster and more precisely. Offices that use the product responded 90% faster. And to give some scale to understand this problem, the US House of Representatives receives about 30 to 40 million messages a year. Before our product, they had no level of intelligent sorting, and intelligent sorting here is defined as machine-learning-based topic modeling. 

So, exact text matches and rule-based approaches–those were in use–so if you sent a message and it was a copy-paste of the same message, those would be grouped in a like-minded way. But if you even tweaked a little bit of language, that would be considered a distinct and unique note. Congress hasn't had their staff increase since, I think, 1974 or their budget for their staff increase since 1974, and is already pretty chronically underpaid.

So if you're in a position in the House of Reps, you're basically the support line... You are customer support for the world's most powerful democracy, you know what I mean? But I came into recognizing that because I was one of those interns that was sorting mail. My first year of school, I took an internship on the Hill in US Senator Grassley's office, being from Iowa. He's been a Senator since 1981. He's just an institution.

**Beyang Liu:**

Yeah. I love that guy. He's so folksy.

**Joseph Nelson:**

Yeah, for listeners, if you haven't seen his tweets or even Stephen Colbert's segment on Grassley’s tweets, you absolutely have to. He writes his own tweets. He's in his upper 80s and you can kind of fill in the gaps for what you get.

**Beyang Liu:**

He had a whole tweet stream that I read through once that was like, here's how high the corn has grown. And it was six or seven tweets.

**Joseph Nelson:**

Hashtag corn watch. I'm following #cornwatch right now. There's been a bit of a drought in Grassley family farms. Nelson family farms has been a bit more lucky, but yeah, #cornwatch. This year, he introduced #soybeanwatch as well.

**Beyang Liu:**

Ooh, diversifying.

**Joseph Nelson:**

A good sequel.

**Beyang Liu:**

Yeah.

**Joseph Nelson:**

He has a war with the History Channel for playing shows that aren't history. So, whenever he turns on the TV and the History Channel isn't showing history, he tweets at them and gets upset. It's some high-quality content.

**Beyang Liu:**

He's got Twitter figured out to a T.

**Joseph Nelson:**

He really does, he really does. And then folks that take Twitter too seriously are in his replies. 

Yeah, so I was actually a press intern, which meant that I was like a human Google alert for the office. Whenever the senator is mentioned, you cut out the clippings and then package it on a daily basis.

**Beyang Liu:**

So you were quite far from the House of Cards power struggles.

**Joseph Nelson:**

So, back when I was passing the Bush tax cuts, yeah.

No, honestly, I actually set up a Google alert and it did my job better than I did. So that was demoralizing. But there was one day where I worked as a legislative intern, and I was sorting mail, and it just stood out to me how inefficient the process was. And not for any fault of the offices. In fact, Grassley's office is famous for doing a pretty good job of being really specific and responsive to constituents.

Some offices will have just one mail they send to everyone. It's like, “Thanks for contacting us. We'll take your thing into consideration.” And then there's a sliding scale, a gradient of how specific you could be. You could actually address the issue that someone wrote in about, and then give the office's position back. And everyone who writes to their member of Congress should expect at least a response, and you'd hope for a pretty tailored response. But when you view it from the other side, from the institutional side, and you're so understaffed and there are such high volumes, you can understand why you get somewhat form-letter-type responses. Absent that, there's just no response possible.

And that's how I was first exposed to the problem, but it wasn't until years later, when I picked up a little bit more programming, and by then I was actually working at Facebook in 2015. It was my last year of school but I didn't really want to be done with school, so I basically took one class at night and then worked full-time in the Facebook DC office. So, there's 50 people there. It was pretty cool. And Facebook hosts, or used to host, the annual Facebook Congressional Hackathon. If we could just take a minute to think about if they still called it that and had that today, how-

**Beyang Liu:**

Hacked and congressional in the same sentence would be...

**Joseph Nelson:**

And Facebook, that's already-

**Beyang Liu:**

And Facebook.

**Joseph Nelson:**

But anyway, so, the annual Facebook Congressional Hackathon, and by annual, I think it happened twice every other year. And I was re-confronted with this problem, but the difference was that offices showed up and came to say things about the types of issues they were facing and solutions they were hoping to see to their problems. And I was re-confronted with the same thing that I felt as an intern, except this time I felt like I had some level of programming skills to change that.

So, we hacked together. I don't know if you know the open source library spaCy–it's an NLP library. It's pretty good. BERT would probably outpace it today, but at the time... I guess you can use BERT in spaCy, but anyway. SpaCy was pretty good for building an off-the-shelf topic model and tokenizing text in an efficient way for identifying when messages were about similar content.

And we demoed this to some of the offices, and what's cool about serving institutions is that it's pretty apolitical. Improving the institution independent of what the issue is just generally feels good. Being able to make it so that offices can be more responsive regardless of what the issue is about is pretty agreeable territory. And so I found that to be pretty cool in that Seth Moulton's, Kathy McMorris Roger's office, Darrell Issa's office-

**Beyang Liu:**

It's a bipartisan need that you're addressing.

**Joseph Nelson:**

Yeah, it's a bipartisan need–even apartisan. And so we basically built this plugin that plugged into the CRM systems. The offices had their own version of Outlook, if you will, for managing mail and since we didn't want to rebuild email, we just built this plugin.

And yeah, it was tackling what I thought to be a pretty important problem. And the funny thing is, building a product in this space, you're confronted with all the hardest things about doing enterprise sales with none of the upside in revenue.

**Beyang Liu:**

Your market size is 538 approximately, plus 100 senators. 

**Joseph Nelson:**

We didn't raise any funding, shockingly, for a market size of 538 and never growing–unless, I guess, DC becomes a state. So that's a pretty good market to tackle. No, so we didn't ever want to raise funding and knew it wasn't the market. It's more about solving this important problem.

But it taught me, actually, a lot about doing enterprise-based deployments, because the entire product had to run on-prem. Basically, if you want to sell your product to the House, you have to comply with the very specific IT Schedule 70. Well, not exactly IT Schedule 70, the Congress has exempted themselves from that, conveniently, but you still have to deploy to the Ford House office building where they basically give you an empty Linux box and they're like, "Go." 

**Beyang Liu:**

You plug in your USB dongle into that machine or whatever and then manually set everything up.

**Joseph Nelson:**

Yeah, we could SSH in, but the deploy... So, for example, they're not using AWS. All these things we take for granted. We had to recompile TensorFlow from source; we had very limited RAM. If the app got very popular, like, for example, during the Syrian refugee crisis, that was during the time when the product was live, offices were using the product really heavily and it just stopped working. And we had to email someone to get more server space. "Please, sir, can I get some CPU?"

Just crazy. But it was a really, really rewarding problem to tackle for the same reason. And ultimately what ended up happening with Represently was that we grew it to nine people, this bootstrap thing. And once the product problem was solved, so to speak, it became very much like the who you know, sales thing that exists in political circles to some degree.

And that problem was a bit less interesting to me. And again, I was optimizing much more for driving impact. And so another company in this space that runs a CRM that we integrated with, called Fireside 21, they've rebranded to Fireside, acquired the product and then incorporated it, which meant that, overnight, you could be in 110 offices for their adjustable market. Which was a really, really positive outcome–both for us to be able to cement the progress that we made and driving the impact for Fireside.

So, all in, that was two and a half years, and it was a very bumpy journey. I had no idea how to build a business and I still don't. 

**Beyang Liu:**

You're figuring it out like we all are.

**Joseph Nelson:**

Yeah, yeah. But it was all sorts of different pivots of like, who are we servicing and what should it look like?

**Beyang Liu:**

What was the path from that to Roboflow, because you had a couple additional stops along the way?

**Joseph Nelson:**

Yeah, so I had worked on a number of products during school here and there–software products that never were really meant to be businesses, and frankly, Represently really wasn't necessarily meant to be a business either. It was technology solving a problem and then it turned out that building a business was an effective way to continue to solve that problem.

But then after that, it became abundantly clear to me that machine learning and its ability to empower and improve all parts of the way we interact with the world around us could be possible. And while building Represently, I'd actually been teaching concurrently for the first portion of the business at General Assembly, which is one of those code boot camps. And I did that because initially, like I said, for Represently, we didn't raise any funding and so it was this nights-and-weekends bootstrap thing for me for a while.

I was working on Represently while finishing school and I didn't really have any nest egg saved up to. So I was teaching concurrently while building, and then eventually we had enough customers and momentum and whatever to just focus on building.

But the other thing that I saw at General Assembly, as a common trend, was the impact of empowerment–giving access to machine learning to a populace that might not have been able to use that technology before. General Assembly has a data science immersion program and it launched in DC and San Francisco concurrently, and I launched the DC program and taught four twelve week cohorts of it, which was a lot of fun, but also gave me exposure to, again, a wide swath of technologies and their applications.

And so, both these things further cemented that this is going to be a wave bigger than the internet, bigger than the mobile phone. And I didn't really know what to do with that, to be honest. After Represently but before Roboflow, I toyed around with a bunch of different projects. I did some consulting work with Google, such as TensorFlow docs and freelance stuff. I worked on a text project for a financial company. I worked on a credit risk engine for a startup. And then one of the projects that I was attracted to, and you alluded to this earlier, was building something that would help value and sell farms, which I thought would probably be something that I might work on for a bit.

But the broad unifying theme here is taking machine learning and applying it to a domain or a sector that hadn’t previously have it so that it unlocks unrealized potential for that sector, whether that's folks that want to have access to credit or people that want to be able to sort through mail more effectively, or valuing properties to make it be easier for real estate transactions and rural empowerment to exist.

And I'll talk about how that turned into to Roboflow, but I know you want to talk about the farm thing too and I'm happy to share.

**Beyang Liu:**

Say more about the farm thing, because that was really interesting to me. And you come from a family, your family has a family farm in Iowa, right?

**Joseph Nelson:**

Yeah, Nelson Family Farms.

**Beyang Liu:**

Cool, so it runs in your blood. Was this project a thing to help your family manage their real estate holdings or was it something different?

**Joseph Nelson:**

I wish. That makes it sound so official. Yeah, like NFF in our real estate portfolio. Yeah, hardly. It was-

**Beyang Liu:**

It's actually a big multinational conglomerate–it just has a family fronting the thing.

**Joseph Nelson:**

Yeah, yeah.

No, meanwhile, Doc Nelson, my dad, doesn't even know how to use Facebook. We're a pretty humble operation.

But to be clear, I'm a fake farmer. I grew up in west Des Moines but my family would go to the farm with some frequency. But this came from one of my older brothers, who was at a farm auction one day. At this farm auction, they were auctioning off four 80 acre plots, which are called sections. And these four 80 acre sections were adjacent to one another, and the southeastern most plot had a river running through it. And there is somewhat of a debate about how to value that plot because of how much of the land was tillable, arable land that you could use for productive agriculture purposes.

And he phoned me and I was in DC. And I was like, "I don't know. You're at the auction, man. What do you want me to do about this?"

And I thought about it, and I was like, "Well, you can actually probably drop pins on Google maps and get an idea of roughly how big of an area-"

**Beyang Liu:**

It's like tracing around the river.

**Joseph Nelson:**

Right, and then apply a discount factor. Let's assume the river takes 20% of the arable land. And then if the yield is equal to this amount, we'll then just do 80% of the yield of the adjacent plot.

And so we joked about doing that and he's like, "Okay, yeah, that makes some sense."

And then he goes to the auction on the day of and actually puts in a bid, and ultimately the plot was being valued at a significantly higher discount factor than even the most conservative estimates of how much of the land was truly tillable and so he was able to purchase it at somewhat of a discount. 80 acres is actually a relatively small plot in all things agriculture. And fast forward a little bit, it became clear that this was a really good transaction.

There was a discount factor that was out of whack with probably the amount of tillable land. And I got to thinking, I was like, "That can't be a one-off. That's got to be happening all over the place."

And so I went digging a little bit deeper and I discovered that the data for these problems is in pretty disparate places. You know how in real estate they're like, Manhattan is the best place for owning because property values will never go down in New York. You're in the US and New York's always desirable. Iowa is the Manhattan of agricultural real estate.

So with that in mind, property values are generally fairly high and there's pretty good data, but that data's really spread out. So the US Department of Agriculture maintains data on soil surveys and things of that nature. At the state level, you have data on... In one office you have the transactions record of how much something sold for. Iowa State University, where I know one of your parents-

**Beyang Liu:**

My dad went.

**Joseph Nelson:**

Yeah.

**Beyang Liu:**

Both my parents actually went there, yeah.

**Joseph Nelson:**

Yeah, they're a land grant university and actually help farmers, as we say. They maintain a really robust data set on the yields and something called a crop suitability rating, CSR. And now we have CSR 2.0. But the thing is this data's in disparate places and it's hard to bring together, but that's a really good thing that technology could help do in a relatively costless way.

So I built a bunch of scrapers that brought together this data in disparate places. To get the sales data, you actually... They don't post it, you have to call. And Iowa has 99 counties. And so I found some help and used Upwork and whatnot to fill in that piece of the data. And so then I basically just built a really simple regression. There's this joke that all AI is just regressions at some point.

And I looked at it and saw the points that are furthest from the line are the ones that are probably the properties that are most attractive for investing in over the last three years. Compared to the amount of yield that they have, the soil quality and these sorts of attributes, and prior sale prices, those are places where you should consider purchasing.

And what was another interesting find is that like, okay, so that must be a slam dunk thing. What I also learned is that the customers purchasing these properties, agriculture investors, at least professional agricultural investors, discounted this pretty heavily, because they're like, "Well, there's probably either something wrong with that or the prior price is indicative of the future price," and things like that.

And ultimately, price is: What is something worth? It's worth whatever people are willing to pay. An NFT jpg is worth whatever people are willing to pay for it.

**Beyang Liu:**

Indeed, yes.

**Joseph Nelson:**

And you can balk one way or another, but what people are willing to pay is the price. And so professional investors in agriculture discounted what I was working on, but I found that investors who wanted exposure to agriculture who previously didn't have exposure to agriculture didn't discount these sorts of findings.

And so I put together this almost three page, good-looking PDF of why to add agriculture to your portfolio. And I ended up shopping around these properties that folks should consider purchasing. And the deal was if you buy a property, you owe $75,000 on the day of that property, on the day of close, liquid, and then you owe the full amount within 30 days of the close.

And so you basically, in theory, find one of these properties, get someone to verbally say yes, secure the first part of the transaction and do the rest of the transaction when the property actually changes hands.

And there was one real estate investment trust, REIT, in LA that really bought into this thesis. There's also a tax advantage where if you sell a property you can 1031 exchange into another place, and all these sorts of reasons why this is actually a pretty compelling business model to pursue.

But it wasn't until there was a transaction–I didn't have my broker's license, and I introduced the buyer and the seller and was cut out of the transaction. And I had no recourse because I can't claim.

**Beyang Liu:**

So you're essentially a market-maker. You were connecting people who wanted to invest in this form of real estate in LA with folks who wanted to sell farmland in Iowa. But it's not like you were sitting on this giant pile of cash saved up from your congressional intern days or anything like that.

**Joseph Nelson:**

Yeah, and Represently allowed me to have time to choose what I wanted to work on but I couldn't buy multimillion dollar plots of land just for fun.

**Beyang Liu:**

Got it.

**Joseph Nelson:**

And the funny thing is that one of the reasons I didn't want to work on this was, at the time, I didn't want to enter what seemed to be a legacy industry. Actually, at the time I didn't want to move, dare I say, and things like that. Which is sort of funny now, given how much time I spend both in Iowa and all over the place for our team and whatnot.

But a friend of mine actually built a business around this, and I've been very supportive of him and his efforts.

**Beyang Liu:**

That's awesome.

**Joseph Nelson:**

So it's a win-win.

**Beyang Liu:**

Cool. So it seems like you had so much experience applying statistical analysis techniques and machine learning to various domains, but it seems like everything except computer vision so far. So how did you get into computer vision and what was the backstory of Roboflow?

**Joseph Nelson:**

The backstory is that a childhood friend of mine from Iowa and now my co-founder Brad Dwyer, in 2017... So when I was working on Represently, he was running a company in the social game space called Hatchlings, which is a Facebook game in the Zynga-era. And Brad and I are surprisingly similar. His company started out of a hackathon. He didn't really mean to build a business but ended up building this large, bootstrap thing.

But he phoned me, and you say there's no computer vision background. In fact, in 2017, when ARKit had come out, Brad had this great idea where he was like, "What if we built an application that solved Sudoku puzzles for you?"

So on your iPhone, you'll hold it up over the top of a Sudoku puzzle and then it relays all the solutions in augmented reality so you can see it being solved live–right before your eyes sort of thing. And Brad's a super talented developer, and at the time, he was relatively novice to machine learning stuff.

And he was like, "Oh, who do I know that does machine learning stuff in my life?"

And so he phoned me up and he was like, "Hey, what do you think about this idea?" And I was like, "Man, the digit recognition is the hello world of computer vision. Like MNIST dataset, reading digits, no problem at all."

The ARKit side of stuff, I don't know a whole lot about, but he took the opposite route. He's like, "The ARKit stuff is the easy part. The computer vision stuff is going to be the hard part.” So basically, 30 days later, we have this thing thrown together that Brad builds and releases and calls it Magic Sudoku, and it wins Product Hunt's AR app of the year, catches a lot of people's imagination and had a really, really great user experience and exposed what was possible.

We carry around these pocket supercomputers. Our cameras are better than the digital professional cameras that you'd buy even five years ago, and it's just in your pocket. The processing power of a phone, even a TI-84 calculator, is better than we used to land on the moon. And the intersection of all those things hasn't really changed the way we interact with the world around us, and so we figured that this would be a small glimmer of what's possible when we threw together this computer vision AR thing.

And we put it out there and it was fun, but that's how it's meant to be. It was just two hackers who like to tinker with the new technologies. Well, then you fast forward a few years and I'd exited where I was working out with Represently, and I was toiling around with these other sorts of technologies. Brad appointed a new CEO at Hatchlings in summer 2019. We linked up and got to thinking about why didn't Magic Sudoku release this wave of developer inspiration of making things way more fun to interact with? Why didn't that happen?

And it didn't seem like there was an obvious reason for it not to happen. So we're like, well, maybe we should work on making that happen. And so originally what we were working on with Roboflow was actually making board games more fun to play by adding software features to real-world, in this case, board game objects–building on the success of Magic Sudoku because we have some history there. 

Board games are social by default. There's no barriers to entry except for brands to some degree. And so we're like if we first make board games programmable, then that can be like an SDK we then release, so then other developers can make new rules for these board games and then we'll release SDKs for every other object that you see in the world around you. And that was the initial game plan of when we started hacking on things together.

**Beyang Liu:**

So the problem you're tackling is making AR-enabled board games, or an SDK to enable more game developers to bridge the gap between the physical and virtual world in the context of board games?

**Joseph Nelson:**

Exactly. Yeah. Really, really succinct, eloquent summary.

And the insight was actually that it's not the AR that makes things special if you think about it. So, Pokémon GO is a fantastic example of this. It's the go-to example for AR games and that's really frustrating to me because augmented reality doesn't enhance the game experience. It's not required for the game experience at all. In fact, you can turn off the augmented reality portion and the app still works the same. The Pokémon just exists in the environment you're in, but it doesn't do anything that intelligently interacts, right?

Why when I open Pokémon GO doesn't it see water and go swim, or see a tree and sit in the tree? So it's the intersection of not just augmented reality, but having context. And that's what vision unlocks, right? Vision unlocks the context of the environment that you're interacting in. And so what we realized is that computer vision is what makes a lot of this stuff interesting and differentiated.

**Beyang Liu:**

And what was the state of computer vision at that point?

**Joseph Nelson:**

There were models that could run on mobile devices. Apple had recently acquired Xnor.ai, a Seattle-based startup that had worked on technologies for mobile-based vision technologies. There were open-source models that were seemingly quite good, but there wasn't really any developed tooling. And arguably there still isn't, which is why that's what we're working on.

**Beyang Liu:**

You had to roll your own model, essentially. You had to have some sort of domain expertise to get things. It's almost like a black art or like a black magic.

**Joseph Nelson:**

So let's take, for example, the next app we released after Magic Sudoku, which was called BoardBoss. It’s still free and in the App Store. So, it's actually a fun one to try out. And what BoardBoss does is it solves Boggle. So, in the same way Magic Sudoku solves Sudoku puzzles and relays the solutions for you. But that completely ruined the game, to be clear. Sudoku was ruined.

**Beyang Liu:**

The whole point of Sudoku is you're the one figuring it out.

**Joseph Nelson:**

Yeah. It wasn't like, give me a hint to solve this puzzle. It was like, I'm going to ruin the puzzle. And so we realized maybe that's a cool party trick, but maybe not exactly what our users wanted. Boggle is a board game where an omniscient AI could help, an AI that could see the state of the board. 

Boggle is the four-by-four word game where you try to find word combinations among adjacent letter tiles. Humans will find some subset of the total possible words, but an algorithm, like a breadth-first search, would check against a dictionary, if it's given the inputs, and find all of the potential words. And then we could use augmented reality to overlay that on the board and show you and you could get better and play.

The process by which we had to put things together to do that is that we had to capture a ton of images of Boggle boards and there's variations of Boggle, I learned. There's Big Boggle, there's Little Boggle, there's four-by-four, five-by-five, there's different lighting conditions that someone could be playing Boggle in from different distances. So you have to account for all those things. Great. Now you've got your data set and now you have to label it. So you have to annotate all those dang individual tiles with the letters that you want.

**Beyang Liu:**

And this is giving me flashbacks to my research in college. It was just a lot of work just to do... Not even figure out the logic of what to do on the board, but just to read the damn Boggle board. It's like a full-on research like a thesis.

**Joseph Nelson:**

Yeah. Basically, you're spending all your time before you even get to do "the fun stuff." Or even like in our case, what we considered to be the domain problem, which was enhanced board games–we're not even close to that yet, right?

So then you got your data, then you got it labeled, and then you can select your model. And at the time, we were working on–and I know this was similar-ish to when you were doing your work in grad school–off-the-shelf lean architectures. So, you didn't have to totally reinvent the wheel on the architecture side of things. And that's only accelerated, to be clear. So you could choose an architecture that you didn't have to do a whole lot with. You didn't have to learn, but you still had to learn arguably more than you want so that you could hack together and figure out the data format and the annotation format.

And then, how to train the thing: how long it needs to train, is it overfitting. All these things and then you've got to model on the other side and then you have to deploy the thing. So, you become like an embedded firmware engineer to figure out how to get this thing working in an app. And then you can put your mobile app development hat back on and you can go back to being a mobile dev to then make an experience that's exciting and fun. 

And then you're not done, by the way, because once your model's out in the wild, it's going to encounter new conditions. There's going to be different Boggle boards, and different letters, and different lighting. So you want to continue to sample. So you have to build some way of continuing to report feedback from users and then do this cycle all over again.

And so we had built that pipeline internally with our own hacky internal tools. And then, after BoardBoss, we wanted to release one for chess. And keeping to our hackathon selves, we went to TechCrunch Disrupt 2019 to release ChessBoss. So we roll into this hackathon, we've got our chess board, we've got our cameras and tripods. And we're borderline too old to be at the hackathon. So it's us and these Berkeley kids and then folks that are way too old to be at the hackathon. 

We're borderline. And so, we threw together ChessBoss in 48 hours because we'd experienced and encountered a lot of these problems before. And then the highlight of ChessBoss is, I don't know how far into judging it made it, but it made it far enough where Evan Spiegel came along to look at all the projects. And he stood at our table for a little bit. He was like, "Oh, that's neat. I could see myself using that," and walked along. And we got a little photo-opp. And that's the peak of ChessBoss.

**Beyang Liu:**

It was good enough to catch his eye and make him linger a bit at the table.

**Joseph Nelson:**

And I mean, it's actually a really cool demo, because you have the phone, you point it at the board, and what ChessBoss does is the same thing the other games do. You could take a photo of the board and it will understand the state of the board and then make a move recommendation using an open-source chess engine, Stockfish. But what we realized between these experiences was developers don't need more inspiration, they need more tools, right? You can talk to any company and they either built this themselves in-house or they have a Rube Goldberg machine for getting to production. And if Sarah leaves, the whole thing comes crashing down, because Sarah knows how to get models in production.

And so, in fall 2019, we went all in on okay, what it would be like to productize our internal tools and release them externally. And so in January, 2020, that's what we did. And so Roboflow is basically like the toolkit developers use to build computer vision into their applications. And the other thing that we've been working on is that, to the point that you were describing and I was talking about with collecting data, why even start at the point of assuming everyone needs to start from scratch?

Why couldn't we release models so that if you're working on a problem that someone has already built a model for, let's make that easier too. Because there's a lot of things that people end up working on at the same time. The number of Roboflow users that have worked on solving Bananagrams or like sushi identifiers or canoes, all this stuff, someone's probably done it before on Roboflow. And so, making that easier so that you can start from where someone else left off and then just use the tooling to improve from that checkpoint is the next wave of making it even easier for engineers to embed vision in their applications.

**Beyang Liu:**

That's cool. Are you trying to become the GitHub for computer vision models? Build up a community where people can share and learn from one another in creating these models is-

**Joseph Nelson:**

Yeah. I mean, what open source code or what open source did to code, we definitely want to do to vision, right? So, make it easier to get started, make it easier to collaborate, make it out in the open, allow developers to build on other developers' experience. So, absolutely. Brad pointed out, he was like GitHub for X, he's like, that's like a Rorschach test. The psychology test where they hold up the blobs and you see in the blob what you want to see.

That's why he's like that’s GitHub for X. And I was like, "That's really true." And so for us, the GitHub for X–it's the community parts of GitHub. It's the collaboration and it's the ease of the developer experience. It's focusing on the developer as the key person who’s going to usher in this evolution, because vision is going to affect every single industry. And it can only get there if folks that are domain experts and engineers and building that future have access to it. And so if we can accelerate that timeline, then we can bring a lot of progress beyond just board games. Cancer acceleration, manufacturing processes, retail checkout–all of these sorts of things.

**Beyang Liu:**

What is the range of applications or companies that use Roboflow today?

**Joseph Nelson:**

Extremely broad. So a little over 50,000, at least at the time of this recording, engineers have built with Roboflow. Over half the Fortune 100 have built with Roboflow. And we like to joke that the scope of the problem is everything from under a microscope to in the next galaxy. We have projects from people that are analyzing images in petri dishes, just as much as people that are identifying stars from telescope-captured images.

And the size of companies ranges from solo hobbyists and hackers like us to some of the world's most advanced and largest companies, like Walmart, right? Literally the world's largest employer. And so what's interesting is that when you see a technology like that, one that so many groups benefit from, you know it's special and it's not just a blip on the radar. And going back to why Roboflow, as opposed to all these other things that I was working on before. The thing that's really resonated with me is that by making developer tools, it's the end user who determines the impact that computer vision is going to have in their field, instead of us trying to say, "Oh, we're going to make the world's best physical therapy app."

So every person that goes to physical therapy can get targeted recommendations on their moves and all this sort of stuff. You could do that. By building the tools, you enable that and every other use case along the way. And I find that to be extremely empowering and it basically has helped me go from, okay, we can focus on this one sector, this one thing. But if we enable anyone to build for the end goal that they're working on, our impact is 10, 100, 1000X–whatever sort of trope you want to use.

**Beyang Liu:**

That's awesome. So what does developer experience for computer vision look like? Because when I think back to my research days, it's like, okay, fire up MATLAB. And then like you said, you have this data pipeline, you have a bunch of hand-labeled images, and then you select a model and then you try to train that model, but maybe there's some amount of feature engineering. In my mind, it seems hard to disentangle all that from the end product that you're building. So, what is the separation here? Is it an API that people can call into? Is it a set of library dependencies that they npm-install into their application? Or what does that look like?

**Joseph Nelson:**

It's a good question. We try to lead model first, which is going to be true if you're building a web app, like an npm package you want to use in your browser, or if you're deploying to the edge on these NVIDIA Jetsons, like a Docker container that contains your model. And it's just going to run in the way you would expect, if you're building an internet connected web-native, but not browser-native experience, that doesn't need a stream webcam, but is still going to be internet-connected. You could just serve up an API. And that's the place that everyone wants to get to where they can use their model and get value from it. But like those iceberg images, there's a lot that needs to go into getting there. And so, the best first-class experience is you have something that you can immediately embed in your app and that's what we want to get to.

But just as we were describing, what your model is seeing could be very, very different from what your model has been trained on so far. And so, that's what the rest of the tool chain is. How do you make sure you're continuing to collect images that are representative so your model can continue to improve? Organize them so that you can focus on labeling the ones that are only going to improve your performance and actually be able to do the annotation. Being able to train a model on either an automated basis like, hey, retrain every time we have 1,000 or 10,000 new images or in another way that you want to determine on a schedule. You just want to say when you want to train it.

And so making it extremely easy for someone who's already a software engineer, or technical to some degree, to incorporate it into their product and then working backward from there. Now, not everyone has a pre-trained thing they could start from, right? So some folks do have to start from, okay, how do I get images of the thing that I'm working on? We have an upload API that you can put into your app. I don't know if you remember the 30 to 50 feral hogs meme that swept Twitter?

**Beyang Liu:**

Yeah. I remember that meme.

**Joseph Nelson:**

We had someone who was using his cameras in Texas, in west Texas, to identify 30 to 50 feral hogs with Roboflow. And so he started with his hunting cameras as an endpoint, and he wanted to know when and where the feral hogs were on his property. And so he hooked an API into his cameras that just uploads his images. So he has the ability to start to do collection and build the data set.

And so, again, that's a developer-centric starting point. The experience is like, if you don't already have a model, you can start from “How do we make it easy to programmatically collect and interact with the pieces you've already put together?” It means being very open as well, right? Making it easy to integrate with any camera integration, or run on any device you want to run it on, label wherever you want to label. You can self-serve label with us or you can farm it out to any of those managed labeling services and get the data back in a format that you can then work with. All those things matter to us.

**Beyang Liu:**

One of the first order decisions in spinning up computer vision for a particular application model selection is that you have to choose which model's going to be the thing that you use. What's the range of models that are available to work with on Roboflow, or do you define your own?

**Joseph Nelson:**

Yeah, that depends on the user's background and the space. So, a lot of our users are pretty pragmatic and they're like, “Let me use a model, try it in my app, try it on my data set, and see if it works sufficiently well,” and then they're like, “Okay, I will rely on Roboflow as the state of the art improves and rely on Roboflow to incorporate that state of the art.”

There are other teams that might be more advanced that want to do some of their own sets of custom modification stuff. But the truth is that the state of computer vision is that models are increasingly better, faster, and open source. And the question becomes much less like, “What texture do you want to use?” and much more like, “How do you embed that capability in your product and use it on your data?” And so there's a funny debate in computer vision land, where models have developed almost like sports team levels of fandom.

**Beyang Liu:**

It's like Emacs versus Vim.

**Joseph Nelson:**

Yeah, a little bit. Are you on Efficientdet? Are you using YOLOv4, YOLOv3, YOLOv5? Where are you at? And that's fun. But the truth is that at the end of the day, for your business application, what you care about is one that's within the performance expectations you expect both in terms of speed, latency, size, the model, the fit, and whether it runs wherever you want to run it. There's not a uniform one-is-best-for-all situation–the same is true. Models come with trade-offs, too–of the size of the model and some of those sorts of things.

So, we often encourage users to think deploy-centric. What are your deployment conditions? Are you able to run at server side or does it need to run at the edge? All these sorts of things factor into consideration. And then we actually try to make that be even less of a concern for the end-developer. So, tell us where you're going to run your model, then we'll help you optimize to find the best performance for that given deployment target.

That said, there's a broad ecosystem of models that are available and we maintain an open source model library as well–models.roboflow.com–where users can try out their dataset in any of the models that we're discussing here, any of the different YOLO models or things of that ilk.

**Beyang Liu:**

Joseph, as I understand it, you have a demo that you can show off of Roboflow in action, is that right?

**Joseph Nelson:**

Yeah. So I thought it'd be cool to show Roboflow Universe, which is the community space where developers share both their datasets and their pre-trained models out in the open. 

Maybe you want your Nest camera to text you when you get a package, or you want to see when there's a given animal in your backyard and then you want to use Twilio to send yourself a text or something like that. You could go and collect a bunch of images of either those packages at your doorstep or that squirrel in your backyard. Chances are maybe another developer has already worked on something similar. And so if you could start from their model or their dataset, then you could probably have your app up and running more quickly. 

And so, Roboflow Universe is that community space. And I thought it'd be cool to demo what that looks like with an example model from Universe.

I'll share my screen. We'll see how this goes.

**Beyang Liu:**

So, this is Roboflow universe. This is the community space that you mentioned. It’s like a forum for sharing models publicly. Any user can come on this and build a model and then share it with other people who might be interested in checking out that same model.

**Joseph Nelson:**

Exactly. So, the model or the data set. For example, one person, Ritesh Kanjee, is a YouTuber with 90,000 subscribers. He has this dataset and model for playing-card detection. And so you could take this model and build it into your app and make, I don't know, a smart poker player, or something that automatically counts cards for you, or something like that. Just using this model, which is already trained. And clearly recognizes cards and their suits.

**Beyang Liu:**

Awesome.

**Joseph Nelson:**

I mean, the theory is that computers are going to see everything over time. So if you can enable people to get a head start, then there's some pretty cool stuff people would make. One of the models that we're fond of at Roboflow is this raccoon detector.

The raccoon's an unofficial mascot at Roboflow–one day it will graduate to official, I suppose. But you can see here, this model's been trained on a bunch of images of raccoons–in funny contexts, too.

**Beyang Liu:**

A lot of pose-variance there. Oh wow, you have occlusion.

**Joseph Nelson:**

Yeah. And this dataset is not giant. So it's not the most robust model–like 196 images.

But nonetheless, the model finished up training and we've got some good metrics here. And so you can try this model in a couple of different ways. You could use it via a hosted API if you wanted to have a little web app. You could deploy it to the edge, like on a Jetson or a Luxonis OAK.

**Beyang Liu:**

Cool.

**Joseph Nelson:**

I'm going to click here–webcam. And what this does is it uses TensorFlow.js to load the model completely client-side. The first page load is hefty, because it's moving the full model to the edge. But from here on forward, this is using my local machine's resources and no data is being sent back to any sort of server. And so this model's looking for raccoons. And I came prepared.

**Beyang Liu:**

Oh wow.

**Joseph Nelson:**

Here, I mean.

**Beyang Liu:**

That's awesome.

**Joseph Nelson:**

We'll see, I mean, how far away I can get here. Yeah. The light there starts to make it a little bit more challenging.

**Beyang Liu:**

Yeah. Yeah.

**Joseph Nelson:**

And that makes sense. Right. Most of the images that we saw, the raccoon was the majority of the image.

**Beyang Liu:**

Yes.

**Joseph Nelson:**

And even flatcoon looks like it does a pretty good job finding.

**Beyang Liu:**

That's awesome.

**Joseph Nelson:**

But this is now an example web app where I could just include this on the source code. And then I could call this model and pass any canvas on a webpage to this. And that canvas obviously could be maybe a video that someone loads into a webpage or any sort of image, or any sort of stream.

**Beyang Liu:**

Oh, wow. That's awesome.

**Joseph Nelson:**
Yeah, well raccoons are sort of like the example we find to be pretty fun. Over time, there's thousands of projects that people are making. And then, we curate the best ones and list them publicly for users to get going.

**Beyang Liu:**

Is there a backstory to why the raccoon has become the unofficial mascot of Roboflow?

**Joseph Nelson:**

Here, let me stop my share. I wish there were a more fun story, but there’s a couple of different origins. One is that for one of the most famous data sets that someone used for custom object detection in TensorFlow, they actually hosted a bunch of raccoon images. Someone named Dat Tran. And so, we adapted that.

But then over time, we've back propagated reasons for why the raccoon makes sense. For example, Roboflow cleans up your trash data and raccoons eat trash or raccoons are these animals that are very curious and don't like to be in cages.

At Roboflow, we have a very curious culture. And so, it's become an unofficial company value of saying, "We are raccoons." And it's silly, but it hits on these points of the importance of thinking a little bit differently and maybe being a healthy amount of curious.

**Beyang Liu:**

Cool. And then, so Joseph, how do people actually create models in Roboflow?

**Joseph Nelson:**

Yeah, so what we showed there was Roboflow Universe, the public space where you can create a model and a dataset and label it. And once you and your team are ready to share that in a public way, for hobbyists and students and public research projects, they end up on Universe. But that presumes you've already collected your data set, you've labeled it, you've done model training and all that stuff. And that, like the Roboflow core product, is enabling people to train custom vision models. 

I thought it'd be cool to show what that looks like a little bit. Here, I have created a public workspace. We can, of course, create private ones for business-critical data, but I thought it'd be fun to inspire hobbyist use cases.

**Beyang Liu:**

Cool.

**Joseph Nelson:**

I'll create a project here. I'm going to be doing chess piece detection. I'll call this chess piece detection. I'm going to assign a license to this project. The project type is going to be bounding boxes and we're going to be looking for pieces in our chess images. And so, I've got a bunch of images of chess pieces locally on my machine here. And the name of the game with the problem that we're hypothetically solving here is training the model to identify those chess pieces and where they are on the chess board.

**Beyang Liu:**

All these photos, just for the folks that are listening, all the photos that you have, they're essentially photographs of a chess board with pieces in different configurations.

**Joseph Nelson:**

Yeah, that's right. That's right.

And so I can drop those chess images into Roboflow. I use the web interface, but you can do that via API as well.

And what's neat here is you could come with annotations. You might already have a place where your images are annotated. And I could add those annotations to Roboflow and Roboflow will match those up for me. Even does a quick check.

And you can see how everything looks good. And I deliberately left one un-annotated image here. And I go ahead and upload those and create a train-test split. Now, you'll see that I annotated everything except one, because I wanted to show, oh, what if you have an image that you needed to add annotations to? You can open that image up. And then, all the annotations that are already with this data set are associated with this one.

And this is a black rook.

**Beyang Liu:**

So, you have a labeling interface in the app itself?

**Joseph Nelson:**

That's right. Yep.

**Beyang Liu:**

Cool.

**Joseph Nelson:**

And one thing that is pretty cool is you can actually have a model automatically label these images for you. Instead of manually drawing all these images or drawing all these bounding boxes, a model could automatically apply them. Or you could farm them out to a third party annotation tool. There's plenty of companies that will take your images, label them for you and send them back to you. And that's a common workflow we see that people will do to get quite a few images that they need to have annotated and ready.

And then, from there, the standard things that you do are create a dataset version. So you have a locked-in-time example image and data set. And we can train a model. And once we have a model trained, everything that we see on Universe is live. I have an API I can use, or a model I can call in the browser. 

**Beyang Liu:**

Where is the part where you actually select a model that's used? Does that just select it automatically?

**Joseph Nelson:**

Yeah. Good question. I'll go ahead here and create an example dataset version so we can see.

I'll call this–I added 3X augmentation. I have this version, V1 of my dataset, where I have applied data cleaning and data augmentation to go from those source 20 images to now, you'll see, I have 42 images in my training set. Because we randomly zoomed in on some of the images once the pre-processing and augmentation steps were selected.

**Beyang Liu:**

Oh, interesting. What does that do? Does that just create more variants for the model to consume? Just randomly zooming in on different parts of these training images?

**Joseph Nelson:**

Exactly. Yeah. So the name of the game, when you have a small data set in particular, is using augmentation to simulate conditions that your model might see in the real world. If we're playing chess, the room could be randomly brighter or darker by some arbitrary amount.

Or maybe the pieces have a little bit more saturation. You can think about it almost like applying Instagram filters to a bunch of images.

**Beyang Liu:**

That's cool. For those listening at home, there's this neat little UI that automatically applies these transformations, like making the image brighter, or rotating it by 90 degree, or occluding the object using a black box or something like that. That's pretty cool.

**Joseph Nelson:**

So, all these variants are things that I can apply. And then when we go to generate stuff, that's when you can choose how many image versions you want to generate. An example: one image could become three images where one image turns into three variants. One of those variants could be a little bit brighter. One of those variants could be zoomed in a little bit–those sorts of ideas.

But then once I have my dataset randomly messed up, once I’ve deliberately perturbed my data a little bit, that’s when I can train. And so, there's a couple of different ways I could train. I could ask Roboflow to pick a model and train for me, like an AutoML solution. And I could train either from scratch or from a checkpoint. Or I could train this with my own infrastructure. And we have a model zoo that users can use to basically select any of these architectures that play nicely with Roboflow.

And you could use the workflow pip package to then pull those up.

**Beyang Liu:**

That's awesome.

**Joseph Nelson:**

Here, for example, I'll have to revoke my key after this screen share. Oh wait, I forgot. We added a little feature here where it automatically blacks out my key when I'm screen sharing for things like this.

**Beyang Liu:**

Oh, that's awesome. You thought of it all.

**Joseph Nelson:**

If I copied this code snippet, then I could paste this directly into my training pipeline for any of these models that I might be interested in. And then it'll pull the data, host it on Roboflow, but then download directly to wherever I'm doing my model training.

**Beyang Liu:**

That's awesome. Basically, you point-and-click-ified the whole computer vision training process.

**Joseph Nelson:**

The interesting thing with developer tools is the level of granularity. Allowing the user to be met where they are in a sense–what level of depth they want to go to. Some users might want to toy around with specific architectures from the library. Some users might say, "I just want the API for my model. Give me the API. And I’m happy and able to continue my process by adding vision to my product." And so, it's an interesting design consideration to make it easy for all those different levels of depth that someone wants to tune and customize.

**Beyang Liu:**

This is really cool. It feels like this space is moving just so fast. And the thing that I'm reminded of is, did you ever watch Silicon Valley, the HBO TV show?

**Joseph Nelson:**

I have seen it.

**Beyang Liu:**

They had that character, Jian-Yang, who made the Hotdog Not Hotdog mobile app at one point. And all the thing did was detect if something was a hot dog or not a hot dog. But that was a joke I think you could make a couple years back and it was still like, "Haha. Computer vision is hard and this is the best we can do." But now it's like, well, he should just go and upload a bunch of hot dog photos to Roboflow and point-click his way to a working application.

**Joseph Nelson:**

Open invite for someone to put the Hotdog Not Hotdog on Roboflow Universe.

**Beyang Liu:**

That's guaranteed to be a crowd-pleaser.

**Joseph Nelson:**

Definitely. We'll see if someone doesn't get to it by the time this episode comes out. That seems like a pretty classic one.

**Beyang Liu:**

Awesome. Well, we're coming up here at the end of the hour. What's one or two things that are upcoming for the company or the product that you're excited about?

**Joseph Nelson:**

One of the big things is this community that we launched is actually relatively nascent. And so, while I mentioned that there's been 50,000 people that have built with Roboflow, the default Roboflow experience for the longest time has been the data is private to your account. The Roboflow team can't see it and the broader world can't see it. And that's deliberate and by design. It's like a privacy-centric experience, especially for business use cases.

What we've been surprised by is the amount of the community that does treat this like the open source movement. And basically, enabling folks to benefit from one another's creations. And I think that we're so much in the first innings of what that looks like. So we at Roboflow, have seen this wide, diverse array of use cases, of folks working on things that accelerate medical packaging, like for Pfizer, which has been an extremely important problem in the last year.

So actually, we had another company that was creating chest scan models for identifying the presence of COVID: was it there or not. In the very early pandemic, it was tough to find tests and people were using traditional chest scans to see how cloudy it looked in someone's lungs. And if it was particularly cloudy, then they would be administered a COVID test. And if they weren't, then they would use the COVID test for someone that might be more needy.

And it's small things like that, which stretch the imagination of what's possible. And so it's like, both the broad swath and excitement of these things that we see at Roboflow, but other people seeing all the ways vision is going to be useful. And then ushering that in to be easier. Right. There is the ability for folks to, if a hospital in Boston makes this better COVID-scanning identification product, allow that to be used everywhere else more quickly.

That's one thing I'm especially excited about: building the community and the depth as well as breadth around that. Just how the long tails will get. Another thing, and this is independent of Roboflow, is that, as you mentioned, the rate at which the ecosystem is moving. In the existence of Roboflow, YOLOv3 was out, then YOLOv4 came out, then YOLOv5 came out.

**Beyang Liu:**

YOLO's a common vision model.

**Joseph Nelson:**

Yeah. Sorry, YOLO stands for You Only Look Once. And it was originally published by Joseph Redmon. And if we had another minute, I'd pull up his resume, but I encourage your viewers to Google Joseph Redmon. I'll spoil it.

**Beyang Liu:**

There's unicorns on it.

**Joseph Nelson:**

My Little Ponies everywhere.

**Beyang Liu:**

My Little Pony. Yes. Sorry.

**Joseph Nelson:**

But the broader, meta point here is that model progression is happening so, so quickly that we still have narrow AI, generally. I mean, you have to really specifically define your task, but it's getting more and more applicable with less and less individual effort. And so it becomes a question of: How do you make the developer experience better to make use of those sorts of products–where we're staking our claim to the future?

But that's a very exciting future where all of these, what seemingly look like unstructured data problems in the world around us, become structured problems. You can make so many things programmable that we didn't think was possible before. And so the rate at which model improvement happens, the rate at which you don't need to have custom data to start to use vision in your products quickens. And basically, for us at Roboflow, what that means is making it easier and easier to start to enable applications to see and understand the world and make use of this cutting edge architecture without really having to become an expert, a PhD, in vision.

And I think that's a broad trend that's going to continue to accelerate. It's going to be very funny what the world looks like in the next five years. And then looking out a bit further, there's been jokes about this recently on Twitter and whatnot, and sometimes, they hit a little too close to home. People just add the word metaverse to what you're describing and your company does better.

And the joke is that Brad and I have been working on that since 2017–the blended, mixed reality of interacting with things around you. And it feels like we're finally getting closer. And it shouldn't just be Facebook that has the ability to usher in that future. And so, arming the rebels, so to speak, so that any engineer and team can start to mesh the reality of making things programmable, is something that I'm looking out for in broader five year time horizon.

**Beyang Liu:**

Awesome. If there's someone listening to this and they're a rebel and they want to arm themselves with this new technology, what's the best way to get into Roboflow?

**Joseph Nelson:**

Free to sign up. Roboflow.com or app.roboflow.com. We do our best to maintain good docs, but people can email me directly at joseph.nelson@roboflow.com if things can be made better. We're always, always, always, always eager for feedback. 

I guess maybe I should tell you to tweet at me @josephofiowa and we'll get things fixed up. But yeah, try out the app, give us feedback. I think checking out universe.roboflow.com to see if there's models that are already there would be good too. Maybe you can make your own Hotdog Not Hotdog or a raccoon detector. The sky's the limit.

**Beyang Liu:**

Awesome. We'll drop links to all that in the show notes.

**Joseph Nelson:**

Cool.

**Beyang Liu:**

But thank you so much, Joseph. This was great. It was enlightening. And I really love the tech that you're working on.

**Joseph Nelson:**

Appreciate it. It was a lot of fun. Thanks for having me.
                                                                           
_This transcript has been lightly edited for clarity and readability._

<!-- END TRANSCRIPT -->
