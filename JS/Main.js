$(document).ready(function() {
    $("#menu_about").click(function() {
		$('html,body').animate({
		   scrollTop: $("#About").offset().top-55
		}, 1000)
    });

    $("#menu_join").click(function() {
		$('html,body').animate({
		   scrollTop: $("#VisitTitle").offset().top-55
		}, 1000)
    });

    $("#menu_peninsula").click(function() {
		$('html,body').animate({
		   scrollTop: $("#Peninsula").offset().top-55
		}, 1000)
    });

    $("#menu_events").click(function() {
		$('html,body').animate({
		   scrollTop: $("#Events").offset().top-55
		}, 1000)
    });

    $("#menu_contact").click(function() {
		$('html,body').animate({
		   scrollTop: $("#ContactUs").offset().top-55
		}, 1000)
    });

    $("#contactButton").click(function() {
		$('html,body').animate({
		   scrollTop: $("#ContactUs").offset().top-55
		}, 1000)
    });
});

$(window).scroll(function() {
	if ($(this).scrollTop() > $(window).height()-55){
		$('#Menu').addClass('stuck');
		$('#Verse').css('margin-top','45px');
	}else{
		$('#Menu').removeClass('stuck');
		$('#Verse').css('margin-top','0px');
	}
});
