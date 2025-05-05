

  // Testimonial Code 
  let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonials[currentTestimonial].classList.remove('active');
    dots[currentTestimonial].classList.remove('active');

    currentTestimonial = index;

    testimonials[currentTestimonial].classList.add('active');
    dots[currentTestimonial].classList.add('active');
}

