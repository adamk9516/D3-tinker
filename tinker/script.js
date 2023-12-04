// // Set dimensions and margins for the chart

// const margin = { top: 70, right: 30, bottom: 40, left: 80 };
// const width = 1200 - margin.left - margin.right;
// const height = 500 - margin.top - margin.bottom;

// // Set up the x and y scales

// const x = d3.scaleTime()
//   .range([0, width]);

// const y = d3.scaleLinear()
//   .range([height, 0]);

// // Create the SVG element and append it to the chart container

// const svg = d3.select("#chart-container")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", `translate(${margin.left},${margin.top})`);

// // Create a fake dataset

// const dataset = [
//   { date: new Date("2022-01-01"), value: 280 },
//   { date: new Date("2022-02-01"), value: 270 },
//   { date: new Date("2022-03-01"), value: 110 },
//   { date: new Date("2022-04-01"), value: 366 },
//   { date: new Date("2022-05-01"), value: 267 },
//   { date: new Date("2022-06-01"), value: 212 },
//   { date: new Date("2022-07-01"), value: 350 },
//   { date: new Date("2022-08-01"), value: 430 },
//   { date: new Date("2022-09-01"), value: 240 },
//   { date: new Date("2022-10-01"), value: 610 },
//   { date: new Date("2022-11-01"), value: 770 },
//   { date: new Date("2022-12-01"), value: 390 }
// ];

// // Define the x and y domains

// x.domain(d3.extent(dataset, d => d.date));
// y.domain([0, d3.max(dataset, d => d.value)]);

// // Add the x-axis

// svg.append("g")
//   .attr("transform", `translate(0,${height})`)
//   .call(d3.axisBottom(x)
//     .ticks(d3.timeMonth.every(1))
//     .tickFormat(d3.timeFormat("%b %Y")));


// // Add the y-axis

// svg.append("g")
//   .call(d3.axisLeft(y))

// // Create the line generator

// const line = d3.line()
//   .x(d => x(d.date))
//   .y(d => y(d.value));

// // Add the line path to the SVG element

// svg.append("path")
//   .datum(dataset)
//   .attr("fill", "none")
//   .attr("stroke", "steelblue")
//   .attr("stroke-width", 1)
//   .attr("d", line);

const data = [
  { name: 'Adam', score:92 },
  { name: 'Shelly', score:55 },
  { name: 'Mueller', score:77 },
  { name: 'Daniel', score:100 },
  { name: 'Dong', score:65 },
  { name: 'William', score:50 },
  { name: 'Stefanie', score:84 },
];

const width = 800;
const height = 400;
const margin = { top: 50, bottom: 50, left: 50, right:50};

const svg = d3.select('#chart-container')
  .append('svg')
  .attr('height', height - margin.top - margin.bottom)
  .attr('width', margin - margin.top - margin.bottom)
  .attr('viewbox', [0, 0, width, height]);

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1);

const y = d3.scaleLinear()
  .domain([0, 100])
  .range([height - margin.bottom, margin.top])

  svg
    .append('g')
    .attr('fill', 'royalblue')
    .selectAll('rect')
    .data(data.sort((a, b) => d3.descending(a.score, b.score)))
    .join('rect')
      .attr('x', (d, i)=> x(i))
      .attr('y', (d)=> y(d.score))
      .attr('height', d=> y(0) - y(d.score))
      .attr('width', x.bandwidth())

function xAxis(g){
  g.attr('transform', `translate(0, ${height - margin.bottom})`)
  .call(d3.axisBottom(x).tickFormat(i => data[i].name))
}

function yAxis(g){

}

svg.append('g').call(xAxis);
svg.node();
