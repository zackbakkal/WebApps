var trueFalseMap = new Map();
var trueFlaseMapIndex = 0;
var trueFalseAnswers = new Map();
const trueFalseMax = 20;
var trueFalseXHR;
var trueFalserand;
var trueFalseResponse;
var userAnswers = new Map();
var truefalseContent;
var submit1;
var submit2;
var newQuiz1;
var newQuiz2;
var clear;
var results;
var quizResults = new Map();

function start() {
    trueFalseContent = document.getElementById("truefalse");
    submit1 = document.getElementById("submit1");
    submit2 = document.getElementById("submit2");
    newQuiz1 = document.getElementById("newquiz1");
    newQuiz2 = document.getElementById("newquiz2");
    clear = document.getElementById("clear");
    results = document.getElementById("results");

    getTrueFalseContent();

    submit1.addEventListener("click", function () {
        submit();
        submit1.disabled = true;
        submit2.disabled = true;
    }, false);

    submit2.addEventListener("click", function () {
        submit();
        submit1.disabled = true;
        submit2.disabled = true;
    }, false);

    newQuiz1.addEventListener("click", function () {
        newquiz();
    }, false);

    newQuiz2.addEventListener("click", function () {
        newquiz();
    }, false);

}

function getTrueFalseContent() {
    try {
        trueFalseXHR = new XMLHttpRequest(); // create request object

        // register event handler
        trueFalseXHR.onreadystatechange = function () {
            stateChange();
        };
        trueFalseXHR.open("GET", "html5truefalse.json", true);
        trueFalseXHR.send(null);
    } catch (exception) {
        alert("Something went wrong.");
    }
}

function stateChange() {

    if (trueFalseXHR.readyState == 4 && trueFalseXHR.status == 200) {
        trueFalseResponse = JSON.parse(trueFalseXHR.responseText);

        for (var i = 0; i < trueFalseMax; i++) {
            generateTrueFalse();
        }

        displayTrueFalse();

    }
}

function submit() {
    results.innerHTML = "";
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    for (var key of trueFalseAnswers.keys()) {
        if (userAnswers.get(key)) {
            if (userAnswers.get(key) == trueFalseAnswers.get(key)) {
                quizResults.set(key, "Correct");
                correct++;
            } else {
                quizResults.set(key, "Wrong");
                wrong++;
            }
        } else {
            quizResults.set(key, "Unanswered");
            unanswered++;
        }
    }

    var element = document.createElement("p");
    element.style.color = "green";
    var text = document.createTextNode("Correct: " + correct);
    element.appendChild(text);
    results.appendChild(element);

    element = document.createElement("p");
    element.style.color = "red";
    text = document.createTextNode("Wrong: " + wrong);
    element.appendChild(text);
    results.appendChild(element);

    element = document.createElement("p");
    element.style.color = "gray";
    text = document.createTextNode("Unanswered: " + unanswered);
    element.appendChild(text);
    results.appendChild(element);

    element = document.createElement("p");
    text = document.createTextNode("Score: " + (correct / trueFalseMax) * 100 + " %");
    element.appendChild(text);
    results.appendChild(element);

    var children = trueFalseContent.childNodes;
    console.log(children.length);

    for (var child = 0; child < children.length; child++) {
        console.log(child, quizResults.get(child));
    }

    for (var child = 0; child < children.length; child++) {
        if (quizResults.get(child) == "Wrong") {
            children[child].style.backgroundColor = "red";
        } else if (quizResults.get(child) == "Correct") {
            children[child].style.backgroundColor = "lightgreen";
        } else if (quizResults.get(child) == "Unanswered") {
            children[child].style.backgroundColor = "gray";
        }

    }

    submit1.disabled = true;
}

function newquiz() {
    submit1.disabled = false;
    submit2.disabled = false;
    trueFalseMap.clear();
    trueFalseAnswers.clear();
    quizResults.clear();
    userAnswers.clear();
    trueFlaseMapIndex = 0;
    results.innerHTML = "";

    for (var i = 0; i < trueFalseMax; i++) {
        generateTrueFalse();
    }

    displayTrueFalse();
}

function generateTrueFalse() {
    rand = Math.floor(Math.random() * trueFalseResponse.length);
    var test = trueFalseResponse[rand].question;
    if (trueFalseMap.size == 0 || !picked(test)) {
        trueFalseMap.set(trueFlaseMapIndex, trueFalseResponse[rand].question);
        trueFalseAnswers.set(trueFlaseMapIndex, trueFalseResponse[rand].answer);
        trueFlaseMapIndex++;
    } else {
        generateTrueFalse();
    }
}

function picked(question) {
    for (var key of trueFalseMap.keys()) {
        if (trueFalseMap.get(key) === question) {
            return true;
        }
    }

    return false;
}

function displayTrueFalse() {
    trueFalseContent = document.getElementById("truefalse");
    trueFalseContent.innerHTML = "";
    var counter = 0;
    var questionNumber = 1;
    var label;
    var row;

    for (var key of trueFalseMap.keys()) {

        var div = document.createElement("div");
        div.setAttribute("id", "p" + questionNumber);

        var number = document.createTextNode(questionNumber);
        div.appendChild(number);

        var question = createTrueFalseQuestion(trueFalseMap.get(key));
        div.appendChild(question);

        var trueButton = createRadioButton(key, "true", counter);
        row = document.createElement("p");
        label = document.createElement("label");
        label.setAttribute("for", counter);
        label.innerHTML = "True";
        row.appendChild(trueButton);
        row.appendChild(label);
        div.appendChild(row);

        counter++;

        var falseButton = createRadioButton(key, "false", counter);
        row = document.createElement("p");
        label = document.createElement("label");
        label.setAttribute("for", counter);
        label.innerHTML = "Flase";
        row.appendChild(falseButton);
        row.appendChild(label);
        div.appendChild(row);

        trueFalseContent.appendChild(div);

        registerEvent((counter - 1), "true");

        registerEvent(counter, "false");

        questionNumber++;
        counter++;
    }
}

function createTrueFalseQuestion(question) {
    var element = document.createElement("p");
    var text = document.createTextNode(question);
    element.appendChild(text);
    return element;
}

function createRadioButton(questionNumber, value, id) {

    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("value", value);
    input.setAttribute("name", questionNumber);
    input.setAttribute("id", id);

    return input;
}

function registerEvent(id, value) {
    var event = document.getElementById(id.toString());
    event.addEventListener("click",
        function () { registerAnswer(id, value); }, false);
}

function registerAnswer(id, value) {
    userAnswers.set(Math.floor(id / 2), value);
}


window.addEventListener("load", start, false);