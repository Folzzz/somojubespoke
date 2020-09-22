

// DESCRIPTION IMAGE SCROLL FUNCTION
const testimonialCounters = document.querySelectorAll('.testimonial-counter');
const testimonials = document.querySelectorAll('.details-products');

let testimonialIndex = 0;
let testimonialCounterIndex = 0;

const showTestimonials = () => {
    // to show/change testimonials
    testimonials.forEach(testimonial => {
        testimonial.style.display = "none";
    });
    testimonialIndex++;
    if (testimonialIndex > testimonials.length) {
        testimonialIndex = 1;
    }

    // to change counter
    testimonialCounters.forEach(counter => {
        counter.classList.remove("active");
    });
    testimonialCounterIndex++;
    if (testimonialCounterIndex > testimonialCounters.length) {
        testimonialCounterIndex = 1;
    }

    testimonials[testimonialIndex - 1].style.display = "block";
    testimonialCounters[testimonialCounterIndex - 1].className +=' active';

    setTimeout(showTestimonials, 4000);
};

showTestimonials();

// END OF DESCRIPTION IMAGE SHOW SECTION