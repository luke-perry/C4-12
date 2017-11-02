
$(document).ready(function() {
   $('#SubmitContact').click(function() {

      var    name = $('#FirstandLast').val();
      var   email = $('#EmailAddress').val();
      var message = $('textarea#input-message').val();
      var x = 1;

      // Validate for valid email address using regular expression
      var patt = new RegExp("^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$", "i");
      var res = patt.test(email);
      if(res == false){
         x = 2;
      }

      if(name.length < 1 || message.length < 1){
         x = 3;
      }

      if(x == 1){
         var service_id = "default_service";
         var template_id = "c412_contact_us";

         var params = {};
         params["from_name"]=name;
         params["from_email"]=email;
         params["reply_to"]=email;
         params["message_html"]=message;

         emailjs.send(service_id, template_id, params)
         .then(function(){
               $("#FirstandLast").remove();
               $("#EmailAddress").remove();
               $("#input-message").remove();
               $("#SubmitContact").remove();
               $(".br1").remove();
               $('#ContactOutline').append("<div><span style=\"font-size: 30px;\">Message Sent Successfully</span><br><br><br>Thanks for sendings us a message. We'll get back as soon as we can.</div>");
           }, function(err) {
             alert("Send email failed! Sorry for the inconvience. Please contact us via the Peninsula website. Thanks!");
         });

         }else{
         if(x == 2){
            alert("Opps, make sure your email address is valid before you send.");
         }else{
            alert("Opps, something isn't completed in the form. \n\n Please correct before you send.");
         }
      }
   });
});
