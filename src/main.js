import "./style.css";

function createMainDiv() {
  const contentBox = document.querySelector("#content");
  contentBox.className = "container";
  const main = document.createElement("div");
  main.className = "main";

  contentBox.appendChild(main);
}

createMainDiv();
