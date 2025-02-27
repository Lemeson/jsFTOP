class ErrorHandler {
    constructor() {}

    handleReferenceError(error, elementId) {
        if (error instanceof ReferenceError) {
            const variableError = error.message.split(" ")[0];
            document.getElementById("reference-error1").innerText =
             `Define a variable called ${variableError}`;
        }
        console.log(error);
    }

    handleStackError(error, elementId) {
        document.getElementById("stack-error2").innerText = error;
        document.getElementById("stack-error2").style.color = "#A3201F";
        document.getElementById("stack-console-error2").innerText = "Para acessar \
        o stack abra o console do navegador e gere o erro novamente \n\n";
        console.log(error);
    }
}

class ErrorExample{
    constructor() {
        this.errorHandler = new ErrorHandler()
    }

    error1(){
        try{
            console.log(c);
        }catch(error){
            this.errorHandler.handleReferenceError(error, "reference-error1");
        }
    }

    error2(){
        try{
            function add() {
                return c;
                }
            
                function print() {
                add();
                }
                print();
        }catch(error){
            his.errorHandler,handleStackError(error, "stack-error2");
        }
    }

    helloWorld() {
        console.log("Hello World!");
    }
}

// function error1(){
//     const a = "Peace";
//     const b = "Of ";
//     //const c = `${a} ${b}`;
//     //const c = a + " " + b;
    
//     try{
//         console.log(c);
//     } catch(error){
//         if (error instanceof ReferenceError) {
//             const variableError = error.message.split(" ")[0];
//             document.getElementById("reference-error1").innerText =
//              `Define a variable called ${variableError}`;
//         }
//         console.log(error);
//     }
// }

// function error2(){
//     const a = 5;
//     const b = 10;

//     try {
//         function add() {
//             return c;
//             }
        
//             function print() {
//             add();
//             }
//             print();

//     } catch(error){
//         document.getElementById("stack-error2").innerText = error;
//         document.getElementById("stack-error2").style.color = "#A3201F";
//         document.getElementById("stack-console-error2").innerText = "Para acessar \
//         o stack abra o console do navegador e gere o erro novamente \n\n";
//         console.log(error);
//     }
// }

// function helloWorld(){
//         console.log("Hello World!");
// }




  