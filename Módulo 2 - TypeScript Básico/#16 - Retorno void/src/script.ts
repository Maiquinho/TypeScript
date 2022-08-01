// O retorno void é utilizado quando a função não espera um retorno. ex:

function removeElement(el: HTMLElement): void {
    el.remove(); // não há retorno
}


/**
 *
 * Quando temos um type de função com o retorno void 
 * é possível retornar algum valor mesmo utilizando o void como tipo.
 *  
 */

type SomeFunction = () => void;

const something: SomeFunction = () => {
    return "whatever";
}