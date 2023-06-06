function guessNumber() {
    var guessedNumber = parseInt(document.getElementById("number").value);
    
    if (guessedNumber === 67) {
        document.getElementById("result").innerHTML = "Correct!";
        document.getElementById("result").style.backgroundColor = "green";
    } else {
        document.getElementById("result").innerHTML = "Wrong!";
        document.getElementById("result").style.backgroundColor = "red";
    }
}

function hints() {
    var guessedNumber = parseInt(document.getElementById("number").value);

    if (guessedNumber >= 70) {
        document.getElementById("display_hint").innerHTML = "Value too high!";
    } else if (guessedNumber <= 60) {
        document.getElementById("display_hint").innerHTML = "Value too low!";
    }
    else if(guessedNumber <= 66 && guessedNumber >= 60){
        document.getElementById("display_hint").innerHTML = "Too Close!";
    }
    else if(guessedNumber === 67){
        document.getElementById("display_hint").innerHTML = "You Gussed it right!";
    }
}
