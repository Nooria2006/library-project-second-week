const menu = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", function () {
    sidebar.classList.toggle("show");
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

const btnDashboard = document.getElementById("btn-dashboard");
const btnAllBooks = document.getElementById("btn-all-books");
const btnMembers = document.getElementById("btn-members");

const mainContent = document.querySelector(".content");

if (btnAllBooks && mainContent) {
    btnAllBooks.addEventListener("click", function (event) {
        event.preventDefault();
        mainContent.innerHTML = "<h2>All Books</h2><p>This section contains all books in the library.</p>";
    });
}

if (btnMembers && mainContent) {
    btnMembers.addEventListener("click", function (event) {
        event.preventDefault();
        mainContent.innerHTML = "<h2>Library Members</h2><p></p>";
    });
}

if (btnDashboard) {
    btnDashboard.addEventListener("click", function (event) {
        event.preventDefault();
        location.reload();
    });
}