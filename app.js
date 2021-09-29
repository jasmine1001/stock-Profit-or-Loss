var initialPrice = document.querySelector('#initialPrice');
var quantity = document.querySelector('#quantity');
var current = document.querySelector('#current');

var submitBtn = document.querySelector('#tellBtn');
var outputBox = document.querySelector('#outputBox');

submitBtn.addEventListener('click', clickHandler);

function clickHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(quantity.value);
    var cp = Number(current.value);

    calcProfitAndLoss(ip, qty, cp);
}



function calcProfitAndLoss(initial, quan, curr) {
    if (initial > curr) {
        var loss = (initial - curr) * quan;
        var lossPercentage = (loss / initial) * 100;

        showOutput(`Hey the loss is ${loss} and loss percent is ${lossPercentage}%`);
        
    } else if (curr > initial) {
        var profit = (curr - initial) * quan;
        var profitPercentage = (profit / initial) * 100;
        showOutput(`Hey the profit is ${profit} and profit percent is ${profitPercentage}%`);
    } else {
        showOutput("No pain no gain , no gain no pain!")
    }
}

function showOutput(message) {
    if(initialPrice.value=='' || quantity.value=='' || current.value==''){
        alert('Please fill out all the fields!');
    }else{
        outputBox.innerHTML= message;
    }
   
}

