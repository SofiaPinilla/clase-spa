const homeNav = document.querySelector("#homeNav");
const aboutNav = document.querySelector("#aboutNav");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const contactNav = document.querySelector("#contactNav");

const hideViews = () => {
  contact.classList.add("hide");
  home.classList.add("hide");
  about.classList.add("hide");
};
const goAbout = () => {
  hideViews();
  about.classList.remove("hide");
};

const goHome = () => {
  hideViews();
  home.classList.remove("hide");
};

const goContact = () => {
  hideViews();
  contact.classList.remove("hide");
};

aboutNav.addEventListener("click", goAbout);
homeNav.addEventListener("click", goHome);
contactNav.addEventListener("click", goContact);
