const html = document.querySelector("html");
const navBar = document.querySelector(".top-nav");

//Intializations
if (html.scrollTop < 4) {
  navBar.classList.remove("opaque");
} else {
  navBar.classList.add("opaque");
}

const updateStyles = () => {
  if (html.scrollTop < 4) {
    navBar.classList.remove("opaque");
  } else {
    navBar.classList.add("opaque");
  }
};

document.addEventListener("scroll", updateStyles, { passive: true });
