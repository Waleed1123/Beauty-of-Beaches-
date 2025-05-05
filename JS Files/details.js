const cardData = JSON.parse(localStorage.getItem('selectedCard'));

if (cardData) {
  document.getElementById('cardImage').src = cardData.image;
  document.getElementById('cardTitle').textContent = cardData.title;
  document.getElementById('cardLocation').innerHTML += cardData.location;
  document.getElementById('cardDescription').textContent = cardData.description;

  // Static ratings for now
  document.getElementById('cardRatings').innerHTML = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half"></i> (12 Ratings)
  `;
}

document.getElementById('advertiseForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const type = document.getElementById('transportType').value;
  const name = document.getElementById('fullName').value;

  Swal.fire({
    title: '🎉 Congratulations!',
    text: `Thank you ${name}! Your ${type} ad request has been received.`,
    icon: 'success',
    confirmButtonText: 'OK'
  });

  this.reset();
});
