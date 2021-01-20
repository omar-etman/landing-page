
/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildTheNav(){
// a function that creates li s with anchors linked to each section.
     const sections = document.querySelectorAll('section');

     const fragment = document.createDocumentFragment();
     
     for (section of sections) {
         const listItem = document.createElement('li');
         const anchorTag = document. createElement('a');
         anchorTag.textContent = section.getAttribute('data-nav');
         anchorTag.href = `#${section.id}`;
         anchorTag.classList.add('menu__link');
         listItem.appendChild(anchorTag);
         fragment.appendChild(listItem);    
     } 

   document.getElementById('navbar__list').appendChild(fragment);

};

// Add class 'active' to section when near top of viewport
function addActiveClass(){
    // to loop the your-active-class class over each section according to the scroll //
    const sections = document.querySelectorAll('section');
    for (section of sections){
        window.scrollY;

    }
    
    // 5.
    // 4.state condition if scrolled upon  section (y coordinates)) active class is activated 

};

// Scroll to anchor ID using scrollTO event
function scrollToAnchorId(event){
    event.preventDefault();
    const button = event.target;
    const sectionId = button.getAttribute('href');
    if (sectionId){
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

document.addEventListener('DOMContentLoaded', buildTheNav);

// Scroll to section on link click

document.addEventListener('click', scrollToAnchorId);

// Set sections as active
document.addEventListener('scroll', addActiveClass)

