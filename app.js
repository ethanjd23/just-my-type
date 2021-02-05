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
        let keyPressed = e.which
        $("#" + keyPressed).css("background-color", "yellow");
        setTimeout(function() {
            $("#" + keyPressed).css("background-color", "#f5f5f5")
        }, 100);
    });
    // highlighting keys when pressed
    
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    console.log(sentences.length)
    let currentSentence = 0;
    $("#sentence").append(sentences[0]);
    let keyCount = 0;
    $("body").keyup(function(e) {
        keyCount++;
        if (currentSentence > sentences.length) {
            $("#sentence").empty();
            currentSentence = 0; 
            keyCount = 0; 
            $("#sentence").append(sentences[0]);
            return;
        }
        if(keyCount == sentences[currentSentence].length) {
            currentSentence++;
            keyCount = 0;
            $("#sentence").empty();
            $("#sentence").append(sentences[currentSentence]);
            console.log(currentSentence)
        }; 
    })
})
