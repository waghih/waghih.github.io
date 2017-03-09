$(document).ready(function () {
	$(window).load(function() {
		// Animate loader off screen
		$("#loading").fadeOut("slow");;
	});
	new WOW().init();
	$('.scrollspy').scrollSpy();
	$('.tooltipped').tooltip({delay: 50});
	$(".button-collapse").sideNav();
	var web_card_height = $('#web_development').height();
	var mobile_card_height = $('#mobile_development').height();
	$('#web_skill_range').height(web_card_height);
	$('#mobile_skill_range').height(mobile_card_height);
	
	$("#contactForm").on("submit", function (event) {
	    event.preventDefault();
	    submitForm();
	});

	function submitForm(){
	    // Initiate Variables With Form Content
	    var name = $("#name").val();
	    var email = $("#email").val();
	    var message = $("#message").val();

	    $.ajax({
            url:'https://formspree.io/alfaruq93@gmail.com',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                email:email,
                message:message,
                _subject:'My Form Submission',
            },
            dataType:"json",
            success:function(response) {
                console.log(response)
            }   

        });   
	}

	var map_height = $('#contact_container').height();

	$('#googleMap').height(map_height);

	var myCenter = new google.maps.LatLng(2.722766, 101.947169);

	function initialize() {
		var mapProp = {
		center:myCenter,
		zoom:13,
		scrollwheel:false,
		draggable:false,
		mapTypeId:google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
		map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});

		var marker = new google.maps.Marker({
			position:myCenter,
		});

		marker.setMap(map);
	}

	google.maps.event.addDomListener(window, 'load', initialize);
});