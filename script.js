"use strict";

function determineSmallestNumber(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    alert(num1 + " is the smallest number out of the 3.");
  } else if (num2 < num1 && num2 < num3) {
    alert(num2 + " is the smallest number out of the 3.");
  } else if (num3 < num1 && num3 < num2) {
    alert(num3 + " is the smallest number out of the 3.");
  }
}

let num1 = prompt("What is your 1st number?");
let num2 = prompt("What is your 2nd number?");
let num3 = prompt("What is your 3rd number?");
determineSmallestNumber(num1, num2, num3);

function posNegOrZero(number) {
  if (number > 0) {
    alert(number + " is a Positive Number.");
  } else if (Number(number) === 0) {
    alert(number + " is Zero .");
  } else if (number < 0) {
    alert(number + " is a Negative Number.");
  }
}

let inputByUser = prompt("Choose any number you would like.");
posNegOrZero(inputByUser);

function areYouOldEnoughToVote(age) {
  if (age >= 18) {
    alert("You are allowed to vote!");
  } else {
    alert("You must be 18 years old to vote!");
  }
}
let userInput = prompt("How old are you?");
areYouOldEnoughToVote(userInput);
