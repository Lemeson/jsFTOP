function add7(event) {
    if (event) {
        event.preventDefault();
    }

    const numberInput = document.getElementById("numberInput").value;
    const result = parseFloat(numberInput) + 7;
    document.getElementById("result").textContent = "Result: " + result;
}