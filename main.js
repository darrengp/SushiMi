//// variables
const container = document.getElementById("container");
let pixel = "";
let play = true;

let gameboardArr = [];
let compMoveArr = [];

///// grid creater
createGrid = (number) => {
  for (let i = 0; i < number; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "pixel");
    div.setAttribute("id", `pixel${i}`);
    div.addEventListener("click", onTap);
    container.appendChild(div);
    gameboardArr.push(div);
  }
};

createGrid(20);

console.log(gameboardArr);

/// test computer board level
function compPlayB1() {
  gameboardArr[14].innerText = "🍣";
  compMoveArr.push(gameboardArr[14]);
  setTimeout(function () {
    gameboardArr[10].innerText = "🍣";
    gameboardArr[14].innerText = " ";
    compMoveArr.push(gameboardArr[10]);
  }, 1000);
  setTimeout(function () {
    gameboardArr[6].innerText = "🍣";
    gameboardArr[10].innerText = " ";
    compMoveArr.push(gameboardArr[6]);
  }, 1000 * 2);
  setTimeout(function () {
    gameboardArr[2].innerText = "🍣";
    gameboardArr[6].innerText = " ";
    compMoveArr.push(gameboardArr[2]);
  }, 1000 * 3);
  setTimeout(function () {
    gameboardArr[2].innerText = " ";
  }, 1000 * 4);
  setTimeout(function () {
    alert("players turn! I hope you payed attention");
  }, 1000 * 4.3);
}
compPlayB1();
console.log(compMoveArr);
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
    if (a.id == "pixel14") {
      gameboardArr[14].innerText = "🍣";
      console.log(a.id);
    } else {
      play = false;
    }
    // need .then()?
    if (a.id == "pixel10") {
      gameboardArr[10].innerText = "🍣";
      gameboardArr[14].innerText = " ";
      console.log(a.id);
    } else {
      play = false;
    }
    // need .then()?
    if (a.id == "pixel6") {
      console.log(a.id);
    } else {
      play = false;
    }
    // need .then()?
  }
}
