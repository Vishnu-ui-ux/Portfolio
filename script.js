const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ==========================
// EmailJS Contact Form
// ==========================

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_94tnmfd",
        "template_u6uub1l",
        this
    )

    .then(function () {

        alert("✅ Message Sent Successfully!");

        form.reset();

    })

    .catch(function (error) {

        alert("❌ Failed to Send Message");

        console.log(error);

    });

});

// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// ==========================
// Close Menu After Click
// ==========================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});