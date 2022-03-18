function pythagoreanTheorem() {    
    const num1 = eval(String(prompt("Please enter the expression of leg #1!")));
    const num2 = eval(String(prompt("Please enter the expression of leg #2!")));

    if (!isWhole(Math.sqrt(root))) {
        simplifyRadical(root);
    } else {
        alert("The hypontenuse is: " + Math.sqrt(root) + " (√" + (num1 * num1) + (num2 * num2) + ")");
    }
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
    alert("The hypotenuse is: " + outer + "√" + inner);
}

function isSquare (n) {
    return Math.sqrt(n) % 1 == 0;
}

function isWhole(n) {
    return Math.floor(n) == n;
}