// selection.clone(deep)

let svg = d3.select("svg");
console.log(svg);

let svgClone = svg.clone();
console.log(svgClone);

svgClone = svg.clone(true);
console.log(svgClone);