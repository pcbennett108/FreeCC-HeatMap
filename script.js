let url =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";
let req = new XMLHttpRequest();

let baseTemp;
let values = [];

let xScale;
let yScale;

let width = 1200;
let height = 600;
let padding = 60;

let canvas = d3.select("#canvas");
canvas.attr("width", width);
canvas.attr("height", height);

let generateScales = () => {};

let drawCells = () => {};

let drawAxes = () => {};

req.open("GET", url, true);
req.onload = () => {
  let data = JSON.parse(req.responseText);
  baseTemp = data["baseTemperature"];
  values = data["monthlyVariance"];
  console.log(baseTemp, values);
};

req.send();
