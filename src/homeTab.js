import "./style.css";
import Image from "./assets/imgs/Guneratne_2022.06.24_5006945.jpg";

function createHomeTab() {
  const tabBackground = document.querySelector(".tabs");
  tabBackground.classList = "tabs home-tab";
  tabBackground.setAttribute("data-tab", "home");
  const homeContentDiv = document.createElement("div");
  homeContentDiv.className = "tab-content home-content";
  const homeHeader = document.createElement("h2");
  homeHeader.className = "home-header";
  homeHeader.textContent = "Welcome to Farmstead Kitchen!";
  const callActionMenu = document.createElement("button");
  callActionMenu.className = "call-to-action-menu tab-btn";
  callActionMenu.setAttribute("data-for-tab", "menu");
  callActionMenu.textContent = "See the Menu!";
  const callActionAbout = document.createElement("button");
  callActionAbout.className = "call-to-action-about tab-btn";
  callActionAbout.setAttribute("data-for-tab", "about");
  callActionAbout.textContent = "Who Are We?";
  const homeImgDiv = document.createElement("div");
  homeImgDiv.className = "home-img";
  const homeImg = document.createElement("img");
  homeImg.src = Image;
  homeImg.alt = "Row of young pepper plants";
  const callActionReserve = document.createElement("button");
  callActionReserve.className = "call-to-action-reserve tab-btn";
  callActionReserve.setAttribute("data-for-tab", "reserve");
  callActionReserve.textContent = "Book a Table!";
  const callActionContact = document.createElement("button");
  callActionContact.className = "call-to-action-contact tab-btn";
  callActionContact.setAttribute("data-for-tab", "contact");
  callActionContact.textContent = "Get in Touch!";

  tabBackground.appendChild(homeContentDiv);
  homeContentDiv.appendChild(homeHeader);
  homeContentDiv.appendChild(callActionMenu);
  homeContentDiv.appendChild(callActionAbout);
  homeContentDiv.appendChild(homeImgDiv);
  homeImgDiv.appendChild(homeImg);
  homeContentDiv.appendChild(callActionReserve);
  homeContentDiv.appendChild(callActionContact);
}

createHomeTab();
