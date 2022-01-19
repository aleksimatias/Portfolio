window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("burger-id");
var sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-burger")
    } else {
        navbar.classList.remove("sticky-burger");
    }
}