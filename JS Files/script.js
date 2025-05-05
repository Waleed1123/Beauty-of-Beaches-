document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // Toggle the active class on the nav links when the menu button is clicked
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    } else {
        console.error('Menu toggle or nav links element not found in the DOM.');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.carocel-container');
    var flkty = new Flickity(elem, {
        autoplay: true,
        prevNextButtons: true,
        pageDots: true
    });
});



// Card Details Code


const bookButtons = document.querySelectorAll('.book-now-btn');

bookButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    const card = e.target.closest('.card');

    const cardData = {
      title: card.querySelector('h3').innerText,
      image: card.querySelector('img').getAttribute('src'),
      ratings: card.querySelector('.ratings')?.innerText || '',
      description: card.querySelector('p:not(.ratings)')?.innerText || '',
      location: card.querySelector('.location p')?.innerText || ''
    };

    // Save data in localStorage
    localStorage.setItem('selectedCard', JSON.stringify(cardData));
  });
});



// Reach On top Button
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

