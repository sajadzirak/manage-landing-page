import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navMenu = document.getElementById('nav-menu')
const navLinks = document.querySelectorAll('.nav__link')


if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        navToggle.classList.remove('show-toggle')
    })
}
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        navToggle.classList.add('show-toggle')
    })
}
navLinks.forEach((element) => {
    element.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        navToggle.classList.add('show-toggle')
    })
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')
    if(window.scrollY >= 50) {
        header.style.backgroundColor = 'var(--body-color)'
        header.style.boxShadow = '0 1px 10px hsla(228, 39%, 23%, 0.238)'
    }else {
        header.style.backgroundColor = 'transparent'
        header.style.boxShadow = 'none'
    }
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    grabCursor: 'true',
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoHeight: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1150 : {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }  
})