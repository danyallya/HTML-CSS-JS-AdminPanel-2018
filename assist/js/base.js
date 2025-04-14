$(document).ready(function () {

    $("#right-menu .item").click(function () {
        $("#right-menu .item")
            .removeClass("active");
        $(this)
            .addClass("active");

    });
    $("#right-menu .item .child-item .item").click(function () {
        $("#right-menu .item .child-item .item")
            .removeClass("actives");
        $(this)
            .addClass("actives");


    });

    $(".dashboard-item .head").click(function () {
        if ($(this).closest(".dashboard-item").hasClass("active")) {
            $(this).closest(".dashboard-item")
                .removeClass("active");
        } else {
            $(this).closest(".dashboard-item")
                .addClass("active");

        }


    });
// Input Lock
    $('textarea').blur(function () {
        $('#hire textarea').each(function () {
            $this = $(this);
            if (this.value != '') {
                $this.addClass('focused');
                $('textarea + label + span').css({'opacity': 1});
            }
            else {
                $this.removeClass('focused');
                $('textarea + label + span').css({'opacity': 0});
            }
        });
    });

    $('#hire .field:first-child input').blur(function () {
        $('#hire .field:first-child input').each(function () {
            $this = $(this);
            if (this.value != '') {
                $this.addClass('focused');
                $('.field:first-child input + label + span').css({'opacity': 1});
            }
            else {
                $this.removeClass('focused');
                $('.field:first-child input + label + span').css({'opacity': 0});
            }
        });
    });

    $('#hire .field:nth-child(2) input').blur(function () {
        $('#hire .field:nth-child(2) input').each(function () {
            $this = $(this);
            if (this.value != '') {
                $this.addClass('focused');
                $('.field:nth-child(2) input + label + span').css({'opacity': 1});
            }
            else {
                $this.removeClass('focused');
                $('.field:nth-child(2) input + label + span').css({'opacity': 0});
            }
        });
    });


    // $(".dashboard-item").each(function () {
    //     var colorR = Math.floor((Math.random() * 256));
    //     var colorG = Math.floor((Math.random() * 256));
    //     var colorB = Math.floor((Math.random() * 256));
    //     $(this).css("border-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    // });


});
