function add7() {
    var number = document.getElementById("numberInput").value;
    var result = parseFloat(number) + 7;
    document.getElementById("result").innerText = result;
}

function multiply() {
    var number1 = prompt("Please enter the first number: ");
    var number2 = prompt("Please enter the second number: ");

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    result2 = number1 * number2;
    console.log(`${number1} * ${number2} =  ${number1 * number2}`);

    document.getElementById("result2").textContent = result2;
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