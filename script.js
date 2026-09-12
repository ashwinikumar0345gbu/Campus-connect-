// ===============================
// CAMPUSCONNECT MAIN JAVASCRIPT
// ===============================


// ---------- DARK MODE ----------

function toggleTheme() {
    document.body.classList.toggle("dark");

    const button = document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark")) {
        button.innerText = "☀️";
        localStorage.setItem("campusTheme", "dark");
    } else {
        button.innerText = "🌙";
        localStorage.setItem("campusTheme", "light");
    }
}


// Load saved theme
window.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("campusTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");

        const button = document.querySelector(".theme-btn");

        if (button) {
            button.innerText = "☀️";
        }
    }

});


// ---------- LOGIN ----------

function openLogin() {

    closeModal("signupModal");

    const modal = document.getElementById("loginModal");

    if (modal) {
        modal.classList.add("show");
    }
}


// ---------- SIGNUP ----------

function openSignup() {

    closeModal("loginModal");

    const modal = document.getElementById("signupModal");

    if (modal) {
        modal.classList.add("show");
    }
}


// ---------- CLOSE MODAL ----------

function closeModal(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.remove("show");
    }
}


// ---------- CLOSE WHEN CLICK OUTSIDE ----------

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("modal")) {

        event.target.classList.remove("show");

    }

});


// ---------- ESC KEY CLOSE ----------

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        document.querySelectorAll(".modal").forEach(function (modal) {

            modal.classList.remove("show");

        });

    }

});


// ---------- FEATURES SCROLL ----------

function scrollToFeatures() {

    const section = document.getElementById("features");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ---------- NAVBAR SHADOW ----------

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// ---------- BUTTON EFFECT ----------

document.querySelectorAll("button").forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform = "scale(0.97)";

        setTimeout(function () {

            button.style.transform = "";

        }, 100);

    });

});


// ---------- WELCOME MESSAGE ----------

console.log(
    "🚀 CampusConnect loaded successfully!"
);

console.log(
    "🎓 Connect. Learn. Grow."
);
