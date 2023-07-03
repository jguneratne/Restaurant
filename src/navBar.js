export default function createNavBar() {
  const contentBox = document.querySelector("#content");
  contentBox.className = "container";

  const navBar = document.createElement("div");
  navBar.className = "nav";
  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  const logo = document.createElement("h4");
  const tabsBar = document.createElement("div");
  tabsBar.className = "tabs-bar";
  const tabBtnHome = document.createElement("button");
  tabBtnHome.className = "tab-btn";
  tabBtnHome.setAttribute("data-for-tab", "home");
  const tabBtnAbout = document.createElement("button");
  tabBtnAbout.className = "tab-btn";
  tabBtnAbout.setAttribute("data-for-tab", "about");
  const tabBtnMenu = document.createElement("button");
  tabBtnMenu.className = "tab-btn";
  tabBtnMenu.setAttribute("data-for-tab", "menu");
  const tabBtnReserve = document.createElement("button");
  tabBtnReserve.className = "tab-btn";
  tabBtnReserve.setAttribute("data-for-tab", "reserve");
  const tabBtnContact = document.createElement("button");
  tabBtnContact.className = "tab-btn";
  tabBtnContact.setAttribute("data-for-tab", "contact");

  contentBox.appendChild(navBar);
  navBar.appendChild(logoDiv);
  logoDiv.appendChild(logo);
  logo.textContent = "Farmstead Kitchen";
  navBar.appendChild(tabsBar);
  tabsBar.appendChild(tabBtnHome);
  tabBtnHome.textContent = "Home";
  tabsBar.appendChild(tabBtnAbout);
  tabBtnAbout.textContent = "About";
  tabsBar.appendChild(tabBtnMenu);
  tabBtnMenu.textContent = "Menu";
  tabsBar.appendChild(tabBtnReserve);
  tabBtnReserve.textContent = "Reservations";
  tabsBar.appendChild(tabBtnContact);
  tabBtnContact.textContent = "Contact";
}
