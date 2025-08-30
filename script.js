function showPage(pageId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected section
  document.getElementById(pageId).classList.add("active");
}

const roles = [
  "Java Developer",
  "Full Stack Developer",
  "Spring Boot Enthusiast",
  "Problem Solver",
];
let index = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function type() {
  if (charIndex < roles[index].length) {
    typingElement.innerHTML += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.innerHTML = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);
