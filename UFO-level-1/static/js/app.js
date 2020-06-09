// from data.js
var tableData = data;


var tbody = d3.select("tbody");
//function to display table data
function displayTable(tableData){
    tbody.html("");
    tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo report object
    var cell = row.append("td");
    cell.text(value);
    });
    })};
    console.log(tableData)
displayTable(tableData)



// Select the button
var button = d3.select("#filter-btn");


// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  //filter the tableData to include only those records with the input date
  var filteredData = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredData);

  displayTable(filteredData)
 
};


