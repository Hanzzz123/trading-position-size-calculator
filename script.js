myHTMLNumberInput.onchange = setTwoNumberDecimal;

function setTwoNumberDecimal(event) {
    this.value = parseFloat(this.value).toFixed(2);
}