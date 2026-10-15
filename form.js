const user = document.getElementById("user");
const pass = document.getElementById("pass");
const msg = document.getElementById("msg");

// Sign Up Handler
document.getElementById("signup").addEventListener("click", (event) => {
    event.preventDefault();

    const username = user.value.trim();
    const password = pass.value.trim();

    if (username !== "" && password !== "") {
        localStorage.setItem("Username", username);
        localStorage.setItem("Password", password);

        msg.textContent = "✓ Account created successfully! You can now log in.";
        msg.style.color = "#10b981"; // Emerald green
    } else {
        msg.textContent = "⚠ Please fill in both username and password.";
        msg.style.color = "#f59e0b"; // Amber warning
    }
});

// Login Handler
document.getElementById("login").addEventListener("click", (event) => {
    event.preventDefault();

    const username = user.value.trim();
    const password = pass.value.trim();

    if (username === "" || password === "") {
        msg.textContent = "⚠ Please enter both username and password.";
        msg.style.color = "#f59e0b";
        return;
    }

    const savedUser = localStorage.getItem("Username");
    const savedPass = localStorage.getItem("Password");

    if (username === savedUser && password === savedPass) {
        msg.textContent = `✓ Welcome back, ${username}! Redirecting to home...`;
        msg.style.color = "#10b981";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1200);
    } else {
        msg.textContent = "✕ Invalid credentials. Please check or sign up.";
        msg.style.color = "#ef4444"; // Red error
    }
});