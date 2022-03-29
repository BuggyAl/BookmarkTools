// 
// javascript:fetch("https://raw.githubusercontent.com/BuggyAl/BookmarkTools/main/Geometry/AreaRectangle.js").then((res) => res.text().then((t) => eval(t)))
//

function areaRect() {
    const side1 = eval(String(prompt("Please enter the first side!")));
    const side2 = eval(String(prompt("Please enter the second side!")));
    alert("The area of the rectangle is: " + side1 * side2);
}
areaRect();