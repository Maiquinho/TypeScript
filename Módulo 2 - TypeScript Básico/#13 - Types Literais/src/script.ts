/**
 * 
 * Os type literais geramente são usados quando tempos union types, ou seja "condicionais" informando que o type daquela expressão ou variável pode conter determinado valor ou outro valor.
 * 
 * O type literal basicamente é pré-determinar um valor específico para uma variável, nesse caso nos parâmetros de uma função.
 * 
 * Exemplo:
 * 
 */

function alignText(align: 'left' | 'center' | 'right', text: string){
    return `<div style="text-align: ${align} ;">${text}</div>`
}

alignText('center', 'olá, isto é um teste de type literals');