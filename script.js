// Write your JavaScript code here!


window.addEventListener("load", function () {
   let form = document.querySelector("launchForm");
   launchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoMass]");
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();
      } else if (isNaN(fuelInput.value) === true || isNaN(cargoInput.value) === true) {
         alert("Fuel Level and Cargo Mass must be numbers!");
         // stop the form submission
         event.preventDefault();

      } else if (isNaN(pilotInput.value) !== true || isNaN(copilotInput.value) !== true) {
         alert("The Pilot and Copilot can not be numbers!");
         // stop the form submission
         event.preventDefault();

      } else {
         let faultyItems = document.querySelector("#faultyItems");
         let launchStatus = document.querySelector("#launchStatus");
         faultyItems.style.visibility = 'visible';
         let pilotStatus = document.getElementById("pilotStatus");
         pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
         let copilotStatus = document.getElementById("copilotStatus");
         copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch`;
         let fuelStatus = document.getElementById("fuelStatus");
         let cargoStatus = document.getElementById("cargoStatus");
         if (fuelInput.value < 10000 || cargoInput.value > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = 'red';
            if (fuelInput.value < 10000) {
               fuelStatus.innerHTML = "Fuel level too low for launch";
            } else {
               fuelStatus.innerHTML = "Fuel level high enough for launch";
            }
            if (cargoInput.value > 10000) {
               cargoStatus.innerHTML = "Cargo level too high for launch";
            } else {
               cargoStatus.innerHTML = "Cargo level low enough for launch";
            }
         } else {
            launchStatus.innerHTML = "Shuttle Ready for Launch";
            launchStatus.style.color = 'rebeccapurple';
         }
      }
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON! */

window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         const div = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*6);
         // Add HTML that includes the JSON data
         div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
            `;
      });
   });
});



