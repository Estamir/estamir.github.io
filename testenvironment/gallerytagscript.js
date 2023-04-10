// Get the JSON data
fetch('pages.json')
  .then(response => response.json())
  .then(data => {
    // Get the container element for the gallery
    const galleryContainer = document.getElementById('gallery');

    // Filter the data to get only pages with the "butt" tag
    const artPages = data.pages.filter(page => page.tags.includes('butt'));

    // Loop through the filtered pages and create HTML elements for each one
    artPages.forEach(page => {
      // Create a link element for the page
      const link = document.createElement('a');
      link.href = page.url;

      // Create an image element for the thumbnail
      const thumbnail = document.createElement('img');
      thumbnail.src = page.thumbnailUrl;

      // Append the thumbnail to the link element
      link.appendChild(thumbnail);

      // Append the link element to the gallery container
      galleryContainer.appendChild(link);
    });
  })
  .catch(error => console.error(error));
