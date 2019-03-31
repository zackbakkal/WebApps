var asyncRequest; // variable to hold XMLHttpRequest object
var content = document.getElementById("content");

function start() {
    registerListeners();
}

// set event handlers
function registerListeners() {
    var button;
    content = document.getElementById("content");

    button = document.getElementById("header");
    button.addEventListener("click", function () { getContent("header"); }, false);

    button = document.getElementById("footer");
    button.addEventListener("click", function () { getContent("footer"); }, false);

    button = document.getElementById("nav");
    button.addEventListener("click", function () { getContent("nav"); }, false);

    button = document.getElementById("blockquote");
    button.addEventListener("click", function () { getContent("blockquote"); }, false);

    button = document.getElementById("section");
    button.addEventListener("click", function () { getContent("section"); }, false);

    button = document.getElementById("details");
    button.addEventListener("click", function () { getContent("details"); }, false);

    button = document.getElementById("mn");
    button.addEventListener("click", function () { getContent("mn"); }, false);

}

function getContent(item) {
    try {
        asyncRequest = new XMLHttpRequest(); // create request object
        //asyncRequest.overrideMimeType("application/json");

        // register event handler
        asyncRequest.onreadystatechange = function () {
            stateChange(item);
        };
        asyncRequest.open("GET", "pagestructures.json", true);
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
            case "header": content.innerHTML = response.header; break;
            case "footer": content.innerHTML = response.footer; break;
            case "nav": content.innerHTML = response.nav; break;
            case "details": content.innerHTML = response.details; break;
            case "section": content.innerHTML = response.section; break;
            case "mn": content.innerHTML = response.mn; break;
            case "blockquote": content.innerHTML = response.blockquote; break;
        }
    }
}

window.addEventListener("load", start, false);