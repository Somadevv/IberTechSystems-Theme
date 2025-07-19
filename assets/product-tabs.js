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
    });

    // Set first tab as active by default
    if (this.tabs.length > 0) {
      this.switchTab(0);
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
  }
}

customElements.define('product-tabs', ProductTabs);