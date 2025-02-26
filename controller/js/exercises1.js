function add7() {
    var number = document.getElementById("numberInput").value;
    var result = parseFloat(number) + 7;
    document.getElementById("result").innerText = result;
}

function multiply() {
    var number1 = document.getElementById("exercise2N1").value;
    var number2 = document.getElementById("exercise2N2").value;

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    //var result2 = number1 * number2;

    const result2 = () => number1 * number2;
    const productResult = result2();
    
    console.log(`${number1} * ${number2} =  ${number1 * number2}`);

    document.getElementById("result2").innerText = productResult;
}

function capitalize() {
    var frase = document.getElementById("capitalize").value;
    // The manipulation of the string goes here
    var firstLetter = frase.charAt(0);
    var remainingLetters = frase.slice(1);
    var firstLetterCapitalized = firstLetter.toUpperCase();
    var capitalizedFrase = firstLetterCapitalized + remainingLetters;

    console.log(capitalizedFrase);
    document.getElementById("result3").innerText = capitalizedFrase +".";
}

function lastletter() {
    word = document.getElementById("lastletter").value;
    word = word.trim();
    var arrayWord = word.split("");
    var lastLetterCaptured = arrayWord[arrayWord.length-1];
    document.getElementById("result4").innerText = lastLetterCaptured;
    console.log(lastLetterCaptured);
}