

let appointedByButton = document.getElementById("appointed-by-button");
let justiceName = document.querySelector("#justice-name");
let resultsList = document.getElementById("results-list");
let justiceImage = document.elementById("justice-image");
console.log("justiceImage:", justiceImage);

let justiceData = [];
let index = 0;

let requestURL = "https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=114";


async function loadRecords(url) {
	console.log("Loading dataset from:", url);
	
	let response = await fetch(url);
	/*justiceData = await response.json();*/
	let data = await response.json();
	console.log(data);
	
	justiceData = data.records;
	
	displayRecord();
}

function displayRecord() {
	let record = justiceData[index];
	
	console.log(record);
	
	justiceName.value = record.Justice;
	justiceImage.src = record.Image;
	
}
	
function nextPresident() {
	index ++;
	
	if (index >= justiceData.length) {
		index = 0;
	}
	
	displayRecord();
}

appointedByButton.addEventListener("click", () => {
	if (justiceData.length === 0) {
		
		loadRecords(requestURL);
	} else {
		
		nextPresident();
	}
});
