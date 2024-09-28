---
layout: ../../layouts/Work.astro
title: ui.dev
description: >
  Personal areas of focus for the new year
published: 9/17/24
logo: /images/bytes-logo.svg
year: 2022-Present
---

## Course Platform

### Landing Page

One of the first projects I worked on after joining ui.dev was redesigning and building our landing pages and revamping our pricing. As a result our revenue per customer nearly doubled. As a part of this initiative, we unified unified our marketing pages with the course platform application allowing us to do logged out previews, in app upgrades and other features that that wouldn't have been possible otherwise.

<div class="overflow-hidden my-8">
  <video class="w-full" autoplay loop muted playsinline poster="/images/landing-page-placeholder.jpg">
    <source src="/video/landing-page.mp4" type="video/mp4" />
  </video>
</div>

### Dashboard

Building the course dashboard for [ui.dev](https://ui.dev) was a fun project. I was responsible for the design and implementation of the dashboard. The primary goal was to provide an interactive place for students to track their course progress and encourage them to continue learning using the badges and achievements they earn along the way. From a business perspective, the dashboard also supports a logged out experience which allows perspective students to preview the course and see a selection of the lessons to get a feel for the content. You can see that in action [here](https://ui.dev/c/react).

<div class="overflow-hidden my-8">
  <video class="w-full" autoplay loop muted playsinline poster="/images/dashboard-placeholder.jpg">
    <source src="/video/dashboard-walkthrough.mp4" type="video/mp4" />
  </video>
</div>

### Code Previews

To make lessons more engaging, I built a CodePreview component on top of [Sandpack](https://sandpack.codesandbox.io/) in order to bring the code examples to life. The CodePreview component allows students to interact with the code examples in the lesson, and see the results in real time.

<div class="overflow-hidden my-8">
  <video class="w-full" autoplay loop muted playsinline poster="/images/code-preview-placeholder.jpg">
    <source src="/video/code-preview.mp4" type="video/mp4" />
  </video>
</div>

### Code Challenges

One of the core features I built for our course platform was an interactive code challege experience. Built on top of [Sandpack](https://sandpack.codesandbox.io/), the challenge editor allowed students to test their knowledge from the lesson with real time visual feedback. Once they complete their tasks, I wrote a series of automated tests to assess their solution. Many technical challenges to overcome building this feature, but it was worth the effort. In addition to the code editor we also designed a custom code theme, and added integrations for `prettier` and `autosave` to make the experience as seamless as possible.

<div class="overflow-hidden my-8">
  <video class="w-full" autoplay loop muted playsinline poster="/images/challenge-editor-placeholder.jpg">
    <source src="/video/challenge-editor.mp4" type="video/mp4" />
  </video>
</div>

### React Interview Questions

One of the sections we built for the course was a custom module for React Interview Questions. We explored a number of different ideas but settled for a quiz based module, that covered all of the common React specific questions we've seen covered in interviews. I build an interactive Card UI using `framer-motion` that allows students to flip the card to reveal the answer as well as the ability to filter based on the difficulty. The module also allows users to mark questions as completed once they feel comfortable with their ability to answer it correctly.

<div class="overflow-hidden my-8">
  <video class="w-full" autoplay loop muted playsinline poster="/images/react-interview-questions-placeholder.jpg">
    <source src="/video/react-interview-questions.mp4" type="video/mp4" />
  </video>
</div>

## bytes.dev

### Sharing Experience

One of our goals for Bytes was to improve organic growth so we experimented with creating an interactive sharing experience for the newsletter. When you click the share button in the newsletter, it will take you to a page where you can customize a message and graphic that can be shared on LinkedIn or Twitter (X). Because neither platform supports attaching images in their intent URLs, I built a service that would take in a query param and generate an image on the fly based on what the user had selected in the composer. You can play with the experience [here](https://bytes.dev/share).

<div class="overflow-hidden my-8">
  <video class="w-full" autoplay loop muted playsinline poster="/images/bytes-share-placeholder.jpg">
    <source src="/video/bytes-share.mp4" type="video/mp4" />
  </video>
</div>

### Email API

In order to streamline our process for writing and sending emails I created small service that allowed us to write our newsletters using markdown / MDX. One of the founders of the company is not technical, so having a better authoring experience helped us to manage the process of delivering 2 emails a week to over 200,000 JavaScript developers. The service reads the MDX from the file system, processes the content, and then creates the email template by rendering React components into a string. You can try it:

<br/>

```bash
curl https://bytes.dev/api/email/bytes/300
```

If you look at the html response, you can see the classic table layouts for email. Email templates are fun 🫠.

### Writing Newsletters

In addition to doing software development, I also frequently wrote articles for the newsletter. Here are several of the issues I wrote:

- [Big W for Web Components](https://bytes.dev/archives/326)
- [Astro's Hybrid Theory](https://bytes.dev/archives/324)
- [Yo' Momma, Ollama](https://bytes.dev/archives/318)
- [Free range, non-GMO software](https://bytes.dev/archives/314)
- [Welcome to Server Island](https://bytes.dev/archives/308)

Note: All of these posts were edited by the team, so some parts may have changed from the original drafts. Producing the newsletter is truly a team effort.

## npmtrends.com

One of the web properties I worked on was a site called [NPM Trends](npmtrends.com). After acquiring the site, we migrated the site from Heroku to Render. Part of this was for us to better understand the infrastructure and components of the site. Unfortunately, a few months into the project, we started getting unreasonbly high bills from render. We had created an API Gateway for the site using nginx, but with the amount of egress (bandwidth) that the site had, it represented a huge portion of the bill. In order to fix this, I created a reverse proxy API for the site using Cloudflare workers which proxied requests directly to NPM's stats and downloads APIs as well as Github and our backend. I used Itty Router to create the endpoints and then routed the requests from the front end through the service. The end result was a dramatic cost reduction.

##
