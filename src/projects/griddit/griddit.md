---
title: "Griddit"
featuredImage: "./griddit-mockup.jpg"
tags: ["JavaScript", "React", "Redux", "Reddit API"]
date: "2017-04-15"
---

Single page web application that displays top subreddit posts in a grid using Reddit API. Users have control over what subreddit they wish to display.

Ever since I worked on my Instanews Project where I make API calls to New York Times, I wanted to achieve the same effect using Reddit API. This time I chose to work with React. I called Reddit API using Redux Thunk and Redux to create actions such as request posts, receive posts & invalidate.

Because the images differ in size, I wanted my posts to display the same way Pinterest does. To achieve this, I used column styles which is something I never used before. I am very happy with the results. Working on this project with React made me realize how fast the library is changing. Just a few weeks ago, I used the React.PropTypes helper but this time it prompted me to use the prop-types library from NPM.

<a class="primary-button" href="https://jonathanfunk.github.io/griddit/" target="_blank">Project Link</a>
<a class="primary-button" href="https://github.com/jonathanfunk/griddit" target="_blank">Source Code</a>
