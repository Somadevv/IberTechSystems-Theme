class ProductTabs extends HTMLElement {
  constructor() {
    super();
    this.tabs = this.querySelectorAll('.product-tabs__nav-link');
    this.panels = this.querySelectorAll('.product-tabs__panel');
    this.reviewForm = this.querySelector('#product-review-form');
    this.showReviewBtn = this.querySelector('#show-review-form-btn');
    this.cancelReviewBtn = this.querySelector('#cancel-review-btn');
    
    this.init();
  }

  init() {
    // Add click event listeners to tabs
    this.tabs.forEach((tab, index) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchTab(index);
      });
    });

    // Set first tab as active by default
    if (this.tabs.length > 0) {
      this.switchTab(0);
    }

    // Add review form toggle functionality
    this.initReviewForm();
  }

  initReviewForm() {
    if (this.showReviewBtn && this.reviewForm) {
      this.showReviewBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showReviewForm();
      });
    }

    if (this.cancelReviewBtn && this.reviewForm) {
      this.cancelReviewBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.hideReviewForm();
      });
    }
  }

  showReviewForm() {
    if (!this.reviewForm) return;

    // First, switch to the Reviews tab (index 1)
    this.switchTab(1);

    // Hide the review placeholder (including title and text)
    const reviewPlaceholder = this.querySelector('.product-tabs__reviews-placeholder');
    if (reviewPlaceholder) {
      reviewPlaceholder.style.display = 'none';
    }

    // Show the form with smooth animation
    this.reviewForm.style.display = 'block';
    this.reviewForm.style.opacity = '0';
    this.reviewForm.style.transform = 'translateY(-20px)';
    
    // Trigger reflow to ensure the initial styles are applied
    this.reviewForm.offsetHeight;
    
    // Animate to visible state
    this.reviewForm.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    this.reviewForm.style.opacity = '1';
    this.reviewForm.style.transform = 'translateY(0)';

    // Focus on the first input field
    setTimeout(() => {
      const firstInput = this.reviewForm.querySelector('input[type="text"]');
      if (firstInput) {
        firstInput.focus();
      }
    }, 400);
  }

  hideReviewForm() {
    if (!this.reviewForm) return;

    // Animate to hidden state
    this.reviewForm.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    this.reviewForm.style.opacity = '0';
    this.reviewForm.style.transform = 'translateY(-20px)';

    // Hide the form after animation completes
    setTimeout(() => {
      this.reviewForm.style.display = 'none';
      this.reviewForm.style.transition = '';
    }, 300);

    // Show the review placeholder again
    const reviewPlaceholder = this.querySelector('.product-tabs__reviews-placeholder');
    if (reviewPlaceholder) {
      reviewPlaceholder.style.display = 'block';
    }
  }

  switchTab(targetIndex) {
    // Remove active class from all tabs and panels
    this.tabs.forEach(tab => tab.classList.remove('active'));
    this.panels.forEach(panel => panel.classList.remove('active'));

    // Add active class to target tab and panel
    if (this.tabs[targetIndex]) {
      this.tabs[targetIndex].classList.add('active');
    }
    if (this.panels[targetIndex]) {
      this.panels[targetIndex].classList.add('active');
    }

    // Hide review form if switching away from reviews tab
    if (targetIndex !== 1 && this.reviewForm) { // Reviews is now the 2nd tab (index 1)
      this.hideReviewForm();
    }
  }
}

customElements.define('product-tabs', ProductTabs);

// Global function to handle feature dropdown toggling
function toggleFeature(element) {
  const wasExpanded = element.classList.contains('expanded');
  
  // Close all other expanded features in the same list
  const featuresList = element.closest('.product-tabs__features-list');
  if (featuresList) {
    featuresList.querySelectorAll('.product-tabs__features-item.expanded').forEach(item => {
      if (item !== element) {
        item.classList.remove('expanded');
      }
    });
  }
  
  // Toggle the clicked feature
  if (wasExpanded) {
    element.classList.remove('expanded');
  } else {
    element.classList.add('expanded');
  }
}

// Close feature dropdowns when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.product-tabs__features-item')) {
    document.querySelectorAll('.product-tabs__features-item.expanded').forEach(item => {
      item.classList.remove('expanded');
    });
  }
});