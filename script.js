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

// BOOKING FORM

const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Your consultation request has been submitted successfully!");

  appointmentForm.reset();

});

// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Your message has been sent successfully!");

  contactForm.reset();

});