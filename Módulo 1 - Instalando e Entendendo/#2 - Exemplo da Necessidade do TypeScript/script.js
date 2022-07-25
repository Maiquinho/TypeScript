let number1 = document.getElementById('number1'),
number2 = document.getElementById('number2'),
button = document.getElementById('calculate'),
result = document.getElementById('result');


// template function to calculate HTML inputs
const calculate = (n1, n2) => { 
    if(typeof n1 == 'number' && typeof n2 == 'number'){
        return n1 + n2;
    }else {
        return +n1 + +n2;
    }
}

// add event to submit button to calculate HTML input values 
button.addEventListener('click', () =>{
    result.innerHTML = calculate(number1.value, number2.value);
});