const url = "./pages.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("gallery-container");
    data.pages.forEach(page => {
      if (page.tags.includes("butt")) {
        const thumbnail = document.createElement("img");
        thumbnail.src = page.thumbnail;
        thumbnail.alt = page.title;
        const title = document.createElement("p");
        title.innerText = page.title;
        const link = document.createElement("a");
        link.href = page.page;
        link.appendChild(thumbnail);
        link.appendChild(title);
        container.appendChild(link);
      }
    });
  })
  .catch(error => {
    console.error("Error fetching pages:", error);
  });
