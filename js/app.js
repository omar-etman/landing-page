let sections;

function buildTheNav(){
// a function that creates li s with anchors linked to each section.
     sections = document.querySelectorAll('section');

     const fragment = document.createDocumentFragment();
     
     for (section of sections) {
         const listItem = document.createElement('li');
         const anchorTag = document. createElement('a');
         anchorTag.textContent = section.getAttribute('data-nav');
         anchorTag.href = `#${section.id}`;
         anchorTag.classList.add('menu__link');
         anchorTag.id = `${section.id}link`
         listItem.appendChild(anchorTag);
         fragment.appendChild(listItem);    
     } 

   document.getElementById('navbar__list').appendChild(fragment);

};

function addActiveClass(){
    // to loop the your-active-class class over each section according to the scroll //
    const sections = document.querySelectorAll('section');
    const y = window.scrollY;
    for (section of sections){
        const offsetTop = section.offsetTop
        const dimension = section.getBoundingClientRect();
        const navHeight = document.querySelector('header').getBoundingClientRect().height;
        const offsetBottom = offsetTop + dimension.height;
        if(window.scrollY + navHeight > offsetTop && window.scrollY + navHeight <  offsetBottom){
            const activeClass = document.querySelector('.menu__link--active')
            if(activeClass){
                activeClass.classList.remove('menu__link--active');
            }
            section.classList.add('your-active-class');
            const sectionHref = `#${section.id}`;
            document.querySelector(`#${section.id}link`).classList.add('menu__link--active');
        }  

    }

};

function scrollToAnchorId(event){
    // Smooth Scroll to anchor function
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

//build menu

document.addEventListener('DOMContentLoaded', buildTheNav);

// Scroll to section on link click

document.addEventListener('click', scrollToAnchorId);

// Set sections as active
document.addEventListener('scroll', addActiveClass)