import "./style.css";

function createMainDiv() {
  const contentBox = document.querySelector("#content");
  contentBox.className = "container";
  const main = document.createElement("div");
  main.className = "main";
  const tabContainer = document.createElement("div");
  tabContainer.className = "tabs";

  contentBox.appendChild(main);
  main.appendChild(tabContainer);
}

createMainDiv();
