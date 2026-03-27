const correctPassword = "annu123";

// login
function login() {
  let p = document.getElementById("pass").value;
  if (p === correctPassword) {
    localStorage.setItem("auth", "true");
    window.location.href = "home.html";
  } else {
    document.getElementById("msg").innerText = "❌ Wrong Password";
  }
}

// protection
if (window.location.pathname.includes("home.html")) {
  if (localStorage.getItem("auth") !== "true") {
    window.location.href = "index.html";
  }
}

// logout
function logout() {
  localStorage.removeItem("auth");
  window.location.href = "index.html";
}

// music
function toggleMusic() {
  let music = document.getElementById("music");
  if (music.paused) music.play();
  else music.pause();
}

// gallery click
function showImg(el) {
  document.getElementById("slide").src = el.src;
}

// auto slider
let images = [
  "photos/p1.jpg",
  "photos/p2.jpg",
  "photos/p3.jpg",
  "photos/p4.jpg",
  "photos/p5.jpg"
];

let index = 0;

function autoSlide() {
  index++;
  if (index >= images.length) index = 0;
  document.getElementById("slide").src = images[index];
}
setInterval(autoSlide, 3000);

// typing
let text = "Happy Birthday Annu 💖 Tum meri duniya ho 😍";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}
typing();

// surprise
function showSurprise() {
  document.getElementById("output").innerHTML =
  "💖 I Love You Annu 💖";
}
