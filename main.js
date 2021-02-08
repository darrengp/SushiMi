const container = document.getElementById("container");

let gameboardArr = [];

createGrid = (number) => {
  for (let i = 0; i < number; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = "white";
    div.style.border = "orange solid .01px";
    div.style.width = "123px";
    div.style.height = "118px";
    div.style.margin = "none";
    div.setAttribute("class", "pixel");
    // div.addEventListener("mousedown", cb);
    container.append(div);
    const pixel = document.querySelectorAll(".pixel");
    gameboardArr.push(div);
    // console.log(container);
  }
};

createGrid(20);
console.log(gameboardArr);
