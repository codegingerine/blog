$(document).ready(function(){

	// Fullpage.js init function declared in functions.php / for language options

	/* ===== NAVBAR SECTION ===== */

	/* Bootstrap Navbar up to breakpoint 991px
	- ONLY FOR LI THAT HAVE DATA-MENUANCHOR NECESSARY FOR FULLPAGE.JS TO WORK ON DESKTOP
	- on smaller screens replace href with data-anchor for proper scrolling after cklicking links (href reserved for Fullpage.js on desktops)
	- scroll top on click
	- when scroll top add navbar height for mobile
	- add padding-top to $target when scrolled (= to show $target background under navbar after scroll) and remove it from siblings
	*/

	var $mainCollapsingNavbar =	$('#mainCollapsingNavbar');
	var $mainCollapsingNavbarHeight = $mainCollapsingNavbar.height();

	var $menu =	$('#menu.navbar-nav > li').click(function(event) {

		// only if breakpoint up to 991px and if this $target has attribute data-menuanchor
		if ((document.documentElement.clientWidth <= 991) && $(this).data('menuanchor') ) {
			// use data-anachor instead of href for Bootstrap menu
		    if ($(this).parent().parent().is("#bs-example-navbar-collapse-1")) return;
		    event.preventDefault();
		    var $target = $(this).find('> a').data('anchor'); //use data-anchor instead of href (navbar href used for FullPage.js )
		    var $navbarHeight = $('.navbar-main').height();
		    // scroll to section on click
		    if (document.documentElement.clientWidth < 768) {
			    $('html, body').animate({
			        scrollTop: $($target).offset().top - $mainCollapsingNavbarHeight - 20,
			    }, 700);
			}
			else if ((document.documentElement.clientWidth >= 768) && (document.documentElement.clientWidth <= 991)) {
				// add padding-top to $target to show $target background under navbar after scroll
				$($target).animate({
			        paddingTop: "60px"
			    }, 700);
			    // remove padding-top from all siblings
				$($target).siblings().css('paddingTop', '0');
				// scroll section to the top of the window
				$('html, body').animate({
			        scrollTop: $($target).offset().top,
			    }, 700);
			};
		};
	})
	$(window).ready($menu);


	/* #mainCollapsingNavbar (Bootstrap)
	- Hide navbar after clicking any of nav-links on mobile/tablet menu
	*/

	var $hideCollapseNav = $('.navbar-main').find('.nav-link').click(function() {
		if ($(window).width() <= 767) {
			$('#mainCollapsingNavbar').collapse('hide');
		};
	});
	$(window).ready($hideCollapseNav);

	/* #mainCollapsingNavbar (Bootstrap) remove navbar-fixed-top class on mobile screens
	*/
	var $navbar = $(".navbar");

	var navMobileScroll = $(function() {
		if (document.documentElement.clientWidth <= 767) {
			$navbar.removeClass("navbar-fixed-top");
		} else {
			$navbar.addClass("navbar-fixed-top");
		};
	});
	$(window).ready(navMobileScroll);

	$(window).resize(function() {
		if (document.documentElement.clientWidth <= 767) {
			$navbar.removeClass("navbar-fixed-top");
		} else {
			$navbar.addClass("navbar-fixed-top");
		};
	});

	/* ===== CONTACT SECTION ===== */

	/* Form placeholder
	- remove placehoder text on focus
	*/

	$(function () {
		$('input,textarea').focus(function () {
			$(this).data('placeholder', $(this).attr('placeholder'))
				.attr('placeholder', '');
			}).blur(function () {
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	});

	/* ===== FOOTER ===== */

	/* Blog footer
    - change position depending on relatrion body height to window height
  */
  var $body = $('body');
  var $footer = $('.blog-footer');

  function $fixBlogFooter() {
    if ($body.height() > $(window).height()) {
			$footer.css('position', 'relative');
			$footer.css('bottom', 'auto');
    } else {
			$footer.css('position', 'fixed');
      $footer.css('bottom', 0);
    };
  };
  $(document).ready($fixBlogFooter);
  $(window).resize($fixBlogFooter);

	/* +++++++++++ PAGE.HTML scripts - BLOG +++++++++++ */

	/* ===== BLOG NAVBAR SECTION ===== */

	var $blogMenu =	$('.navbar-blog .navbar-nav > li').click(function(event) {

		// only if breakpoint up to 991px and if this $target has attribute data-menuanchor
		if ((document.documentElement.clientWidth <= 991) && $(this).data('menuanchor') ) {
		    $(this).find('> a').attr('href', $(this).find('> a').attr('data-anchor')); //use data-anchor instead of href (navbar href used for FullPage.js )
		};
	})
	$(window).ready($blogMenu);


});
