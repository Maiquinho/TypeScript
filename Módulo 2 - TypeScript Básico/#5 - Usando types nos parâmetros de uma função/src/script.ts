function firstLetterUpperCase(name: string) { // o tipo do parâmetro é string
    let firstLetter = name.charAt(0).toUpperCase();
    console.log(firstLetter + name.substring(1));
}

firstLetterUpperCase('michael');