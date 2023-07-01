import "./style.css";
import Image from "./assets/imgs/GitHub-Mark-32px.png";

function createFooter() {
  const contentBox = document.querySelector("#content");
  contentBox.className = "container";
  const footer = document.createElement("div");
  footer.className = "footer";
  const photoCopyright = document.createElement("div");
  photoCopyright.classList = "photo-copyright";
  const photoCopyrightText = document.createElement("p");
  photoCopyrightText.textContent = "Photos © Jenn Guneratne";
  const mainFooter = document.createElement("div");
  mainFooter.classList = "main-footer";
  const myCopyright = document.createElement("p");
  myCopyright.classList = "my-copyright";
  myCopyright.textContent = "Jenn Guneratne © 2023";
  const gitHubLogo = document.createElement("img");
  const gitHubLogoLink = document.createElement("a");
  gitHubLogoLink.href = "https://github.com/jguneratne/restaurant-test";
  gitHubLogoLink.target = "_blank";
  gitHubLogoLink.rel = "noopener noreferrer";
  gitHubLogo.className = "github-logo";
  gitHubLogo.src = Image;
  const copyCopyright = document.createElement("div");
  copyCopyright.classList = "copy-copyright";
  const copyCopyrightText = document.createElement("p");
  copyCopyrightText.textContent =
    "Website copy written in collaboration with ChatGPT, June 2023";

  contentBox.appendChild(footer);
  footer.appendChild(photoCopyright);
  photoCopyright.appendChild(photoCopyrightText);
  footer.appendChild(mainFooter);
  mainFooter.appendChild(myCopyright);
  mainFooter.appendChild(gitHubLogoLink);
  gitHubLogoLink.appendChild(gitHubLogo);
  footer.appendChild(copyCopyright);
  copyCopyright.appendChild(copyCopyrightText);
}

createFooter();
