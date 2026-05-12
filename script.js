// FAQ TOGGLE

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;

    if(answer.style.maxHeight){
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

  });

});

// MOBILE MENU

// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");

const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {

  mobileNav.classList.toggle("active");

});

// MOBILE NAVIGATION LINKS

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    // CLOSE MENU
    mobileNav.classList.remove("active");

    // GET TARGET SECTION
    const targetId = this.getAttribute("href");

    const targetSection = document.querySelector(targetId);

    // WAIT FOR MENU TO CLOSE THEN SCROLL
    setTimeout(() => {

      targetSection.scrollIntoView({
        behavior: "smooth"
      });

    }, 300);

  });

});

// CLOSE MENU WHEN LINK CLICKED

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    mobileNav.classList.remove("active");

  });

});

// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if(contactForm){

  contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Your message has been sent successfully!");

    contactForm.reset();

  });

}