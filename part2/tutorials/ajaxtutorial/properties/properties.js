var asyncRequest; // variable to hold XMLHttpRequest object
var content = document.getElementById("content");

function start() {
    registerListeners();
}

// set event handlers
function registerListeners() {
    var button;
    content = document.getElementById("content");

    button = document.getElementById("onreadystatechange");
    button.addEventListener("click", function () { getContent("onreadystatechange"); }, false);

    button = document.getElementById("readyState");
    button.addEventListener("click", function () { getContent("readyState"); }, false);

    button = document.getElementById("responseText");
    button.addEventListener("click", function () { getContent("responseText"); }, false);

    button = document.getElementById("responseXML");
    button.addEventListener("click", function () { getContent("responseXML"); }, false);

    button = document.getElementById("status");
    button.addEventListener("click", function () { getContent("status"); }, false);

    button = document.getElementById("statusText");
    button.addEventListener("click", function () { getContent("statusText"); }, false);

}

function getContent(item) {
    try {
        asyncRequest = new XMLHttpRequest(); // create request object

        // register event handler
        asyncRequest.onreadystatechange = function () {
            stateChange(item);
        };
        asyncRequest.open("GET", "properties.json", true);
        asyncRequest.send(null);
    } catch (exception) {
        alert("Something went wrong.");
    }

}

function stateChange(item) {
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
        var response = JSON.parse(asyncRequest.responseText);

        switch (item) {
            case "onreadystatechange": display(response, 0); break;
            case "readyState": display(response, 1); break;
            case "responseText": display(response, 2); break;
            case "responseXML": display(response, 3); break;
            case "status": display(response, 4); break;
            case "statusText": display(response, 5); break;
        }
    }
}

function display(response, item) {

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    div = document.createElement("div");
    div.setAttribute("class", "main");
    div.setAttribute("id", "main");
    div.style.padding = "10px";

    title = document.createElement("h2");
    title.setAttribute("id", "name");
    div.appendChild(title);
    content.appendChild(div);

    document.getElementById("name").innerHTML = response[item].name;

    for (var p = 0; p < response[item].definition.length; p++) {
        var paragraph = document.createElement("p");
        paragraph.innerHTML = response[item].definition[p];
        div.appendChild(paragraph);
    }
    content.appendChild(div);

    var h3 = document.createElement("h3");
    h3.setAttribute("class", "indentOnce");
    h3.innerHTML = "Example"
    div.appendChild(h3);

    var examples = response[item].examples;

    for (var example of examples) {
        var examplesDiv = document.createElement("div");
        examplesDiv.setAttribute("class", "example");
        var h4 = document.createElement("h4");
        h4.setAttribute("class", "indentOnce");
        h4.innerHTML = example.title;
        div.appendChild(h4);

        for (var c of example.content) {

            var p = document.createElement("p");
            var text = document.createTextNode(c);
            p.appendChild(text);

            examplesDiv.appendChild(p);
        }

        div.appendChild(examplesDiv);
    }
}

window.addEventListener("load", start, false);