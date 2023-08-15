// responsive navbar
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon=document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.drop-down')

toggleBtn.onclick=function(){
    dropDownMenu.classList.toggle('open')
    const isopen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isopen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}

// scrool revel

ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });
ScrollReveal().reveal('.text-container,.sub-title, .service-heading, .skill-heading, .heading', {origin:'top'});
ScrollReveal().reveal('.social-icons,.button-86,.about-text, .main-box, .row, .project-container,.contact-2', {origin:'bottom'});
ScrollReveal().reveal('.wave-img, .contact-1', {origin:'left'});


var typed = new Typed('.multiple-text', {
    strings: ["Frontend Developer.", "Backend Developer."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true,
  });