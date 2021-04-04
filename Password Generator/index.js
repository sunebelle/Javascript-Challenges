const lowerCaseLetters = "asdfghjklzxcvbnmqwertyuiop";
const upperCaseLetters = lowerCaseLetters.toUpperCase();
const numbers = [0,1,2,3,4,5,6,7,8,9];
const symbols = "~!@#$%^&*()?><-+=";


const passwordLe = document.getElementById("password");
const lowerCaseLe = document.getElementById("lowerCase");
const upperCaseLe = document.getElementById("upperCase");
const numbersLe = document.getElementById("numbers");
const symbolsLe = document.getElementById("symbols");

let lowerCaseRandom = lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)];
let upperCaseLettersRandom = upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
let numbersRandom = numbers[Math.floor(Math.random()*numbers.length)];
let symbolsRandom = symbols[Math.floor(Math.random()*symbols.length)];


$("#generatePw").on("click", passwordGenerator);

function passwordGenerator(){
    
    const passwordValue = passwordLe.value ;
    
    let password = "";
    for (let i=0; i < passwordValue; i++){
        if(lowerCaseLe.checked){
            password += lowerCaseRandom;
        }
        if(upperCaseLe.checked){
            password += upperCaseLettersRandom;
        }
        if(numbersLe.checked){
            password += numbersRandom;
        }
        if(symbolsLe.checked){
            password += symbolsRandom;
        }
    };

    for (let i=0; i < password.length;  i++){
        password = password[Math.floor(Math.random()*password.length)];
        password++;
    }
    // $("#copy-pw").text(password);
    document.getElementById("copy-pw").value = password;
}


function myFunction(){
    let copyText = document.getElementById("copy-pw");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
//   alert("Copied the text: " + copyText.value);
  document.querySelector(".pw-header button").innerHTML="Copied"

}


// Function expression: starts with "const"
// const isTruthy = function(value) {
//     return !!value;
//   };
//   // Function expression: an argument for .filter()
//   const numbers = ([1, false, 5]).filter(function(item) {
//     return typeof item === 'number';
//   });
//   // Function expression (IIFE): starts with "("
//   (function messageFunction(message) {
//     return message + ' World!';
//   })('Hello');




// console.log(lowerCaseRandom);
// console.log(upperCaseLettersRandom);
// console.log(numbersRandom);
// console.log(symbolsRandom);

//  passwordLe.addEventListener("input",(e) => {
    //      const passwordValue = e.target.value;
    //      return passwordValue;
    //  });

// https://www.javatpoint.com/how-to-get-all-checked-checkbox-value-in-javascript

// $(":checkbox").click(function(){
    
// })