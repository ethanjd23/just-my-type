$("document").ready(function() {
    $("#keyboard-upper-container").toggle();
    $("body").keydown(function(e) {
        if (e.which == 16) {
            $("#keyboard-upper-container").toggle();
            $("#keyboard-lower-container").toggle();
        };
    });
    $("body").keyup(function(e) {
        if (e.which == 16) {
            $("#keyboard-upper-container").toggle();
            $("#keyboard-lower-container").toggle();
        };
    });
    // Toggling upper and lower case keyboards on shift ^

    $("body").keypress(function(e) {
        $("#" + e.which).css("background-color", "yellow");
    });

    $("body").keyup(function(e) {
        $("#" + e.which).css("background-color", "#f5f5f5");
    });
})