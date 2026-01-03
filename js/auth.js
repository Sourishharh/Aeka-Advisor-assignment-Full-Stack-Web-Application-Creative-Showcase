function signup() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Fill all fields");
    return;
  }

  if (localStorage.getItem(username)) {
    alert("User already exists");
    return;
  }

  const user = {
    username,
    password,
    images: []
  };

  localStorage.setItem(username, JSON.stringify(user));
  alert("Signup successful!");
  window.location.href = "login.html";
}

function login() {
 const username = document.getElementById("username").value.trim();
 const password = document.getElementById("password").value.trim();


  const user = JSON.parse(localStorage.getItem(username));

  if (user && user.password === password) {
    localStorage.setItem("currentUser", username);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}
