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
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
        var response = JSON.parse(asyncRequest.responseText);

        content.innerHTML = "";

        switch (item) {
            case "date": content.append(generateContent(response.date)); break;
            case "month": content.append(generateContent(response.month)); break;
            case "week": content.append(generateContent(response.week)); break;
            case "time": content.append(generateContent(response.time)); break;
            case "email": content.append(generateContent(response.email)); break;
            case "number": content.append(generateContent(response.number)); break;
            case "range": content.append(generateContent(response.range)); break;
            case "tel": content.append(generateContent(response.tel)); break;
            case "url": content.append(generateContent(response.url)); break;
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