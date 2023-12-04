const lengthNumber = document.getElementById('length-number');
const lengthRange = document.getElementById('length-range');

lengthRange.addEventListener('input', function() {
    lengthNumber.value = lengthRange.value;
});

lengthNumber.addEventListener('input', function() {
    lengthRange.value = lengthNumber.value;
});

function calcResult() {
    let knifeTypeCoef = document.getElementById('knife-type').value;
    let steelQualityCoef = document.querySelector('input[name="radio-button--quality"]:checked').value;
    let lengthCost = document.getElementById('length-number').value * 2.5;
    let operationSelectors = document.querySelectorAll('input[name="checkbox--operation"]:checked');
    
    let operationTypeCoef = calcOperationSelectors(operationSelectors);

    let result = lengthCost + (lengthCost * knifeTypeCoef) + (lengthCost * steelQualityCoef) + (lengthCost * operationTypeCoef);
    
    showResult( result );
}

function calcOperationSelectors(operationSelectors) {
    let operationTypeCoef = 0;

    for (let i = 0; i < operationSelectors.length; i++) {
        operationTypeCoef += parseFloat(operationSelectors[i].value);
    };

    return operationTypeCoef;
}

function showResult(result) {
    document.getElementById("result-label").innerText = result;
}