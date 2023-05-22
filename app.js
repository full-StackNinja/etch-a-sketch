document.addEventListener("DOMContentLoaded", () => {
  const divContainer = document.createElement("div");
  divContainer.classList.add("div-container");
  document.body.appendChild(divContainer);
  const getDiv = function (gridSize = 16) {
    if (gridSize > 100) {
        getDiv(prompt(`You entered grid size ${gridSize} which is greater 
        than maximum\n limit of 100! Please enter grid size less than 100`,''));
    } 
    else {
      const totalDivs = gridSize ** 2;
      const divWidth = 100 / gridSize - 0.1; // 0.1 subtracted to adjust gap between squares
      const divHeight = 100 / gridSize - 0.1;
      for (let i = 1; i <= totalDivs; i++) {
        let div = document.createElement("div");
        div.style.minWidth = `${divWidth}vw`;
        div.style.minHeight = `${divHeight}vh`;
        divContainer.appendChild(div);
      }
    }
  };
  getDiv(prompt("Enter Grid Size: (max 100)", ""));
});
