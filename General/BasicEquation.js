// 
// javascript:fetch("https://raw.githubusercontent.com/BuggyAl/BookmarkTools/main/General/BasicEquation.js").then((res) => res.text().then((t) => eval(t)))
//

function evalEquation() {    
    const equation = String(prompt("Enter your equation!"));    
    alert("The answer is: " + eval(equation));
}
evalEquation();