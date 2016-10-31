$('document').ready(function() {
    $('#links a').click(function(e) {
        e.preventDefault();
        $('#links a').removeClass('active');
        $(this).addClass('active');
        var campo = $(this).attr("href");
        $('.campo').addClass('hide');
        $('#' + campo).removeClass('hide');
    });
});

