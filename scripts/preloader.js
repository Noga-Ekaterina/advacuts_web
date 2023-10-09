window.onload = function () {
   body.classList.add('loaded_hiding');
   window.setTimeout(function () {
   body.classList.add('loaded');
   body.classList.remove('loaded_hiding');
   }, 500);
 }