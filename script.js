myHTMLNumberInput.onchange = setTwoNumberDecimal;
function setTwoNumberDecimal(event) {
    this.value = parseFloat(this.value).toFixed(2);
}

function result(){
    calculateRiskReward();

}



//create the rrr function
function calculateRiskReward(){

    let entryPrice = document.getElementById("entryprice").value;
    let stopLoss = document.getElementById("stoploss").value;
    let takeProfit = document.getElementById("takeprofit").value;

    let risk = entryPrice - stopLoss;
    let profit = takeProfit - entryPrice;

    let riskReward = risk / profit;

    document.getElementById("rrr").innerHTML = riskReward;
}