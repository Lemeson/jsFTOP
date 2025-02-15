function error1(){
    const a = "Peace";
    const b = "Of ";
    //const c = `${a} ${b}`;
    //const c = a + " " + b;
    
    try{
        console.log(c);
    } catch(error){
        if (error instanceof ReferenceError) {
            const variableError = error.message.split(" ")[0];
            document.getElementById("reference-error1").innerText =
             `Define a variable called ${variableError}`;
        }
        console.log(error);

    }

}

function error2(){
    const a = 5;
    const b = 10;

    function add() {
    return c;
    }

    function print() {
    add();
    }

    print();
}

function helloWorld() {
    console.log "Hello World!"
  }
  