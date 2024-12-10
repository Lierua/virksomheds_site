function toggleMenu(menuType) {
  let nav, burgerButton;

  if (menuType === "menu") {
    nav = document.querySelector("nav"); // Assign a unique class to the first nav
    burgerButton = document.querySelector(".burger-menu");
  } else if (menuType === "menu2") {
    nav = document.querySelector(".navmono"); // Assign a unique class to the second nav
    burgerButton = document.querySelector(".burger-menumono");
  }

  if (nav && burgerButton) {
    nav.classList.toggle("active");
    burgerButton.classList.toggle("open");

    if (nav.classList.contains("active")) {
      nav.style.display = "block";
      setTimeout(() => {
        nav.style.transform = "translateX(0)";
      }, 10); // Small delay for smooth animation
    } else {
      nav.style.transform = "translateX(100%)";
      setTimeout(() => {
        nav.style.display = "none";
      }, 300); // Matches the transition duration
    }
  }
}

function toggleDropdown(event, dropdownId) {
  event.preventDefault(); // Prevent navigation
  const dropdownMenu = document.getElementById(dropdownId);

  if (dropdownMenu) {
    dropdownMenu.classList.toggle("active");
  }
}
