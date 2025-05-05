let filters = document.querySelectorAll('.filter-btn');
let cards = document.querySelectorAll('.gallery-container .card');

filters.forEach((filter) => {
    filter.addEventListener('click', () => {
        let selectedFilter = filter.dataset.filter;
        cards.forEach((card) => {
            if (selectedFilter === 'all' || card.classList.contains(selectedFilter.slice(1))) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});



// Large Gallery Box 

const galleryImages = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  function closeLightbox() {
    lightbox.style.display = "none";
  }

  // Optional: Close on outside click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
