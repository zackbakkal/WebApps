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

    button = document.getElementById("statements");
    button.addEventListener("click", function () { getContent("statements"); }, false);

    button = document.getElementById("ifelse");
    button.addEventListener("click", function () { getContent("ifelse"); }, false);

    button = document.getElementById("for");
    button.addEventListener("click", function () { getContent("for"); }, false);

    button = document.getElementById("while");
    button.addEventListener("click", function () { getContent("while"); }, false);

    button = document.getElementById("dowhile");
    button.addEventListener("click", function () { getContent("dowhile"); }, false);

    button = document.getElementById("switch");
    button.addEventListener("click", function () { getContent("switch"); }, false);
}

function getContent(item) {
    try {
        asyncRequest = new XMLHttpRequest(); // create request object
        //asyncRequest.overrideMimeType("application/json");

        // register event handler
        asyncRequest.onreadystatechange = function () {
            stateChange(item);
        };
        asyncRequest.open("GET", "controlstatements.json", true);
        asyncRequest.send(null);
    } catch (exception) {
        alert("Something went wrong.");
    }

}

function stateChange(item) {
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
        var response = JSON.parse(asyncRequest.responseText);

        switch (item) {
            case "statements": display(response, 0); break;
            case "ifelse": display(response, 1); break;
            case "for": display(response, 2); break;
            case "while": display(response, 3); break;
            case "dowhile": display(response, 4); break;
            case "switch": display(response, 5); break;
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