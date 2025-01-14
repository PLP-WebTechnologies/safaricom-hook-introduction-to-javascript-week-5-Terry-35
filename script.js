// Part 1: Variables and Data Types
function displayVariables() {
    let name = document.getElementById("nameInput").value;
    let age = parseInt(document.getElementById("ageInputData").value);
    let isStudent = document.getElementById("studentInput").value.toLowerCase() === "true";
    let hobbies = document.getElementById("hobbiesInput").value.split(",").map(hobby => hobby.trim());

    let output = `
        <strong>Name:</strong> ${name} (Type: ${typeof name})<br>
        <strong>Age:</strong> ${age} (Type: ${typeof age})<br>
        <strong>Is Student:</strong> ${isStudent} (Type: ${typeof isStudent})<br>
        <strong>Hobbies:</strong> ${hobbies.join(", ")} (Type: ${typeof hobbies})<br>
    `;
    document.getElementById("variablesOutput").innerHTML = output;
}

// Part 1: Calculator
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;

    if (isNaN(num1) || isNaN(num2) || !operation) {
        document.getElementById("result").innerText = "Please provide valid inputs.";
        return;
    }

    let result;
    switch (operation) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
    }
    document.getElementById("result").innerText = `Result: ${result}`;
}

// Part 1: Greeting
function greetUser() {
    let userName = document.getElementById("userName").value;
    let message = userName ? `Hello, ${userName}!` : "Please enter your name.";
    document.getElementById("greetingMessage").innerText = message;
}

// Part 2: Voting Eligibility
function checkEligibility() {
    let age = parseInt(document.getElementById("votingAgeInput").value);
    let result = isNaN(age) || age <= 0
        ? "Please enter a valid age."
        : age >= 18
        ? "You are eligible to vote!"
        : "You are not eligible to vote yet.";
    document.getElementById("votingResult").innerText = result;
}

// Part 2: Numbers 1-10
const numberList = document.getElementById("numberList");
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: DOM Manipulation
document.querySelector("h1").innerText = "JavaScript in Action!";
const dynamicContent = document.getElementById("dynamic-content");
const newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContent.appendChild(newParagraph);
