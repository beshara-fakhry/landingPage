//the global variables
const parts= document.querySelectorAll('section');
const navBar= document.querySelector('ul');
//create the menu
for(let i=0;i<parts.length;i++){
const menuText=parts[i].getAttribute('data-nav');
const menuItem=document.createElement('li');
const link=document.createElement('a');   
 link.setAttribute("href",`#${parts[i].id}`);
 link.textContent=menuText;
 menuItem.appendChild(link);
 navBar.appendChild(menuItem); 
}
//scroll to the page part when click its item at the menu 
for (let i=0;i<parts.length;i++){
 const menuItem=document.querySelectorAll('li');
 menuItem[i].addEventListener('click',function (){
 parts[i].scrollIntoView({behavior:"smooth"});
 menuItem[i].classList.add("active");
  });
}
//distinguish which part is viewed 
const menu=document.querySelectorAll('li');
for (let i=0;i<parts.length;i++){
const border=parts[i].getBoundingClientRect();
 parts[i].addEventListener('scroll',function (){
  if(border.top>=0&&border.bottom<=(window.innerHeight||document.documentElement.clientHeight))
  {
   menu[i].classList.add("active");}
  
else {menu[i].classList.remove("active");}});
}
//styling the active states
const activeState =document.querySelector('.active');
activeState.style.backgroundColor='#00ff00';
