const gallery = document.getElementById("publicGallery");

setTimeout(() => {
  gallery.innerHTML = "";

  for (let key in localStorage) {
    try {
      const user = JSON.parse(localStorage.getItem(key));
      if (user.images) {
        user.images.forEach(img => {
          gallery.innerHTML += `
            <div class="image-card">
              <img src="${img}">
              <span class="like">❤️</span>
            </div>
          `;
        });
      }
    } catch {}
  }
}, 1000);
