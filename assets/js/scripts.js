function setNavbarFixed(win_scrolltop, menu_scrolltop){

	if (win_scrolltop > menu_scrolltop){
		$(".navbar_outer").addClass("fixed");
	}else{
		$(".navbar_outer").removeClass("fixed");
	}

}

jQuery(document).ready(function($){

	var $menuTop;

	$(window).load(function(){

		$(".loading_screen").fadeOut(150, function(){

			$(".theme_configs").addClass("visible");

			$("#wrapper").animate({
				opacity : 1
			}, 150);

			var scrollTop = $(window).scrollTop();
			$menuTop = $(".navbar_outer").offset().top;

			setNavbarFixed(scrollTop, $menuTop);

		});

	});

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();

		setNavbarFixed(scrollTop, $menuTop);

	});

	$("body").on("click", ".navbar_handle", function(){
		var menu = $(this).next().find("ul");
		if (menu.is(":visible")){
			menu.fadeOut();
			menu.removeClass("mobile");
		}else{
			menu.fadeIn();
			menu.addClass("mobile");
		}

	});

/*	$(".parallax_item").each(function(){
		$(this).find(".parallax_layer").parallax("center", 0.4);
	});*/

	$("body").on("click", ".close_personal_info_ovelay", function(){
		$(this).parent().fadeOut();
		return false;
	});

	$("body").on("click", ".personal_info_grid .inner .items_row .item", function(){
		var data = $(this).find(".data").clone();
		var icon = $(this).find(".icon").attr("class");
		var title = data.find(".title").html();
		var value = data.find(".value").html();

		var overlay = $(this).parents(".personal_info_grid").find(".overlay");
		overlay.find(".icon").attr("class", icon);
		overlay.find(".title").html(title);
		overlay.find(".value").html(value);

		overlay.fadeIn();
	});

	if ($("#layerslider").is(":visible")){
		//home slider
		$("#layerslider").layerSlider({
			responsive: false,
			responsiveUnder: 1280,
			pauseOnHover: false,
			autoPlayVideos: false,
			navButtons: false,
			touchNav: true,
			navStartStop: false,
			showBarTimer:false,
			showCircleTimer:false,
			navPrevNext:true,
			skinsPath: 'assets/layerslider/skins/'
		});
	}

	$('.counters .num').counterUp({
        delay: 100,
        time: 2000
    });

	$(".skill_items.charts").owlCarousel({
		items : 4
	});

	$(".client_items").owlCarousel({
		items : 4
	});

	$(".testimonial_items").owlCarousel({
      	singleItem:true,
		pagination : true
	});

	$(".home_blog_posts").owlCarousel({
		items : 3,
		pagination : false
	});

	$(".post_slideshow").owlCarousel({
      	singleItem:true,
		navigation : true,
		pagination : false,
		navigationText : ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});

	$('.navbar').onePageNav({
	    currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 750,
	    scrollThreshold: 0.5,
	    filter: '',
	    easing: 'swing',
	    begin: function() {
	    	var win_width = $(window).width();
	    	if (win_width > 991){
	    		$(".navbar").removeClass("mobile");
	    	}
	    	if ($(".navbar").hasClass("mobile")){
	    		$(".navbar").slideUp();
	    	}
	    }
	});

	// show-hide scroll to top button on window scroll
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200){
			$(".scroll_to_top").fadeIn();
		}else{
			$(".scroll_to_top").fadeOut();
		}
	});

	// scroll to top button
	$(".scroll_to_top").click(function(){
		$('html, body').animate({scrollTop:0}, 300, 'linear');
	});
	
	// Portfolio items filter
	$(".portfolio_items").mixitup();

	$(document).on("click", ".view_portfolio_item", function(){

		var popup_data = $(this).parents(".portfolio_item").find(".popup_data").clone();
		$("#portfolio_popup").find(".content").html(popup_data);
		$("#portfolio_popup").fadeIn();

		$('body').css('overflow','hidden');

		return false;

	});

	$(document).on("click", ".close_portfolio_popup", function(){

		$('body').css('overflow','auto');
		$("#portfolio_popup").fadeOut(function(){
			$("#portfolio_popup").find(".content").html("");
		});
		
		return false;

	});

	// Tweets feed
//	$('.tweets_feed').twittie({
//		username: 'envato',
//	    dateFormat: '%b. %d, %Y',
//	    template:
//	    '<div class="icon"><i class="fa fa-twitter"></i></div>'+
//	    '<div class="text">'+
//	    	'{{tweet}}'+
//	    '</div>'+
//	    '<div class="date">'+
//	    	'<a href="{{url}}">{{screen_name}}</a> &bull; <a href="{{url}}">{{date}}</a>'+
//	    '</div>'
//	    ,
//	    count: 4
//	}, function(){
//		$(".tweets_feed").owlCarousel({
//
//			pagination : true,
//			singleItem:true
//
//		});
//	});


	var theme_array = [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}];

	// Google map
	if ($("#gmap").is(":visible")){
		new Maplace({
			map_options: {
				set_center: [-37.814812, 144.963055],
				zoom: 15,
		        styles: theme_array,
		        scrollwheel: false,
		        controls: {
		            panControl: true,
		            zoomControl: true,
		            mapTypeControl: true,
		            scaleControl: false,
		            streetViewControl: true,
		            overviewMapControl: false
		        },
			}
		}).Load();
	}
	
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var OSName = "Unknown OS";
	if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
	else if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
	else if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
	else if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

	if( !isMobile.any() ){

		$(".num_chart").appear();
		$('body').on('appear', '.num_chart', function(event, $all_appeared_elements) {
			$(".num_chart").each(function(){
				var chartBarColor = $(this).attr("data-bar-color");
				var	chartBarWidth = $(this).attr("data-bar-width");

				if(!$(this).hasClass("loaded_chart")){
					$(this).easyPieChart({
						animate: 2000,
						size: chartBarWidth,
						lineWidth: 6,
						scaleColor: false,
						trackColor: "",
						barColor: chartBarColor,
					}).addClass("loaded_chart");
					$(this).find(".num").counterUp({
						delay: 10,
						time: 1200
					});
				}
			});
		});

		$(".anim_element").appear();
		$('body').on('appear', '.anim_element', function(event, $all_appeared_elements) {
			
			var anim_class = $(this).attr("data-animation");

			var elem = $(this);
			
			var animationDelay = elem.attr("data-animation-delay");
	        if(animationDelay != undefined){

	            setTimeout(function(){
	                elem.addClass(anim_class + " animated fullOpacity");
	            },animationDelay);

	        }else{
	            elem.addClass(anim_class + " animated fullOpacity");
	        }

	    });

	}else{
		$(".num_chart").each(function(){
			var chartBarColor = $(this).attr("data-bar-color");
			var	chartBarWidth = $(this).attr("data-bar-width");

			if(!$(this).hasClass("loaded_chart")){
				$(this).easyPieChart({
					animate: 2000,
					size: chartBarWidth,
					lineWidth: 6,
					scaleColor: false,
					trackColor: "",
					barColor: chartBarColor,
				}).addClass("loaded_chart");
				$(this).find(".num").counterUp({
					delay: 10,
					time: 1200
				});
			}
		});

		$(".anim_element").addClass("vis");
	}

	//close alert
	$(".close_alert").click(function(){
		$(this).parents(".alert").fadeOut();
		return false;
	});
	
	//accordion
	$(".accordion .atitle").click(function(){
		if ($(this).parents(".accordion").hasClass("accordion_toggle"))
			return false;

		if ($(this).hasClass("active"))
			return false;

		$(this).parents(".accordion").find(".atitle.active i").removeClass("fa-angle-up").addClass("fa-angle-down");
		$(this).parents(".accordion").find(".atitle.active").next().slideUp();
		$(this).parents(".accordion").find(".atitle.active").removeClass("active");

		$(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
		$(this).next().slideDown();
		$(this).addClass("active");

	});
		
	//toggle
	$(".accordion_toggle .atitle").click(function(){

		if ($(this).hasClass("active")){
			$(this).find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
			$(this).next().slideUp();
			$(this).removeClass("active");
		}else{
			$(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
			$(this).next().slideDown();
			$(this).addClass("active");
		}

	});

	//tabs
	$(".tabs_nav li a").click(function(){
		$(this).parents(".tabs").find(".tabs_nav li a.active").removeClass("active");
		$(this).parents(".tabs").find(".tab.active").removeClass("active");

		$(this).addClass("active");
		var tab = $(this).attr("href");
		tab = tab.substring(1);

		$(this).parents(".tabs").find(".tab."+tab).addClass("active");

		return false;
		
	});

	//contact form
	$(".cf_submit_btn").click(function(){
		var name = $(this).parents(".contact_form").find(".cf_name");
		var email = $(this).parents(".contact_form").find(".cf_email");
		var subject = $(this).parents(".contact_form").find(".cf_subject");
		var message = $(this).parents(".contact_form").find(".cf_message");

		var val = $(this).val();

		$(this).val("Loading...");

		$.ajax({
			type: 'POST',
			url: 'ajax/ajax.php',
			data: {
				'name' : name.val(),
				'email' : email.val(),
				'subject' : subject.val(),
				'message' : message.val()
			},
			dataType: 'json',
			success: $.proxy(function(data) {

				console.log(data);
				
				if (data.error == false){
					name.val('');
					email.val('');
					subject.val('');
					message.val('');

					$(".contact_form .response").html(data.response);
				}else{
					$(".contact_form .inputfield").removeClass("contains_error");
					for (var i = 0; i < data.error_fields.length; i++) {
						$(".contact_form .cf_"+data.error_fields[i]).addClass("contains_error");
					};
				}

				$(this).val(val);

			}, this)
		});

		return false;

	});

	$(".theme_configs .button").click(function(){
		var box = $(this).parent();
		if (box.hasClass("hidden")){
			box.animate({
				"left" : "0px"
			}, 300);
			box.removeClass("hidden");
			$(this).removeClass("fa-angle-right").addClass("fa-angle-left");
		}else{
			box.animate({
				"left" : "-153px"
			}, 300);
			box.addClass("hidden");
			$(this).removeClass("fa-angle-left").addClass("fa-angle-right");
		}
	});

	$(".theme_configs .box.themes > div").click(function(){
		var current_theme = $("body").attr("class");

		var selected_theme = $(this).attr("class");

		if (current_theme == selected_theme)
			return false;

		$(".theme_configs .box.themes > div.active").removeClass("active");
		$("body").attr("class", selected_theme);
		$(this).addClass("active");

	});

	$(".theme_configs .patterns img").click(function(){
		var pattern = $(this).attr("src");

		$("body").attr("style", 'background: #F2F2F2 url('+pattern+');');

	});

	$(".theme_configs_reset").click(function(){
		$("body").removeAttr("style");
		return false;
	});

});