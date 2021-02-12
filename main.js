////////// Welcome to SushiMi /////////////////////
// Feb 2021

//// DOM variables
const container = document.getElementById("container");
const streakNum = document.getElementById("strnum");
const infoBtn = document.getElementById("info");
const levelBtn = document.getElementById("levelB");
const startBtn = document.getElementById("start");
const replayBtn = document.getElementById("replay");
const nextBtn = document.getElementById("next");
const resetBtn = document.getElementById("reset");
let level = document.getElementById("numbers");

///State variables
let play = true;
let board1 = true;
let board2 = false;
let board3 = false;
let board4 = false;
let board5 = false;
let streakNumV = 0;
let gridNumber = 30;

//Game Play Arrays
let gameboardArr = []; // stores all of the gameboard pieces/divs while grid is being built.
let compMoveArr = []; // stores computer moves -- players removes/shift() from array

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

//// Game States ------------------------------

// Start
function startState() {
  createGrid(gridNumber);
  compMoveArr = [];
  streakNum.innerText = 0;
  play = true;
  compPlayB1();
}

// Next
function next() {
  compMoveArr = [];
  if (board1 == true) {
    compPlayB1();
  } else if (board2 == true) {
    compPlayB2();
  } else if (board3 == true) {
    compPlayB3();
  } else if (board4 == true) {
    compPlayB4();
  } else if (board5 == true) {
    compPlayB5();
  }
}

// Replay
function replay() {
  compMoveArr = [];
  // next();
}
function info() {}

function levels() {}

// Reset
function reset() {
  alert("Are you ready? PLEASE PAY ATTENTION!!!!!");
  startState();
}

//// Button Event Listeners

startBtn.addEventListener("click", startState);
resetBtn.addEventListener("click", reset);
nextBtn.addEventListener("click", next);
replayBtn.addEventListener("click", replay);
infoBtn.addEventListener("click", info);
levelBtn.addEventListener("click", levels);

// checkForWin //////////////////////////////
function checkForWin() {
  if (compMoveArr.length == 0) {
    alert("Good Job!! PRESS NEXT!! ");
    streakNum.innerText = `+${(streakNumV += 1)}`;
    // play = false;
    // if (board1 == true) {
    //   compPlayB1();
    // } else if (board2 == true) {
    //   compPlayB2();
    // } else if (board3 == true) {
    //   compPlayB3();
    // } else if (board4 == true) {
    //   compPlayB4();
    // } else if (board5 == true) {
    //   compPlayB5();
    // }
  }
}

// onTap function //////////////////////////////////////////

function onTap(event) {
  let a = document.getElementById(event.target.id);
  // console.log(a.id);

  // if (play == false) {
  //   console.log("game over");
  //   // startState();
  // } else
  {
    if (a.id == compMoveArr[0].id) {
      compMoveArr.shift();
      a.innerText = "🍣";
      console.log(a.id);
      setTimeout(function () {
        a.innerText = "";
        // console.log(compMoveArr);
        checkForWin();
        // if (checkForWin == true) {
        //   replay();
        // }
      }, 250);
    } else {
      alert("Wrong!!!!! Try again!!!!!");
    }
  }
}
// console.log(compMoveArr[0].id);

/// Board level 1
function compPlayB1() {
  board1 = true;
  level.innerText = 1;

  setTimeout(function () {
    gameboardArr[18].innerText = "🍣";
    compMoveArr.push(gameboardArr[18]);
  }, 1000);
  setTimeout(function () {
    gameboardArr[13].innerText = "🍣";
    gameboardArr[18].innerText = " ";
    compMoveArr.push(gameboardArr[13]);
  }, 1000 * 2);
  setTimeout(function () {
    gameboardArr[8].innerText = "🍣";
    gameboardArr[13].innerText = " ";
    compMoveArr.push(gameboardArr[8]);
  }, 1000 * 3);
  setTimeout(function () {
    gameboardArr[3].innerText = "🍣";
    gameboardArr[8].innerText = " ";
    compMoveArr.push(gameboardArr[3]);
  }, 1000 * 4);
  setTimeout(function () {
    gameboardArr[2].innerText = "🍣";
    gameboardArr[3].innerText = " ";
    compMoveArr.push(gameboardArr[2]);
  }, 1000 * 5);
  setTimeout(function () {
    gameboardArr[2].innerText = " ";
  }, 1000 * 6);
  setTimeout(function () {
    alert(
      "Players turn! I hope you paid attention. Start by tapping the correct starting box. And then......."
    );
    board1 = false;
    board2 = true;
  }, 1000 * 6.3);
}
// compPlayB1();
// console.log(compMoveArr);
////////////////////////////////////////////

// console.log(compMoveArr[0]);

/// Board level 2
function compPlayB2() {
  level.innerText = 2;
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
    board2 = false;
    board3 = true;

    alert(
      "Players turn! I hope you paid attention. Start by tapping the correct starting box"
    );
  }, 1000 * 5.3);
}

/// Board level 3
function compPlayB3() {
  level.innerText = 3;
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
    board3 = false;
    board4 = true;
    alert(
      "Players turn! I hope you paid attention. Start by tapping the correct starting box"
    );
  }, 1000 * 7.3);
}

/// Board level 4
function compPlayB4() {
  level.innerText = 4;
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
    board4 = false;
    board5 = true;
    alert(
      "Players turn! I hope you paid attention. Start by tapping the correct starting box"
    );
  }, 1000 * 7.3);
}

/// Board level 5
function compPlayB5() {
  level.innerText = 5;
  gameboardArr[10].innerText = "🍣";
  compMoveArr.push(gameboardArr[10]);
  setTimeout(function () {
    gameboardArr[15].innerText = "🍣";
    gameboardArr[10].innerText = " ";
    compMoveArr.push(gameboardArr[15]);
  }, 1000);
  setTimeout(function () {
    gameboardArr[16].innerText = "🍣";
    gameboardArr[15].innerText = " ";
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
    gameboardArr[7].innerText = "🍣";
    gameboardArr[6].innerText = " ";
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
    alert(
      "Players turn! I hope you paid attention. Start by tapping the correct starting box"
    );
  }, 1000 * 7.3);
}
