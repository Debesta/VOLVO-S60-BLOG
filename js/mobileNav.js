// Import y'all
import { yall } from "yall-js";

// Invoke!
yall();

const btn = document.querySelector('.nav__btn')
const box = document.querySelector('.nav__links')
const links = document.querySelectorAll('.nav__link')

function mobileNav(){
    box.classList.toggle('nav__active')
}

btn.addEventListener('click', mobileNav)
links.forEach(item => {
    item.addEventListener('click', mobileNav)
})