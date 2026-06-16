function getInputFeldForPassword() {
    return `
        <div class="inputButton">
            <input class="generatorField" type="text" disabled>
            <button class="saveButton">
                <img class="saveImg" src="./assets/icons/save.svg" alt="Save">
            </button>
        </div>
    `;
}

function getUppercase() {
    return `
        <div class="pContainer">
            <p>Include uppercase letters</p>
            <input class="input" type="checkbox" name="checkbox" id="checkbox">
        </div>
    `;
}

function getLowercase() {
    return `
        <div class="pContainer lowercase">
            <p>Include lowercase letters</p>
            <input class="input" type="checkbox" name="checkbox" id="checkbox">
        </div>
    `;
}

function getNumbers() {
    return `
        <div class="pContainer numbers">
            <p>Include numbers</p>
            <input class="input" type="checkbox" name="checkbox" id="checkbox">
        </div>
    `;
}

function getSymbols() {
    return `
        <div class="pContainer symbols">
            <p>Include symbols</p>
            <input class="input" type="checkbox" name="checkbox" id="checkbox">
        </div>
    `;
}

function getButton() {
    return `
        <button class="password">Generate password</button>
    `;
}

