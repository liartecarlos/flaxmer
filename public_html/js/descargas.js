$('document').ready(function () {
    $(".page-link").on("click", function () {
        $('.page-link').parent().removeClass('active');
        $(this).parent().addClass('active');
        if($(this).attr('title') === 'pag1'){
            $('.pag1').removeClass('hide');
            $('.pag2').addClass('hide');           
        }else if($(this).attr('title') === 'pag2'){
            $('.pag1').addClass('hide');
            $('.pag2').removeClass('hide');
        }
    });
});


