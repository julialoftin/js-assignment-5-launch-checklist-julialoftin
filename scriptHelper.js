// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (!testInput) {
        return "Empty";

    } else if (isNaN(testInput)) {
        return "Not a Number";

    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    }
}

// you will use validateInput() to complete the formSubmission() function. formSubmission() will take in a document 
// parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass.

// rest of if statement that checks that no inputs are empty
//  || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"

function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
    let form = document.querySelector("form");
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty"){
        alert("All fields required!");
        return "alert sent";

    } else if (validateInput(pilot) === "Is a Number"){
        alert("Invalid Pilot name!");
        return "alert sent";

    } else if (validateInput(copilot) === "Is a Number"){
        alert("Invalid Copilot name!");
        return "alert sent";

    } else if (validateInput(fuelLevel) === "Not a Number"){
        alert("Fuel level must be a number!");
        return "alert sent";

    } else if (validateInput(cargoMass) === "Not a Number"){
        alert("Cargo mass must be a number!");
        return "alert sent";
    }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
