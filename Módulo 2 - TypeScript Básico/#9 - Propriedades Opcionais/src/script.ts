function userSummary (user: 
    { name: string, age?: /* ao adicionar o ? a propriedade se torna opcional */ number }
    ){
    if(user.age !== undefined){
        return `Olá ${user.name} você tem ${user.age} anos de idade.`;
    }else{
        return `Olá ${user.name}. Tudo bem?`;
    }
}


// implementation 

let me = {
    name: 'Michael'
}
userSummary(me);
