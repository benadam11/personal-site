---
layout: ../../layouts/Post.astro
title: >
  Case Study: Inline Editing
description: >
  An in depth case study on one of the major projects I worked on at Godaddy: Inline Editing including my design process, the results and the outcomes the work drove.
published: 1/10/2021
---

## Introduction:

### Background:

I was hired at GoDaddy to work on a new project (not yet released publicly). GoDaddy was one of the first companies to create a website builder for their customers (in the late 90s). Over time it became unsustainable to release a new version of the builder every year or two, so one of the major goals was to create an “evergreen” product that could become one of the flagship products at the company.

Over the last 5 years the product has grown from a prototype to the second ranked website builder on the market (outpacing competitors like Weebly and Squarespace) and now closing in on 2million paid users and millions of published websites. In order to compete, fast iteration was essential. As a design team, we are constantly balancing the tension between designing / building new capabilities and improving the existing experience.

### The problem

It became clear fairly early in the project that traditional “form based editing” like Wordpress created a lot of confusion for users. The typical GoDaddy website builder user is a small business owner who is not very tech savvy, but needs an effective web presence for their business. In user testing studies issues related to “difficulty editing” was the top issue which made it a priority for our team to solve.

![Early example of form based editing](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605823270151_Form+Editing+Example+2.jpg)
![Product / brand evolution of form editing](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605823270140_Form+Editing+Example+1.jpg)

### The Vision

Every vision starts as a bit of a hunch, intuition if you will. As ideas start to take shape you begin to form a hypothesis. As a design team, we had intuition that a “Google Docs” like editing experience was much more intuitive than controlling fields with form inputs. When designing and editing a website, the most intuitive way to edit your content is direct manipulation. However, even though everyone (including stakeholders) loved the idea, the investment in the project was substantial and there was hesitation about diving in with so many unknowns.

Every quarter our org has a hackathon where engineers and designers are able to surface new ideas - full freedom to think big. So to prove out the concept I paired with another engineer and we build a proof of concept for direct manipulation that we called “inline editing”. Winning the hackathon gave the project the momentum it needed to move forward but there were still many unknowns.

## Creating a foundation for learning:

### User Testing Score Card

When you are making big changes and working towards a big vision, you have to set up a baseline for how you will measure success. In order to do this, I worked with one of our researchers to create an “experience scorecard”. The purpose of this scorecard was to try and glean some quantitative metrics from a qualitative testing process.

Our team leverages usertest.com heavily in our user testing running both moderated and unmoderated studies. The scorecard we created measured things like:

- Editing text
- Formatting text
- Adding or removing sections to the page
- Reordering the sections on the page
- Adding or removing groups of content

## Building to learn:

One of the difficulties with highly interactive designs, is that static mockups leave far too many holes between the visual design and the actual implementation. I realized very early on that things that looked like good ideas in our design tool (Sketch at the time) didn’t always translate. The reality was that the majority of the design and interaction work that needed to be done, needed to be done in code.

I threw away the static mockups and stared prototyping using Codesandbox (my preferred tool for quickly getting a React application up and running). I started by building out simple, isolated experiments of the different pieces of the experience ([here](https://2vm4wxrpy0.csb.app/) is an example). Once these simple experiments seemed to be working and ok from an interaction standpoint, they were then assembled into the larger prototype (which got more sophisticated with each iteration).

[See the full interactive Prototype here](https://znypwklw1p.csb.app/)

Over the course of a few months I built at least 4 distinct versions of the prototype, with each version containing dozens of iterations. I would run a small batch of users through the same core editing flows (so we could compare the prototype to the experience in production. After each batch, I would fill out the scorecard, and jot down ideas for improvement, which I then quickly integrated back into the prototype.

At first the issues were glaring, but with each iteration we stopped seeing users fumble over the different interactions and got to something that was simple, intuitive and scored higher than production on the usability scorecard. (Lesson: you never want the first version of your design to be the thing that users get in production.)

![Surface key actions for each section on hover](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764442070_Screen+Shot+2020-11-18+at+10.36.03+PM.png)

![Inline rich text formatting](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764441758_Screen+Shot+2020-11-18+at+10.38.40+PM.png)

![Exploration around inline font size controls](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764441605_Screen+Shot+2020-11-18+at+10.39.39+PM.png)

![Exploring bringing color selection inline](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764441508_Screen+Shot+2020-11-18+at+10.39.57+PM.png)

![Surfacing group level controls on hover](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764441941_Screen+Shot+2020-11-18+at+10.36.19+PM.png)

![Bringing attention to scope of destructive changes](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764441851_Screen+Shot+2020-11-18+at+10.36.31+PM.png)

![Quick interactive add section simulation (sometimes you gotta fake it)](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764441417_Screen+Shot+2020-11-18+at+10.36.47+PM.png)

## Building from a strong foundation:

After going through the rigorous process of testing and iterating, we felt confident about what we wanted to build. However, even though we knew what we wanted to build, we still needed to sequence the changes in a way that they could be made incrementally (so the team could stay agile). Sure enough there were high priority initiatives that came up along the way, including a [major company rebrand](https://qz.com/work/1784865/the-go-godaddy-introduces-a-new-logo) (you can see in the screen below how our brand colors have changed from what was in the prototype).

The team executed on the project in waves, starting with the basic text editing functions, and moved on to the section and group level controls. I worked on this project as both a designer as well as an engineer, implementing features like the add section drawer, inline toolbar controls and more. One of the major benefits of being proficient in React.js is that some of the strategies particularly for managing nested hover and focus states were able to be leveraged by the team in production.

(Try it for yourself - [here](http://websites.godaddy.com) account is required, but its a no-credit-card free trial).

![Surface key actions for each section on hover](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605765908974_Screen+Shot+2020-11-18+at+10.54.58+PM.png)

![Surface color controls at the section level](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605765909126_Screen+Shot+2020-11-18+at+10.55.16+PM.png)

![Enhanced section level controls](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605765908669_Screen+Shot+2020-11-18+at+10.57.26+PM.png)

![Inline text editing (and formatting)](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605765908874_Screen+Shot+2020-11-18+at+10.55.36+PM.png)

![Inline font size controls](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605765908811_Screen+Shot+2020-11-18+at+10.55.50+PM.png)

![Add section (the real thing)](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605765908738_Screen+Shot+2020-11-18+at+10.56.11+PM.png)

![Group level controls (showing scope of destructive changes)](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605765908702_Screen+Shot+2020-11-18+at+10.57.01+PM.png)

Note: As you probably notice in some of these screens, there are still some remaining form elements that are in the sidebar. The final phase (which has been reprioritized several times) is to remove those fields and further simplify the editing experience. Working around constraints like this is a challenge, but as we were able to demonstrate, even if you haven’t full realized your vision, you can still achieve success along the way.

## Results:

It is difficult to give specific metrics on a project that was this large in scope, however there were some notable results. There is a big competition for winning DIY customers in the website builder space, and customers rely heavily on reviews to guide them in their decision making journey. The big reason that users choose a website builder (like GoDaddy or Wix) over Wordpress is because of how overwhelming it can be to build your site on that platform. Ease of use is one of the primary factors (along with price) in a users decision to purchase and continue to use a product.

In the early days of this product, GoDaddy would receive less than impressive reviews in different publications citing many of the issues this project was aiming to solve. The cumulative impact of this work has helped us win in the market (surpassing Squarespace and Weebly).

### Product Impact

![NPS as the inline editing experience rolled out (large decrease in detractors)](https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605826198548_Screen+Shot+2020-11-19+at+3.43.11+PM.png)

We also saw statistically significant lifts in publish and conversion as we rolled out the experience. We also had the goal of winning better reviews. This [particular review](https://www.pcmag.com/reviews/godaddy-websites-plus-marketing) in PCMag highlight the ease of use that the product has to offer (especially compared with alternative products).

### Lessons Learned

- Iterate early and often
- Sometimes you need to throw away your design tool and dive into code
- Create a baseline before you start and measure your progress
- Grand visions always take time to realize and are the culmination of hundreds of smaller meaningful improvements
