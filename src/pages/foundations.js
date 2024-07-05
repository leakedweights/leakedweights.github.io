import { renderNav } from "../nav";
import '../style.css';
import * as d3 from 'd3';

// Function to render the D3 force field graph
function renderGraph() {
  // Set up dimensions
  const width = 800;
  const height = 600;

  // Create an SVG container
  const svg = d3.select("#graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Define arrowhead marker
  svg.append("defs").append("marker")
    .attr("id", "arrowhead")
    .attr("viewBox", "-0 -5 10 10")
    .attr("refX", 20)
    .attr("refY", 0)
    .attr("orient", "auto")
    .attr("markerWidth", 5)
    .attr("markerHeight", 5)
    .attr("xoverflow", "visible")
    .append("svg:path")
    .attr("d", "M 0,-5 L 10 ,0 L 0,5")
    .attr("fill", "#aaa")
    .style("stroke", "none");

  // Define nodes and links
  const nodes = [
    { id: "A" },
    { id: "B" },
    { id: "C" },
    { id: "D" }
  ];

  const links = [
    { source: "A", target: "B" },
    { source: "A", target: "C" },
    { source: "A", target: "D" },
    { source: "B", target: "C" }
  ];

  // Create a simulation with forces
  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(100))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, height / 2));

  // Draw the links
  const link = svg.selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .attr("stroke", "#aaa")
    .attr("stroke-width", 2)
    .attr("marker-end", "url(#arrowhead)");

  // Draw the nodes
  const node = svg.selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", 10)
    .style("fill", "#69b3a2")
    .style("cursor", "pointer");

  // Add labels
  const label = svg.selectAll("text")
    .data(nodes)
    .enter()
    .append("text")
    .attr("dy", -3)
    .text(d => d.id);
  
  // Add drag functionality
  const drag = d3.drag()
  .on("start", (event, d) => {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  })
  .on("drag", (event, d) => {
    d.fx = event.x;
    d.fy = event.y;
  })
  .on("end", (event, d) => {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  });

  node.call(drag);

  node.on("click", function(event, d) {
    // Remove any existing tooltips
    d3.selectAll('.tooltip').remove();

    // Get the current node position
    const [x, y] = [d.x, d.y];

    // Append a tooltip box
    svg.append("foreignObject")
      .attr("class", "tooltip")
      .attr("x", x + 10) // Offset to the right of the node
      .attr("y", y - 20) // Offset slightly above the node
      .attr("width", 100)
      .attr("height", 500)
      .append("xhtml:div")
      .style("background", "white")
      .style("border", "1px solid #000")
      .style("padding", "5px")
      .html(`<strong>${d.id}</strong><br>Additional info`);
  });

  // Update positions each tick
  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    label
      .attr("x", d => d.x)
      .attr("y", d => d.y);
  });
}

export function renderMap() {
  return `
    <div>
      ${renderNav()}
      <h1>Map of Foundations</h1>
      <p>
        This page contains a directed graph representing a subset of my knowledge, inspired by the axiomatic method.
        I always try to fit new information into a system built from first principles.
        The connections may be too loose to treat seriously at times.
      </p>
      <div id="graph"></div>
    </div>
  `;
}

const app = document.getElementById('app');

if (app) {
  app.innerHTML = renderMap();
  renderGraph(); // Call renderGraph after rendering the HTML
}
