// selection.remove()

let circle = d3.select("circle");
console.log(circle);

let circleRemoved = circle.remove();
console.log(circleRemoved);

let rect = d3.select("rect");
console.log(rect);

let rectRemoved = rect.remove();
console.log(rectRemoved);

d3.select("svg").remove();