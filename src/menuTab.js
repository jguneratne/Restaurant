import "./style.css";
import Image1 from "./assets/imgs/Guneratne_2022.08.03_5007128.jpg";
import Image2 from "./assets/imgs/Guneratne_2022.08.11_5007144.jpg";
import Image3 from "./assets/imgs/Guneratne_2022.11.24_5007469.jpg";
import Image4 from "./assets/imgs/Guneratne_2022.12.24_5007676.jpg";

function createMenuTab() {
  const tabBackground = document.querySelector(".tabs");
  tabBackground.classList = "tabs menu-tab";
  tabBackground.setAttribute("data-tab", "menu");
  const menuDivContent = document.createElement("div");
  menuDivContent.className = "tab-content menu-content";
  const menuHeading = document.createElement("h2");
  menuHeading.className = "heading";
  const menuCardCrackers = document.createElement("div");
  menuCardCrackers.className = "menu-card";
  const crackerTitle = document.createElement("h3");
  crackerTitle.textContent = "Three Seed Crackers";
  const crackerDescript = document.createElement("p");
  crackerDescript.textContent =
    "Crafted with a medley of nutrient-rich seeds, these delectable treats are packed with flavor and goodness. Enjoy them as a satisfying snack on their own or pair them with your favorite dips and spreads. Nourish your body with every bite and savor the irresistible blend of seeds in every cracker.";
  const crackerImg = document.createElement("img");
  crackerImg.src = Image1;
  crackerImg.alt = "Plate with Seed Crackers";
  crackerImg.className = "menu-img";
  const menuCardBread = document.createElement("div");
  menuCardBread.className = "menu-card";
  const breadTitle = document.createElement("h3");
  breadTitle.textContent = "Gluten-Free Whole Grain Bread";
  const breadDescript = document.createElement("p");
  breadDescript.textContent =
    "Our Gluten-Free Whole Grain Bread is a wholesome delight that doesn't compromise on taste or texture. Made with a carefully selected blend of gluten-free grains, it offers a hearty and satisfying bite. Enjoy the nutty aroma and the soft, moist interior, perfect for sandwiches, toasts, or as a side with your favorite meals. Experience the joy of gluten-free goodness without sacrificing flavor or quality.";
  const breadImg = document.createElement("img");
  breadImg.src = Image2;
  breadImg.alt = "White Cutting Board with Loaf of Whole Grain Bread";
  breadImg.className = "menu-img";
  const menuCardMuffins = document.createElement("div");
  menuCardMuffins.className = "menu-card";
  const muffinsTitle = document.createElement("h3");
  muffinsTitle.textContent = "Cranberry Orange Mini Corn Muffins";
  const muffinsDescript = document.createElement("p");
  muffinsDescript.textContent =
    "Treat yourself to the delightful combination of tangy cranberries and zesty orange in our Cranberry Orange Mini Corn Muffins. These bite-sized delights are bursting with flavor, with a tender cornbread texture that melts in your mouth. Enjoy them as a sweet and savory accompaniment to brunch or savor them as a delightful snack. Perfectly sized and packed with delightful flavors, these muffins are a delightful indulgence.";
  const muffinsImg = document.createElement("img");
  muffinsImg.src = Image3;
  muffinsImg.alt =
    "Basket lined with autumn-colored cloth napkin holding Cranberry Orange Mini Corn Muffinsd";
  muffinsImg.className = "menu-img";

  const menuCardPeppers = document.createElement("div");
  menuCardPeppers.className = "menu-card";
  const peppersTitle = document.createElement("h3");
  peppersTitle.textContent = "Crispy Fried Peppers";
  const peppersDescript = document.createElement("p");
  peppersDescript.textContent =
    " A long-standing family tradition, these peppers are picked young, strung and then and hung to dry. Once crisp, the seeds are cleaned out the peppers fried into a delectible crunchy treat. You cannot eat only one.";
  const peppersImg = document.createElement("img");
  peppersImg.src = Image4;
  peppersImg.alt = "Plate of Crispy Fried Peppers";
  peppersImg.className = "menu-img";

  tabBackground.appendChild(menuDivContent);
  menuDivContent.appendChild(menuHeading);
  menuDivContent.appendChild(menuCardCrackers);
  menuCardCrackers.appendChild(crackerTitle);
  menuCardCrackers.appendChild(crackerDescript);
  menuCardCrackers.appendChild(crackerImg);
  menuDivContent.appendChild(menuCardBread);
  menuCardBread.appendChild(breadTitle);
  menuCardBread.appendChild(breadDescript);
  menuCardBread.appendChild(breadImg);
  menuDivContent.appendChild(menuCardMuffins);
  menuCardMuffins.appendChild(muffinsTitle);
  menuCardMuffins.appendChild(muffinsDescript);
  menuCardMuffins.appendChild(muffinsImg);
  menuDivContent.appendChild(menuCardPeppers);
  menuCardPeppers.appendChild(peppersTitle);
  menuCardPeppers.appendChild(peppersDescript);
  menuCardPeppers.appendChild(peppersImg);
}

export default { createMenuTab };
