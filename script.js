function add(x) {
    document.getElementById('screen').value += x;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function calculate() {
    let y = document.getElementById('screen').value;
    document.getElementById('screen').value = eval(y);
}
