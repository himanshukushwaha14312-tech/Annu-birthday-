const correctPassword = "annu123";

function login() {
  let p = document.getElementById("pass").value;
  if (p === correctPassword) {
    localStorage.setItem("auth", "true");
    window.location.href = "home.html";
  } else {
    document.getElementById("msg").innerText = "❌ Wrong Password";
  }
}

if (window.location.pathname.includes("home.html")) {
  if (localStorage.getItem("auth") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("auth");
  window.location.href = "index.html";
}

function toggleMusic() {
  let music = document.getElementById("music");
  if (music.paused) music.play();
  else music.pause();
}

function showSurprise() {
  document.getElementById("output").innerHTML =
  "💖 You are my happiness Annu 💖";
}

function showLove() {
  document.getElementById("output").innerHTML =
  "🌍 Tum meri duniya ho ❤️";
}

let text = "Tum meri life ki sabse special ladki ho 💖";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

typing();
