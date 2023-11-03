myHTMLNumberInput.onchange = setTwoNumberDecimal;
const elementID = document.getElementById("result-card");

function setTwoNumberDecimal(event) {

    this.value = parseFloat(this.value).toFixed(2);
}

function result(){
    createResultCard();

}

//create the rrr function
function calculateRiskReward(){

    let entryPrice = document.getElementById("entryprice").value;
    let stopLoss = document.getElementById("stoploss").value;
    let takeProfit = document.getElementById("takeprofit").value;

    let risk = entryPrice - stopLoss;
    let profit = takeProfit - entryPrice;

    let riskReward = risk / profit;

    return "Your risk reward is " + "1: " + riskReward;
}

function createResultCard(){

    const rrr = document.createElement("div");

    // rrr.textContent = calculateRiskReward();

    const card = document.getElementById("result-card");


    card.innerHTML = "<span class='result-card'</span>" + calculateRiskReward();
    //document.getElementById("result-card").innerHTML = "<span class='result-card'</span>"
    // document.getElementById("rrr").innerHTML = calculateRiskReward();

    card.appendChild(rrr);


}