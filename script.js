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

	// var images = {
	// 	location : "/images/",
	// 	banner: "ExitBricks.jpeg",
	// 	profile : "bridge.jpg",
	// 	cklogo : "cklogo.png",
	// 	beeflogo : "beeflogo.png",
	// 	freedmanlogo : "freedmanlogo.png",
	// 	hushlogo : "hushlogo.png",
	// 	gomadlogo : "gomadlogo.png",
	// 	cim : "cim.png",
	// 	idm : "idm.png",
	// 	google : "google.png",
	// 	dmu : "dmu.png",
	// 	billericay : "billericay.png"
	// }

	// var icons = {
	// 	location : "/icons/",
	// 	adwords : "Adwords.svg",
	// 	analytics : "analytics.svg",
	// 	cms : "CMS.svg",
	// 	creative : "creative.svg",
	// 	crm : "CRM.svg",
	// 	email : "email.svg",
	// 	project : "projectmanagement.svg",
	// 	social : "social.svg",
	// 	dev : "webdev.svg",
	// 	twitter: "twitter.png",
	// 	linkedin: "linkedin.png",
	// 	telegram: "telegram.png"

	// }

	var images = {

		beef: "https://s17.postimg.org/72k7e0jgf/beeflogo.png",
		billericay: "https://s17.postimg.org/mconyy4cf/billericay.png",
		profile: "https://s17.postimg.org/qabxocr5r/bridge.jpg",
		cim: "https://s17.postimg.org/z6mpsahrz/cim.png",
		ck: "https://s17.postimg.org/kopikaqgv/cklogo.png",
		dmu: "https://s17.postimg.org/66sbcaz5r/dmu.png",

		banner: "https://s17.postimg.org/h7nghbren/Exit_Bricks.jpg",
		freedman: "https://s17.postimg.org/k4ahhlx8f/freedmanlogo.png",
		gomad: "https://s17.postimg.org/cpl5p8bcv/gomadlogo.png",
		google: "https://s17.postimg.org/c1cb6acn3/google.png",
		hush: "https://s17.postimg.org/5cad40gov/hushlogo.png",
		idm: "https://s17.postimg.org/5qbp3m0sf/idm.png",
	
		adwords: "https://s11.postimg.org/82wim4e0z/Adwords.png",
		analytics: "https://s11.postimg.org/xzq6yqhoj/analytics.png",
		cms: "https://s11.postimg.org/c1tq4y2o3/CMS.png",
		creative: "https://s11.postimg.org/azoljiq6b/creative.png",
		crm: "https://s11.postimg.org/fmunladj7/CRM.png",
		email: "https://s11.postimg.org/8kwpz39xf/email.png",
		project: "https://s11.postimg.org/yuhshvvur/projectmanagement.png",
		social: "https://s11.postimg.org/pb83of8cj/social.png",
		webdev: "https://s11.postimg.org/ub5jwddz7/webdev.png",
		facebook: "https://s11.postimg.org/6y7iduxvn/facebook.png",
		linkedin: "https://s11.postimg.org/zccxxqlfn/linkedin.png",
		telegram: "https://s11.postimg.org/vh9jv629v/telegram.png",
		twitter: "https://s11.postimg.org/mar97vx1f/twitter.png"
	}
		
		
		
		
		

	}

	// Banner
	$('.jumbotron').css('background-image', 'url(' + images.banner + ')');

	// Header
	$('#header-image').attr('src', images.profile);

	// Logos
	$('#cklogo').attr('src', images.ck);
	$('#beeflogo').attr('src', images.beef);
	$('#freedmanlogo').attr('src', images.freedman);
	$('#hushlogo').attr('src', images.hush);
	$('#gomadlogo').attr('src', images.gomad);

	// Icons
	$('#adwords').attr('src', images.adwords);
	$('#analytics').attr('src', images.analytics);
	$('#dev').attr('src', images.dev);
	$('#cms').attr('src', images.cms);
	$('#crm').attr('src', images.crm);
	$('#email').attr('src', images.email);
	$('#project').attr('src', images.project);
	$('#social').attr('src', images.social);
	$('#creative').attr('src', images.creative);
	$('#linkedin').attr('src', images.linkedin);
	$('#twitter').attr('src', images.twitter);
	$('#telegram').attr('src', images.telegram);

	// Certifications
	$('.cim-logo').attr('src', images.cim);
	$('.idm-logo').attr('src', images.idm);
	$('.google-logo').attr('src', images.google);

	// Qualifications
	$('.dmu-logo').attr('src', images.dmu);
	$('.billericay-logo').attr('src', images.billericay);

	// // Banner
	// $('.jumbotron').css('background-image', 'url(' + currentUrl + images.location + images.banner + ')');

	// // Header
	// $('#header-image').attr('src', currentUrl + images.location + images.profile);

	// // Logos
	// $('#cklogo').attr('src', currentUrl + images.location + images.cklogo);
	// $('#beeflogo').attr('src', currentUrl + images.location + images.beeflogo);
	// $('#freedmanlogo').attr('src', currentUrl + images.location + images.freedmanlogo);
	// $('#hushlogo').attr('src', currentUrl + images.location + images.hushlogo);
	// $('#gomadlogo').attr('src', currentUrl + images.location + images.gomadlogo);

	// // Icons
	// $('#adwords').attr('src', currentUrl + icons.location + icons.adwords);
	// $('#analytics').attr('src', currentUrl + icons.location + icons.analytics);
	// $('#dev').attr('src', currentUrl + icons.location + icons.dev);
	// $('#cms').attr('src', currentUrl + icons.location + icons.cms);
	// $('#crm').attr('src', currentUrl + icons.location + icons.crm);
	// $('#email').attr('src', currentUrl + icons.location + icons.email);
	// $('#project').attr('src', currentUrl + icons.location + icons.project);
	// $('#social').attr('src', currentUrl + icons.location + icons.social);
	// $('#creative').attr('src', currentUrl + icons.location + icons.creative);
	// $('#linkedin').attr('src', currentUrl + icons.location + icons.linkedin);
	// $('#twitter').attr('src', currentUrl + icons.location + icons.twitter);
	// $('#telegram').attr('src', currentUrl + icons.location + icons.telegram);

	// // Certifications
	// $('.cim-logo').attr('src', currentUrl + images.location + images.cim);
	// $('.idm-logo').attr('src', currentUrl + images.location + images.idm);
	// $('.google-logo').attr('src', currentUrl + images.location + images.google);

	// // Qualifications
	// $('.dmu-logo').attr('src', currentUrl + images.location + images.dmu);
	// $('.billericay-logo').attr('src', currentUrl + images.location + images.billericay);

	/* <<<<<<<< END images >>>>>>>> */

}); // Document.ready



