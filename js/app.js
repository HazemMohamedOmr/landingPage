// global variables
const mySections = document.querySelectorAll('.section');

// add nav-links dynamically
(function createNav(){
    
    const list = document.getElementById('navbar__list');
    const listFragment = document.createDocumentFragment(); // container

    for(let section of mySections){
        const listItem = document.createElement('li');
        const listlink = document.createElement('a');
        listlink.textContent = section.getAttribute('data-nav');

        // adding href for navigation
        // listlink.setAttribute('href', "#" + section.getAttribute('id'));
        listlink.addEventListener('click', ()=>{
            section.scrollIntoView({behavior: "smooth"});
        })
        listlink.classList.add('menu__link'); // styling anchor tag

        listItem.appendChild(listlink);
        listFragment.appendChild(listItem);
    }
    list.appendChild(listFragment);

})();

function update(){
    const navElements = document.querySelectorAll('.menu__link'); // get all anchor nav tags
    
    // looping over sections
    for (const section of mySections) {
        if(section.getBoundingClientRect().y < 148 &&
            section.getBoundingClientRect().y > (-section.getBoundingClientRect().height + 148)){ 
            section.classList.add('your-active-class'); // adding active section class on viewport
            for (const ele of navElements) {
                if(ele.textContent == section.getAttribute('data-nav'))
                    ele.classList.add('active__nav'); // adding active anchor nav class on viewport
            }
        }else{
            section.classList.remove('your-active-class'); // removing active section class leaving viewport
            for (const ele of navElements) {
                if(ele.textContent == section.getAttribute('data-nav'))
                    ele.classList.remove('active__nav'); // removing active anchor nav class leaving viewport
            }
        }
    }
    
}

document.addEventListener('scroll', update); // listening to scroll event