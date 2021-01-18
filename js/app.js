
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

};

// Scroll to anchor ID using scrollTO event
function scrollToAnchorId(){

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

