---
# src/pages/index.md
layout: ../../layouts/Post.astro
title: Building A Developer Media Company
published: 12/11/2021
---

_Note: this is a synthesis of converations I’ve had with Tyler & Alex from ui.dev as well as some of my own ideas. The vision is what got me excited about joining ui.dev and to write this out._

Over the past several years, software companies have put an ever increasing focus on “developer relations” hiring DevRel (or Developer Advocates) who’s role is to produce technical content that generates value for the business (videos, tutorials, documentation, SDKs, etc). Their role is critical for marketing the product (demos, conference talks etc), onboarding new users (tutorials, SDKs etc) and retaining existing users (documentation, community etc).

<blockquote class="twitter-tweet" data-conversation="none" data-theme="dark"><p lang="en" dir="ltr">I feel like every DA I know who prospered during the pandemic basically figured out how to run a small media company. Prediction: there are going to be some cool, scrappy little developer media startups popping up in the next ~2 years as these folks operationalize their talents</p>&mdash; Forrest Brazeal (@forrestbrazeal) <a href="https://twitter.com/forrestbrazeal/status/1463666781545979907?ref_src=twsrc%5Etfw">November 25, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

As Forrest insightfully points out, devrels / dev advocates have had to learn how to run mini “media companies” during the pandemic. If anything this trend is accelerating. So it begs the question: what does it mean to be a developer media company?

## The Media Business

The top 10 largest media companies (including Netflix, Disney, Comcast, & AT&T) are worth well over a trillion dollars combined, and business is booming. At a macro level, all media companies effectively operate in the same way. Media companies grow their audience by producing and effectively distrbuting their content (which leads to revenue).

### Content (Product)

> “Content is King. “ - Bill Gates (1996)

At its core, content serves three purposes: to inform, to educate, and to entertain.

_Inform:_
We innately desire information because it reduces uncertainty (making us feel safe). On the spectrum of content, information is ephemeral and delivered at high frequency. The news business’ goal is to deliver information at a very high frequency, starting with weekly newspapers in the 1600s progressing to the 24hr news cycle of today as technology advanced.

_Educate:_
I use the word educate here loosely (when I say educate, I mean something different than education, which I will explain later). Educating takes much longer than informing on a given topic. If information is the raw facts, education is the facts colored by context that drive towards an outcome. It is naturally more detailed material that takes longer to produce and is delivered at a lower frequency.

_Entertain:_
Entertainment is (obviously) the most popular form of content because it makes us feel good. It also represents the bulk of what we think of when it comes to the media business. Content geared towards entertainment is typically generated on a longer time horizon compared with content designed to inform or educate, and has en emphasis on narrative.

High quality content is one of the most valuable commodities around, and is the flywheel for every media company.

![The Disney “Flywheel”](https://paper-attachments.dropbox.com/s_3F798FE0CB85D30A1897D23F34FB13FE6F9111A017A25F1325FD2241D2E2441B_1638205850785_image.png)

Today people are flooded with choices which becomes paralyzing. As they are inundated with choice, they will naturally gravitate to the trusted brands who have come through for them before. Having high quality content is not enough. In order to have the resources for content creation, media companies have to distribute their content to the the correct audience. Over time this grows their audience and reinforces their brand (associating it with quality), differentiating those who are able to do this consistently.

### Channels (Distribution)

> “Having a great idea for a product is important, but having a great idea for product distribution is even more important" - Reid Hoffman

How do media companies distribute their content?

Developing media distribution is very resource intensive in most cases (having to front the capital for infrastructure) so most media companies end up oursourcing their distribution. This has been a trend in print media where newspapers are [outsourcing printing and distribution to third parties](https://www.poynter.org/locally/2021/production-of-print-newspapers-is-migrating-up-the-interstate-with-ever-earlier-deadlines-as-a-result/#:~:text=More%20than%20a%20dozen%20newspapers,what%20does%20it%20cost%20readers%3F&text=As%20the%20search%20for%20cost,longer%20printed%20in%20your%20hometown.). It has already been the case for broadcast television and feature films where revenue splits with distributors have been the core business model (distributors compete for the opportunity to distribute content). At a macro level this makes sense, distributors can offset their capital expenses for infrastructure by servicing multiple content providers.

**_(incomplete list of media channel distribution examples)_**

- Print → (Content → **Print → Merchandising + Direct Delivery** → Readers)
- Broadcast → (Content → **TV / Cable Network** → Viewers)
- Feature Film → (Content → **Theaters** → Viewers )
- Publishing → (Content → **Publisher → Book Stores / Amazon** → Readers)
- Video Games → (Game Development → **$GME / Marketplace → Game Platform** → Gamers)
- Music → (Music Production → **Record Label → Tours + Physical Record + Streaming** → Listeners)

More recently we have seen media companies make huge investments to own their own distribution. With the success of Netflix ([the most valuable media company in the world](https://www.investopedia.com/stock-analysis/021815/worlds-top-ten-media-companies-dis-cmcsa-fox.aspx)) building a direct to consumer platform for content, there has been an arms race to own content distribution. Netflix started their ascent to the throne by building up their distribution and over time increased their margins by producing their own content (rather than liscensing it from other content providers). In contrast, Disney has been the owner of a mountain of content and has been able to purchase distribution (buying ABC, ESPN, creating cable channels etc). With the creation of Disney+ they made the decision to forgo lucrative licensing deals in favor of controlling distribution.

### Audience

Which came first, the chicken or the egg? Do media companies create content for an audience or does an audience form around the content that they create? At the end of the day the answer to this question probably depends on the media company (for example: Fox News is clearly the former, and Disney probably the latter). The general formula for success for media companies is simply to create great content.

![Field of dreams via r/memes](https://i.redd.it/w8xhuitk9nb41.jpg)

Developing an audience is usually the combination of consistency and storytelling (brand). ESPN’s flagship program SportsCenter initially focused on the major sports in the US (baseball, football and basketball) which drew in an initial affinity group, but they were able to appeal outside of that affinity group through humor and storytelling. Humor and storytelling appeal broadly across affinity groups, and enable media companies to grow their audience.

## Developer Content

So what does all of this have to do with software development and how does it relate to media companies? As an affinity group, software developers are an under served media market. More mainstream markets like sports & entertainment are now saturated and extremely competive, but there is still a massive opportunity to build a media company for developers.

### Why Developers?

![developers developers, developers, developers, developers, developers,  developers - Steve Ballmer](https://memegenerator.net/img/instances/61143257.jpg)

The stereotype of a socially awkward nerd who loves computers (in addition to not being particularly accurate) also diminishes the outsized influence in business and society that developers have. Developers are now extremely well compensated (one of the most desired professions to work in) and are working on and contributing to some of the largest most influential companies in the world. They have the ability to directly make or influence purchasing decisions for these companies, and over the course of their careers, these decisions represent significant monetary sums ([the estimated total for cloud services in 2021 is $379 billion](https://www.grandviewresearch.com/industry-analysis/cloud-computing-industry#:~:text=The%20global%20cloud%20computing%20market%20size%20was%20estimated%20at%20USD,USD%20368.97%20billion%20in%202021.)). The global pandemic has only accellerated these trends and every company is becoming a technology company.

My belief is that developers are the single most important affinity group to market to. In order to market to developers, you have to have their trust (developers have seen enough “snake oil” to be intrisically distrusting of any technology or service that is being marketed to them). This begs the question: how do you build trust with developers?

### Creating Developer Content

There is a joke in software about how developers just Google the answer to everything (which is honestly very true). There is too much information to hold in your head as a developer. You need to stay on top of changes that are happening in your industry (learning new technologies as they become relevant to your work or future job opportunities). You also need to develop foundational knowledge on which to build your career. And finally, you need to be able to find information to “unblock” your work. Simply put, there are an extrodinary number of ways to create value for developers and earn their trust. However, trust is more easily broken than it is earned.

One of the primary ways that trust is broken with developers is when tools / resources that they rely on are broken or out of date. Developers complain about “breaking changes” in software (this is when a dependency of an application requires code changes in order for it to work) because it creates a bunch of work for them to do (unrelated to adding features to the product they are working on). It is also extremely frustrating to look for information about how to do **\_** task and the documentation (or tutorial) is outdated.

### Opportunities

Currently the developer content market is flooded with low quality content targeted at beginners. Many platforms rely on UGC (user generated content) which mean’s that there is significant variance in quality between articles and its hard to identify up front which posts will be high quality and which ones provide little value. To make matters worse, a good article over time becomes outdated and loses its value over time. This impacts the platform, because as soon as you can’t consistently predict the quality of the content, you will stop relying on it for its distribution. Building a brand where users can rely on quality that consistently delivers value is a major opportunity.

In addition to building a brand, there is an opportunity to appeal across some of the artificial bariers that fragment communities. There is the “React community” or the “Vue community” etc but all of these represent a larger “Front End community”. Similar to SportsCenter, there is an opportunity to use humor and storytelling to appeal outside of the core audience and grow it to include the broader community.

## Building a (Developer) Media Company

How you define yourself as a business has significant implications for how you operate. For example, in 2007 Apple renamed itself from _Apple Computers_ to _Apple Inc._ This was a subtle but significant shift that represented a change in direction for the company as it looked to move beyond desktop computers to new opportunities with mobile and wearable technology. This was an inflection point for the company as it went on from that point to become the most valuable company in the world.

![](https://paper-attachments.dropbox.com/s_3F798FE0CB85D30A1897D23F34FB13FE6F9111A017A25F1325FD2241D2E2441B_1638907050095_Screen+Shot+2021-12-07+at+12.57.25+PM.png)

In contrast, companies such as Kodak were not able to make the transition to digital because they had defined themselves as a film photography company. As of now, there are very few companies that define themselves as developer media companies. There are several including Smashing Magazine and CSS-Tricks that operate as developer focused media companies. Both of these companies have been extremely successful and valuable resources to the community, but both suffer from some of the issues mentioned previously related to UGC and content going stale. Additionally they operate at a scale where it generates a non-trivial amount of noise to follow all of they content they produce (its easy to get overwhelmed and stop following).

### Create Content To Build Distribution

Content creation is a flywheel (create valuable content → audience shares content → new audience members). Building distribution is always a factor of quality content, but it is possible to be strategic about how to create quality content that will maximize your distribution. The most savvy marketers are able to build bridges between content that reinforces the content flywheel across platforms.

_Strategy 1: Pillar Cluster Content_

![Pillar Cluster Model - Hubspot](https://paper-attachments.dropbox.com/s_3F798FE0CB85D30A1897D23F34FB13FE6F9111A017A25F1325FD2241D2E2441B_1638916242148_image.png)

The pillar cluster content model (outlined by Hubspot in their article [The Future of Content Strategy](https://blog.hubspot.com/marketing/content-marketing-strategy)) is based around the trends towards more complex terms in search driven by mobile and voice (conversational search). This strategy is particularly useful for optimizing the long tail of keywords associated with a given topic. One of the biggest mistakes other media companies make is casting too wide of a net in regards to their content creation that this miss opportunities to tell a more cohesive story and develop authority on a given topic. The result of this mistake are “gaps” in content that tie together the critical pieces of information. For developers, these gaps tend to cause significant frustration (especially for those new to a particular technology).

For developer media companies, pillar cluster is the ideal because there are various different use cases or scenarios (cluster content) that relate back to the main topic, but usually they are only available out of context (random article, or stack overflow answer etc). The goal of this content model at a high level is that users should not have to hit a “dead end”. Instead, they should have an experience where they are thoughtfully connected to the broader topic so that they can continue to increase their knowledge both horizontally (other cluster content) and vertically (indepth pillar content).

The reward for a well executed pillar cluster content strategy is distribution (in for form of inbound traffic). As you produce well crafted content, platforms such as Google Search (and social networks like Twitter & LinkedIn) will promote your content and expose it to more users.

_Strategy 2: Newsletters_

![David Perell Newsletter Centric Business Model](https://paper-attachments.dropbox.com/s_3F798FE0CB85D30A1897D23F34FB13FE6F9111A017A25F1325FD2241D2E2441B_1638916255671_image.png)

Writing guru David Perell uses a newsletter centric strategy for building his business. As shown in the graphic above, he funnels users towards his newsletter from his various other properties, and then uses his newsletter to funnel users towards revenue generating properties (repurposing / cross promoting his other content).

Bringing this into the context of a developer media company, there are a sea of newsletters in tech (essentially everyone sees them as valuable, but no one seemingly knows how to make them valuable). Companies either have too narrow of a surface area to be able to publish interesting content, or they publish content consistently but its boring. The goal of a good newsletter should serve 2 clear purposes: to inform and to entertain, with a strong emphasis on the latter.

There are 2 engines that will drive the newsletter flywheel:

1. Driving signups with high traffic web pages (pillar cluster)
   1. Organic ranking for search (ex: “javascript newsletter”)
2. Users sharing
   1. Newsletters should be easy to share (web links).

The reward for successfully executing a newsletter strategy is, you guessed it, distribution. One unique property of a developer oriented newsletter is that there are very few places to get consolidated “news” around what’s happening in the tech world. As we have seen with traditional media, eventually the “network” or distribution of the news heavily shapes what is considered “news worthy”. In the olden days this was called “tastemaking”.

_Strategy 3: Youtube_

Good video content is gold. Youtube, in a similar way to Google search, rewards content creators that drive engagement. There are not many Youtubers who are able to create interesting content for developers. One formula for success on youtube (outlined here by Paddy Galloway) shows how combining the right ingredients can lead to outsized success.

1. Combine multiple viral themes into each video
2. Click Through Rate + Watch time = algo promotion
   1. Make thumbnails to suit your audience
   2. Intro hook
   3. Length = 10-20min
   4. Retention Tactics (no resolution to the story till the end)
3. Constant re-investment into content
4. Postivity Wins

<iframe src="https://www.youtube.com/embed/JJ-ogw8AZ3o?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Creating great developer content on Youtube is obviously quite different than Mr Beast, but there are still insights to benefit from. Fireship implements many of these strategies and has produced one of the best youtube channels for developers. If excecuted in combination with pillar cluster content strategy, cluster content can leverage Youtube videos (playlists mapping to pillar content) driving traffic both to pillar posts as well as back to Youtube. Combining multiple flywheels together starts to give you the primitives of an engine (but that is a topic for another time).

The reward for a good Youtube strategy - bing bong - distribution.

Strategy 4: Events & Community

Feeling a sense of belonging sits right in the center in Maslow’s hierarchy of needs. In tech this need for belonging shows itself all over the place. One of the most discussed topics on tech twitter is “imposter syndrome” (feeling like you don’t belong). Events are a way of bringing a community together and provides the context for interacting and building relationships.

![Maslow's Hierarchy of Needs Explained](<https://www.thoughtco.com/thmb/rKoYLSBFBWZAbHrgxOyWqFuVyRQ=/4911x2762/smart/filters:no_upscale()/maslow-s-hierarchy-of-needs--scalable-vector-illustration-655400474-5c6a47f246e0fb000165cb0a.jpg>)

Events are relational and ephemeral in nature. The point of an event is to connect with others while you learn or are entertained on a particular topic. Conferences are the prime example of this, but this is also true on a smaller level with meetups. They are ideal for introducing new ideas, and exposing people to different points of view. Events are ephemeral which mean’s their content has a relatively short halflife. This makes them ideal for subscriptions. The key is that they enhance people’s sense of connection and belonging.

<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Remember, <a href="https://twitter.com/hashtag/CascadiaJS?src=hash&amp;ref_src=twsrc%5Etfw">#CascadiaJS</a> is more than just tech talks, it&#39;s about people, fun &amp; new experiences.<a href="https://twitter.com/thejoriedel?ref_src=twsrc%5Etfw">@thejoriedel</a> is thinking about doing some rockclimbing 🧗‍♀️ at Smith Rock.<br></br>What else is there to do around Bend, OR? What say you <a href="https://twitter.com/chriscoyier?ref_src=twsrc%5Etfw">@chriscoyier</a> ?<br></br>Leave a reply below 👇</p>&mdash; CascadiaJS 🇺🇸 🇨🇦 (@CascadiaJS) <a href="https://twitter.com/CascadiaJS/status/1469030435501920258?ref_src=twsrc%5Etfw">December 9, 2021</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

(A quick note on subscriptions: when you decide to pay for a subscription, you are paying in advance for future value. Any subscription in which you pay for goods / services you have already consumed is actually a payment plan is extremely likely churn. The best subscriptions are ones where you pay anticipating the future value that you will receive.)

Bonus: Misc Overlooked Strategies

There are two overlooked strategies that aren’t applicable to all media companies but that are viable distribution mechanisms Open Source Software & Documentation.

Open source software is a “type” of content (that this new wave of developer experience startups has discovered) that delivers utility in the purest form. The similarities between writing software and writing content are numerous and savvy developers are able to build distribution through the development of great libraries. React Router created a pipeline for their React training courses through their open source library. Next.js created a pipeline of people looking to host Isomorphic React Applications. I believe that open source software will be a key content output for developer media companies. (side note: Tailwind.css would dramatically increase their upside if they embraced being a media company. They have such a high bar for quality in the content they produce, and are focused on segment of the market that most developers willingly admit being a dificiency in their skillset).

Documentation is another form of technical content, and when done well can be the best marketing for a product, service or library. Great documentation is personalized and interactive (Airtable’s API docs are the gold standard) and create frictionless onramps to key adoption milestones for the product. It is not particularly relevant to a generalized developer media company, but they are extremely relevant to the mini internal media (developer relations organizations) cropping up inside larger tech companies.

### Leverage Distribution to Generate Revenue

I mentioned distribution enough that you may be asking yourself “so don’t you want to actually make money?” The answer is yes.

<iframe src="https://www.youtube.com/embed/iW7j_M25P8A?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

It turns out the reason why exectuives like Reed Hoffman are obsessed with distribution is that once you have distribution, sales is easy (have a good product and it will sell). There are a number of ways for developer media companies to make money.

_Courses_

Courses might be the most ideal revenue generating mechanism for developer media companies. It maps to pillar cluster content which creates a funnel directly to a course material. They key is finding the right mix between top of funnel content and course content. Making courses easy to buy is essential to this strategy. In a basic conversion funnel, the easier the checkout experience is the better you will convert. This is also a mechanism that can be finely tuned and optimized over time. Assuming the courses are good (if they are not, you are a grifter), people will have very little buyers remorse. There are also unique opportunities to sell to users who have completed courses. One of the best ways to do this is to keep them engaged in a community.

Courses also have some inherent properties that make them ideal for discounting (namely that they are digital goods and can be developed once and sold an unlimited number of times). Discounting as a strategy is lowering your margins to turn over your inventory more rapidly. Discounters aim earn the same revenues as higher end competitors by selling higher volumes at lower prices. Discounting (however unpalatable it may be) is very effective at increasing your gross volume and probably represents the bulk of sales for most course providers.

_Subscriptions_

Offering low priced subscriptions is another viable revenue stream for media companies. The key is that they are priced low enough where people don’t need to heavily consider their investment each time they get an invoice for it. This also decreases the value threshold that must be achieved by the subscription content. As I mentioned previously, Events and Community make for very good subscription content. Providing the value of belonging while giving users something to look forward to allows media companies to establish predictable stable revenue while also pursuing higher margin sales opportunities.

_Affiliate Partnerships / Ads_

For product companies, building distribution is usually secondary to building products. In order to effectively market their product, leveraging 3rd party distribution can become very appealing. Having a highly engaged audience of influencial individuals is an incredibly valuable asset. In comparison to other paid media (such as Google search), companies who enter into advertising or affiliate relationships can draft off of the positive sentiment generated by good valuable content. The key to this revenue capture strategy is to better communicate (to affiliate partners) the value that is being delivered (resulting in higher dollar transactions).

_Merchandise_

Merchandise is a smaller but significant revenue stream that can be leveraged. This stream is particularly useful when you have already established a sense of belonging. People buy apparel (or related items) because they are making a value statement. They want others to know their values.  
_Investments_

The long tail of building distribution is access to investment opportunities. Rolling funds, or even direct investment in startup companies are much more accessible when you have the value add offering your distbrution and ability to promote the investement. This has the highest margin upside (assuming a level of skill in picking deals). This is also the longest time horizon of the various revenue streams.

## Conclusion

As you can tell, I really believe in the idea of a developer media company, so much so that I am joining ui.dev. I think the market opportunity is far greater than most people realize and is probably large enough to accomodate multiple players. With that being said, I think there is a significant first mover advantage, and the first company to identify themselves as, and go all in as a developer media company will reap the bulk of the reward. I for one am excited to start on this journey. We have a long way to go but the future is bright.
