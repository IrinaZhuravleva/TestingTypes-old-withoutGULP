$(document).ready(function () {

    $('#HideObjectives').on('click', function () {
        
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).html('Show objectives');
            $('.block-objectives').slideUp(200);
        } else {
            $(this).removeClass('active');
            $('.block-objectives').slideDown(200);
            $(this).html('Hide objectives');
        }
    });
    $('#HideBasis').on('click', function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).html('Show basis');
            $('.block-basis').slideUp(200);
        } else {
            $(this).removeClass('active');
            $('.block-basis').slideDown(200);
            $(this).html('Hide basis');
        }
    });
    $('#HideObjects').on('click', function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).html('Show objects');
            $('.block-objects').slideUp(200);
        } else {
            $(this).removeClass('active');
            $('.block-objects').slideDown(200);
            $(this).html('Hide objects');
        }
    });
    $('#HideDefects').on('click', function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).html('Show objects');
            $('.block-defects').slideUp(200);
        } else {
            $(this).removeClass('active');
            $('.block-defects').slideDown(200);
            $(this).html('Hide objects');
        }
    });

    $('#HideApproaches').on('click', function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).html('Show objects');
            $('.block-approaches').slideUp(200);
        } else {
            $(this).removeClass('active');
            $('.block-approaches').slideDown(200);
            $(this).html('Hide objects');
        }
    });

//    .block-defects
// .block-approaches

})
