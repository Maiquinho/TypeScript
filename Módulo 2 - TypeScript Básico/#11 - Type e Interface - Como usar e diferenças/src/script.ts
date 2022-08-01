interface User {
    name: string,
    age: number,
    single: boolean
}

const userInfo = (user: User) => { 
    return `Hello ${user.name}, you have ${user.age} old.`; 
}