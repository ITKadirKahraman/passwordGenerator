function init() {
    renderCardContents();
}

function renderCardContents() {
    document.getElementById('inputAndGarbage').innerHTML = getInputFeldForPassword();
    document.getElementById('uppercase').innerHTML = getUppercase();
    document.getElementById('lowercase').innerHTML = getLowercase();
    document.getElementById('numbers').innerHTML = getNumbers();
    document.getElementById('symbols').innerHTML = getSymbols();
    document.getElementById('button').innerHTML = getButton();
}