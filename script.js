
/*let justiceName = document.getElementById("justice-name");
let justiceNameButton = document.getElementById("justice-name-button");
let presidentSelect = document.getElementById("president-select");
let resultsList = document.getElementById("results-list");


async function loadRecords() {
	let response = await fetch(
		`&search=${presidentSelect.value}`
		+ presidentSelect.value
	);

	let data = await response.json();
	console.log("Status" + response.status);
	
	 
	
	let records = data.records;
	console.log("Records: " + records.length);
	console.log("firstRecord: ", data.records[0]["Nominated by"]);
	console.log("secondRecord: ", data.records[1]["Nominated by"]);
	console.log("fifty-fiveRecord: ", data.records[55]["Nominated by"]);
};*/


		/*let recordsArray = [];
	


	records.forEach(function (record) {
		
		if (record["Nominated by"] == presidentSelect.value) {
			recordsArray.push(record);
		}
	});
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

const url = "https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=114"

async function loadrecords() {
	const response = await fetch(url);
	const data = await response.json();
	
	console.log(data.records[0]);
	
data.records.forEach(president => {
	console.log(president.Name);
});
}*/

let justiceName = document.getElementById("justice-name");
let justiceNameButton = document.getElementById("jjustice-name-button");
let presidentSelect = document.getElementById("president-select");
let resultsList = document.getElementById("results-list");
let presidentImage = document.getElementById("bird-image");
let presidentData;
let index = 0;
let requestURL = "https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=114";

async function loadrecords() {
	console.log("Hello from button")
	let response = await fetch
	let data = await response.json();
	console.log(data);
	presidentData = data.records;
	presidentSelect.textContent = presidentData[index].Name;
	presidentImage.src = presidentData[index]["Image of Bird"];

function nextPresident() {
	index = index + 1;
}

let records = data.records;
console.log("Records: " + records.length);



/*let justiceName = document.getElementById("justice-name");
let justiceNameButton = document.getElementById("justice-name-button");
let presidentSelect = document.getElementById("president-select");
let resultsList = document.getElementById("results-list");

async function loadRecords() {
  let response = await fetch(
    `https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=114&search=${presidentSelect.value}`
  );

  let data = await response.json();
  console.log("Status" + response.status);

  let records = data.records;
  console.log("Records: " + records.length);
  //console.log("firstRecord: ", data.records[0]["Nominated by"])

  //Clear Previous results
  resultsList.innerHTML = ""

  // Conditional If there is no results
  if(records.length == 0){
    resultsList.innerHTML = `<h3>No Information Found</h3>`
  }

  records.forEach(record => {
    resultsList.innerHTML += `
    <div>
    <p>Nominated By: ${record["Nominated by"]}</p>
    <p>Position: ${record.Position}</p>
    <img src="${record.Image}" alt="President"/>
    </div>
    `;
  })*/





}