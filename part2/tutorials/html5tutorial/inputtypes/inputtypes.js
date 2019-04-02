var asyncRequest; // variable to hold XMLHttpRequest object
var content = document.getElementById("content");

function start() {
    registerListeners();
}

// set event handlers
function registerListeners() {
    var button;
    content = document.getElementById("content");
    button = document.getElementById("date");
    button.addEventListener("click", function () { getContent("date"); }, false);

    button = document.getElementById("month");
    button.addEventListener("click", function () { getContent("month"); }, false);

    button = document.getElementById("week");
    button.addEventListener("click", function () { getContent("week"); }, false);

    button = document.getElementById("time");
    button.addEventListener("click", function () { getContent("time"); }, false);

    button = document.getElementById("email");
    button.addEventListener("click", function () { getContent("email"); }, false);

    button = document.getElementById("number");
    button.addEventListener("click", function () { getContent("number"); }, false);

    button = document.getElementById("range");
    button.addEventListener("click", function () { getContent("range"); }, false);

    button = document.getElementById("tel");
    button.addEventListener("click", function () { getContent("tel"); }, false);

    button = document.getElementById("url");
    button.addEventListener("click", function () { getContent("url"); }, false);

}

function getContent(item) {
    try {
        asyncRequest = new XMLHttpRequest(); // create request object
        //asyncRequest.overrideMimeType("application/json");

        // register event handler
        asyncRequest.onreadystatechange = function () {
            stateChange(item);
        };
        asyncRequest.open("GET", "inputtypes.json", true);
        asyncRequest.send(null);
    } catch (exception) {
        alert("Something went wrong.");
    }

}

function stateChange(item) {
    console.log(item);
    console.log(asyncRequest.readyState);
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
        var response = JSON.parse(asyncRequest.responseText);

        switch (item) {
            case "date": content.innerHTML = response.date; break;
            case "month": content.innerHTML = response.month; break;
            case "week": content.innerHTML = response.week; break;
            case "time": content.innerHTML = response.time; break;
            case "email": content.innerHTML = response.email; break;
            case "number": content.innerHTML = response.number; break;
            case "range": content.innerHTML = response.range; break;
            case "tel": content.innerHTML = response.tel; break;
            case "url": content.innerHTML = response.url; break;
        }
    }
}

window.addEventListener("load", start, false);