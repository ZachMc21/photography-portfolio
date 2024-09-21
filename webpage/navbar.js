console.log("navbar.js reached");

$(function() {
    $page = jQuery.url.attr("file");

    if(!$page) {
        $page = 'error.php';
    }
    $('#navbar li a').each(function() {
        console.log($(this));
        var $href = $(this).attr('href');
        if ( ($href == $page) || ($href == '') ) {
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
        }
    });
});