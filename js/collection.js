

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