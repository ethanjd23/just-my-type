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
    
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let currentSentence = 0;
    $("#sentence").append(sentences[0]);

    let keyCount = 0;
    $("#target-letter").text(sentences[currentSentence].charAt(keyCount));

    $("body").keyup(function(e) {
        if (sentences[currentSentence] == undefined) {
            $("#sentence").empty();
            currentSentence = 0; 
            keyCount = 0; 
            $("#sentence").append(sentences[0]);
        }; 
        keyCount++;

        $("#target-letter").text(sentences[currentSentence].charAt(keyCount)); // updating current letter
        $("#yellow-block").css("margin-left", keyCount * 20 + "px"); // nudging highlight 
        
        if(keyCount == sentences[currentSentence].length) {
            currentSentence++;
            keyCount = 0;
            $("#feedback").empty();
            $("#sentence").empty();
            $("#sentence").append(sentences[currentSentence]);
        }; 
    })

    $("body").keypress(function(e) {
        let keyPressed = e.which
        $("#" + keyPressed).css("background-color", "yellow");
        setTimeout(function() {
            $("#" + keyPressed).css("background-color", "#f5f5f5")
        }, 100);
        feedback(e);
        gameEnd();
    });
    // highlighting keys when pressed
    
})

function feedback(e) {
    let correctKey =  $("#target-letter").text();
    correctKeyCode = correctKey.charCodeAt(0);
    if (correctKeyCode === e.which) {
        $("#feedback").append("<span class='glyphicon glyphicon-ok'></span>")
    } else {
        $("#feedback").append("<span class='glyphicon glyphicon-remove'></span>")
    } 
};

function gameEnd() {
    let totalKeyCount = 1;
    let startTime = performance.now();
    console.log(totalKeyCount + "test");
    if (totalKeyCount == 1) {
        console.log(startTime + " time")
    };
    
}