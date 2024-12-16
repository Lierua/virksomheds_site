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

// const header = document.querySelector("#header");

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 0) {
//     console.log("User is scrolling down!");
//     header.classList.remove("linear-gradient");
//     header.classList.add("whitebg");
//   }
// });
let lastScrollTop = 0; // Tracks the last scroll position
let hasChanged = false; // Tracks if the background and text color has already changed
const scrollContainer = document.querySelector(".scroll-container");
const textElements = document.querySelectorAll(".text-change"); // Assuming you want to change text color in specific elements

document.addEventListener("scroll", scrollChange);

function scrollChange() {
  const scrollTop = window.scrollY; // Get the current scroll position

  // Ensure the change only happens during downward scrolling
  if (scrollTop > lastScrollTop && !hasChanged) {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate scroll percentage
    const scrollPercent = scrollTop / scrollHeight;

    // Interpolate background color based on scroll percentage
    const startBgColor = { r: 0, g: 0, b: 0, a: 0.461 }; // Start color (black with opacity)
    const endBgColor = { r: 255, g: 255, b: 255, a: 1 }; // End color (white)

    const currentBgColor = {
      r: Math.round(startBgColor.r + (endBgColor.r - startBgColor.r) * scrollPercent * 8.5),
      g: Math.round(startBgColor.g + (endBgColor.g - startBgColor.g) * scrollPercent * 8.5),
      b: Math.round(startBgColor.b + (endBgColor.b - startBgColor.b) * scrollPercent * 8.5),
      a: startBgColor.a + (endBgColor.a - startBgColor.a) * scrollPercent * 10,
    };

    // Set the interpolated color as the background
    scrollContainer.style.background = `rgba(${currentBgColor.r}, ${currentBgColor.g}, ${currentBgColor.b}, ${currentBgColor.a})`;

    // Interpolate text color based on scroll percentage
    const startTextColor = { r: 255, g: 255, b: 255 }; // Start text color (black)
    const endTextColor = { r: 0, g: 0, b: 0 }; // End text color (white)

    const currentTextColor = {
      r: Math.round(startTextColor.r + (endTextColor.r - startTextColor.r) * scrollPercent * 8.5),
      g: Math.round(startTextColor.g + (endTextColor.g - startTextColor.g) * scrollPercent * 8.5),
      b: Math.round(startTextColor.b + (endTextColor.b - startTextColor.b) * scrollPercent * 8.5),
    };

    // Apply the interpolated text color to all elements with the class 'text-change'
    textElements.forEach((element) => {
      element.style.color = `rgb(${currentTextColor.r}, ${currentTextColor.g}, ${currentTextColor.b})`;
    });

    // Trigger the final state when scroll reaches 14% (adjustable)
    if (scrollPercent >= 0.14) {
      hasChanged = true; // Stop further updates
    }
  }

  // Update the last scroll position
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative values

  // Check if the transition has fully completed (scroll reached 100%)
}
