function rollStandardDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollGeoDice(p = 0.25) {
    let x = 1;
    while (Math.random() > p) {
        x++;
    }
    return x;
}

function animateDice(result) {
    const diceDiv = document.getElementById('dice');
    diceDiv.classList.add('rolling');
    diceDiv.textContent = '?';
    setTimeout(() => {
        diceDiv.classList.remove('rolling');
        diceDiv.textContent = result;
    }, 500);
}

document.getElementById('rollDice1').onclick = function() {
    console.log('Rolling standard dice...');
    const result = rollStandardDice();
    animateDice(result);
};

document.getElementById('rollDice2').onclick = function() {
        console.log('Rolling geometric dice...');
    const result = rollGeoDice(0.25);
    animateDice(result);
};