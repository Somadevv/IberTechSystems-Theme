// Product Reviews JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const ratingInputs = document.querySelectorAll('.rating-input input[type="radio"]');
  const stars = document.querySelectorAll('.rating-input label.star');
  
  // Handle star rating hover effects
  stars.forEach((star, index) => {
    star.addEventListener('mouseenter', function() {
      highlightStars(stars.length - index);
    });
    
    star.addEventListener('mouseleave', function() {
      const checkedRating = document.querySelector('.rating-input input[type="radio"]:checked');
      if (checkedRating) {
        const checkedIndex = Array.from(ratingInputs).indexOf(checkedRating);
        highlightStars(stars.length - checkedIndex);
      } else {
        resetStars();
      }
    });
    
    star.addEventListener('click', function() {
      const radioInput = document.getElementById(star.getAttribute('for'));
      radioInput.checked = true;
      highlightStars(stars.length - index);
    });
  });
  
  function highlightStars(count) {
    stars.forEach((star, index) => {
      if (index >= stars.length - count) {
        star.style.color = '#ffc107';
      } else {
        star.style.color = 'rgba(var(--color-foreground), 0.3)';
      }
    });
  }
  
  function resetStars() {
    stars.forEach(star => {
      star.style.color = 'rgba(var(--color-foreground), 0.3)';
    });
  }
  
  // Form validation
  const reviewForm = document.querySelector('.review-form');
  if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
      const ratingChecked = document.querySelector('.rating-input input[type="radio"]:checked');
      const nameField = document.getElementById('ContactFormName');
      const emailField = document.getElementById('ContactFormEmail');
      const bodyField = document.getElementById('ContactFormBody');
      
      if (!ratingChecked) {
        e.preventDefault();
        alert('Please select a rating before submitting your review.');
        return false;
      }
      
      if (!nameField.value.trim()) {
        e.preventDefault();
        alert('Please enter your name.');
        nameField.focus();
        return false;
      }
      
      if (!emailField.value.trim()) {
        e.preventDefault();
        alert('Please enter your email address.');
        emailField.focus();
        return false;
      }
      
      if (!bodyField.value.trim()) {
        e.preventDefault();
        alert('Please write your review.');
        bodyField.focus();
        return false;
      }
    });
  }
});