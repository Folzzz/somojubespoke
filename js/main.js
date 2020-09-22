

// intersection observer for the navbar
// const header = document.querySelector('.header');
// const navBar = document.querySelector('.bar');

// event listener for when document loads on page
// document.addEventListener('DOMContentLoaded', () => {
//     const observer = new IntersectionObserver(entries => {
//         navBar.classList.toggle('bar-bg', entries[0].intersectionRatio < 0.9);
//     }, {
//         threshold: 0.9 //as soon as we get 90% visibility of the header this function is going to run
//     });

//     observer.observe(header);
// });

// SLIDER SECTION FUNCTIONALITY

const slides = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('#slide-prev');
const btnNext = document.querySelector('#slide-next');
const autoScroll = true;
const intervalTiming = 5000;
let slideInterval;

// function for the next slide button
const nextSlide = () => {
    // grab the div with current class
    const currentSlide = document.querySelector('.current');
    // remove the class current
    currentSlide.classList.remove("current");
    // check if their is a sibling div with class of slide
    if(currentSlide.nextElementSibling) {
        //if true we add current class to sibling
        currentSlide.nextElementSibling.classList.add("current");
    } else {
        // if we are on the last slide div, we want to add current to the first slide div
        slides[0].classList.add("current");
    }
    // remove the current class after, with the timeout option
    setTimeout( () => {currentSlide.classList.remove("current")}, 2500);
}

// function for the prev slide button
const prevSlide = () => {
    // grab the div with current class
    const currentSlide = document.querySelector('.current');
    // remove the class current
    currentSlide.classList.remove("current");
    // check if their is a sibling div with class of slide
    if(currentSlide.previousElementSibling) {
        //if true we add current class to sibling
        currentSlide.previousElementSibling.classList.add("current");
    } else {
        // if we are on the last slide div, we want to add current to the first slide div
        slides[slides.length - 1].classList.add("current");
    }
    // remove the current class after, with the timeout option
    setTimeout( () => {currentSlide.classList.remove("current")}, 2500);
}

// button events
btnNext.addEventListener( 'click', (e) => {
    nextSlide();
    // to avoid abrupt switch when autoScroll is true we clear the interval using clearInterval
    if (autoScroll) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTiming);
    }
});
btnPrev.addEventListener( 'click', (e) => {
    prevSlide();
    if (autoScroll) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTiming);
    }
});

// for auto slide
if (autoScroll) {
    // run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTiming);
}

// end of slider section

// PRODUCTS DISPLAY FILTER SECTION
const btnShowAll = document.querySelector('#showAll');
const btnSummer = document.querySelector('#summer');
const btnWinter = document.querySelector('#winter');
const btnCultural = document.querySelector('#cultural');
const allGalleryItems = document.querySelectorAll('.collection-gallery-item');

//show filtered section function
const addShowClass = (elementSelect, name) => {
    let arrayOne = elementSelect.className.split(" ");
    let arrayTwo = name.split(" ");
    
    for (let i = 0; i < arrayTwo.length; i++) {
        if (arrayOne.indexOf(arrayTwo[i]) == -1) {
            elementSelect.className += " " + arrayTwo[i];
        }        
    }
};

//hide unselected section function
const removeShowClass = (elementSelect, name) => {
    let arrayOne = elementSelect.className.split(" ");
    let arrayTwo = name.split(" ");
    
    for (let i = 0; i < arrayTwo.length; i++) {
        while (arrayOne.indexOf(arrayTwo[i]) > -1) {
            arrayOne.splice(arrayOne.indexOf(arrayTwo[i]), 1);
        }        
    }
    elementSelect.className = arrayOne.join(" ");
}

// filter function
const filterSelection = (section) => {
    if (section == 'all') section = "";
    //add the "show" class to filtered items, and remove it from unselected items
    // for (let i=0; i < allGalleryItems.length; i++) {
    //     removeShowClass(allGalleryItems[i], "show");
    //     if (allGalleryItems[i].className.indexOf(section) > -1) {
    //         addShowClass(item, "show")
    //     }
    // }
    allGalleryItems.forEach(item => {
        removeShowClass(item, "collection-show");
        if (item.className.indexOf(section) > -1) {
            addShowClass(item, "collection-show")
        }
    })
    console.log("well done asshole");
};
filterSelection('all');

// END OF PRODUCT DISPLAY FILTER SECTION

// TESTIMONIAL SCROLL FUNCTION
const testimonialCounters = document.querySelectorAll('.testimonial-counter');
const testimonials = document.querySelectorAll('.testimonials');

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

// END OF TESTIMONIAL SHOW SECTION


// FORM VALIDATION SECTION
const contactForm = document.querySelector('.contact-form');
const formEmail = document.querySelector('#email').value;
const errMessage = document.querySelector('#errMessage')

let txt;


const validation = () => {
    errMessage.style.padding = "10px";

    if(formEmail.indexOf("@") == -1 && formEmail.length > 6) {
        txt = "Please Enter A Valid Email";
        errMessage.innerHTML = txt;
        return false;
    }

    return true;
}

contactForm.addEventListener('submit', validation);

// END OF FORM VALIDATION FUNCTION