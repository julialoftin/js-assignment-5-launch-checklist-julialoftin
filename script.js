// // Write your JavaScript code here!
// const { formSubmission } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

    // let pilotInput = document.getElementById("input[name=pilotName]");
    // let copilotInput = document.getElementById("input[name=copilotName]");
    // let fuelLevelInput = document.getElementById("input[name=fuelLevel]");
    // let cargoMassInput = document.getElementById("input[name=cargoMass]");

window.addEventListener("load", function () {

    const form = document.querySelector("form");
    // form.addEventListener("submit", formSubmission)
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    
    let pilotInput = document.querySelector("input[name=pilotName]");
    let copilotInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    form.addEventListener("submit", function(event){
        if(formSubmission(document, pilotInput.value, copilotInput.value, fuelLevelInput.value, cargoMassInput.value) === "alert sent"){
            event.preventDefault();
        };
        
    });
    // })
});