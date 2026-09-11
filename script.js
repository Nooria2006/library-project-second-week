
const menu = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");


// Open and close sidebar
menu.addEventListener("click", function () {
    sidebar.classList.toggle("show");
});


// Search books
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


// Sidebar navigation
const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");


        // Close sidebar on mobile
        if (window.innerWidth <= 750) {
            sidebar.classList.remove("show");
        }

    });

});