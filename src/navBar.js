import "./style.css";

function createNavBar() {
  const contentBox = document.querySelector("#content");
  contentBox.className = "container";

  const navBar = document.createElement("div");
  navBar.className = "nav";
  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  const logo = document.createElement("h4");
  const tabsBar = document.createElement("div");
  tabsBar.className = "tabs-bar";
  const tabBtn1 = document.createElement("button");
  tabBtn1.className = "tab-btn";
  const tabBtn2 = document.createElement("button");
  tabBtn2.className = "tab-btn";
  const tabBtn3 = document.createElement("button");
  tabBtn3.className = "tab-btn";
  const tabBtn4 = document.createElement("button");
  tabBtn4.className = "tab-btn";
  const tabBtn5 = document.createElement("button");
  tabBtn5.className = "tab-btn";

  contentBox.appendChild(navBar);
  navBar.appendChild(logoDiv);
  logoDiv.appendChild(logo);
  logo.textContent = "Farmstead Kitchen";
  navBar.appendChild(tabsBar);
  tabsBar.appendChild(tabBtn1);
  tabBtn1.textContent = "Home";
  tabsBar.appendChild(tabBtn2);
  tabBtn2.textContent = "About";
  tabsBar.appendChild(tabBtn3);
  tabBtn3.textContent = "Menu";
  tabsBar.appendChild(tabBtn4);
  tabBtn4.textContent = "Reservations";
  tabsBar.appendChild(tabBtn5);
  tabBtn5.textContent = "Contact";
}

createNavBar();
