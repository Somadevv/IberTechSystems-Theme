class ProductTabs extends HTMLElement {
  constructor() {
    super();
    this.tabs = this.querySelectorAll('.product-tabs__nav-link');
    this.panels = this.querySelectorAll('.product-tabs__panel');
    
    this.init();
  }

  init() {
    // Add click event listeners to tabs
    this.tabs.forEach((tab, index) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchTab(index);
      });
      
      // Add keyboard navigation
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault();
          const direction = e.key === 'ArrowLeft' ? -1 : 1;
          const newIndex = (index + direction + this.tabs.length) % this.tabs.length;
          this.switchTab(newIndex);
          this.tabs[newIndex].focus();
        }
      });
    });

    // Set first tab as active by default
    if (this.tabs.length > 0) {
      this.switchTab(0);
    }
  }


  switchTab(targetIndex) {
    // Remove active class from all tabs and panels
    this.tabs.forEach((tab, index) => {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
    });
    this.panels.forEach(panel => {
      panel.classList.remove('active');
      panel.setAttribute('aria-hidden', 'true');
    });

    // Add active class to target tab and panel
    if (this.tabs[targetIndex]) {
      this.tabs[targetIndex].classList.add('active');
      this.tabs[targetIndex].setAttribute('aria-selected', 'true');
      this.tabs[targetIndex].setAttribute('tabindex', '0');
    }
    if (this.panels[targetIndex]) {
      this.panels[targetIndex].classList.add('active');
      this.panels[targetIndex].setAttribute('aria-hidden', 'false');
    }

  }
}

customElements.define('product-tabs', ProductTabs);

// Global function to handle feature dropdown toggling
function toggleFeature(element) {
  const wasExpanded = element.classList.contains('expanded');
  const button = element.querySelector('.product-tabs__features-header');
  const details = element.querySelector('.product-tabs__features-details');
  
  // Close all other expanded features in the same list
  const featuresList = element.closest('.product-tabs__features-list');
  if (featuresList) {
    featuresList.querySelectorAll('.product-tabs__features-item.expanded').forEach(item => {
      if (item !== element) {
        item.classList.remove('expanded');
        const itemButton = item.querySelector('.product-tabs__features-header');
        const itemDetails = item.querySelector('.product-tabs__features-details');
        if (itemButton) itemButton.setAttribute('aria-expanded', 'false');
        if (itemDetails) itemDetails.setAttribute('aria-hidden', 'true');
      }
    });
  }
  
  // Toggle the clicked feature
  if (wasExpanded) {
    element.classList.remove('expanded');
    if (button) button.setAttribute('aria-expanded', 'false');
    if (details) details.setAttribute('aria-hidden', 'true');
  } else {
    element.classList.add('expanded');
    if (button) button.setAttribute('aria-expanded', 'true');
    if (details) details.setAttribute('aria-hidden', 'false');
  }
}

// Add keyboard support for feature buttons
document.addEventListener('keydown', function(event) {
  if (event.target.classList.contains('product-tabs__features-header')) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const featureItem = event.target.closest('.product-tabs__features-item');
      if (featureItem) {
        toggleFeature(featureItem);
      }
    }
    if (event.key === 'Escape') {
      const featureItem = event.target.closest('.product-tabs__features-item');
      if (featureItem && featureItem.classList.contains('expanded')) {
        toggleFeature(featureItem);
      }
    }
  }
});

// Close feature dropdowns when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.product-tabs__features-item')) {
    document.querySelectorAll('.product-tabs__features-item.expanded').forEach(item => {
      item.classList.remove('expanded');
      const button = item.querySelector('.product-tabs__features-header');
      const details = item.querySelector('.product-tabs__features-details');
      if (button) button.setAttribute('aria-expanded', 'false');
      if (details) details.setAttribute('aria-hidden', 'true');
    });
  }
});