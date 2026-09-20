console.log("Hello World");


let justiceName = document.getElementById("justice-name");
let justiceNameButton = document.getElementById("justice-name-button");
/*let presidentSelect = document.getElementbyId("president-select");*/
let resultsList = document.getElementById("results-list");

let index = 0
let recordsArray = [];


async function loadRecords() {
	let response = await fetch("https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=114&search");
	console.log("Status" + response.status);
	let data = await response.json();
	records = data.records;
	console.log("Records: " + records.length);
}
	
function buildTrends() {
	let record = recordsArray[index];
}	
	recordsArray.forEach(function (record) {
		if (record["Nominated by"] == presidentSelect.value) {
			recordsArray.push(record);
		}
	});
	console.log("recordsArray: ", recordsArray);
	recordsArray.forEach(function (record) {
		
		buildTrends(records);
});

justiceNameButton.addEventListener("click", function () {
	let record = loadRecords(presidentSelect.value);
	
	if (!record) return;
	
	resultsList.textContent = record.Name;
	console.log("record: ", record,Name);
});