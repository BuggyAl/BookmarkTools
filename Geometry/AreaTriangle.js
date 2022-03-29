// 
// javascript:fetch("https://raw.githubusercontent.com/BuggyAl/BookmarkTools/main/Geometry/AreaTriangle.js").then((res) => res.text().then((t) => eval(t)))
//

function areaTriangle() {
    const base = eval(String(prompt("Please enter the base length!")));
    const height = eval(String(prompt("Please enter the height!")));
    alert("The area of the triangle is: " +  (base * height) / 2);
}
areaTriangle();