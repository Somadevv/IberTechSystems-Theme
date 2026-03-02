 ## 📖 Overview

  IberTechSystems Theme is a professional Shopify Online Store 2.0 theme designed for technical product retailers. It
  features advanced product presentation, trust-building elements, Vitals app integration, comprehensive metafield
  support, and multi-language capabilities spanning 26 languages.

  ---

  ## ✨ Features

  ### 🎯 Conversion Optimization
  - **Trust Badges** — Secure checkout, free shipping, and warranty guarantee icons
  - **Shipping Information** — Delivery estimates and free shipping thresholds
  - **Payment Methods** — Display accepted payment options (Visa, Mastercard, PayPal, Apple Pay)
  - **Product Guarantees** — Money-back promises and quality assurances

  ### 🛍️ Product Experience
  - **Rich Media Gallery** — Image zoom, 3D model support, and variant-specific media
  - **Product Tabs** — Organized information via collapsible sections
  - **Inventory Status** — Color-coded stock indicators (in stock/low stock/out of stock)
  - **Volume Pricing** — Quantity-based price breakdowns
  - **Quick Order** — Bulk ordering functionality for B2B customers

  ### 🧭 Navigation
  - **Mega Menus** — Expanded category navigation with images
  - **Dropdown Menus** — Traditional multi-level navigation
  - **Sticky Header** — Always visible or scroll-reveal options
  - **Predictive Search** — Real-time search suggestions

  ### 🎨 Design System
  - **Multiple Color Schemes** — Customizable palettes for backgrounds, text, and buttons
  - **Typography Controls** — Font scaling and header/body text customization
  - **Card Variants** — Product, collection, and blog card styling options
  - **Animation Effects** — Scroll reveals and hover interactions (vertical-lift, 3D-lift)

  ### 📱 Mobile-First
  - **Responsive Layout** — Optimized for all screen sizes
  - **Mobile Drawer Navigation** — Touch-friendly menu system
  - **Cart Drawer** — Slide-out cart for seamless checkout flow

  ---

  ## 🚀 Installation

  ### Prerequisites
  - Active Shopify store
  - Shopify CLI (optional, for development)

  ### Method 1: Upload via Shopify Admin

  1. Download the theme as a ZIP file from this repository
  2. Navigate to **Online Store > Themes** in your Shopify Admin
  3. Click **Add theme > Upload ZIP file**
  4. Select the downloaded ZIP file
  5. Click **Customize** to configure your theme

  ### Method 2: Using Shopify CLI

  # Clone the repository
  git clone https://github.com/Somadevv/IberTechSystems-Theme.git
  cd IberTechSystems-Theme

  # Login to your Shopify store
  shopify theme dev --store your-store.myshopify.com

  # Push to your store
  shopify theme push

  ---
  ⚙️ Configuration

  Theme Editor Settings

  Access theme settings via Online Store > Themes > Customize > Theme Settings

  | Category   | Options                                           |
  |------------|---------------------------------------------------|
  | Colors     | Background, text, buttons, shadows, accent colors |
  | Typography | Header/body fonts, font scaling, line heights     |
  | Layout     | Page width, section spacing, grid configuration   |
  | Buttons    | Border radius, shadow effects, hover states       |
  | Cards      | Product/collection/blog card styles and colors    |
  | Media      | Image aspect ratios, border radius, shadows       |
  | Animations | Scroll reveal effects, hover animations           |

  Header Configuration

  | Setting         | Options                                          |
  |-----------------|--------------------------------------------------|
  | Logo Position   | Top-left, Top-center, Middle-left, Middle-center |
  | Menu Type       | Dropdown, Mega menu, Drawer                      |
  | Sticky Behavior | Always, On scroll up, Reduce logo size           |

  Cart Options

  | Setting         | Options                      |
  |-----------------|------------------------------|
  | Cart Type       | Drawer, Page, Notification   |
  | Show Vendor     | Enable/Disable               |
  | Cart Notes      | Enable/Disable               |
  | Recommendations | Collection-based suggestions |

  ---
  📋 Metafields Setup

  Creating Product Metafields

  Navigate to Settings > Custom data > Products > Add definition

  | Namespace | Key            | Type            | Description                       |
  |-----------|----------------|-----------------|-----------------------------------|
  | custom    | features       | Multi-line text | Product features (pipe-separated) |
  | custom    | specifications | Multi-line text | Technical specifications          |
  | custom    | applications   | Multi-line text | Use cases and applications        |
  | custom    | benefits       | Multi-line text | Product benefits                  |
  | custom    | installation   | Multi-line text | Installation instructions         |
  | custom    | warranty       | Multi-line text | Warranty information              |

  Example: Features Metafield

  High Torque Motor|Weather Resistant Build|Smart Control Compatibility|Obstacle Detection|Versatile Application

  Default Features (Fallback)

  If no metafields are configured, products display:
  - Premium Quality
  - Durable Design
  - Easy Installation
  - Professional Grade
  - Warranty Included

  ---
  🔌 Integrations

  Vitals App — Product Reviews

  The theme includes native Vitals reviews integration.

  Setup Steps:

  1. Install Vitals from the Shopify App Store
  2. Configure Vitals App:
    - Enable Product Reviews: ON
    - Disable external imports (Google, Facebook, Amazon): OFF
    - Manual Review Approval: ON
    - Email Notifications: ON
  3. Enable in Theme:
    - Go to Customize > Product page
    - Toggle "Use Vitals Reviews" to ON

  Review Workflow:

  Customer submits review → Email notification → Admin approval → Display on storefront

  Vitals App — Product Tabs

  Map metafields to Vitals tabs for organized product information:

  1. Open Vitals App dashboard
  2. Navigate to Product Tabs
  3. Map each metafield:
    - custom.features → Features tab
    - custom.specifications → Specifications tab
    - custom.applications → Applications tab

  ---
  🌍 Localization

  Supported Languages (26)

  | Region   | Languages
                                                                                                           |
  |----------|-----------------------------------------------------------------------------------------------------------
  ---------------------------------------------------------------------------------------------------------|
  | Europe   | English, German, French, Spanish, Italian, Portuguese, Dutch, Polish, Swedish, Danish, Norwegian, Finnish,
   Czech, Greek, Hungarian, Romanian, Bulgarian, Croatian, Slovak, Slovenian, Lithuanian, Turkish, Russian |
  | Asia     | Japanese, Korean, Chinese (Simplified & Traditional), Thai, Vietnamese, Indonesian
                                                                                                           |
  | Americas | Portuguese (Brazil)
                                                                                                           |

  Adding Translations

  Locale files are located in /locales/:

  locales/
  ├── en.default.json          # English (default)
  ├── en.default.schema.json
  ├── de.json                   # German
  ├── de.schema.json
  ├── fr.json                   # French
  ├── es.json                   # Spanish
  └── ...

  ---
  📁 Theme Structure

  IberTechSystems-Theme/
  ├── assets/                    # CSS, JS, SVG icons, images (206 files)
  │   ├── base.css
  │   ├── cart.js
  │   ├── product-form.js
  │   └── ...
  ├── config/                    # Theme configuration
  │   ├── settings_schema.json   # Setting definitions
  │   ├── settings_data.json     # Setting values
  │   └── markets.json           # Market configuration
  ├── layout/                    # Layout templates
  │   ├── theme.liquid           # Main layout wrapper
  │   └── password.liquid        # Password page layout
  ├── locales/                   # Translation files (51 files, 26 languages)
  ├── sections/                  # Theme sections (61 files)
  │   ├── header.liquid
  │   ├── footer.liquid
  │   ├── main-product.liquid
  │   ├── featured-collection.liquid
  │   └── ...
  ├── snippets/                  # Reusable components (37 files)
  │   ├── card-product.liquid
  │   ├── price.liquid
  │   ├── buy-buttons.liquid
  │   └── ...
  ├── templates/                 # Page templates (30 files)
  │   ├── index.json
  │   ├── product.json
  │   ├── collection.json
  │   └── customers/             # Customer account templates
  ├── METAFIELDS-SETUP.md        # Metafields documentation
  ├── NEW-FEATURES-GUIDE.md      # Features documentation
  ├── VITALS-SETUP-GUIDE.md      # Vitals integration guide
  └── VITALS-REVIEWS-SETUP.md    # Reviews setup guide

  Key Sections

  | Section                             | Purpose                                                 |
  |-------------------------------------|---------------------------------------------------------|
  | main-product.liquid                 | Product page with media gallery, variants, trust badges |
  | main-collection-product-grid.liquid | Collection grid with filtering                          |
  | header.liquid                       | Navigation with mega menu and search                    |
  | footer.liquid                       | Links, newsletter signup, social icons                  |
  | cart-drawer.liquid                  | Slide-out cart functionality                            |
  | predictive-search.liquid            | Real-time search suggestions                            |
  | quick-order-list.liquid             | Bulk ordering interface                                 |

  ---
  📄 Page Templates

  Standard Pages

  - Home, Product, Collection, Cart, Search, Blog, Article

  Custom Templates

  - About Us, Contact, FAQ, Navigation
  - Buying Guides, Product Manager
  - Manufacturers Listing, Sitemap

  Policy Pages

  - Privacy Policy, Terms & Conditions
  - Cookie Policy, Warranty Conditions
  - Shipping & Delivery, Returns & Refunds

  ---
  🛠️ Development

  Local Development

  # Start development server
  shopify theme dev --store your-store.myshopify.com

  # Watch for changes and auto-reload
  shopify theme dev --live-reload full

  Deploying Changes

  # Push all changes
  shopify theme push

  # Push to specific theme
  shopify theme push --theme [THEME_ID]

  ---
  🤝 Contributing

  1. Fork the repository
  2. Create a feature branch (git checkout -b feature/new-feature)
  3. Commit changes (git commit -m 'Add new feature')
  4. Push to branch (git push origin feature/new-feature)
  5. Open a Pull Request

  ---
  📚 Documentation

  | Document                | Description                                  |
  |-------------------------|----------------------------------------------|
  | NEW-FEATURES-GUIDE.md   | Trust badges, shipping info, payment methods |
  | METAFIELDS-SETUP.md     | Product metafield configuration              |
  | VITALS-SETUP-GUIDE.md   | Vitals product tabs integration              |
  | VITALS-REVIEWS-SETUP.md | Customer reviews setup                       |

  ---
  📄 License

  This project is proprietary. All rights reserved.
