const academicDropdown = document.getElementById("dropdown");
const link = document.getElementById("link");

function showMenu() {
  academicDropdown.classList.remove(
    "opacity-0",
    "translate-y-2",
    "pointer-events-none"
  );
}

function hideMenu() {
  academicDropdown.classList.add(
    "opacity-0",
    "translate-y-2",
    "pointer-events-none"
  );
}

link.addEventListener("mouseover", showMenu);
link.addEventListener("mouseout", hideMenu);

academicDropdown.addEventListener("mouseover", showMenu);
academicDropdown.addEventListener("mouseout", hideMenu);

// For smaller devices
const mobileLink = document.getElementById("mobile-link");
const mobileDropdown = document.getElementById("mobile-dropdown");
const hamBtn = document.getElementById("ham-btn");
const closeBTn = document.getElementById("close-btn");
const mobileNav = document.getElementById("mobile-nav");

mobileLink.addEventListener("click", () => [
  mobileDropdown.classList.toggle("hidden"),
]);

hamBtn.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
});
closeBTn.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
});

// im yet to add some transitions to the mobile nav


// IO for text
const text = document.querySelectorAll(".text")
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-y-0")
    }
  });
}, {
  threshold: 0.4 
});
text.forEach((text) => observer.observe(text));


const images = document.querySelectorAll(".images")
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "scale-100")
    }
  });
}, {
  threshold: 0.4 
});
images.forEach((images) => imageObserver.observe(images));
