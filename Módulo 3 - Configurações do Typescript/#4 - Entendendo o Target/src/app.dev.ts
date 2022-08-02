type Login = (name: string, age: number, password: string) => boolean;

const userLogin:Login = (userName, userAge, userPassword) => {
    if(userName != '' && userAge != 0 && userPassword != ''){
        return true;
    }else{
        return false;
    }
}

userLogin('Michael', 21, 'dsKDJnbfue867');