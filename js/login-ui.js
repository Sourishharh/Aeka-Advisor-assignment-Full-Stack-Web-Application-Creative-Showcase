const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

/* Eye toggle (safe for both pages) */
if (togglePassword && passwordInput) {
  togglePassword.addEventListener("click", () => {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });
}


const loginBtn = document.getElementById("loginBtn");
const loginMsg = document.getElementById("loginMsg");

if (loginBtn && loginMsg && typeof window.login === "function") {

  const originalLogin = window.login;

  window.login = function () {
    loginMsg.textContent = "";
    loginBtn.classList.add("loading");

    setTimeout(() => {
      const username = document.getElementById("username").value.trim();
      const password = passwordInput.value.trim();

      if (!username || !password) {
        showLoginError("Please fill all fields");
        return;
      }

      const user = JSON.parse(localStorage.getItem(username));

      if (user && user.password === password) {
        loginMsg.style.color = "green";
        loginMsg.textContent = "Login successful ✔";
        localStorage.setItem("currentUser", username);
        window.location.href = "dashboard.html";
      } else {
        showLoginError("Invalid username or password");
      }
    }, 600);
  };

  function showLoginError(text) {
    loginMsg.style.color = "red";
    loginMsg.textContent = text;
    loginBtn.classList.remove("loading");

    const box = document.querySelector(".auth-box");
    box.classList.add("shake");
    setTimeout(() => box.classList.remove("shake"), 400);
  }
}


const signupBtn = document.getElementById("signupBtn");
const signupMsg = document.getElementById("signupMsg");

if (signupBtn && signupMsg && typeof window.signup === "function") {

  const originalSignup = window.signup;

  window.signup = function () {
    signupMsg.textContent = "";
    signupBtn.classList.add("loading");

    setTimeout(() => {
      const username = document.getElementById("username").value.trim();
      const password = passwordInput.value.trim();

      if (!username || !password) {
        showSignupError("Please fill all fields");
        return;
      }

      if (localStorage.getItem(username)) {
        showSignupError("User already exists");
        return;
      }

      const user = { username, password, images: [] };
      localStorage.setItem(username, JSON.stringify(user));

      signupMsg.style.color = "green";
      signupMsg.textContent = "Signup successful ✔ Redirecting…";

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    }, 600);
  };

  function showSignupError(text) {
    signupMsg.style.color = "red";
    signupMsg.textContent = text;
    signupBtn.classList.remove("loading");

    const box = document.querySelector(".auth-box");
    box.classList.add("shake");
    setTimeout(() => box.classList.remove("shake"), 400);
  }
}
