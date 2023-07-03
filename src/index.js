import "./style.css";
import createHomeTab from "./homeTab";
import createAboutTab from "./aboutTab";
import createMenuTab from "./menuTab";
import createReservationsTab from "./reservationsTab";
import createContactTab from "./contactTab";
import pretendTab from "./pretendTab";
import tabControls from "./tabControl";

createHomeTab();
createAboutTab();
createMenuTab();
createReservationsTab();
createContactTab();
pretendTab();

document.addEventListener("DOMContentLoaded", () => {
  tabControls();

  document.querySelectorAll(".tabs-bar").forEach((tabBtn) => {
    tabBtn.querySelector(".tab-btn").click();
  });

  document.querySelectorAll(".main").forEach((tabContent) => {
    tabContent.querySelector(".tabs").click();
  });
});
