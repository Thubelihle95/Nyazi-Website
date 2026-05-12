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

const menuToggle = document.getElementById("menuToggle");

const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {

  mobileNav.classList.toggle("active");

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