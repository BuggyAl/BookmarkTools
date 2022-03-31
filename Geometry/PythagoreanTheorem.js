// 
// javascript:fetch("https://raw.githubusercontent.com/BuggyAl/BookmarkTools/main/Geometry/PythagoreanTheorem.js").then((res) => res.text().then((t) => eval(t)))
//

function pythagoreanTheorem() {        
    const num1 = eval(String(prompt("Please enter the expression of leg #1!")));    
    const num2 = eval(String(prompt("Please enter the expression of leg #2!")));    
    const root = (num1 * num1) + (num2 * num2);    
    var ans = Math.sqrt(root);    
    const simplified = simplifyRadical(root);
    alert("The answer is: " + ans + " (" + simplified + ")");
}
pythagoreanTheorem();

function simplifyRadical(full) {    
    let maxSquareFactor = 0;
    let outer = 0;
    let inner = 0;
    for (let i = 0; i < full; i++) {
        if (!(isWhole(full / i))) { continue; }
        if (!(isSquare(i))) { continue; }
        if (!(i > maxSquareFactor)) {continue;}
        maxSquareFactor = i;
        outer = Math.sqrt(maxSquareFactor);
        inner = full / i;
    }
    if (outer != 1) {
        return outer + "√" + inner;   
    } else {
        return "√" + inner;
    }
}

function isSquare (n) {
    return Math.sqrt(n) % 1 == 0;
}

function isWhole(n) {
    return Math.floor(n) == n;
}
