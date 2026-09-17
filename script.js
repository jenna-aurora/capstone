let searchField = document.getElementById("search-field");
let justiceName = document.getElementById("justice-name");
let justiceNameButton = document.getElementById("justice-name-button");
let presidentSelect = document.getElementById("president-select").value;

console.log("presidenSelect: ", presidentSelect);

async function loadRecords() {
	let response = await fetch(
		"https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets" 
		+ searchField.value
	);

	console.log("Status" + response.status);
	
	let data = await response.json();
	records = data.records;
	console.log("Records: " + records.length);
	
	buildTrends(records);
}