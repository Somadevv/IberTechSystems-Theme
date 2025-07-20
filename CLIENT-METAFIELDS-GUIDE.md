# Product Features Setup Guide

## How to Add Custom Features to Products

Your website now uses a reliable system for product features that you can easily customize for each product.

### Step 1: Go to Product Metafields
1. In Shopify Admin, go to **Products**
2. Click on the product you want to customize
3. Scroll down to **Metafields** section

### Step 2: Add Feature Names
- **Namespace:** `custom`
- **Key:** `features`
- **Type:** Single line text
- **Value:** `Feature 1|Feature 2|Feature 3|Feature 4|Feature 5`

**Example:**
```
High Torque Motor|Weather Resistant Build|Smart Control Compatibility|Obstacle Detection|Versatile Application
```

### Step 3: Add Feature Descriptions
For each feature, create a separate metafield:

- **Namespace:** `custom`
- **Key:** `feature_1`
- **Type:** Multi-line text
- **Value:** Description for your first feature

- **Namespace:** `custom`
- **Key:** `feature_2`
- **Type:** Multi-line text
- **Value:** Description for your second feature

Continue with `feature_3`, `feature_4`, etc.

**Example Descriptions:**
- `feature_1`: "Provides consistent, powerful motion for heavy gates with reliable performance under demanding conditions."
- `feature_2`: "Durable housing designed for long-term outdoor use with protection against rain, dust, and temperature extremes."

### What Happens If You Don't Set Metafields?
If you don't add metafields, the system will automatically show sensible default features appropriate for your products. You can always override these later by adding the metafields.

### Benefits of This System
✅ **Consistent:** All products will have the same professional layout  
✅ **Customizable:** Each product can have unique features  
✅ **Reliable:** No more broken layouts or inconsistent styling  
✅ **Easy:** Simple text fields, no complex formatting needed  

### Need Help?
Contact your developer if you need assistance setting up metafields for your products.