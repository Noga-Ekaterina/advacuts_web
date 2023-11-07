const menu= document.querySelector("#header_block_r");
document.querySelector("#open_menu").onclick= function(){
   menu.classList.add("open");
   menu.style.boxShadow=""
}

const closeMenu= ()=>{
   menu.classList.remove("open")
   setTimeout('menu.style.boxShadow="none"', 2000)
}
document.querySelector('#close').onclick= closeMenu ;
const menuContent= menu.querySelectorAll('a');
menuContent.forEach((a)=>{
   a.onclick= closeMenu
})