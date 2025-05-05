function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


  // const bookButtons = document.querySelectorAll('.book-now-btn');

  // bookButtons.forEach(button => {
  //   button.addEventListener('click', function (e) {
  //     const card = e.target.closest('.card');

  //     const cardData = {
  //       title: card.querySelector('h3').innerText,
  //       image: card.querySelector('img').getAttribute('src'),
  //       ratings: card.querySelector('.ratings')?.innerText || '',
  //       description: card.querySelector('p:not(.ratings)')?.innerText || '',
  //       location: card.querySelector('.location p')?.innerText || ''
  //     };

  //     // Save data in localStorage
  //     localStorage.setItem('selectedCard', JSON.stringify(cardData));
  //   });
  // });