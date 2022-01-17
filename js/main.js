/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW

toggleMenu.addEventListener('click', () => navMenu.classList.toggle('show'))


// HIDDEN
closeMenu.addEventListener('click', () => navMenu.classList.remove('show'))


/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*=== SCROLL TO TOP BUTTON ===*/

let scrollButton = document.querySelector('.scroll-top');
let screenHeigth = window.screen.height - 150;


const detectarScroll = () => {
    const scrollY = window.pageYOffset;

    if (scrollY > screenHeigth) {
        scrollButton.classList.add('show-scroll');
    } else {
        scrollButton.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', detectarScroll);