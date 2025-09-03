/*==================== LOADER ====================*/
// إخفاء الـ loader 
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader')
    if(loader) {
        loader.style.display = 'none'
    }
})


window.addEventListener('load', () => {
    const loader = document.querySelector('.loader')
    if(loader) {
        setTimeout(() => {
            loader.classList.add('loader-hidden')
            setTimeout(() => {
                loader.style.display = 'none'
            }, 500)
        }, 500)
    }
})

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(navLink) {
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                navLink.classList.add('active-link')
            }else{
                navLink.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CUSTOM CURSOR ====================*/
const cursor = document.getElementById('cursor')
if(cursor) {
    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let speed = 0.5

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
    })

    function animateCursor() {
        let distX = mouseX - cursorX
        let distY = mouseY - cursorY
        
        cursorX = cursorX + (distX * speed)
        cursorY = cursorY + (distY * speed)
        
        cursor.style.left = cursorX + 'px'
        cursor.style.top = cursorY + 'px'
        
        requestAnimationFrame(animateCursor)
    }
    animateCursor()

    const cursorHover = document.querySelectorAll('a, button')
    cursorHover.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active')
        })
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active')
        })
    })
}

/*==================== SCROLL BAR PROGRESS ====================*/
const scrollBar = document.getElementById('scroll-bar')
if(scrollBar) {
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (window.scrollY / windowHeight) * 100
        scrollBar.style.width = scrolled + '%'
    })
}

/*==================== HOME BLOB ANIMATION ====================*/
document.addEventListener('DOMContentLoaded', () => {
    if(typeof anime !== 'undefined') {
        const blobPath = document.querySelector('.home__blob path')
        if(blobPath) {
            anime({
                targets: blobPath,
                d: [
                    {value: 'M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z'},
                    {value: 'M263 86.3782C270.426 82.091 279.574 82.091 287 86.3782L469.157 194.822C476.583 199.109 481.157 207.032 481.157 215.606V430.894C481.157 439.468 476.583 447.391 469.157 451.678L287 560.322C279.574 564.609 270.426 564.609 263 560.322L80.843 451.678C73.4174 447.391 68.843 439.468 68.843 430.894V215.606C68.843 207.032 73.4174 199.109 80.843 194.822L263 86.3782Z'}
                ],
                duration: 3500,
                easing: 'easeInOutQuad',
                loop: true,
                direction: 'alternate'
            })
        }
    }
})

/*==================== SWIPER TESTIMONIALS ====================*/
document.addEventListener('DOMContentLoaded', () => {
    if(typeof Swiper !== 'undefined') {
        const testimonialContainer = document.querySelector('.testimonials__container')
        if(testimonialContainer) {
            new Swiper('.testimonials__container', {
                spaceBetween: 24,
                loop: true,
                grabCursor: true,
                
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                
                breakpoints: {
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    }
                }
            })
        }
    }
})

/*==================== CONTACT FORM ====================*/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        // Show success message
        contactMessage.textContent = 'Message sent successfully ✅'
        contactMessage.style.color = '#4CAF50'
        
        // Clear form
        contactForm.reset()
        
        // Remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
    })
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
document.addEventListener('DOMContentLoaded', () => {
    if(typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 300,
            reset: false
        })

        // Reveal elements
        sr.reveal(`.home__data`, {delay: 500})
        sr.reveal(`.home__social`, {delay: 600, origin: 'bottom'})
        sr.reveal(`.home__image`, {delay: 800, origin: 'bottom'})
        sr.reveal(`.about__data`, {origin: 'left'})
        sr.reveal(`.about__image`, {origin: 'right'})
        sr.reveal(`.projects__card`, {interval: 100})
        sr.reveal(`.services__card`, {interval: 100})
        sr.reveal(`.contact__form`, {origin: 'left'})
        sr.reveal(`.footer__container`, {delay: 400})
    }
})

/*==================== SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    if(scrollUp) {
        if(this.scrollY >= 350) scrollUp.classList.add('show-scroll')
        else scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)