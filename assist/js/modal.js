// Click function for show the Modal
$(document).ready(function () {

    $(".modalin").on("click", function () {
        $(this).next(".mask").addClass("active");
    });

// Function for close the Modal

    function closeModal() {
        $(".mask").removeClass("active");
    }

// Call the closeModal function on the clicks/keyboard

    $(".closes, .mask").on("click", function () {
        closeModal();
    });
});

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        closeModal();
    }
});
