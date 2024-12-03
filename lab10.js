function greetUser(name) {
    const outputDiv= document.getElementById("output");
    outputDiv.textContent= `Hello, ${name}! Welcome to this website.`;
}

const greetButton= document.getElementById("greetButton");
greetButton.addEventListener("click", () =>{
    const nameInput= document.getElementById("nameInput").value;

    greetUser(nameInput);
});

function changeText(){
    const messageElement= document.getElementById("message");
    messageElement.innerText= "Hello World!"; //This now changes text
}

//Now I'll add event listener to make change after pressing the button
const button= document.getElementById("changeTextButton");
button.addEventListener("click", changeText);

function addNumbers(){
    const num1= document.getElementById("num1").value;
    const num2= document.getElementById("num2").value;
    const sum = parseFloat(num1) + parseFloat(num2);

    const resultDiv= document.getElementById("result");
    resultDiv.innerText= "Result:" + sum;
}

const button1= document.getElementById("addButton");
button1.addEventListener("click", addNumbers);

function updateTitle(){
    let inputValue= document.getElementById('inputField').value;
    document.getElementById('title').innerText=inputValue;
}

function concatenateStrings(){
let string1= document.getElementById('Input1').value;
let string2= document.getElementById('Input2').value;

let combined= string1+string2;
document.getElementById('combinedText').innerText= combined;
}

document.getElementById('changeBgButton').addEventListener('click', function(){
document.getElementById('colorBox').style.backgroundColor= 'blue';
});