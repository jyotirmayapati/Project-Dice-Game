function rollDice() {
    var diceA = document.getElementById("diceA");
    var diceB = document.getElementById("diceB");
    var diceC = document.getElementById("diceC");
    var winner = document.getElementById("winner");

    var scoreA = Math.floor(Math.random() * 6) + 1;
    var scoreB = Math.floor(Math.random() * 6) + 1;
    var scoreC = Math.floor(Math.random() * 6) + 1;

    diceA.textContent = scoreA;
    diceB.textContent = scoreB;
    diceC.textContent = scoreC;

    // Determine the winner
    if (scoreA > scoreB && scoreA > scoreC) {
        if (scoreB > scoreC) {
            diceA.style.backgroundColor = "green";
            diceB.style.backgroundColor = "yellow";
            diceC.style.backgroundColor = "red";
        } else if(scoreB < scoreC){
            diceA.style.backgroundColor = "green";
            diceB.style.backgroundColor = "red";
            diceC.style.backgroundColor = "yellow";
        }else{
            diceA.style.backgroundColor = "green";
            diceB.style.backgroundColor = "blue";
            diceC.style.backgroundColor = "blue";
        }
        winner.textContent = "Member A wins!";
    } else if (scoreB > scoreA && scoreB > scoreC) {
        if (scoreA > scoreC) {
            diceA.style.backgroundColor = "yellow";
            diceB.style.backgroundColor = "green";
            diceC.style.backgroundColor = "red";
        }else{
            diceA.style.backgroundColor = "red";
            diceB.style.backgroundColor = "green";
            diceC.style.backgroundColor = "yellow";
        }

        winner.textContent = "Member B wins!";
    } else if (scoreC > scoreA && scoreC > scoreB) {
        if (scoreA > scoreB) {
            diceA.style.backgroundColor = "yellow";
            diceB.style.backgroundColor = "red";
            diceC.style.backgroundColor = "green";
        }else{
            diceA.style.backgroundColor = "red";
            diceB.style.backgroundColor = "yellow";
            diceC.style.backgroundColor = "green";
        }
        winner.textContent = "Member C wins!";
    } else if (scoreA === scoreB && scoreA === scoreC) {
        diceA.style.backgroundColor = "blue";
        diceB.style.backgroundColor = "blue";
        diceC.style.backgroundColor = "blue";
        winner.textContent = "It's a tie!";
    } else {
        if (scoreA === scoreB) {
            diceA.style.backgroundColor = "yellow";
            diceB.style.backgroundColor = "yellow";
            diceC.style.backgroundColor = "#f0f0f0";
            winner.textContent = "Members A and B tied!";
        } else if (scoreA === scoreC) {
            diceA.style.backgroundColor = "yellow";
            diceB.style.backgroundColor = "#f0f0f0";
            diceC.style.backgroundColor = "yellow";
            winner.textContent = "Members A and C tied!";
        } else {
            diceA.style.backgroundColor = "#f0f0f0";
            diceB.style.backgroundColor = "yellow";
            diceC.style.backgroundColor = "yellow";
            winner.textContent = "Members B and C tied!";
        }
    }
}