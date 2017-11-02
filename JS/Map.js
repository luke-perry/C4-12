// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
          zoom: 16, // How zoomed in you want the map to start at (always required)
   scrollwheel: false,
        center: new google.maps.LatLng(35.582, -80.8783), // The latitude and longitude to center the map (always required)

        // Style map
        styles: [	{	"stylers":[	{"visibility":"on"},	{"saturation":-100},	{"gamma":0.54}	]	},{	"featureType":"road",	"elementType":"labels.icon",	"stylers":[	{"visibility":"off"}	]	},{	"featureType":"water",	"stylers":[	{"color":"#4d4946"}	]	},{	"featureType":"poi",	"elementType":"labels.icon",	"stylers":[	{"visibility":"off"}	]	},{	"featureType":"poi",	"elementType":"labels.text",	"stylers":[	{"visibility":"simplified"}	]	},{	"featureType":"road",	"elementType":"geometry.fill",	"stylers":[	{"color":"#ffffff"}	]	},{	"featureType":"road.local",	"elementType":"labels.text",	"stylers":[	{"visibility":"simplified"}	]	},{	"featureType":"water",	"elementType":"labels.text.fill",	"stylers":[	{"color":"#ffffff"}	]	},{	"featureType":"transit.line",	"elementType":"geometry",	"stylers":[	{"gamma":0.48}	]	},{	"featureType":"transit.station",	"elementType":"labels.icon",	"stylers":[	{"visibility":"off"}	]	},{	"featureType":"road",	"elementType":"geometry.stroke",	"stylers":[	{"gamma":7.18}	]	}	]
    };

    // Get the HTML DOM element that will contain your map
    var mapElement = document.getElementById('map'); // We are using a div with id="map" seen below in the <body>
    var map = new google.maps.Map(mapElement, mapOptions); // Create the Google Map using our element and options defined above

    var contentStringPBC = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Peninsula Baptist Church</h1>'+
                '<div id="bodyContent">'+
                '<p> <b>C4:12 10am to 10:45am.</b>' +
                '</p>'+
                '<p> <b>Worship service 11am to noon.</b>' +
                '</p>'+
                '<p> Serving the Mooresville community for over 30 years.' +
                '</p>'+
                '<p><a href="https://www.google.com/maps/dir//Peninsula+Baptist+Church,+687+Brawley+School+Rd,+Mooresville,+NC+28117/@35.5804531,-80.8808623,17z/data=!4m15!1m6!3m5!1s0x885154b784fd527f:0x66f205aeeeaa0354!2sPeninsula+Baptist+Church!8m2!3d35.5804488!4d-80.8786736!4m7!1m0!1m5!1m1!1s0x885154b784fd527f:0x66f205aeeeaa0354!2m2!1d-80.8786736!2d35.5804488" target="_blank">'+
                'Get Directions</a> '+
                '</p>'+
                '</div>'+
                '</div>';

    var infowindowPBC = new google.maps.InfoWindow({
      content: contentStringPBC
    });

    var markerPBC = new google.maps.Marker({
        position: new google.maps.LatLng(35.5805572,-80.8786),
        map: map,
        title: 'Peninsula Baptist Church'
    });

    markerPBC.addListener('click', function() {
      infowindowPBC.open(map, markerPBC);
    });
}
