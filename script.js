$(document).ready(function(){
  var offset = 35;
  /* This code offsets the scroll when you click on a menu item. The offset for scrollspy is just for 'spying' where you are on the page, not setting where you scroll to */
  $('.navbar li a').click(function(event) {
      event.preventDefault();
      $($(this).attr('href'))[0].scrollIntoView();
      scrollBy(0, -offset);
  });
 });
