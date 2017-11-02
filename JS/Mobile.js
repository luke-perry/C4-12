$(document).ready(function(){
   $("#menu_link").click(function(){
       $(".menu").fadeIn(300);
       $(".cell").fadeIn(350);
       $(document).bind('touchmove', false);
   });
   $("#mobile_close").click(function(){
       $(document).unbind('touchmove');
       $(".cell").fadeOut(350);
       $(".menu").fadeOut(300);
   });
   $("#mobile_412").click(function(){
       $(document).unbind('touchmove');
       $(".cell").fadeOut(350);
       $(".menu").fadeOut(300);
       $('html,body').animate({
           scrollTop: $("#Verse").offset().top - 50},'slow');
   });
   $("#mobile_about").click(function(){
       $(document).unbind('touchmove');
       $(".cell").fadeOut(350);
       $(".menu").fadeOut(300);
       $('html,body').animate({
           scrollTop: $("#About").offset().top - 50},'slow');
   });
   $("#mobile_join").click(function(){
       $(document).unbind('touchmove');
       $(".cell").fadeOut(350);
       $(".menu").fadeOut(300);
       $('html,body').animate({
           scrollTop: $("#VisitTitle").offset().top - 50},'slow');
   });
   $("#mobile_map").click(function(){
       $(document).unbind('touchmove');
       $(".cell").fadeOut(350);
       $(".menu").fadeOut(300);
       $('html,body').animate({
           scrollTop: $("#map").offset().top - 50},'slow');
   });
   $("#mobile_pbc").click(function(){
       $(document).unbind('touchmove');
       $(".cell").fadeOut(350);
       $(".menu").fadeOut(300);
       $('html,body').animate({
           scrollTop: $("#Peninsula").offset().top - 50},'slow');
   });
   $("#mobile_contact").click(function(){
       $(document).unbind('touchmove');
       $(".cell").fadeOut(350);
       $(".menu").fadeOut(300);
       $('html,body').animate({
           scrollTop: $("#ContactUs").offset().top - 50},'slow');
   });
   $("#mobile_events").click(function(){
       $(document).unbind('touchmove');
       $(".cell").fadeOut(350);
       $(".menu").fadeOut(300);
       $('html,body').animate({
           scrollTop: $("#Events").offset().top - 50},'slow');
   });
});
