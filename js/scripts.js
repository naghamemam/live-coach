var $ = jQuery;
$(document).ready(function() {
    $(".sidebar-nav-menu").on('click', function() {
        $(this).parent(".active").toggleClass("active")

    });

    $('.feild-ar').hide();

    $('.lang-btn').on('click',function() {
        $(this).text(function(i, text){
            return text === "AR" ? "EN" : "AR";
        })
        $(this).closest(".form-group").find('.feild-ar, .feild-en').toggle();
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