// LOGIN DETAILS
const USERNAME = "himanshu";
const PASSWORD = "annu";

// LOGIN FUNCTION
function login() {
  let u = document.getElementById("user")?.value.trim().toLowerCase();
  let p = document.getElementById("pass")?.value.trim();

  if (u === USERNAME.toLowerCase() && p === PASSWORD) {
    sessionStorage.setItem("auth", "true");
    window.location.href = "home.html";
  } else {
    let msg = document.getElementById("msg");
    if (msg) msg.innerText = "❌ Wrong Username or Password";
  }
}

// PAGE PROTECTION
if (window.location.pathname.includes("home.html")) {
  if (sessionStorage.getItem("auth") !== "true") {
    window.location.href = "index.html";
  }
}

// LOGOUT
function logout() {
  sessionStorage.removeItem("auth");
  window.location.href = "index.html";
}

// AUTO LOCK
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    sessionStorage.removeItem("auth");
  }
});

window.addEventListener("beforeunload", function () {
  sessionStorage.removeItem("auth");
});

// MUSIC
function toggleMusic() {
  let m = document.getElementById("music");
  if (!m) return;
  if (m.paused) m.play();
  else m.pause();
}

// GALLERY
function showImg(el) {
  let slide = document.getElementById("slide");
  if (slide) slide.src = el.src;
}

// SURPRISE
function showSurprise() {
  let el = document.getElementById("output");
  if (el) el.innerHTML = "💖 You are my life Annu 💖";
}

// CAKE
function cutCake() {
  let el = document.getElementById("cakeMsg");
  if (el) el.innerHTML = "🎉 Cake Cut ❤️";
}

// CONFETTI
function fire() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 200,
      spread: 120
    });
  }
}

// POPUP
function closePopup() {
  let p = document.getElementById("popup");
  if (p) p.style.display = "none";
}

// TYPING EFFECT
let text = "Annu, tum meri sabse special ho ❤️";
let i = 0;

function typing() {
  let el = document.getElementById("typing");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

// LOAD SAFE
window.onload = function () {
  if (document.getElementById("typing")) {
    typing();
  }
};
