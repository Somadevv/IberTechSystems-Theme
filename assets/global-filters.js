// Global Filters JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const filterToggles = document.querySelectorAll('.global-filters__toggle');
  
  filterToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const content = document.getElementById(this.getAttribute('aria-controls'));
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      this.setAttribute('aria-expanded', !isExpanded);
      content.classList.toggle('active');
      
      // Update toggle text
      const toggleText = this.querySelector('span');
      if (toggleText) {
        toggleText.textContent = isExpanded ? 'Show Filters' : 'Hide Filters';
      }
    });
  });
  
  // Form submission handling
  const filterForms = document.querySelectorAll('.global-filters__form');
  
  filterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const params = new URLSearchParams();
      
      // Build search URL with filters
      for (let [key, value] of formData.entries()) {
        if (value.trim() !== '') {
          params.append(key, value);
        }
      }
      
      // Handle collection selection differently
      const collectionSelect = form.querySelector('select[name="collection"]');
      if (collectionSelect && collectionSelect.value) {
        window.location.href = `/collections/${collectionSelect.value}?${params.toString()}`;
      } else {
        window.location.href = `/search?${params.toString()}`;
      }
    });
  });
  
  // Price range validation
  const priceInputs = document.querySelectorAll('input[name="price_min"], input[name="price_max"]');
  
  priceInputs.forEach(input => {
    input.addEventListener('change', function() {
      const minInput = document.querySelector('input[name="price_min"]');
      const maxInput = document.querySelector('input[name="price_max"]');
      
      if (minInput && maxInput) {
        const minValue = parseFloat(minInput.value);
        const maxValue = parseFloat(maxInput.value);
        
        if (minValue && maxValue && minValue > maxValue) {
          this.setCustomValidity('Minimum price cannot be greater than maximum price');
        } else {
          this.setCustomValidity('');
        }
      }
    });
  });
});

// Clear all filters function
function clearFilters() {
  const form = document.querySelector('.global-filters__form');
  if (form) {
    // Reset all form fields
    form.reset();
    
    // Clear any custom validation messages
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
      input.setCustomValidity('');
    });
    
    // Redirect to current page without filters
    const currentPath = window.location.pathname;
    window.location.href = currentPath;
  }
}

// Auto-submit on dropdown change for quick filtering
document.addEventListener('change', function(e) {
  if (e.target.matches('.global-filters select:not([name="collection"])')) {
    // Optional: Auto-submit form when dropdowns change
    // Uncomment the line below to enable this behavior
    // e.target.closest('form').dispatchEvent(new Event('submit'));
  }
});

// URL parameter handling for maintaining filter state
function getUrlParameters() {
  const params = new URLSearchParams(window.location.search);
  const form = document.querySelector('.global-filters__form');
  
  if (form) {
    // Populate form fields with URL parameters
    for (let [key, value] of params.entries()) {
      const field = form.querySelector(`[name="${key}"]`);
      if (field) {
        if (field.type === 'radio' || field.type === 'checkbox') {
          field.checked = field.value === value;
        } else {
          field.value = value;
        }
      }
    }
  }
}

// Initialize URL parameters on page load
document.addEventListener('DOMContentLoaded', getUrlParameters);