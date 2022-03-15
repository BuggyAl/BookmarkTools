function areaTriangle() {
    const base = eval(String(prompt("Please enter the base length!")));
    const height = eval(String(prompt("Please enter the height!")));
    alert("The area of the triangle is: " +  (base * height) / 2);
}
areaTriangle();