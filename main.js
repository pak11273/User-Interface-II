// Alternative to load event
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    initApplication();
  }
};

const initApplication = () => {
  let btnState = false;
  const resBtn = document.getElementsByClassName("responsive-nav");
  resBtn[0].addEventListener("click", () => {
    const mobileNav = document.getElementsByClassName("mobile-nav");
    const mobileMenu = document.getElementById("mobile-menu_id");
    const mobile = document.getElementById("mobile");
    if (btnState === false) {
      mobile.style.display = "flex";
      mobileMenu.style.display = "flex";
      mobileMenu.style.flexDirection = "column";
      btnState = true;
    } else {
      mobile.style.display = "none";
      btnState = false;
    }
  });
};
