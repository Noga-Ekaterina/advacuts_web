const menu= document.querySelector("#header_block_r");
document.querySelector("#open_menu").onclick= function(){
   menu.classList.add("open")
}

const closeMenu= ()=>{
   menu.classList.remove("open")
}
document.querySelector('#close').onclick= closeMenu ;
const menuContent= menu.querySelectorAll('a');
menuContent.forEach((a)=>{
   a.onclick= closeMenu
})