class ErrorHandler {
    constructor() {}

    handleReferenceError(error, elementId) {
        if (error instanceof ReferenceError) {
            const variableError = error.message.split(" ")[0];
            document.getElementById(elementId).innerText = 
                `Define a variable called ${variableError}`;
        }
        console.log(error);
    }

    handleStackError(error, elementId) {
        document.getElementById(elementId).innerText = error;
        document.getElementById(elementId).style.color = "#A3201F";
        document.getElementById("stack-console-error2").innerText = 
            "Para acessar o stack abra o console do navegador e gere o erro novamente \n\n";
        console.log(error);
    }
}

class ErrorExample {
    constructor() {
        this.errorHandler = new ErrorHandler();
    }

    error1() {
        try {
            console.log(c); // c is undefined, causing ReferenceError
        } catch (error) {
            this.errorHandler.handleReferenceError(error, "reference-error1");
        }
    }

    error2() {
        try {
            function add() {
                return c; // c is undefined, causing an error
            }

            function print() {
                add();
            }
            print();
        } catch (error) {
            this.errorHandler.handleStackError(error, "stack-error2");
        }
    }

    helloWorld() {
        console.log("Hello World!");
    }
}

// Create an instance that can be accessed globally
const errorExample = new ErrorExample();

// Make functions accessible in HTML
window.error1 = () => errorExample.error1();
window.error2 = () => errorExample.error2();
window.helloWorld = () => errorExample.helloWorld();
