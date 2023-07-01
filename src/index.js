import "./style.css";

console.log("restaurant project");

function components() {
  const container = document.querySelector("#container");
  const navBar = document.createElement("div");
  navBar.className = "nav";
  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  const logo = document.createElement("h4");

  container.appendChild(navBar);
  navBar.appendChild(logoDiv);
  logoDiv.appendChild(logo);
  logo.textContent = "Farmstead Kitchen";
}

document.body.appendChild(components());
