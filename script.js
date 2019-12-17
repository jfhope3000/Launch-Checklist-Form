// Write your JavaScript code here!
// preventDefault();

window.addEventListener("load", function () {
   let form = document.querySelector("launchForm");
   launchForm.addEventListener("submit", function (event) {
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoMass]");
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" ||cargoInput.value === "") {
         alert("All fields are required!");
         // stop the form submission   
         event.preventDefault();
      } else if (isNaN(fuelInput.value) === true || isNaN(cargoInput.value) === true) {
         alert("Fuel Level and CargoM Mass must be numbers!");
         // stop the form submission   
      }
   });
});

{/* <p id="description">
This will be turned blue.
</p>
<script>
let paragraph = document.getElementById("description");
console.log("paragraph contents:", paragraph.innerHTML.trim()); */}

let liPilot = document.getElementById("pilotStatus");
         console.log(liPilot.innerHTML);
// console.log("Pilot ", liPilot.innerHTML.trim());
// let liCopilot = document.getElementById("copilotName");
// console.log("Pilot ", liCopilot.innerHTML.trim(), "Ready for Launch");
// let liFuelStatus = document.getElementById("fuelStatus");


// pilotName
// copilotName
// fuelStatus
// cargoStatus
// fuelStatus
// cargoStatus

//  ${name} 

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
