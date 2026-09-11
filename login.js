document.addEventListener("DOMContentLoaded", function() {
    // کد متصل کردن فرم
    const form = document.getElementById("login-form"); 

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            window.location.href = "index.html";
        } else {
            alert("Please enter email and password");
        }
    });
})