let searchField = document.getElementById("search-field");
let searchButton = document.getElementById("search-btn");
let resultsList = document.getElementById("results-list");
let resultsDetail = document.getElementById("results-detail");
let justiceName = document.getElementById("justice-name");
let justiceNameButton = document.getElementById("justice-name-button");
let presidentSelect = document.getElementById("president-select");
let stateSelect = document.getElementById("state-select");
let yearsInput = document.getElementById("years-input");

console.log("presidenSelect: ", presidentSelect.value);

async function loadRecords() {
let response = await fetch(
    "https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=50"
    + searchField.value
);


	console.log("Status" + response.status);
	
	let data = await response.json();
	let records = data.records;
	console.log("Records: " + records.length);
	
	buildTrends(records);
}

searchButton.addEventListener("click", function () {
	let record = records[0];
	let text = "";

records.forEach(function (record) {
  text = text + "• " + record.Name + " lives at least " + record["Minimum Life Span"] + " years. ";
});

document.getElementById("results-list").textContent = text;
});

async function loadRecords(searchValue) {
	let url =
		"https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=50"
		+ searchValue;
		
		let response = await fetch(url);
		let data = await response.json();
		let records = data.records;
		
		console.log("Records found:", records.length);
		
		if (records.length === 0) {
			resultsList.textContent = "No results found.";
		}
		
		return records[0];
}

justiceNameButton.addEventListener("click", async function () {
	let record = await loadRecords(justiceName.value);
	
	if (!record) return;
	
	resultsList.textContent = record.Name;
});

searchBtn.addEventListener("click", async function () {
	
	let searchString = "";
	
	if (justiceName.value) {
		searchString += justiceName.value + " ";
	}
	if (presidentSelect.value) {
		searchstring += presidentSelect.value + " ";
	}
	if (stateSelect.value) {
		searchString += stateSelect.value + " ";
	}
	if (yearsInput.value) {
		searchString += yearsInput.value;
}

	let record = await loadRecords(searchString.trim());
	
	if (!record) return;
	
	
	let name = record.Name;
	let appointedBy = record ["Appointed By"];
	let year = record["Year Appointed"];
	let party = record["Political Party"];
	let state = record["State"];
	let minYears = record["Minimum Life Span"];
	
	
	resultsList.textContent = 
		  "Name: " + name +
        " | Appointed By: " + appointedBy +
        " | Year: " + year +
        " | Party: " + party +
        " | State: " + state +
        " | Minimum Life Span: " + minYears;
});

function buildTrends(records) {
	let text = "";
	
	text = text + "This search returned " + records.length + " justices. ";

	let earliest = records[0]["Year Apointed"];
	
	
	records.forEach(function (record) {
		if (record["Year Appointed"] < earliest) {
			earliest = record["Year Appointed"];
	}
});

text = text + "The earliest appointment year in this group is " + earliest + ".";

document.getElementById("trends").textContent = text;
}