var asyncRequest; // variable to hold XMLHttpRequest object
var content;
var div;
var title;

function start() {
    registerListeners();
}

// set event handlers
function registerListeners() {
    var button;
    content = document.getElementById("content");

    button = document.getElementById("string");
    button.addEventListener("click", function () { getContent("string"); }, false);

    button = document.getElementById("number");
    button.addEventListener("click", function () { getContent("number"); }, false);

    button = document.getElementById("boolean");
    button.addEventListener("click", function () { getContent("boolean"); }, false);

    button = document.getElementById("array");
    button.addEventListener("click", function () { getContent("array"); }, false);
}

function getContent(item) {
    try {
        asyncRequest = new XMLHttpRequest(); // create request object
        //asyncRequest.overrideMimeType("application/json");

        // register event handler
        asyncRequest.onreadystatechange = function () {
            stateChange(item);
        };
        asyncRequest.open("GET", "datatypes.json", true);
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
            case "string": display(response, 0); break;
            case "number": display(response, 1); break;
            case "boolean": display(response, 2); break;
            case "array": display(response, 3); break;
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
        var text = document.createTextNode(response[item].definition[p]);
        paragraph.appendChild(text);
        div.appendChild(paragraph);
    }
    content.appendChild(div);

    var h3 = document.createElement("h3");
    h3.setAttribute("class", "indentOnce");
    h3.innerHTML = "Examples"
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