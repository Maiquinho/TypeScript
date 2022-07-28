function firstLetterUpperCase(name: string): string /* a função retornará uma string */ {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}

let myName = firstLetterUpperCase('michael');


// -------------------------------------------------------------- //


function sum(n1:number, n2:number): number{
    return n1 + n2;
}

let add = sum(10, 20);