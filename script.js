// Sidebar menu

const menu = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", function () {

    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }

});


// Search books

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
// ==========================================
// کدهای جدید برای فعال کردن دکمه‌های منو
// ==========================================

// ۱. گرفتن دکمه‌ها از فایل HTML
const btnDashboard = document.getElementById("btn-dashboard");
const btnAllBooks = document.getElementById("btn-all-books");
const btnMembers = document.getElementById("btn-members");

// ۲. گرفتن بخش اصلی محتوای صفحه
const mainContent = document.querySelector(".content");

// ۳. کارکرد دکمه All Books
if (btnAllBooks && mainContent) {
    btnAllBooks.addEventListener("click", function (event) {
        event.preventDefault(); // جلوگیری از پرش صفحه
        mainContent.innerHTML = "<h2>لیست همه کتاب‌ها</h2><p>این بخش مربوط به کتاب‌های کتابخانه است.</p>";
    });
}

// ۴. کارکرد دکمه Members
if (btnMembers && mainContent) {
    btnMembers.addEventListener("click", function (event) {
        event.preventDefault();
        mainContent.innerHTML = "<h2>بخش اعضای کتابخانه</h2><p>لیست کاربران و اعضا در این بخش قرار می‌گیرد.</p>";
    });
}

// ۵. کارکرد دکمه Dashboard برای بازگشت به صفحه اصلی
if (btnDashboard) {
    btnDashboard.addEventListener("click", function (event) {
        event.preventDefault();
        location.reload(); // صفحه را رفرش می‌کند تا آمار اولیه برگردد
    });
}