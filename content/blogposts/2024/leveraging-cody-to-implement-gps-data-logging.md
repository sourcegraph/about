---
title: "Crossing the Finish Line Faster: Leveraging Cody to Implement GPS Data Logging"
authors:
  - name: Charles Goode
  
publishDate: 2024-03-20T10:00-07:00
description: "Charles Goode, an electrical engineering student at Kennesaw State University, shares his experience using Cody to rapidly implement a GPS data logging system for the university's Formula SAE racing team, Kennesaw Motorsports."
tags: [blog, guest-post]
slug: "leveraging-cody-to-implement-gps-data-logging"
published: true
heroImage: https://storage.googleapis.com/sourcegraph-assets/blog/leveraging-cody-to-implement-gps-data-logging/og-leveraging-cody-to-implement-gps-data-logging.png
socialImage: https://storage.googleapis.com/sourcegraph-assets/blog/leveraging-cody-to-implement-gps-data-logging/og-leveraging-cody-to-implement-gps-data-logging.png
---

<Alert type="secondary">This is a guest blog post from our community. <a href="https://discord.com/servers/sourcegraph-969688426372825169" target="_blank">Join our Discord</a> to meet the author and connect with other developers passionate about Code Search and AI!</Alert>

Hello, my name is Charles Goode and I’m an electrical engineering major at Kennesaw State University. I’m here to tell you about Kennesaw Motorsports and to walk you through how I completed my first project on the team with the help of [Cody](https://sourcegraph.com/cody). 

## Kennesaw Motorsports

[Kennesaw Motorsports](https://www.ksumotorsports.com/) is a college competition team where students from various majors come together with one mission: _to build race cars_. Each year, we build two formula-style vehicles to compete in a competition held by the Society of Automotive Engineers, known as [Formula SAE](https://en.wikipedia.org/wiki/Formula_SAE). Each team is evaluated by industry professionals on presentation, design, cost, and performance to give future engineers the experience they can’t get in the classroom.

![](https://storage.googleapis.com/sourcegraph-assets/blog/leveraging-cody-to-implement-gps-data-logging/image_001.jpeg)

## My First Project with Cody

I will walk you through how Cody helped me complete my first project on the team. Going into this project, I needed more experience writing code and messing with microcontrollers and electronics. Despite my situation, I was able to complete my project quickly with the help of Cody. 

The project aims to implement a GPS data logger in our race car. We collect a ridiculous amount of data throughout our system, and the ability to plot the position of our car as it goes around a track can help us perform much better data analysis.

Hardware Involved 

* [Teensy 4.0 Microcontroller](https://www.pjrc.com/store/teensy40_pins.html)
* [Adafruit Ultimate GPS Breakout Board](https://www.adafruit.com/product/746)
* [Adafruit Micro SD Breakout Board](https://www.adafruit.com/product/254)

First, I start with the Teensy and the GPS. Before I mess with the Micro SD card or get into plotting, I want to make sure the GPS will work correctly.

For prototyping, I am using a breadboard and jumper wires. Below, you'll find the layout of the hardware and wiring instructions.

 
![](https://storage.googleapis.com/sourcegraph-assets/blog/leveraging-cody-to-implement-gps-data-logging/image_002.jpeg)


* 3V to Vin (3V on Teensy to GPS VIN)
* GND to GND
* TX to RX (Pin 8 on Teensy to GPS RX)
* RX to TX (Pin 7 on Teensy to GPS TX)

Now everything is wired up correctly, I can ask Cody to write some code for my project.

![](https://storage.googleapis.com/sourcegraph-assets/blog/leveraging-cody-to-implement-gps-data-logging/image_003.png)

_Prompt: Write me some basic code for using an Adafruit Ultimate GPS with a Teensy 4.0_

Cody quickly delivers, and the code runs perfectly once I install the necessary library. As you can see, the serial monitor is now printing the coordinates and letting me know the date, time, and satellite information.

Now that we have our microcontroller and GPS working together, we can add the microSD breakout board. This will allow us to print the data from the GPS in a .CSV file for further analysis. 

Here is the updated hardware layout and additional wiring instructions. 

![](https://storage.googleapis.com/sourcegraph-assets/blog/leveraging-cody-to-implement-gps-data-logging/image_004.jpeg)

* SCK to CLK (Pin 13 on Teensy to microSD CLK)
* MISO to DO (Pin 12 on Teensy to microSD DO)
* MOSI to DI (Pin 11 on Teensy to microSD DI)
* CS to CS (Pin 10 on Teensy to microSD CS)

Now that everything is wired up correctly, I can ask Cody for additional code. This time, I mentioned the microSD breakout board and specifically asked only to send the GPS coordinates to the CSV file.

![](https://storage.googleapis.com/sourcegraph-assets/blog/leveraging-cody-to-implement-gps-data-logging/image_005.png)

_Prompt: Open a CSV file on the SD card and print the GPS coordinates_

Cody quickly tells me which libraries I need and completely rewrites the code to fit my specifications. Once I upload this, the coordinates begin printing without the unnecessary information from before. 

I will now plug the Micro SD card into my computer to confirm it opened the file and correctly formatted the coordinates. 

![](https://storage.googleapis.com/sourcegraph-assets/blog/leveraging-cody-to-implement-gps-data-logging/image_006.png)
 
All the data is formatted correctly, but we need some real data to plot this correctly. The next time we tested one of our cars, I collected some real data from the CSV file. Now that we have the data needed, we must visualize it. There are a few ways to do this, but I picked MATLAB. I cannot do this inside my IDE, but Cody can still be helpful. 
 
![](https://storage.googleapis.com/sourcegraph-assets/blog/leveraging-cody-to-implement-gps-data-logging/image_007.png)

I asked Cody for a MATLAB script, and it was quickly delivered. I went to MATLAB, pasted in the script, and it ran perfectly. Once I input the data from our testing day, it plotted it. Here is the data visualized using the plot function.

![](https://storage.googleapis.com/sourcegraph-assets/blog/leveraging-cody-to-implement-gps-data-logging/image_008.png)

As you can see, Cody was able to help me complete my first project quickly. 

## Favorite command

Cody has many features, but one of the most important features for people trying to learn is the **“Explain Code”** command. 

![](https://storage.googleapis.com/sourcegraph-assets/blog/leveraging-cody-to-implement-gps-data-logging/image_009.png)

With the “Explain Code” command, Cody quickly gives me an in-depth explanation of the code. I am trying to learn from this project, so understanding the code is essential.

Within seconds of my command, Cody gives me an in-depth explanation of how the entire program functions. With this information, I can see exactly how the outcome is achieved and can return to this chat to help me complete similar functions in my next project. 


## Conclusion

A major key to being successful as a team or as a company is making meaningful relationships, and we are thankful to have one with Sourcegraph. We are always looking for ways to grow as a team, and receiving support from a fast-growing company in the Software and AI industry is a major leap in the right direction—big thanks to the team at Sourcegraph for supporting our journey towards innovation and success. 

To learn more about Kennesaw Motorsports, visit our website [here](https://www.ksumotorsports.com/)!

---

Cody can help you code faster, improve your productivity, and unlock new knowledge. Give [Cody](https://sourcegraph.com/cody) a try today!