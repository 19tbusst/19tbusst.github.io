function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function intToString(int) {
    let string;

    switch(int) {
        case 0:
            string = 'Rock';
            break;

        case 1:
            string = 'Paper';
            break;

        case 2:
            string = 'Scissors';
            break;
    }

    return string;
}

function rps(choice) {
    let winString;

    let compChoice = getRandomInt(3);

    console.log(choice);
    console.log(compChoice);

    if (compChoice == choice) {
        winString = 'Draw';
    } else if (compChoice + 1 == choice) {
        winString = 'Win';
    } else if (compChoice == 2 && choice == 0) {
        winString = 'Win';
    } else if (compChoice - 1 == choice) {
        winString = 'Lose';
    } else if (compChoice == 0 && choice == 2){
        winString = 'Lose';
    }

    document.getElementById('roll').innerText = 'You choose: ' + intToString(choice);
    document.getElementById('comp-roll').innerText = 'The computer choose: ' + intToString(compChoice);
    document.getElementById('win_text').innerText = winString;
}
