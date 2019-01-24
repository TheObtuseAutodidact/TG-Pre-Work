# TG-Pre-Work

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

The request response cycle - simplified:
1) The Browser sends a request to the host or server and waits for a response.
2) The server receives the request and parses headers for methods/actions
3) For static requests, server locates static assests and sends. For dynamic requests, server responds to method/action and sends relevant response. Followed by (if successful) a 200 status code.
4) Browser received response and executes/renders relevant content.


## From start to finish how does that data reach you to be rendered in the browser?

The HTTP protocol will dictate amongst other things, how requested data will be broken down in to byte-sized packets, those packets labeled for reassembly on the client side and then streamed to the requesting client. The browser will then be responsible for reconstructing the data into a usable format to display to the user.

## What code is rendered in the browser?

The HTML document will be parsed into the Document Object Model. Meanwhile, accompanying CSS document(s) will be parsed into the CSSOM or CSS Object Model. These two will then be combined into the Render Tree which will then be layed-out or painted on the screen.

## What is the server-side code’s main function?

Server-side code will generally be used to provide dynamic web pages while interacting with databases or data stores.

## What is the client-side code’s main function?

Client-side code will be chiefly geared toward presentation of data. It may facilitate user experience of and interaction with data presented from the server-side.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?
I not very clear on the question here. To give reasonable picture of myself as an applicant, I'll wrestle with a few of these questions that I either don't know the answer to and/or I'm not clear on the question. Hopefully, this will suffice as writing sample as well as offer a snapshot of my baseline technical understanding

The first time I ever visit a site, all client-side assets must be delivered for the site and parsed for rendering.
Some of those assets will be cached in the browsers memory.
On subsequent visits, those cached assets will significantly decrease a pages rendering time.

I'm not clear on whether, on those subsequent visits, the browser is able to request the page minus the assets- perhaps allowing a check to be performed to ensure the assets are still representative of the site (hash value comparison), or if the page with its assets are delivered, such a test is run client-side, and then time saved if newly-delivered assets don't need to be parsed.


## How many instances of the server-side code are available at any given time?
Another I'm uncertain how to answer.

In a simple application the instance or version of server-side code is likely to be one. The "Production" code may update but the user shouldn't be subject to different versions being actively available.

More complex or larger-scale applications being served by multiple machines may role out changes to server-side code such that users in one region are receiving an updated version of a site that users in another region are not yet seeing.

The number of instances of a web application running in an environment like AWS is variable. Again a simple operation may have one instance of an application running on one virtual machine while a larger company may be hosting their application across thousands of virtual machines in data centers across the globe.  



## What is runtime?

Runtime is simply the period of time when a program is running. Runtime begins as the program begins to execute and ends when the program exits.

## How many instances of the databases connected to the server application are created?
The third question that I'm not sure how to answer.

It is important to have a single instance of your database (or a system that acts like a single instance). If one had a single web application served from a dozen different server and each pointed to the same central system of record or database, then, when any of those dozen servers creates, reads, updates or destroys a record for that central DB, every other instance of the application knows about the record change. Each instance of the web application feels like the same place.
