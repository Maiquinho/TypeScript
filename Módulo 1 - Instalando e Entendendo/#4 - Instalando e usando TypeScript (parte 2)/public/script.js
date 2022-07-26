var number1 = document.getElementById('number1'), number2 = document.getElementById('number2'), button = document.getElementById('calculate'), result = document.getElementById('result');
// define the parms as numbers 
var calculate = function (n1, n2) {
    return n1 + n2;
};
button.addEventListener('click', function () {
    // conversion the variable number1 & number2 into type numbers 
    result.innerHTML = calculate(+number1.value, +number2.value).toString();
});
