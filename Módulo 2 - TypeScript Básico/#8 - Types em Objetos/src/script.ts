function userSummary (user: { name: string, age: number }){
    return `Olá ${user.name} você tem ${user.age} anos de idade.`;
}


// implementation 

let me = {
    name: 'Michael',
    age: 21
}
userSummary(me);
