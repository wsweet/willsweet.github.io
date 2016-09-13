$(document).ready(function(){

	/* <<<<<<<< Adjust scrollspy scroll >>>>>>>> */

		var offset = 30;
		
		// When clicking a button in the nav...
		$('.navbar li a').click(function(event) {
	   	
	   	event.preventDefault();
	   	
	   	// ...Scroll to the relevant href...
	   	$($(this).attr('href'))[0].scrollIntoView();

	   	// ... and offset it so it's not touching the top of the screen
	   	scrollBy(0, -offset);

		}); 

	/* <<<<<<<< END Adjust scrollspy scroll >>>>>>>> */

	/* <<<<<<<< Get URL location >>>>>>>> */

		var host = window.location.host;
		var local = "file:///Users/Will/Documents/Git/wsweet.github.io"
		var currentUrl = "";

		if ( host.indexOf("file://") >= 0 ){
			currentUrl = host;
		} else {
			currentUrl = local;
		}

	/* <<<<<<<< END Get URL location >>>>>>>> */

	/* <<<<<<<< Images >>>>>>>> */

	var images = {
		location : "/images/",
		banner: "ExitBricks.jpeg",
		profile : "bridge.jpg",
		cklogo : "cklogo.png",
		beeflogo : "beeflogo.png",
		freedmanlogo : "freedmanlogo.png",
		hushlogo : "hushlogo.png",
		gomadlogo : "gomadlogo.png",
		cim : "cim.png",
		idm : "idm.png",
		google : "google.png",
		dmu : "dmu.png",
		billericay : "billericay.png"
	}

	var icons = {
		location : "/icons/",
		adwords : "Adwords.svg",
		analytics : "analytics.svg",
		cms : "CMS.svg",
		creative : "creative.svg",
		crm : "CRM.svg",
		email : "email.svg",
		project : "projectmanagement.svg",
		social : "social.svg",
		dev : "webdev.svg",
		twitter: "twitter.png",
		linkedin: "linkedin.png",
		telegram: "telegram.png"

	}

	// Banner
	$('.jumbotron').css('background-image', 'url(' + currentUrl + images.location + images.banner + ')');

	// Header
	$('#header-image').attr('src', currentUrl + images.location + images.profile);

	// Logos
	$('#cklogo').attr('src', currentUrl + images.location + images.cklogo);
	$('#beeflogo').attr('src', currentUrl + images.location + images.beeflogo);
	$('#freedmanlogo').attr('src', currentUrl + images.location + images.freedmanlogo);
	$('#hushlogo').attr('src', currentUrl + images.location + images.hushlogo);
	$('#gomadlogo').attr('src', currentUrl + images.location + images.gomadlogo);

	// Icons
	$('#adwords').attr('src', currentUrl + icons.location + icons.adwords);
	$('#analytics').attr('src', currentUrl + icons.location + icons.analytics);
	$('#dev').attr('src', currentUrl + icons.location + icons.dev);
	$('#cms').attr('src', currentUrl + icons.location + icons.cms);
	$('#crm').attr('src', currentUrl + icons.location + icons.crm);
	$('#email').attr('src', currentUrl + icons.location + icons.email);
	$('#project').attr('src', currentUrl + icons.location + icons.project);
	$('#social').attr('src', currentUrl + icons.location + icons.social);
	$('#creative').attr('src', currentUrl + icons.location + icons.creative);
	$('#linkedin').attr('src', currentUrl + icons.location + icons.linkedin);
	$('#twitter').attr('src', currentUrl + icons.location + icons.twitter);
	$('#telegram').attr('src', currentUrl + icons.location + icons.telegram);

	// Certifications
	$('.cim-logo').attr('src', currentUrl + images.location + images.cim);
	$('.idm-logo').attr('src', currentUrl + images.location + images.idm);
	$('.google-logo').attr('src', currentUrl + images.location + images.google);

	// Qualifications
	$('.dmu-logo').attr('src', currentUrl + images.location + images.dmu);
	$('.billericay-logo').attr('src', currentUrl + images.location + images.billericay);

	/* <<<<<<<< END images >>>>>>>> */


}); // Document.ready
