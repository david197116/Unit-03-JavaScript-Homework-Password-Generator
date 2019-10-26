// creating Variables for characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "~!@#$%^&*()_+";

var button = document.getElementById("generate");

// Generate an empty object to save user choices

var userChoices = {};

//  Ask user to select range of password
var charLength = parseInt(prompt("Enter a number between 8 and 128."));

// checks to see if it works 
console.log(charLength)

// Function to get user input

function askUser() {
    var numChar = confirm("Do you want to use numbers?");
    var lowerChar = confirm("Do you want to use lowercase characters?");
    var upperChar = confirm("Do you want to use uppercase characters?");
    var special = confirm("Do you want to use special characters?");

    // Store user answers

    if (numChar) {
        userChoices["numbers"] = numbers;
    }
    if (lowerChar) {
        userChoices["lowerCase"] = lowerCase;
    }
    if (upperChar) {
        userChoices["upperCase"] = upperCase;
    }
    if (special) {
        userChoices["specialChar"] = specialChar;
    }

    //  Checks to see if it works
    console.log(userChoices);
}

// Calls the  askUser function

askUser();

// Function to display password to screen

function displayPassword() {
    let finalPassword = "";

    for (var i = 0; i < charLength; i++) {
        let passWord = Object.keys(userChoices)
        let randomPassword = passWord[Math.floor(Math.random() * passWord.length)]

        let char = getRandomCharacter(userChoices[randomPassword]);

        finalPassword += char;

        //  Check to see if it works

        console.log("RandomCharacter", char);
        console.log(finalPassword, finalPassword.length);
        console.log(".............", charLength)

    }
    return finalPassword
}

function getRandomCharacter(str) {
    return str[Math.floor(Math.random() * str.length)]
}

displayPassword();

button.addEventListener("click", function () {
    password.innerHTML = displayPassword();
})
// button.addEventListener("click", function() {
// password.innerHTML = displayPassword();
// })

const myInp = document.getElementById("password");
const btnCopy = document.getElementById("copy");

btnCopy.onclick = function () {
    myInp.select();
    document.execCommand("copy");
}