function simplifyRadical() {    
    const full = eval(String(prompt("Please enter the number in the radical!")));
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
    alert("Your simplified radical is: " + outer + "√" + inner);
}
simplifyRadical();

function isSquare (n) {
    return Math.sqrt(n) % 1 == 0;
}

function isWhole(n) {
    return Math.floor(n) == n;
}