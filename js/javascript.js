function add7() {
    var number = document.getElementById("numberInput").value;
    var result = parseFloat(number) + 7;
    document.getElementById("result").innerText = result;
    return( console.log(result));
}

function multiply() {
    var number1 = prompt("Please enter the first number: ");
    var number2 = prompt("Please enter the second number: ");

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    result2 = number1 * number2;
    console.log(`${number1} * ${number2} =  ${number1 * number2}`);

    

    document.getElementById("result2").textContent = result2
}