// 
// javascript:fetch("https://raw.githubusercontent.com/BuggyAl/BookmarkTools/main/General/SquareRoot.js").then((res) => res.text().then((t) => eval(t)))
//

function squareRoot() {    
    const expression = String(prompt("Enter your expression!"));    
    alert("The answer is: " + Math.sqrt(expression));
}
squareRoot();