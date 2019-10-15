 (function() {

   $('.page-scroll').on('click',function(){

     var href = $(this).attr('href');
     var tujuan = $(href);
     console.log('ok')

     $('html, body').animate({
       scrollTop: tujuan.offset().top - 135
     },1000, 'swing');


  //   e.preventDefault();

   });

 })();
(function() {

  $(window).scroll(function() {
    $('html,nav').toggleClass('scrolled', $(this).scrollTop() > 570);
  });
  $(window).scroll(function() {
    $('.navbar-nav').toggleClass('scrolll', $(this).scrollTop() > 570);
  });


})();

(function () {

const tabs = document.querySelectorAll('.nav-item::after');

tabs.forEach(clickedTAb => {
  clickedTab.addEventListener('click', () => {

    tabs.forEach(tab => {
      tab.classList.remove('active')
    });

    clickedTab.classList.add('active');
   const clickedTabBGColor = getComputedStyle(clickedTab).getPropertyValue('color');
   console.log(clickedTabBGColor);
   document.body.style.background = clickedTabBGColor;
 });

});

})();
