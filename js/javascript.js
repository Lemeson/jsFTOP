function add7() {
    var number = document.getElementById("numberInput").value;
    var result = parseFloat(number) + 7;
    document.getElementById("result").innerText = result;
    return( console.log(result));
}