$(function(){
    $page = jQuery.url.attr("file");

    if(!$page) {
        $page = 'error.php';
    }
    $('#navbar li a').each(function(){
        var $href = $(this).attr('href');
        if ( ($href == $page) || ($href == '') ) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});