console.log("Hello World");


let justiceName = document.getElementById("justice-name");
let recordsButton = document.getElementById("records-button");
let presidentSelect = document.getElementById("presidentSelect");
let resultsList = document.getElementById("results-list");
let stateSearchButton = document.getElementById("state-search-button");

let index = 0
let recordsArray = [];

console.log("President-select:" + presidentSelect.value)
async function loadRecords() {
	let response = await fetch("https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=100");
	console.log("Status" + response.status);
	let data = await response.json();
	
	let datasetResponse = data[0];
	console.log(datasetResponse[0].justice + ": years of service is " + datasetResponse[0].tenureLength + "." );
	/*records = data.records;
	console.log("Records: " + records.length);*/
	
	showRecord();
}

function showDataset() {
 let dataset = records[index];
 
 document.getElementById("").textContent = dataset[""];
 document.getElementById("").textContent = dataset.JusticeNumber + " - " + dataset.State;
 document.getElementById("").textcontent = (index + 1) + " of " + records.length	
}
	
function buildTrends() {
	let dataset = recordsArray[index];
}	
	recordsArray.forEach(function (Nominatedby) {
		if (dataset["Nominated by"] == presidentSelect.value) {
			recordsArray.push(dataset);
		}
	});
	console.log("recordsArray: ", recordsArray);
	recordsArray.forEach(function (dataset) {
		
		buildTrends(records);
});

function buildTrends(records) {
	let recordsArray = [];
	



	records.forEach(function (dataset) {
		
		if (dataset["Nominated by"] == presidentSelect.value) {
			recordsArray.push(datset);
		}
	});
	console.log("recordsArray: ", recordsArray);
}

recordsButton.addEventListener("click", async function () {
	let dataset = await loadRecords(presidentSelect.value);
	
	if (!dataset) return;
	
	resultsList.textContent = dataset.Name;
	console.log("dataset: ", dataset.Name);
});