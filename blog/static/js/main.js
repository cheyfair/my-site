/* Menu show */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/* Active and remove menu */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* Scroll reveal animation */
const sr = ScrollReveal ({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*Scroll Home*/
sr.reveal('.home__title', {})
sr.reveal('.home__subtitle', {})
sr.reveal('.home__description', {})
sr.reveal('.home__title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home__img', {delay: 400})
sr.reveal('.home__social-icon', {interval: 200})

/*Scroll About*/
/*Scroll Skills*/
/*Accordion Skills*/
var skillsHeader = document.getElementsByClassName('skills__header');
var i;

for (i =0; i < skillsHeader.length; i++) {
    skillsHeader[i].addEventListener('click', function() {
        this.classList.toggle('active');

        var skillsList = this.nextElementSibling;
        if (skillsList.style.display === 'grid') {
            skillsList.style.display = 'none';
        } else {
            skillsList.style.display = 'grid';
        }
    });
}

/*TABS QUALIFICATION*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*SCROLL WORK*/
/*SCROLL CONTACT*/