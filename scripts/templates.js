function getInputFeldForPassword() {
    return `
        <input type="text" disabled>
        <button class="saveButton">
            <img src="./assets/icons/save.svg" alt="Save">
        </button>
    `;
}

function getUppercase() {
    return `
        <p>Include uppercase letters</p>
        <input type="checkbox" name="checkbox" id="checkbox">
    `;
}

function getLowercase() {
    return `
        <p>Include lowercase letters</p>
        <input type="checkbox" name="checkbox" id="checkbox">
    `;
}

function getNumbers() {
    return `
        <p>Include numbers</p>
        <input type="checkbox" name="checkbox" id="checkbox">
    `;
}

function getSymbols() {
    return `
        <p>Include symbols</p>
        <input type="checkbox" name="checkbox" id="checkbox">
    `;
}

function getButton() {
    return `
        <button class="password">Generate password</button>
    `;
}

