/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let body = document.body;
  body.style.backgroundColor = "green";

  let div = document.createElement("div");
  div.style.border = "1px solid red";
  div.style.height = "500px";
  div.style.width = "350px";
  div.style.backgroundColor = "white";
  div.style.borderRadius = "15px";
  div.style.marginTop = "10px";

  let divOne = document.createElement("div");
  divOne.style.border = "1px solid red";
  let h1 = document.createElement("h1");
  h1.textContent = "7";
  divOne.appendChild(h1);

  let divTwo = document.createElement("div");
  divTwo.style.border = "1px solid red";
  divTwo.innerHTML = "<i class='fa-solid fa-heart'></i>";

  div.appendChild(divOne);
  div.appendChild(divTwo);

  body.style.height = "100vh";
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.appendChild(div);

  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
};