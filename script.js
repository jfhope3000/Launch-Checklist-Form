// Write your JavaScript code here!


window.addEventListener("load", function () {
   let form = document.querySelector("launchForm");
   launchForm.addEventListener("submit", function (event) {
      preventDefault();
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
      }
      console.log(pilotInput);

      // pilotStatus.innerHTML = `${pilotInput.value}`;
      // pilotStatus.innerHTML = `Pilot ${pilotInput} is ready for launch`;

      // if (fuelInput.value < 10000) {
      //    let fuelStatus = document.getElementById("fuelStatus");
      //    console.log("paragraph contents:", fuelStatus.innerHTML.trim());
      //    fuelStatus.style.color = "blue";
      //    fuelStatus.style.visibility = 'visible';

      //    // fuelStatus.innerHTML.trim = 'Fuel level too low for launch';
      //    // launchStatus.innerHTML.trim = 'Shuttle Not Ready to Launch';

      // } else {
      //    fuelStatus.style.visibility = 'visible';
      // }

   });
   let pilotStatus = document.getElementById('pilotStatus');
   pilotStatus.style.visibility = 'visible';
   pilotStatus.innerHTML = (pilotInput.value);

   // let faultyItems = document.getElementById('faultyItems');
   //    faultyItems.style.visibility = 'visible';

   // let pilotFinal = li.getElementID("pilotStatus").innerHTML += `Pilot ${pilotInput} is ready for launch.`;
   // faultyItems.style.visibility = 'visible';
   //  launchStatus.innerHTML.trim = 'Shuttle Not Ready to Launch';


   // let fuelTest = document.getElementById('fuelInput.value');
   // fuelInput.value = Number(fuelInput.value);

});

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
