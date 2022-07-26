let 
number1 = document.getElementById('number1') as HTMLInputElement,
number2 = document.getElementById('number2') as HTMLInputElement,
button = document.getElementById('calculate') as HTMLElement,
result = document.getElementById('result') as HTMLElement;


// define the parms as numbers 
const calculate = (n1: number, n2: number) => { 
    return n1 + n2;
}

button.addEventListener('click', () =>{
    // conversion the variable number1 & number2 into type numbers 
    result.innerHTML = calculate(+number1.value, +number2.value).toString();
});