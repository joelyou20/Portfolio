# Joel Cribby's Portfolio

The reason for this project is to learn, and to utilize skills that I had not had the opportunity to in the workplace. With this portfolio, I am able to simultaneously display my skill in web development, while also providing a readable, and aesthetically pleasing outlet for my portfolio and other qualifications. Two birds, one stone :) 

This project is written using HTML, SCSS, and JavaScript. The details of the project architecture and the reason behind my choice for each programming language will be explained in the following sections.

## Architecture

This project operates under a very open, monolithic architecture due to its simplistic design.

| Directory         | Contents      |
| :---------------- | :------------ |
| Portfolio/css     | Compiled SCSS |
| Portfolio/fonts   | Glyph sheets  |
| Portfolio/images  | PNG files     |
| Portfolio/scripts | JS files      |
| Portfolio/scss    | Style sheets  |

The purpose of this layout is to make files accessible and organized within a directory that easily explains its contents. Originally I had most directories under a "/shared" directory, but I decided that the extra level of nesting was unnecessary.

## HTML

The index.html file operates as the main/only page for the website. This file is loaded when the user navigates to the URL and displays the relevant information.

I explored other options for creating a more modular design for the website which would increase the readability of the code and would rely less upon a monolithic architecture, but the added complexity did not seem to offer much advantage.

PHP was considered, which would have allowed for a much better componentization of the various aspects of the code. This could have provided the ability to move each section of the website into it's own component and then simply import that component into the website where it is required. The advantage of this would be to limit conflicts if multiple contributors were ever to work on this project and it would have isolated components.

## SCSS

SCSS was an easy decision due to its increased capabilities over CSS. The main advantage that I wanted to take advantage of was to be able to set variables and then import those variables via an external SCSS file into the main style.css file.

I am always looking for ways to isolate code where possible and to modularize where I can. SCSS provided a much simpler and elegant solution to style sheets than CSS. I had to learn how to compile SCSS and before starting this project, I never even knew that SCSS had to be precompiled at all. But with a little research I discovered how SCSS was a preprocessor for traditional CSS and could easily integrate it into my project.

## JavaScript

JavaScript is something that I have learned many times, but have never been given the opportunity to learn, and therefore never had the chance to polish my skills. I have used TypeScript extensively, but the similarities between the two were not as close as I had expected.

Not relying upon Types was an adjustment, as that is what I am accustomed to, but with a little practice I began to see that JavaScript was as easy to use as I had hoped. The strength of JavaScript, at least in the instance of what I was using it for, was it's natural ability to interact with the DOM. I was able to extend the capabilities of HTML and SCSS to better implement the needed logic that I used to operate the menu, scrolling,  image caching, etc...