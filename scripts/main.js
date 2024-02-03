let outputText = '';
function encrypt() {
    clearOutputField();
    const inputText = getInputText();
    outputText = inputText
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
    setOutputText(outputText);
}

function decrypt() {
    clearOutputField();
    const inputText = getInputText();
    outputText = inputText
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');
    setOutputText(outputText);
}

function getInputText() {
    const inputTextElement = document.getElementById("input-text");
    return inputTextElement.value;
}

function setOutputText(text) {
    document.getElementById("output-text").value = text;
}

function clearOutputField() {
    outputText = '';
    document.getElementById("output-text").value = "";
}