const menu = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");


// ===============================
// Sidebar Toggle
// ===============================

menu.addEventListener("click", function () {

    if (window.innerWidth <= 750) {

        // Mobile
        sidebar.classList.toggle("show");

    } else {

        // Desktop
        sidebar.classList.toggle("collapsed");

    }

});


// ===============================
// Search Books
// ===============================

const search = document.getElementById("search");
const books = document.querySelectorAll(".book");

search.addEventListener("input", function () {

    const value = search.value.toLowerCase().trim();

    books.forEach(function (book) {

        const title = book
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (title.includes(value)) {
            book.style.display = "";
        } else {
            book.style.display = "none";
        }

    });

});


// ===============================
// Sidebar Navigation
// ===============================

const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Remove active from all links
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        // Add active to clicked link
        link.classList.add("active");

        // Close sidebar on mobile
        if (window.innerWidth <= 750) {
            sidebar.classList.remove("show");
        }

    });

});


// ===============================
// Handle Window Resize
// ===============================

window.addEventListener("resize", function () {

    if (window.innerWidth > 750) {

        // Remove mobile class
        sidebar.classList.remove("show");

    } else {

        // Remove desktop class
        sidebar.classList.remove("collapsed");

    }

});