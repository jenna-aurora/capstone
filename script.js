console.log("Hello World");
let nextButton = document.getElementById("next-button");
let showTwenty = document.getElementById("show-twenty");
let showFifty = document.getElementById("show-fifty");
let showOneHundred = document.getElementById("show-one-hundred");
let backButton = document.getElementById("back-button");
let resetButton = document.getElementById("resetButton")
let presidentSelect = document.getElementById("presidentSelect");
let resultsList = document.getElementById("results-list");

let index = 0;
let datasets = [];

let currentField = "filter";
let currentLimit = 100;

let now = new Date();
let greeting = document.getElementById("greeting-1");
	greeting.textContent = now.getHours();
let stamp = document.getElementById("stamp-1");
	stamp.textContent = now.toDateString();


resultsList.textContent = "Loading...";

async function loadDatasets(howMany) {
	let response = await fetch("https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=" + howMany);
	console.log("Status" + response.status);
	let responseData = await response.json();
	datasets = responseData.records || [];
	console.log("datasets length: " + datasets.length);
	let text = "";
	datasets.forEach(function (data) {
		console.log("Available API properties:", Object.keys(data));
		let fieldValue = data[currentField] || "N/A";
		text = text + "Justice: " + data.Justice + " | " + currentField + " : " + fieldValue + "\n\n";
	});
	resultsList.textContent = text;
	}
	showTwenty.addEventListener("click", function () {
		currentLimit = 20;
		loadDatasets(currentLimit);
	});
	showFifty.addEventListener("click", function () {
		currentLimit = 50;
		loadDatasets(currentLimit);
	});
	showOneHundred.addEventListener("click", function () {
		currentLimit = 100;
		loadDatasets(currentLimit);
	});
	resetButton.addEventListener("click", function () {
		index = 0;
		presidentSelect.value = "filter";
		resultsList.textContent = "Loading...";
	});
	presidentSelect.addEventListener("change", function () {
		currentField = presidentSelect.value;
		loadDatasets(0);
	});