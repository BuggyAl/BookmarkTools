// 
// javascript:fetch("https://raw.githubusercontent.com/BuggyAl/BookmarkTools/main/Geometry/AreaCircle.js").then((res) => res.text().then((t) => eval(t)))
//

function areaCircle() {
    const radius = eval(String(prompt("Please enter the circle radius!")));
    alert("The area of the circle is: " + (Math.PI * (radius * radius)));
}
areaCircle();