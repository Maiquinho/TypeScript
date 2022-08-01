/** 
 * 
 * Pelo fato de apenas o elemento input ter um value nativamente, quando tentamos acessar o value de um elemento utilizando TypeScript vamos nos deparar com o erro:
 * 
 * "A propriedade 'value' não existe no tipo 'Element'.ts(2339)"
 * 
 * */

let inputName = document.querySelector('#inputName');
console.log(inputName.value);


/** 
 * 
 * Para corrigir este erro precisamos informar o TypeScript que esse elemento é um HTMLInputElement:
 * 
 * */

let inputName2 = document.querySelector('#inputName2') as HTMLInputElement;
console.log(inputName2.value);