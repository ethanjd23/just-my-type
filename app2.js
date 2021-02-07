let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let currentSentence = 0;
let numberOfMistakes = 0;
let keyCount = 0;
let wpm = 0;
let totalKeyCount = 1;
let startTime = null;
let restartState = false;

$("document").ready(domLoad);




function domLoad() {
    $("#keyboard-upper-container").toggle();
    $("#sentence").append(sentences[currentSentence]);
    $("#target-letter").text(sentences[currentSentence].charAt(keyCount));
    // setting initial state of game


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
    // toggling between upper and lower case keyboards

    $("body").keypress(function(e) {
        $("#" + e.which).css("background-color", "yellow");
        setTimeout(function() {
            $("#" + e.which).css("background-color", "#f5f5f5")
        }, 100);
        // highlighting key pressed on the screen keyboard

        if (restartState == true) {
            return;
        };

        feedback(e);

        beginTimer(startTime);
        
        if (sentences[currentSentence] == undefined && restartState == false) {
            restartState = true;
            $("#sentence").empty();
            wpmCalculator(wpm);
            gameRestart();
            return;
            // end of game 
        } else if(keyCount == sentences[currentSentence].length) {
            currentSentence++;
            keyCount = -1;
            $("#feedback").empty();
            $("#sentence").empty();
            $("#sentence").append(sentences[currentSentence]);
            keyCount++;
            $("#target-letter").text(sentences[currentSentence].charAt(keyCount));
            highlighter();
            // moving to next sentence 
        } else {
            keyCount++;
            $("#target-letter").text(sentences[currentSentence].charAt(keyCount));
            highlighter();
        }; // updating current letter on same sentence
        
    });


};

function feedback(e) {
    let correctKey = $("#target-letter").text().charCodeAt(0);
    if (correctKey === e.which) {
        $("#feedback").append("<span class='glyphicon glyphicon-ok'></span>")
    } else {
        $("#feedback").append("<span class='glyphicon glyphicon-remove'></span>")
        numberOfMistakes++;
    };
};

function beginTimer(startTime) {
    if (totalKeyCount == 1) {
        startTime = performance.now();
    };
}

function wpmCalculator(wpm) {
    let endTime = performance.now();
    let timeDiff = endTime - startTime;
    timeDiff /= 1000; // convert to seconds
    let seconds = Math.round(timeDiff);
    let minutes = seconds / 60;

    wpm = 240 / minutes - 2 * numberOfMistakes;
    wpm = wpm.toFixed(2);
    $("#feedback").append(`<div id='wpm'>${wpm} words per minute</div>`);
    
    totalKeyCount++;
};

function gameRestart () {
    $("#target-letter").append("<button id='restart'>Restart?</button>");
    $("#restart").click(function () {
        location.reload();
        return false;
    })
};

function highlighter() {
    $("#yellow-block").css("margin-left", keyCount / 1.5 + "em");
};