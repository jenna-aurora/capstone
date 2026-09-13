let searchField = document.getElementById("search-field");
let searchButton = document.getElementById("search-btn");
let resultsButton = document.getElementById("results-btn");


async function loadRecords() {
	let response = await fetch(
		"https://jenna-a-cardenas.workers.dev/api/v1/datasets/student-data-api.jenna-a-cardenas.workers.dev/records?search=" 
		+ searchBox.value
		);
	console.log("Status" + response.status);
	
	let data = await response.json();
	let records = data.records;
	console.log("Records: " + records.length);
}


searchButton.addEventListener("click", function () {
	document.getElementById("results-list").textContent = searchField.value;
	loadRecords();
});


resultButton.addEventListener("click", function () {
	document.getElementById("results-list").textContent = searchField.value;
});
