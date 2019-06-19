var asyncRequest;
var response;
var measurementTypes;

function start() {
    var measurement = document.getElementById("measurement");
    var measurement = document.getElementById("mortgage");
    var measurement = document.getElementById("mytool");

    loadMeasurementTypes();

    measurement.addEventListener("click", loadMeasurement, false);
    measurement.addEventListener("click", loadMortgage, false);
    measurement.addEventListener("click", loadMyTool, false);



}

function loadMeasurementTypes() {

}

function loadMeasurement() {
    getContent("measurement.json");



}

function getContent(tool) {
    try {
        asyncRequest = new XMLHttpRequest(); // create request object

        // register event handler
        asyncRequest.onreadystatechange = function () {
            stateChange();
        };
        asyncRequest.open("GET", tool, true);
        asyncRequest.send(null);
    } catch (exception) {
        alert("Something went wrong.");
    }

}

function stateChange() {
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
        response = JSON.parse(asyncRequest.responseText);
        measurementTypes = response.types;

    }
}

function loadMeasurementTypes() {

}

window.addEventListener("load", start, false);