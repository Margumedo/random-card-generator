/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let icons = ["♦", "♥", "♠", "♣"];
  let colors = ["red", "black"];

  let iconsRandom = Math.floor(Math.random() * icons.length);
  let numbersRandom = Math.floor(Math.random() * numbers.length);
  let colorRandom = Math.floor(Math.random() * colors.length);

  let body = document.body;
  body.style.backgroundColor = "green";

  let div = document.createElement("div");
  div.style.height = "500px";
  div.style.width = "350px";
  div.style.backgroundColor = "white";
  div.style.borderRadius = "15px";
  div.style.marginTop = "10px";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.justifyContent = "space-between";

  let divOne = document.createElement("div");
  divOne.style.textAlign = "center";
  let h1 = document.createElement("h1");
  h1.textContent = numbers[numbersRandom];
  h1.style.fontSize = "5rem";
  h1.style.fontFamily = "comics sans";
  divOne.appendChild(h1);

  let divTwo = document.createElement("div");
  divTwo.innerHTML = icons[iconsRandom];
  divTwo.style.fontSize = "4rem";
  divTwo.style.color = colors[colorRandom];

  let divThree = document.createElement("div");
  divThree.innerHTML = icons[iconsRandom];
  divThree.style.transform = "rotate(180deg)";
  divThree.style.textAlign = "letf";
  divThree.style.fontSize = "4rem";
  divThree.style.color = colors[colorRandom];

  div.appendChild(divTwo);
  div.appendChild(divOne);
  div.appendChild(divThree);

  body.style.height = "100vh";
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.appendChild(div);
};
