function evalEquation() {    
    const equation = String(prompt("Enter your equation!"));    
    alert("The answer is: " + eval(equation));
}
evalEquation();