var $ = jQuery;
$(document).ready(function() {
    $(".sidebar-nav-menu").on('click', function() {
        $(this).parent(".active").toggleClass("active")

    });
});