console.log("Hello World");

let showFive = document.getElementById("show-five");
let showTen = document.getElementById("show-ten");
let showTwenty = document.getElementById("show-twenty");
let presidentSelect = document.getElementById("presidentSelect");
let resultsList = document.getElementById("results-list");



showFive.addEventListener("click", function () {
	document.getElementById("results-list").textContent = "5";
});
showTen.addEventListener("click", function () {
	document.getelementByIdyId("results-list").textContent = "10";
});
showTwenty.addEventListener("click", function () {
	document.getElementById("results-list").textContent = "20";
});


console.log("President-select:" + presidentSelect);
async function loadRecords(howMany) {
	let response = await fetch("https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=" + howMany);
	console.log("Status" + response.status);
	let data = await response.json();
	let datasets = data.records;
	console.log("Records: " + datasets.length);
	}
	showFive.addEventListener("click", function () {
		loadRecords(5);
	});
	showTen.addEventListener("click", function () {
		loadRecords(10);
	});
	showTwenty.addEventListener("click", function () {
		loadRecords(20);
	});
	
	let data = datasets[0];
	
	document.getElementById("results-list").textContent = data.justice;
	document.getelementById("results-detail").textcontent = data["Tenure Length"];
