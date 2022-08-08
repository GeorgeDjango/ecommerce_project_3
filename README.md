# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![Desktop](./static/images/Screenshot%202022-08-08%20at%2017.06.13.png)

![Mobile 1](./static/images/Screenshot%202022-08-08%20at%2017.06.36.png)

![Mobile 2](./static/images/Screenshot%202022-08-08%20at%2017.06.45.png)

### Links

- Solution URL: https://github.com/GeorgeDjango/ecommerce_project_3
- Live Site URL: https://georgedjango.github.io/ecommerce_project_3/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Bootstraps


### What I learned

I found that this project helped reinforce my comfort woth HTML and CSS, I didn't feel that I hit any major hiccups to overcome here, but I enjoyed playing around follwing a brief and trying some new elements I hadn't tried out before.

For example, the nav section that was different in both desktop and mobile. I chose to also include some animation with a couple of the elements, I felt really pleased with how it came together.

```html
<nav>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <div>
                <img class="logo" src="./static/images/logo.svg">
            </div>
            <ul class="nav-links">
                <li>
                    <a href="#">Collections</a>
                </li>
                <li>
                    <a href="#">Men</a>
                </li>
                <li>
                    <a href="#">Women</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
            
            <div class="basket-wrapper">
                <img class="basket" id="showCurrentBasket" src="./static/images/icon-cart.svg">
                <div class="basket-notification hidden" id="basketNotification"></div>
            </div>
            <div>
                <img class="avatar" src="./static/images/image-avatar.png">
            </div>
        </nav>
```
```css
nav {
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    background-color: white;
    font-weight: 700;
    border-bottom: solid 2px hsl(223, 64%, 98%);
}

.nav-links {
    display: flex;
    justify-content:space-around;
    width: 50%;

}

.nav-links li {
    margin-top: 1.5rem;
    list-style: none  ;
    align-items: center;
}

.nav-links a {
    text-decoration: none;
    letter-spacing: 2px;
    color: hsl(219, 9%, 45%);
    font-weight: 400;
}
.nav-links a:hover {
    border-bottom:solid 2px var(--theme-colour);
}

.basket {
    cursor: pointer;
}
.basket-wrapper {
    position: relative;
}
.hidden{
    display: none;
}
.basket-notification {
    position: absolute;
    top: -10px;
    right: -5px;
    background-color: var(--theme-colour);
    border-radius: 25%;
    color: white;
    font-size: 12px;
    padding: 2px;
}

.avatar  {
    height: 35px;
    width: 35px;
    cursor: pointer;
    float: right;
}
.avatar:hover {
    height: 37px;
    width: 37px;
    background-color: var(--theme-colour);
    border: solid 2px var(--theme-colour);
    border-radius: 20px;
}

.burger  {
    display: none;
}

.burger div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: black;
    transition: all 0.3s ease;
}

.m-s  {
    color: lightgrey;
}



.nav-active {
    transform: translateX(0%) !important;

}

@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(10px);
    }
}

.toggle .line1 {
    transform: rotate(-45deg) translate(-5px,6px);
}
.toggle .line2 {
    opacity: 0;
}
.toggle .line3 {
    transform: rotate(45deg) translate(-5px,-6px);
}
@media  screen and (max-width: 1024px) {
    .nav-links {
        width: 60%;
        color: black;
        font-weight: 700;
    }
    }
@media  screen and (max-width: 768px) {
    .nav {
        border-bottom:0 0;
    }
    .nav-links {
        position:fixed;
        left: 0px;
        height: calc(100vh - 63px);
        bottom: 0px;
        padding: 4.5vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        width: 60vw;
        transform: translateX(-170%);
        transition: transform 0.5s ease-in;
        z-index: 10;
        margin-bottom: 0;
        padding-bottom: 60vh;
        
    }
    .nav-links li {
        opacity: 0;
    }
    .nav-links a {
        font-size: 20px;
        color: black;
        font-weight: 700;
    }
    .burger {
        position: relative;
        display: block;
        cursor: pointer;
    }
}
```
```js
const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav

burger.addEventListener('click',()=>{
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animation Links
    navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
            }
        });       
        //Burger Animation
        burger.classList.toggle('toggle');
    });
   
}

navSlide();
}
```



### Continued development

There were a lot of elements of this project which made me realise there plenty of development down the line for me, I feel fairly comfortable with HTML and CSS, whereas I think I could do with spending mroe time using JavaScript to help me further expand the content on my websites and projects.


### Useful resources

- [W3Schools](https://www.w3schools.com/) - I found that W3Schools realy helped me with approaching certain elements i wasn't used to.

### Author

Me, George Django Parker [LinkedIn] (https://www.linkedin.com/in/george-parker-41766b175/)

## Acknowledgments

I'd like to thank my mentor Alex Ford for helping me problem solve on some of my HTML, CSS and JavaScript when I was getting frustrated when I'd hit a problem I couldn't surpass.