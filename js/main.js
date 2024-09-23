document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector("#desktop-video");
    const mobileVideo = document.querySelector("#mobile-video");
    
    if (window.innerWidth <= 768) {
        mobileVideo.load();
    } else {
        video.load();
    }
});

//coundown

function countdown() {
    const countDate = new Date("October 14, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);
  
    // Update numbers
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  
    // Calculate percentage for stroke-dashoffset
    const daysPercent = (days / 365) * 283;
    const hoursPercent = (hours / 24) * 283;
    const minutesPercent = (minutes / 60) * 283;
    const secondsPercent = (seconds / 60) * 283;
  
    // Set stroke-dashoffset for each circle
    document.getElementById("days-circle").style.strokeDashoffset = 283 - daysPercent;
    document.getElementById("hours-circle").style.strokeDashoffset = 283 - hoursPercent;
    document.getElementById("minutes-circle").style.strokeDashoffset = 283 - minutesPercent;
    document.getElementById("seconds-circle").style.strokeDashoffset = 283 - secondsPercent;
  }
  
  setInterval(countdown, 1000);
  

  //popup

// Select all elements with the class 'openPopup' and add event listeners to each
document.querySelectorAll('.openPopup').forEach(function(element) {
    element.addEventListener('click', function() {
        document.getElementById('popupForm').style.display = 'flex';
    });
});

document.querySelector('.popup-content .close-button').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popupForm')) {
        document.getElementById('popupForm').style.display = 'none';
    }
});



//slider

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: true, // Enables continuous loop
      margin: 0, // Space between items
      autoplay: true, // Automatic slide transition
      autoplayTimeout: 3000, // Slide every 3 seconds
      responsive: {
        0: {
          items: 1.1 // Shows 1 item on small screens
        },
        600: {
          items: 2 // Shows 2 items on medium screens
        },
        1000: {
          items: 3.5, // Shows 3 full items and part of the 4th on larger screens
          stagePadding: 0, // No left-side padding
        }
      }
    });
  });



//faq

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
       currentlyActiveAccordionItemHeader.classList.toggle("active");
       currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
     }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

// Open the first accordion item by default
document.addEventListener("DOMContentLoaded", () => {
  const firstAccordionItemHeader = accordionItemHeaders[0];
  const firstAccordionItemBody = firstAccordionItemHeader.nextElementSibling;

  firstAccordionItemHeader.classList.add("active");
  firstAccordionItemBody.style.maxHeight = firstAccordionItemBody.scrollHeight + "px";
});



  
  
  
  