console.log("Hello World");

let justiceName = document.getElementById("justice-name");
let justiceNameButton = document.getElementById("justice-name-button");
let presidentSelect = document.getElementById("president-select");
let resultsList = document.getElementById("results-list");

let greeting = document.getElementById("greeting-1");
greeting.textContent = now.getHours();
let stamp = document.getElementById("stamp-1");
stamp.textContent = now.toDateString();
let now = new Date();




async function loadRecords() {
	let response = await fetch(
		"https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=114search="
		+ presidentSelect.value
	);

	 let data = await response.json();
  console.log("Status" + response.status);

  let records = data.records;
  console.log("Records: " + records.length);
  //console.log("firstRecord: ", data.records[0]["Nominated by"])


  resultsList.innerHTML = ""

 
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
  })

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

const url = "https://student-data-api.jenna-a-cardenas.workers.dev/api/v1/datasets/Supreme-Court-Justice/records?limit=114search="

async function loadRecords() {
	const response = await fetch(url);
	const data = await response.json();
	
	console.log(data.records[0]
);
	
data.records.forEach(president => {
	console.log(president.Justice);
});
}