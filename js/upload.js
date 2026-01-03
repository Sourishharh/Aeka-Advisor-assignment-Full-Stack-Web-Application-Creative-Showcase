const currentUser = localStorage.getItem("currentUser");

if (!currentUser) {
  window.location.href = "login.html";
}

const user = JSON.parse(localStorage.getItem(currentUser));

/* Safety check */
if (!user) {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

/* Elements */
const fileInput = document.getElementById("imageUpload");
const fileName = document.getElementById("fileName");
const gallery = document.getElementById("myGallery");

/* Show selected file name */
fileInput.addEventListener("change", () => {
  fileName.textContent = fileInput.files.length
    ? fileInput.files[0].name
    : "No file chosen";
});

/* Render gallery */
function renderGallery() {
  gallery.innerHTML = "";

  user.images.forEach(img => {
    gallery.innerHTML += `
      <div class="image-card">
        <img src="${img}">
      </div>
    `;
  });
}

/* Upload image */
function uploadImage() {
  const file = fileInput.files[0];
  if (!file) {
    alert("Please choose an image first");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    user.images.push(reader.result);
    localStorage.setItem(currentUser, JSON.stringify(user));

    // Reset input
    fileInput.value = "";
    fileName.textContent = "No file chosen";

    renderGallery();
  };

  reader.readAsDataURL(file);
}

/* Logout */
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

/* Initial load */
renderGallery();
