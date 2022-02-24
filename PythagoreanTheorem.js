function pythagoreanTheorem() {    
    const num1 = eval(String(prompt("Please enter the expression of leg #1!")));
    const num2 = eval(String(prompt("Please enter the expression of leg #2!")));
    alert("The answer is: " + Math.sqrt((num1 * num1) + (num2 * num2)));
}
pythagoreanTheorem();