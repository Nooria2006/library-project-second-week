const menu = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", function () {

    if (window.innerWidth <= 750) {
        sidebar.classList.toggle("show");

    } else {
        sidebar.classList.toggle("collapsed");

    }

});

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
const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
        if (window.innerWidth <= 750) {
            sidebar.classList.remove("show");
        }

    });

});

window.addEventListener("resize", function () {

    if (window.innerWidth > 750) {
        sidebar.classList.remove("show");

    } else {
        sidebar.classList.remove("collapsed");

    }

});