function areaCircle() {
    const radius = eval(String(prompt("Please enter the circle radius!")));
    alert("The area of the circle is: " + (Math.PI * (radius * radius)));
}
areaCircle();