$(document).ready(function(){

	$('.jumbotron').css('background-image', 'url(https://s7.postimg.org/51z3bipbv/michal-grosicki-235026.jpg)');

	/* <<<<<<<< Adjust scrollspy scroll >>>>>>>> */

		var offset = 25;
		
		// When clicking a button in the nav...
		$('.navbar li a').click(function(event) {
	   	
	   	event.preventDefault();
	   	
	   	// ...Scroll to the relevant href...
	   	$( $(this).attr('href') )[0].scrollIntoView();

	   	// ... and offset it so it's not touching the top of the screen
	   	scrollBy( 0, - offset );

		}); 

	/* <<<<<<<< END Adjust scrollspy scroll >>>>>>>> */

	/* <<<<<<<< Fade elements in on scroll >>>>>>>> */

    // Every time the window is scrolled...
    $(window).scroll( function(){
    
        //Check the location of each hideme element
        $('.hideme').each( function(i){
            
            var bottomOfObject = $(this).offset().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();
            
            //When the bottom of the element is visible
            if( bottomOfWindow > bottomOfObject ){
                
                //Fade it in
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });

    /* <<<<<<<< END Fade elements in on scroll >>>>>>>> */

}); // Document.ready



