import "./style.css";

function createAboutTab() {
  const tabBackground = document.querySelector(".tabs");
  tabBackground.classList = "tabs about-tab";
  tabBackground.setAttribute("data-tab", "about");
  const aboutDivContent = document.createElement("div");
  aboutDivContent.className = "tab-content";
  const aboutHeading = document.createElement("h2");
  aboutHeading.className = "heading";
  aboutHeading.textContent = "Serving the Best Local Food Since 2020!";
  const firstP = document.createElement("p");
  firstP.textContent =
    "Welcome to Farmstead Kitchen, where we have been passionately serving your community since 2020. Nestled in the heart of your local countryside, our restaurant takes pride in crafting exceptional dining experiences while embracing the principles of sustainability, freshness, and the joy of local flavors.";
  const secondP = document.createElement("p");
  secondP.textContent =
    "We believe in the power of food that is responsibly sourced and thoughtfully prepared. Our mission is to connect our patrons with the vibrant tapestry of regional produce, fostering a deeper connection to the land, the farmers, and the incredible ingredients that grace our tables.";
  const thirdP = document.createElement("p");
  thirdP.textContent =
    "   From the moment you step through our doors, you'll be greeted by a warm and inviting atmosphere, infused with the rustic charm of our surroundings. Our commitment to sustainability shines through every aspect of our restaurant. We forge strong partnerships with local farmers, foragers, and artisans who share our vision for ethical and responsible farming practices. By supporting these dedicated individuals, we ensure that the ingredients we use are of the highest quality, bursting with flavor, and free from harmful additives. The result? A menu that evolves with the seasons, showcasing the best that nature has to offer.";
  const fourthP = document.createElement("p");
  fourthP.textContent =
    " Whether you're joining us for an intimate dinner, a celebratory gathering, or a casual brunch with friends, we strive to create an environment that fosters connection, appreciation, and a true sense of community. At Farmstead Kitchen, we invite you to embark on a culinary adventure, embracing the beauty of farm-to-table dining. Join us in celebrating the abundance of nature, supporting local producers, and indulging in the flavors of our region. We look forward to serving you and sharing our passion for sustainable and delicious cuisine.";

  tabBackground.appendChild(aboutDivContent);
  aboutDivContent.appendChild(aboutHeading);
  aboutDivContent.appendChild(firstP);
  aboutDivContent.appendChild(secondP);
  aboutDivContent.appendChild(thirdP);
  aboutDivContent.appendChild(fourthP);
}

createAboutTab();
