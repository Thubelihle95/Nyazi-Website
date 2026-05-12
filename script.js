// FAQ TOGGLE

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;

    // CLOSE OTHER FAQ ITEMS

    document.querySelectorAll(".faq-answer").forEach(item => {

      if(item !== answer){
        item.style.maxHeight = null;
      }

    });

    // TOGGLE CURRENT FAQ

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

// CLOSE MOBILE MENU AFTER CLICKING LINKS

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    mobileNav.classList.remove("active");

  });

});

// CLOSE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", function(e){

  const isInsideNav = mobileNav.contains(e.target);

  const isMenuButton = menuToggle.contains(e.target);

  if(!isInsideNav && !isMenuButton){

    mobileNav.classList.remove("active");

  }

});

// CONTACT FORM ALERT

const contactForm = document.getElementById("contactForm");

if(contactForm){

  contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Your message has been sent successfully!");

    contactForm.reset();

  });

}

// ACTIVE NAVIGATION HIGHLIGHT

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.clientHeight;

    if(pageYOffset >= sectionTop){

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active-link");

    if(link.getAttribute("href") === `#${current}`){

      link.classList.add("active-link");

    }

  });

});