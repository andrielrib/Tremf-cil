document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (email === "admin@tremfacil.com" && password === "admin123") {
            alert("Login bem-sucedido!");
            window.location.href = "dashboard_admin.html"; 
        } else {
            alert("E-mail ou senha incorretos.");
        }
    });
});