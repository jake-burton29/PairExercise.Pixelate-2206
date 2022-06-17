// Your code here
const table = document.getElementsByTagName("table")[0];

function makeRow() {
  const rowCell = document.createElement("tr");
  for (let i = 0; i < 2; i++) {
    let cell = document.createElement("td");
    rowCell.appendChild(cell);
  }
  table.appendChild(rowCell);
}
let chosenColor = `red`;
function colorized(event) {
  console.log("clicked!");
  const tar = event.target;
  if (tar.class === undefined) {
    tar.className = `${chosenColor}`;
  }
}

const select = document.querySelector("select");
select.addEventListener("change", function (event) {
  chosenColor = event.target.value;
});

table.addEventListener("click", colorized);
const addRowButton = document.querySelector("#add-row");
addRowButton.addEventListener("click", makeRow);
