class Exercise1{
    constructor() {}

    sum7(elementIdGet, elementIdResult){
        var number = document.getElementById(elementIdGet).value;
        var result = parseFloat(number) + 7;
        document.getElementById(elementIdResult).innerText = result;
    }

    multiply(elementIdGet1, elementIdGet2, elementIdResult) {
        var number1 = document.getElementById(elementIdGet1).value;
        var number2 = document.getElementById(elementIdGet2).value;
    
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);
    
        //var result2 = number1 * number2;
    
        const result2 = () => number1 * number2;
        const productResult = result2();
        console.log(`${number1} * ${number2} =  ${number1 * number2}`);
        document.getElementById(elementIdResult).innerText = productResult;
    }

    capitalize(elementIdGet, elementIdResult) {
        var frase = document.getElementById(elementIdGet).value;
        // The manipulation of the string goes here
        var firstLetter = frase.charAt(0);
        var remainingLetters = frase.slice(1);
        var firstLetterCapitalized = firstLetter.toUpperCase();
        var capitalizedFrase = firstLetterCapitalized + remainingLetters;
    
        console.log(capitalizedFrase);
        document.getElementById(elementIdResult).innerText = capitalizedFrase +".";
    }

    lastletter(elementIdGet, elementIdResult) {
        var word = document.getElementById(elementIdGet).value;
        word = word.trim();
        var arrayWord = word.split("");
        var lastLetterCaptured = arrayWord[arrayWord.length-1];
        document.getElementById(elementIdResult).innerText = lastLetterCaptured;
        console.log(lastLetterCaptured);
    }

}

const exercise1 = new Exercise1();
window.add7 = (elementIdGet, elementIdResult) => exercise1.sum7(elementIdGet, elementIdResult);
window.multiply = (elementIdGet1, elementIdGet2, elementIdResult) => exercise1.multiply(elementIdGet1, elementIdGet2, elementIdResult);
window.capitalize = (elementIdGet, elementIdResult) => exercise1.capitalize(elementIdGet, elementIdResult);
window.lastletter = (elementIdGet, elementIdResult) => exercise1.lastletter(elementIdGet, elementIdResult);


