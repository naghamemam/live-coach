var $ = jQuery;
$(document).ready(function() {
    $(".sidebar-nav-menu").on('click', function() {
        $(this).parent(".active").toggleClass("active")

    });

    function editSession() {
        $(".new-session").slideUp();
        $(".new-session").slideToggle();
    }

    $(".btn-add-new").on('click', function(e) {
        e.preventDefault();
        editSession();
    });
});