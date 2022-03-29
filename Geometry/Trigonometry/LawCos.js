// 
// javascript:fetch("https://raw.githubusercontent.com/BuggyAl/BookmarkTools/main/Geometry/Trigonometry/LawCos.js").then((res) => res.text().then((t) => eval(t)))
//

function lawCos() {    
    const a = eval(String(prompt("Please enter the expression of leg #1!")));
    const b = eval(String(prompt("Please enter the expression of leg #2!")));
    const angC = eval(String(prompt("Please enter angle C!")));
    
    const cos = Math.cos(angC * Math.PI / 180);

    const a2 = a * a;
    const b2 = b * b;

    const ans = a2 + b2 - (2 * a * b * cos);

    alert("The answer is: " + Math.sqrt(ans));
}
lawCos();