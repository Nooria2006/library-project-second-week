

const menu = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", function () {

    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }

});


const search = document.getElementById("search");
const books = document.querySelectorAll(".book");

search.addEventListener("input", function () {

    const value = search.value.toLowerCase();

    books.forEach(function (book) {

        const title = book.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    });

});