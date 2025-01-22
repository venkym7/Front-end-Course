
// Task 2.1: Global Scope
let globalVariable = "I am global";

// Task 2.2: Function Scope
function testFunction() {
    let functionVariable = "I am in function";
    console.log(globalVariable);      
    console.log(functionVariable);    
}
testFunction()

// Task 2.3: Block Scope
if (true) {
    let blockVariable = "I am in block";
    const alsoInBlock = "Me too";
    var notActuallyBlocked = "I can escape!";
    console.log(blockVariable);       // Works here
}
// console.log(blockVariable);        // Will cause error
console.log(notActuallyBlocked);     // Works! (but avoid this)






