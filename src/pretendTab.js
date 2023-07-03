import "./style.css";

function pretendTab() {
  const tabBackground = document.querySelector(".tabs");
  tabBackground.classList = "tabs pretend-tab";
  tabBackground.setAttribute("data-tab", "pretend");
  const pretendDivContent = document.createElement("div");
  pretendDivContent.className = "tab-content";
  const pretendHeading = document.createElement("h2");
  pretendHeading.className = "heading";
  pretendHeading.textContent = "Woops, We Can't Do That Right now!";
  const pretendBlurb = document.createElement("p");
  pretendBlurb.textContent =
    "Sorry, friend. This is an imaginary restaurant. We hope you find your very own local Farm-to-Table haven, though. Go support your local agriculture!";
  const btnInput = document.createElement("input");
  btnInput.className = "tab-btn pretend home";
  btnInput.setAttribute("data-for-tab", "home");
  btnInput.value = "Take Me Home";

  tabBackground.appendChild(pretendDivContent);
  pretendDivContent.appendChild(pretendHeading);
  pretendDivContent.appendChild(pretendBlurb);
  pretendDivContent.appendChild(btnInput);
}

export default { pretendTab };
