let searchField = document.getElementById("search-field");
let justiceName = document.getElementById("justice-name");
let justiceNameButton = document.getElementById("justice-name-button");
let presidentSelect = document.getElementById("president-select");


async function loadRecords() {
	let response = await fetch(
		"https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=50"
		+ presidentSelect.value
	);


	console.log("Status" + response.status);
	
	let data = await response.json(); 
	
	let records = data.records;
	console.log("Records: " + records.length);
	
	buildTrends(records);
}

justiceNameButton.addEventListener("click", async function () {
	let record = await loadRecords(presidentSelect.value);
	
	if (!record) return;
	
	resultsList.textContent = record.Name;
	console.log("record: ", record.Name);
});

function buildTrends(records) {
	let recordsArray = [];
	

	
	records.forEach(function (record) {
		if (record["Nominated by"] == presidentSelect.value) {
			recordsArray.push(record);
		}
	});
	console.log("recordsArray: ", recordsArray);
}