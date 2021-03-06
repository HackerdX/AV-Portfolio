const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle");
    navClose = document.getElementById("nav-close");

/* =========================== TOGGLING BETWEEN NAV MENU TRAY IN MOBILE VIEW ================================ */
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu");
    })
}

if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu");
    })
}


/* ==================================== REMOVE MENU OF MOBILE VIEW ================================= */
const navLink = document.querySelectorAll(".nav__link");
function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show menu class
    navMenu.classList.remove("show-menu"); 
}

navLink.forEach(n => n.addEventListener("click", linkAction));


/* ==================================== ACCORDION(SLIDING through arrow click) SKILLS ================================== */
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className;
    for( i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach(e => {
    e.addEventListener("click", toggleSkills);
})


/* ==================================== QUALIFICATION TABS ================================== */
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach( tabContent => {
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active');
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    })
})