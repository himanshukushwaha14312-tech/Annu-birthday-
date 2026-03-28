// 🔐 LOGIN DETAILS
const USERNAME = "himanshu";
const PASSWORD = "annu";

// LOGIN
function login() {
  let u = document.getElementById("user").value.trim().toLowerCase();
  let p = document.getElementById("pass").value.trim();

  if (u === USERNAME.toLowerCase() && p === PASSWORD) {
    sessionStorage.setItem("auth", "true");
    window.location.href = "home.html";
  } else {
    document.getElementById("msg").innerText = "❌ Wrong Username or Password";
  }
}

// 🔒 PROTECTION (direct access block)
if (window.location.pathname.includes("home.html")) {
  if (sessionStorage.getItem("auth") !== "true") {
    window.location.href = "index.html";
  }
}

// 🚪 LOGOUT
function logout() {
  sessionStorage.removeItem("auth");
  window.location.href = "index.html";
}

// 🔒 AUTO LOCK (tab change / minimize)
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    sessionStorage.removeItem("auth");
  }
});

// 🔒 AUTO LOCK (page leave / back)
window.addEventListener("beforeunload", function () {
  sessionStorage.removeItem("auth");
});

// 🎵 MUSIC
function toggleMusic() {
  let m = document.getElementById("music");
  if (m.paused) m.play();
  else m.pause();
}

// 📸 GALLERY CLICK
function showImg(el) {
  document.getElementById("slide").src = el.src;
}

// 🎁 SURPRISE
function showSurprise() {
  document.getElementById("output").innerHTML =
    "💖 You are my life Annu 💖";
}

// 🎂 CAKE
function cutCake() {
  document.getElementById("cakeMsg").innerHTML =
    "🎉 Cake Cut! Happy Birthday ❤️";
}

// 🎆 CONFETTI
function fire() {
  confetti({
    particleCount: 200,
    spread: 120
  });
}

// 💌 POPUP
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// ✍️ TYPING EFFECT
let text = "Annu, tum meri sabse special ho ❤️";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

typing();
