function showText( age: number | string ){
    if(typeof(age) !== 'string'){
        console.log( age );
    }else{
        console.log( age.toUpperCase() );
    }
}

showText(10);
showText('10');