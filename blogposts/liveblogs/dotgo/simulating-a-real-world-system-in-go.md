---
title: 'Simulating a Real-World System in Go'
authors:
  - name: Sameer Ajmani (speaker)
publishDate: 2017-11-06T10:55+01:00
tags: [
  "dotGo"
]
slug: simulating-a-real-world-system-in-go
heroImage: https://images.ctfassets.net/le3mxztn6yoo/2iQSOyqGIYUKm0Yw86GS2G/8f18e74e47d841b8b6a1d49b80aa6bef/DN8NAHZW4AA_HZr.jpg
published: true
description: 'dotGo 2017: Simulating a Real-World System in Go'
---

Note: This post was live-blogged at [dotGo 2017](https://www.dotgo.eu/). Let us know on Twitter ([@sourcegraph](https://twitter.com/sourcegraph)) if we missed anything. All content is from the talk; any mistakes or misrepresentations are our fault, not the speaker's.

Slides for Sameer's talk can be found here: https://speakerdeck.com/sajmani/simulating-a-real-world-system-in-go

---

[Sameer Ajmani (@Sajma)](https://twitter.com/Sajma) leads the Go team at Google. He was introduced to Go in 2009 at a tutorial taught by Rob Pike. Sameer fell in love with Go's concurrency model then and there. Today, he's talking to us about how the concurrency we see in the real world can help us better understand our programs.

Go's concurrency model makes it easy to develop scalable servers and data pipelines. Many of the patterns we use in developing concurrent code mirror structures in real-world systems. In this talk, Sameer presents a simulation of a small real-world system and shows how variations in the design affect the system's performance.

For background, Sameer rides the subway in New York to work. The subway system's limited capacity and variable latency reminds him of the types of concurrency problems he encounters while programming.

Today, Sameer will show us a simulation written in Go of one real-world system: a coffee shop. He created this simulation to explore a few properties of services: latency, throughput, contention, and utilization. He evaluated several implementations of the coffee shop in Go, each one mapping to a slightly different real-world scenario. Through this example, he hopes to show the power in Go's model and what we can learn about system dynamics with this simulation.

![Ajmani-1](//images.contentful.com/le3mxztn6yoo/3AfS2O5Ne0YqOqGw6umqeE/a7aa323cbbb1d60b30a3b46028b8d126/Screen_Shot_2017-11-05_at_5.34.25_PM.png)

The simulator is a benchmark harness that exercises these various implementations and measures their performance. This diagram shows the goroutines and channels that form the harness.
The first stage generates load (customers for the coffee shop). The second stage executes the function being measured (an “order coffee & wait” function). This stage measures how long the function takes to execute and reports that duration to the final goroutine, which aggregates the results. We vary the number of goroutines in the second stage, which you can think of as the number of people requesting a coffee simultaneously.
We'll vary the function being executed by the workers to explore the design space and find the best-performing coffee shop.

![Ajmani-2](//images.contentful.com/le3mxztn6yoo/30wuxdrhSUe6IUmooSCWKI/b34e5ce0a0bd67cc014091c11617142d/Screen_Shot_2017-11-05_at_5.39.30_PM.png)

The "order coffee and wait" function makes a latte. This happens in four steps:
* Grind the coffee beans
* Make expresso using the grounds
* Steam the milk
* Combine the expresso and milk to make the latte

By default, each of these steps uses CPU for 1 millisecond,
so if we do the four steps in sequence, to total time to prepare the latte is 4 milliseconds.

This is the idealBrew function, which runs the fours steps and returns the latte.

```go
func idealBrew() latte {
  grounds := grindCoffee(grinder)
  coffee := makeEspresso(espressoMachine, grounds)
  milk := steamMilk(steamer)
  return makeLatte(coffee, milk)
}
```

![Ajmani-3](//images.contentful.com/le3mxztn6yoo/3SR8J0Z4Fa0uek8ck26ewc/e6f229546477797931fa3f64cc57a157/Screen_Shot_2017-11-05_at_5.40.26_PM.png)

These two charts show the performance of the coffee shop as the number of workers increases from 1 to 6. In the ideal implementation, we would be able to prepare as many lattes in parallel as the CPU's can handle, so a single CPU could prepare 1 latte in 4 milliseconds.

Our throughput is therefore 250 lattes per second, and is the starting point on the chart on the left. Throughput scales linearly, so with 6 CPU's we'd get 1500 lattes per second. On the throughput chart, higher values are better.

The chart on the right shows the "cafe au lait-encity," the median time to make a latte, which stays flat at 4 milliseconds. Lower values are better on this chart.

Unfortunately, this ideal coffee shop isn't too realistic. In reality, each of the first three steps require a specific machine: a grinder for grinding coffee beans, an espresso machine for making espresso, and a steamer for steaming milk. In the simulation code, these machines are real data structures that track the latency for each stage. Just as it wouldn't be possible for multiple people to use the same machine simultaneously, it's a race for multiple goroutines to call "add" on the same machine data structure simultaneously.

### Lesson: use the race detector

If you run the ideal implementation with multiple CPU's and enable the race detector, you get a runtime error indicating the data race. If you create your own simulation in Go, you can use the race detector to check that you're synchronizing access to shared resources properly.

## Locking

How can we prevent multiple goroutines from accessing the same machine simultaneously? One way would be to put a lock on the entire set of machines, like putting all the coffee machines in a small kitchen and only allowing one person in at a time:

```go
var kitchen sync.Mutex

func lockingBrew() latte {
  kitchen.Lock()
  defer kitchen.Unlock()
  grounds := grindCoffee(grinder)
  coffee := makeEspresso(espressoMachine, grounds)
  milk := steamMilk(steamer)
  return makeLatte(coffee, milk)
}
```

![Ajmani-7](//images.contentful.com/le3mxztn6yoo/4KtIntZ19YGqcSUkcQ4Mou/7e4876d455559c298eeb1b164ef811ab/Screen_Shot_2017-11-05_at_6.18.13_PM.png)

This scenario yields the exact opposite of the ideal scenario: throughout stays flat at 250 lattes per second, and latency grows linearly with CPU's. Why? Because there's no way for more than one person to make coffee at a time. So when the Nth person joins the line, they must wait 4 milliseconds for each of the preceding N-1 people. You see better in the real world (at real coffee shops), so we can do better than this.

## Fine-grain locking

In the real world, different people can use the different machines simultaneously: a different person can be using the grinder while another makes espresso, and another can steam milk.

In Go, you can implement this scenario using a mutex for each machine. A goroutine locks the grinder mutex, uses the grinder, then unlocks it. Then, it locks the espresso machine mutex, and so on. So instead of locking the whole kitchen for 4 milliseconds, you just lock each of the three machines for 1 millisecond. The last phase, making the latte with coffee and milk, doesn't need any locks.

```go
func lockingGrind() grounds {
  grinder.Lock()
  defer gridner.Unlock()
  return grindCoffee(grinder)
}

func lockingPress(grounds grounds) coffee {
  espressoMachine.Lock()
  defer espressoMachine.Unlock()
  return makeEspresso(espressoMachine, grounds)
}

func lockingSteam() milk {
  steamer.Lock
  defer steamer.Unlock()
  return steamMilk(steamer)
}
```

![Ajmani-4](//images.contentful.com/le3mxztn6yoo/5tXgLCzBAI6eKs0KySk0E8/4d4d027a46932b6dbc8360fd5ebd74ec/Screen_Shot_2017-11-05_at_6.13.43_PM.png)

Now the throughput and latency curves look more interesting as we add CPU's. Up to four CPU's, we get our ideal implementation: throughput grows linearly and latency stays flat. But after this, throughput stays flat and latency increases.

![Ajmani-5](//images.contentful.com/le3mxztn6yoo/37feSChqFq8sy0cMQGeiE8/29b14761210dec59b061c4026cd0e9cb/Screen_Shot_2017-11-05_at_6.13.52_PM.png)

### Lesson: Minimize locked duration

With three people in the kitchen, each takes their turn at a machine and moves on. After 3, each additional person waits their turn because all the machines are in use. However, latency is increasing much more slowly than the completely locked kitchen scenario because the pipeline of people making coffee is advancing each millisecond.

There's greater parallelism and increased throughput by minimizing the time that any one resource is locked. We also avoid holding any locks during the fourth phase since there's no resource contention in this step.

But why does throughput flatten after 4 CPU's?

![Ajmani-6](//images.contentful.com/le3mxztn6yoo/4HO4t1VDXiUKeq64Qm6W4U/8d383ebe7bdccad74e295a42492d34a3/Screen_Shot_2017-11-05_at_6.14.25_PM.png)

The first coffee runs on CPU1, taking 1 millisecond per stage. The second coffee waits 1 millisecond to use the grinder, then can proceed in parallel on CPU2. The third coffee waits again for the grinder and then proceeds on CPU3, and the same for the fourth coffee on CPU4.

What about the fifth coffee? By the time the grinder is free, CPU1 is free again, so it can run there. It can't start sooner because the grinder would be in use. This system has a maximum of 4 CPU's in parallel because of contention on the grinder, which is why the throughput of this system flattens at 1000 lattes per second: 4 CPU's running at 250 lattes per second.

Given this structural limit, how can we increase the performance of our system? When the critical resources you have are running at capactiy, the solution is to have more resources. So, having a second set of machines or a second coffee shop means more people could make coffee simultaneously.

## Two sets of machines

One way to implement this in Go is to create a buffered channel of size 2 for each machine type and putting 2 machines in each channel. Instead of locking a mutex, a goroutine receives from the channel to get access to 1 of the 2 machines. When it's done with the machine, the goroutine sends the machine back on the channel.

```go
func multiGrind() grounds {
  m := <-grinders
  grounds := grindCoffee(m)
  grinders <- m
  return grounds
}

func multiPress(grounds grounds) coffee {
  m := <-espressoMachines
  coffee := makeEspresso(m, grounds)
  espressoMachines <- m
  return coffee
}

func multiSteam() milk {
  m := <-steamers
  milk := steamMilk(m)
  steamers <- m
  return milk
}
```

![Ajmani-8](//images.contentful.com/le3mxztn6yoo/59mhejBl20QUSaUQG8UiCU/f01d5ccd24b5323594ebf2a0b6074344/Screen_Shot_2017-11-05_at_6.41.40_PM.png)

With two sets of machines, ideal performance goes up to 6 CPU's. Throughput increases linearly and latency stays flat.

These charts are another way to compare the performance of the implemantations so far:

![Ajmani-9](//images.contentful.com/le3mxztn6yoo/6JcrlbxMsgQQoCYOWA6uOC/374cb81475b49e86a1095e6f3926f34f/Screen_Shot_2017-11-05_at_6.42.16_PM.png)

The left-hand chart shows the throughput of each implementation when running with 6 CPU's, and the right shows their latency distributions. The whole-kitchen locking has much lower throughput and much higher latency than our ideal implementation. The fine-grain locking implementation does better, peaking at around 1000 lattes per second due the the structural limits we saw earlier. We overcome this structural limit by adding more coffee machines. With two of each machine, we achieve ideal performance. Doubling again to four of each machine gains us nothing, since we’ve already maxed out our 6 CPU's. Now, our CPU's are the limiting factor, so to increase performance further, we’ll need more CPU's.

So far, we've simulated a shared kitchen, where each person making coffee takes turns using a shared set of machines. However, we usually see a small number of baristas operating the machines, which is more efficient. The next simulation is a coffee assembly line, where one person operates each machine.

## A coffee pipeline

Finally, we have some goroutines and channels. In this pipeline we have three stages: a grinder, a presser, and a steamer.

```go
func (p *linearPipeline) grinder() {
	for o := range p.orders {
		o.grounds = grindCoffee(p.grinderMachine)
		p.ordersWithGrounds <- o
	}
	close(p.ordersWithGrounds)
}

func (p *linearPipeline) presser() {
	for o := range p.ordersWithGrounds {
		o.coffee = makeEspresso(p.espressoMachine,  o.grounds)
		p.ordersWithGrounds <- o
	}
	close(p.ordersWithCoffee)
}

func (p *linearPipeline) steamer() {
	for o := range p.ordersWithCoffee {
		o.milk = steamMilk(p.steamerMachine)
	}
	close(p.done)
}
```

The grinder receives new orders on the orders channel, grinds the beans, and passses it along to the next stage. The presser makes the espresso using the grounds and passes the coffee along to the steamer. The steamer steams the milk and passes it back to the goroutine waiting on the order. That goroutine combines the coffee and milk to make the latte.

![Ajmani-10](//images.contentful.com/le3mxztn6yoo/3hW6CAFiWsiaucickKY6G6/c696e28c310cefaeb4ddcc1d7ebf2fe2/Screen_Shot_2017-11-05_at_6.42.38_PM.png)

When we look at the performance of this pipeline, it looks a lot like the fine-grain locking implementation. the latency is identical, but the throughput is slightly less until we reach 6 CPU's.
The latency is the time it takes to run each of the 4 stages, so it makes sense that that would remain the same in the locking and pipeline implementations. But the pipeline’s throughput is less because it is not utilizing the three contended machines as efficiently.

The real world analogy:
Consider what happens when the person using the grinder finishes grinding the beans.  In the locking implementation, the person steps away and waits for the espresso machine, and someone else can use the grinder.

But in the pipeline implementation, the person grinding beans has to wait to hand off the grounds to the person making espresso before they can start the next grind. If the second person is busy making espresso, the first person just stands there, holding out the grounds. This is a blocked channel send in our implementation.

Of course, in the real world, the person would just set the grounds down on the counter and start grinding more beans for the next coffee. So how do we model that counter space in Go? By adding buffers to the channels that connect our pipeline stages. These buffers absorb the variance between stages and so increase throughput and utilization.

![Ajmani-11](//images.contentful.com/le3mxztn6yoo/2U70YMsOjmE0mumMSocW6q/0b66142de33ac35d9b363564294a2e71/Screen_Shot_2017-11-05_at_6.42.47_PM.png)

Sameer tested pipelines with buffer size 1 and size 10. Their lines are overlapping on the charts. Both of these buffered pipelines outperform the unbuffered pipeline,achieving the optimal throughput of 1000 lattes per second. This is because they eliminate the requirement for stages to proceed in sync and so allow more work to proceed in parallel.

![Ajmani-12](//images.contentful.com/le3mxztn6yoo/4IcTrvh78I04gKcqUqI0cQ/c8003aa4361820d8d0bb51e7f45dd991/Screen_Shot_2017-11-05_at_6.42.56_PM.png)

What we see in these charts is that the differences between fine-grain locking and the various pipelines are all pretty minor. The two big gains came from structural changes. The first was moving from the whole-kitchen lock to fine-grain, per-machine locks. This reduced the time spent in any one critical section, so that more work could run in parallel. The second was recognizing when our existing resources were fully utilized and adding more capacity. This allowed us to max out our 6 CPU's. The CPU's are now our limiting resource, so if we want to get more throughput, we’ll need to add more CPU's to run our simulation.

![Ajmani-13](//images.contentful.com/le3mxztn6yoo/3vevQinLteSYUykY60qqmo/8fc797f91c0e10288cddb3c6305aa8a2/Screen_Shot_2017-11-05_at_6.43.03_PM.png)

In preparing for this talk, Sameer tried many more scenarios than the ones shown so far. He tried changing the number of stages, changing their duration, and adding random noise. He also tried making the steam-milk stage run in parallel with the other stages. What’s remarkable is how little any of that mattered. Most changes had only small effects on performance, but the structural changes provided major gains.

The lesson of this talk is to identify and remove the structural barriers to parallelism in your system. Removing these barriers will help your system scale. In this situation, he did this by reducing the time spent in critical sections, and we did this again by adding more replicas of contended resources. He also did this with buffering, which allowed upstream pipeline stages to proceed without blocking on downstream stages. While these changes have benefits, remember that they also have costs, such as increased resource use. In doing these kinds of investigations, the Go execution tracer is an invaluable tool.

Finally, Sameer encourages us to study real world systems for inspiration. Try to understand why they are the way they are. These insights will help you understand structural performance issues and fix them.

Get the simulator: `go get github.com/Sajmani/dotgo/coffee`
