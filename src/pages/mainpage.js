import Github from '../images/github.png'
import loadHome from './home'

function createHeader() {
    const header = document.createElement("div")
    header.classList.add("header")

    const siteName = document.createElement("h1")
    siteName.textContent = "Mead Hall"

    header.appendChild(siteName)
    header.appendChild(createNav())

    return header
}

function createNav() {
    const nav = document.createElement("nav")

    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(homeButton);
      loadHome();
    });
  
    const recipeButton = document.createElement("button");
    recipeButton.classList.add("button-nav");
    recipeButton.textContent = "Recipes";
    recipeButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(recipeButton);
      loadMenu();
    });
  
    const aboutButton = document.createElement("button");
    aboutButton.classList.add("button-nav");
    aboutButton.textContent = "About";
    aboutButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(aboutButton);
      loadContact();
    });
  
    nav.appendChild(homeButton);
    nav.appendChild(recipeButton);
    nav.appendChild(aboutButton);

    return nav
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} AlixiaDae`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/AlixiaDae";

  const githubIcon = document.createElement("img");
  githubIcon.classList.add("github-icon")
  githubIcon.src = Github


  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

function initializeWebsite() {
  const content = document.querySelector(".content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector(".button-nav"));
  loadHome()
}

export default initializeWebsite;