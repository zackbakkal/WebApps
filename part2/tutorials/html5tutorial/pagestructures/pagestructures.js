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
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
        var response = JSON.parse(asyncRequest.responseText);

        content.innerHTML = "";

        switch (item) {
            case "header": content.append(generateContent(response.header)); break;
            case "footer": content.append(generateContent(response.footer)); break;
            case "nav": content.append(generateContent(response.nav)); break;
            case "blockquote": content.append(generateContent(response.blockquote)); break;
            case "section": content.append(generateContent(response.section)); break;
            case "details": content.append(generateContent(response.details)); break;
            case "mn": content.append(generateContent(response.main)); break;
        }
    }
}

function generateContent(item) {
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "main");

    var contentDiv = document.createElement("div");
    contentDiv.setAttribute("class", "part");

    var h2 = document.createElement("h2");
    h2.innerHTML = item.title;

    contentDiv.append(h2);

    item.description.forEach(element => {
        var p = document.createElement("p");
        //var text = document.createTextNode(element);
        p.innerHTML = element;
        contentDiv.append(p);
    });

    var h3 = document.createElement("h3");
    h3.setAttribute("class", "indentOnce");

    contentDiv.append(h3);

    var exampleDiv = document.createElement("div");
    exampleDiv.setAttribute("class", "example");

    item.example.forEach(element => {
        var p = document.createElement("p");
        p.setAttribute("class", element.class);
        var text = document.createTextNode(element.content);
        p.append(text);
        exampleDiv.append(p);
    });

    contentDiv.append(exampleDiv);

    mainDiv.append(contentDiv);

    return mainDiv;
}

window.addEventListener("load", start, false);