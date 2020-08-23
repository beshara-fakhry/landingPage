/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
const sections= document.querySelectorAll('section');
const navList= document.querySelector('ul');
for(let i=0;i<sections.length;i++){//Bulding the navigation bar
const hrefValue=`#${sections[i].id}`;
const listText=sections[i].getAttribute('data-nav');
const listItem=document.createElement('li');//create the list element
const anch=document.createElement('a');  //Create the anchor element 
 anch.setAttribute("href",`${hrefValue}`);
 anch.textContent=listText;
 listItem.appendChild(anch);
 navList.appendChild(listItem); 
}
//Add a highlight to the section at the navigation bar when at ar viewport
const menu=document.querySelectorAll('li');
for (let i=0;i<sections.length;i++){
const rect=sections[i].getBoundingClientRect();
  if(rect.top>=0&&rect.bottom<=window.screen.availHeight){menu[i].style.cssText='background-color:yellow';}
}
 //Create go to top button 
  const btn=document.getElementById('topBtn');
  if(document. documentElement.scrollTop>20){
  btn.style.display='block';
  btn.addEventListener('click',function(){document.documentElement.scrollTop=0;});
  }
  else{btn.style.display='none';}

