document.addEventListener("DOMContentLoaded", function() {

  /* ===== NAVBAR SECTION ===== */

  /* Navbar toggle button for mobile
  - toggle open/close buttons (hamburger toggler)
  */

  var toggler = document.querySelector(".navbar-main .navbar-toggler");
  var togglerOpenImg = document.querySelector(".navbar-main .navbar-toggler .open-btn");
  var togglerCloseImg = document.querySelector(".navbar-main .navbar-toggler .close-btn");
  var navLinks = document.querySelectorAll(".navbar-main #menu .nav-link");

  function toggleOpenClose() {
    toggler.addEventListener("click", function(event) {
      if (window.matchMedia("screen and (max-width: 767px)").matches) {
        // toggle hide class for open/close buttons
        togglerOpenImg.classList.toggle("hide-toggle-btn");
        togglerCloseImg.classList.toggle("hide-toggle-btn");
      };
    });
  };
  toggleOpenClose();
  // window.addEventListener('resize', toggleOpenClose, false);

  /* Hide close-button when nav-links are clicked on mobile/tablet menu
  - in jQuery function fired to Hide mainCollapsingNavbar after clicking nav-links on mobile/tablet menu
  - hide also the close-button mainCollapsingNavbar is hidden
  */
   function toggleClose() {
    for (var i=0; i<navLinks.length; i++) {
      navLinks[i].addEventListener("click", function(event) {
        if (window.matchMedia("screen and (max-width: 767px)").matches) {
          togglerOpenImg.classList.toggle("hide-toggle-btn");
          togglerCloseImg.classList.toggle("hide-toggle-btn");
        };
      });
    };
  };
  toggleClose();
  // window.addEventListener('resize', toggleClose, false);

});
