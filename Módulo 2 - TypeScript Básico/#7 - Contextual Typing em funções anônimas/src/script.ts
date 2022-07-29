let names = ['Michael', 'Matheus', 'Santos', 'Silva', 56];

// o contextual typing é uma forma do typescript informar que em determinado local do código não é possível acessar determinado método (pro exemplo) pois o tipo de dado não é compatível com esse método
// names.forEach(function(name){
//     console.log(name.toLocaleUpperCase());
// })

// nesse caso usamos uma condicional básica para chegar os tipos de dados


names.forEach(function(name){
    if(typeof(name) === 'string'){
        console.log(name.toUpperCase());
    }else{
        console.log(name);
    }
})