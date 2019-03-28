// Script: promtUserName.js
// Script to prompt the user for his/her name

// the element to show the welcome message
var welcomeMessage;
var getStartedButton;
var introduction;

function start() {
	// retrieve the element needed
	welcomeMessage = document.getElementById("welcomeMessage");
	getStartedButton = document.getElementById("getStartedButton");
	introduction = document.getElementById("introduction");
	if(!sessionStorage.getItem("herePreviousely")) {
		promptUserName();
		sessionStorage.setItem("herePreviousely", true);
	} else {
		sameUser();
	}
	getStartedButton.addEventListener("click", startButtonClicked, false);
}

function promptUserName() {
	// prompt the user for his/her name
	var name = prompt("Please enter yourName", "Student");
	sessionStorage.setItem("userName", name);
	// set the element innerHTML to the value 'Welcome name'
	welcomeMessage.innerHTML = "Welcome " + name;
}

function sameUser() {
	welcomeMessage.innerHTML = "Welcome " + sessionStorage.getItem("userName");
}

function startButtonClicked() {
	introduction.setAttribute("href", "tutorialParts/introduction.htm");
}

// add the window event listner
window.addEventListener("load", start, false);