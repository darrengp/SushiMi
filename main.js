//// variables
const container = document.getElementById("container");
let pixel = "";
let play = true;

let gameboardArr = [];

///// grid creater
createGrid = (number) => {
  for (let i = 0; i < number; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "pixel");
    div.setAttribute("id", `pixel${i}`);
    div.addEventListener("click", onTap);
    container.append(div);
    // pixel = document.querySelectorAll(".pixel");
    gameboardArr.push(div);
  }
};

createGrid(20);

//// event listeners

// for (let i = 0; i <= gameboardArr.length; i++) {
//   if (gameboardArr[i] == undefined) {
//     console.log(gameboardArr[i]);
//   } else {
//     gameboardArr[i].addEventListener("click", onTap);
//   }
// }
console.log(gameboardArr);

console.log("tesstttt");

/// temp computer board levels
function compPlayB1() {
  gameboardArr[14].innerText = "🍣";
  setTimeout(function () {
    gameboardArr[10].innerText = "🍣";
    gameboardArr[14].innerText = " ";
  }, 2000);
  setTimeout(function () {
    gameboardArr[6].innerText = "🍣";
    gameboardArr[10].innerText = " ";
  }, 2000 * 2);
  setTimeout(function () {
    gameboardArr[2].innerText = "🍣";
    gameboardArr[6].innerText = " ";
  }, 2000 * 3);
  setTimeout(function () {
    gameboardArr[2].innerText = "🍣";
    gameboardArr[6].innerText = " ";
  }, 2000 * 4);
  setTimeout(function () {
    gameboardArr[2].innerText = " ";
    alert("players turn! I hope you payed attention");
  }, 2000 * 4.5);
}
compPlayB1();

////////////////////////////////////////////

/// temp onTap // still exploring
///// onTap function --------------------------
function onTap(event) {
  // console.log(box1.value);
  let a = document.getElementById(event.target.id);
  // console.log(a.id);

  if (play == false) {
    console.log("game over");
    // startState();
  } else {
    if (a.id == "pixel10") {
      console.log(a.id);
    }
  }
}
