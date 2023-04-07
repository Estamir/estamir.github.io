function loadPages() {
  fetch('https://raw.githubusercontent.com/USERNAME/REPOSITORY/main/pages.json')
    .then(response => response.json())
    .then(data => {
      const pages = data.pages.filter(page => page.tags.includes("butt"));
      const container = document.getElementById("gallery-container");
      pages.forEach(page => {
        const thumbnail = document.createElement("img");
        thumbnail.classList.add("gallery-thumbnail");
        thumbnail.src = page.thumbnail;
        container.appendChild(thumbnail);
      });
    });
}
