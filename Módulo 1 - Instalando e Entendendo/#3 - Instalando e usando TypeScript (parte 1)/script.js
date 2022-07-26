var number1 = document.getElementById('number1'), number2 = document.getElementById('number2'), button = document.getElementById('calculate'), result = document.getElementById('result');
// template function to calculate HTML inputs
var calculate = function (n1, n2) {
    return n1 + n2;
};
// add event to submit button to calculate HTML input values 
button.addEventListener('click', function () {
    result.innerHTML = calculate(number1.value, number2.value);
});
