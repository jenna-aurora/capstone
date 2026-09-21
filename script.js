console.log("Hello World");


let justiceName = document.getElementById("justice-name");
let recordsButton = document.getElementById("records-button");
let presidentSelect = document.getElementById("president-select");
let resultsList = document.getElementById("results-list");
let stateSearchButton = document.getElementById("state-search-button");

let index = 0
let recordsArray = [];

console.log("President select:", presidentSelect.value)
async function loadRecords() {
	let response = await fetch("https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=114&search");
	console.log("Status" + response.status);
	let data = await response.json();
	records = data.records;
	console.log("Records: " + records.length);
	
	showRecord();
}

/*function showRecord() {
 let record = records[index];
 
 document.getElementById("").textContent = record[""];
 document.getElementById("").textContent = record.JusticeNumber + " - " + record.State;
 document.getElementById("").textcontent = (index + 1) + " of " + records.length	
}*/
	
/*function buildTrends() {
	let record = recordsArray[index];
}	
	recordsArray.forEach(function (Nominatedby) {
		if (record["Nominated by"] == presidentSelect.value) {
			recordsArray.push(record);
		}
	});
	console.log("recordsArray: ", recordsArray);
	recordsArray.forEach(function (record) {
		
		buildTrends(records);
});*/

/*function buildTrends(records) {
	let recordsArray = [];
	



	records.forEach(function (record) {
		
		if (record["Nominated by"] == presidentSelect.value) {
			recordsArray.push(record);
		}
	});
	console.log("recordsArray: ", recordsArray);
}*/

/*recordsButton.addEventListener("click", async function () {
	let record = await loadRecords(presidentSelect.value);
	
	if (!record) return;
	
	resultsList.textContent = record.Name;
	console.log("record: ", record.Name);
});*/

/*justiceNameButton.addEventListener("click", async function () {
	let record = await loadRecords(presidentSelect.value);
	
	if (!record) return;
	
	resultsList.textContent = record.Name;
	console.log("record: ", record.Name);
});*/
