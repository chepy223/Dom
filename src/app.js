/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let from = document.getElementById("form");
let card = document.getElementById("card");
let number = document.getElementById("number");
let Amount = document.getElementById("Amount");
let Fname = document.getElementById("Fname");
let Lname = document.getElementById("Lname");
let city = document.getElementById("city");
let Pick = document.getElementById("Pick");
let postal = document.getElementById("postal");

if (validator.isEmpty(card.value)) {
  card.style.background = "red";
}

if (number === "") {
  number.style.background = "red";
}
if (Amount === "") {
  Amount.style.background = "red";
}
if (Fname === "") {
  Fname.style.background = "red";
}
if (Lname === "") {
  Lname.style.background = "red";
}

if (city === "") {
  city.style.background = "red";
}
if (Pick === "") {
  Pick.style.background = "red";
}

if (postal === "") {
  postal.style.background = "red";
}
