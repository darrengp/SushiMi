//// variables
const container = document.getElementById("container");
let pixel = "";
let play = true;
const streakNum = document.getElementById("strnum");
const infoBtn = document.getElementById("info");

let gameboardArr = [];
let compMoveArr = [];
let gridNumber = 30;
///// grid/gameboard creater
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

createGrid(gridNumber);

// checkForWin //////////////////////////////
function checkForWin() {
  if (compMoveArr.length == 0) {
    alert("winner");
    streakNum.innerText = "+1";
    play = false;
  }
}

console.log(gameboardArr);

//// COMPUTER LEVELS OBJECT

/// test computer board level
function compPlayB1() {
  gameboardArr[18].innerText = "🍣";
  compMoveArr.push(gameboardArr[18]);
  setTimeout(function () {
    gameboardArr[13].innerText = "🍣";
    gameboardArr[18].innerText = " ";
    compMoveArr.push(gameboardArr[13]);
  }, 1000);
  setTimeout(function () {
    gameboardArr[8].innerText = "🍣";
    gameboardArr[13].innerText = " ";
    compMoveArr.push(gameboardArr[8]);
  }, 1000 * 2);
  setTimeout(function () {
    gameboardArr[3].innerText = "🍣";
    gameboardArr[8].innerText = " ";
    compMoveArr.push(gameboardArr[3]);
  }, 1000 * 3);
  setTimeout(function () {
    gameboardArr[2].innerText = "🍣";
    gameboardArr[3].innerText = " ";
    compMoveArr.push(gameboardArr[2]);
  }, 1000 * 4);
  setTimeout(function () {
    gameboardArr[2].innerText = " ";
  }, 1000 * 5);
  setTimeout(function () {
    alert("players turn! I hope you payed attention");
  }, 1000 * 5.3);
}
compPlayB1();
console.log(compMoveArr);
////////////////////////////////////////////

console.log(compMoveArr[0]);

// onTap function //////////////////////////////////////////
function onTap(event) {
  let a = document.getElementById(event.target.id);
  // console.log(a.id);

  if (play == false) {
    console.log("game over");
    // startState();
  } else {
    if (a.id == compMoveArr[0].id) {
      compMoveArr.shift();
      a.innerText = "🍣";
      console.log(a.id);
      setTimeout(function () {
        a.innerText = "";
        // console.log(compMoveArr);
        checkForWin();
      }, 250);
    } else {
      alert("Wrong!!!!! Try again!!!!!");
    }
  }
}
console.log(compMoveArr[0].id);

// //// Comp move 2 ***********
function compPlayB2() {
  gameboardArr[12].innerText = "🍣";
  compMoveArr.push(gameboardArr[12]);
  setTimeout(function () {
    gameboardArr[11].innerText = "🍣";
    gameboardArr[12].innerText = " ";
    compMoveArr.push(gameboardArr[11]);
  }, 1000);
  setTimeout(function () {
    gameboardArr[6].innerText = "🍣";
    gameboardArr[11].innerText = " ";
    compMoveArr.push(gameboardArr[6]);
  }, 1000 * 2);
  setTimeout(function () {
    gameboardArr[1].innerText = "🍣";
    gameboardArr[6].innerText = " ";
    compMoveArr.push(gameboardArr[1]);
  }, 1000 * 3);
  setTimeout(function () {
    gameboardArr[2].innerText = "🍣";
    gameboardArr[1].innerText = " ";
    compMoveArr.push(gameboardArr[2]);
  }, 1000 * 4);
  setTimeout(function () {
    gameboardArr[2].innerText = " ";
  }, 1000 * 5);
  setTimeout(function () {
    alert("players turn! I hope you payed attention");
  }, 1000 * 5.3);
}

// //// Comp move 3 *******
function compPlayB3() {
  gameboardArr[20].innerText = "🍣";
  compMoveArr.push(gameboardArr[20]);
  setTimeout(function () {
    gameboardArr[21].innerText = "🍣";
    gameboardArr[20].innerText = " ";
    compMoveArr.push(gameboardArr[21]);
  }, 1000);
  setTimeout(function () {
    gameboardArr[16].innerText = "🍣";
    gameboardArr[21].innerText = " ";
    compMoveArr.push(gameboardArr[16]);
  }, 1000 * 2);
  setTimeout(function () {
    gameboardArr[11].innerText = "🍣";
    gameboardArr[16].innerText = " ";
    compMoveArr.push(gameboardArr[11]);
  }, 1000 * 3);
  setTimeout(function () {
    gameboardArr[6].innerText = "🍣";
    gameboardArr[11].innerText = " ";
    compMoveArr.push(gameboardArr[6]);
  }, 1000 * 4);
  setTimeout(function () {
    gameboardArr[1].innerText = "🍣";
    gameboardArr[6].innerText = " ";
    compMoveArr.push(gameboardArr[1]);
  }, 1000 * 5);
  setTimeout(function () {
    gameboardArr[2].innerText = "🍣";
    gameboardArr[1].innerText = " ";
    compMoveArr.push(gameboardArr[2]);
  }, 1000 * 6);
  setTimeout(function () {
    gameboardArr[2].innerText = " ";
  }, 1000 * 7);
  setTimeout(function () {
    alert("players turn! I hope you payed attention");
  }, 1000 * 7.3);
}

// //// Comp move 4 *******
function compPlayB4() {
  gameboardArr[24].innerText = "🍣";
  compMoveArr.push(gameboardArr[24]);
  setTimeout(function () {
    gameboardArr[19].innerText = "🍣";
    gameboardArr[24].innerText = " ";
    compMoveArr.push(gameboardArr[19]);
  }, 1000);
  setTimeout(function () {
    gameboardArr[18].innerText = "🍣";
    gameboardArr[19].innerText = " ";
    compMoveArr.push(gameboardArr[18]);
  }, 1000 * 2);
  setTimeout(function () {
    gameboardArr[13].innerText = "🍣";
    gameboardArr[18].innerText = " ";
    compMoveArr.push(gameboardArr[13]);
  }, 1000 * 3);
  setTimeout(function () {
    gameboardArr[8].innerText = "🍣";
    gameboardArr[13].innerText = " ";
    compMoveArr.push(gameboardArr[8]);
  }, 1000 * 4);
  setTimeout(function () {
    gameboardArr[7].innerText = "🍣";
    gameboardArr[8].innerText = " ";
    compMoveArr.push(gameboardArr[7]);
  }, 1000 * 5);
  setTimeout(function () {
    gameboardArr[2].innerText = "🍣";
    gameboardArr[7].innerText = " ";
    compMoveArr.push(gameboardArr[2]);
  }, 1000 * 6);
  setTimeout(function () {
    gameboardArr[2].innerText = " ";
  }, 1000 * 7);
  setTimeout(function () {
    alert("players turn! I hope you payed attention");
  }, 1000 * 7.3);
}

// //// Comp move 5 *******
function compPlayB5() {
  gameboardArr[24].innerText = "🍣";
  compMoveArr.push(gameboardArr[24]);
  setTimeout(function () {
    gameboardArr[19].innerText = "🍣";
    gameboardArr[24].innerText = " ";
    compMoveArr.push(gameboardArr[19]);
  }, 1000);
  setTimeout(function () {
    gameboardArr[18].innerText = "🍣";
    gameboardArr[19].innerText = " ";
    compMoveArr.push(gameboardArr[18]);
  }, 1000 * 2);
  setTimeout(function () {
    gameboardArr[13].innerText = "🍣";
    gameboardArr[18].innerText = " ";
    compMoveArr.push(gameboardArr[13]);
  }, 1000 * 3);
  setTimeout(function () {
    gameboardArr[8].innerText = "🍣";
    gameboardArr[13].innerText = " ";
    compMoveArr.push(gameboardArr[8]);
  }, 1000 * 4);
  setTimeout(function () {
    gameboardArr[7].innerText = "🍣";
    gameboardArr[8].innerText = " ";
    compMoveArr.push(gameboardArr[7]);
  }, 1000 * 5);
  setTimeout(function () {
    gameboardArr[2].innerText = "🍣";
    gameboardArr[7].innerText = " ";
    compMoveArr.push(gameboardArr[2]);
  }, 1000 * 6);
  setTimeout(function () {
    gameboardArr[2].innerText = " ";
  }, 1000 * 7);
  setTimeout(function () {
    alert("players turn! I hope you payed attention");
  }, 1000 * 7.3);
}
