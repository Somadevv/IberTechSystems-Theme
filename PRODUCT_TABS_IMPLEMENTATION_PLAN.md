# Product Tabs Implementation Plan

## Overview
Moving product tabs to display alongside the product image on the right side, improving styling to match the reference design, and fixing the "Write a Review" button functionality.

## Current Status
- ✅ Added product_tabs block type to main-product section
- ✅ Updated product.json template to use the block instead of separate section
- ❌ Tabs still appear below product instead of alongside
- ❌ Styling doesn't match reference design
- ❌ "Write a Review" button doesn't work

---

## Task 1: Move Product Tabs to Right Side of Product Image

**Current Issue:** Tabs appear below the product image instead of alongside it in the right column.

**Proposed Solution:** Modify the main-product section CSS and layout to display tabs in the product info column (right side) instead of full-width below.

**Implementation Steps:**
1. Update product-tabs.css to integrate with existing product layout grid
2. Modify the product_tabs block positioning in main-product.liquid 
3. Ensure responsive behavior on mobile devices

**Your Comments/Feedback:**
```
[Space for your feedback and requirements]
```

---

## Task 2: Improve Tabs Styling to Match Reference Design

**Current Issue:** Current tabs styling is basic and doesn't match the clean, modern look from your reference image.

**Proposed Solution:** 
- Update tab buttons to have cleaner, more minimal styling
- Improve typography and spacing
- Add better hover and active states
- Match the visual hierarchy from reference image

**Specific Style Changes:**
1. Cleaner tab button design with subtle borders
2. Better typography (font size, weight, spacing)
3. Improved color scheme and contrast
4. More compact layout to fit in right column
5. Enhanced active/inactive state styling

**Your Comments/Feedback:**
```
[Space for your feedback on styling preferences]
```

---

## Task 3: Fix "Write a Review" Button Functionality

**Current Issue:** Button doesn't do anything when clicked.

**Current Implementation:** Button tries to scroll to `#product-review-form` but this element doesn't exist on the page.

**Proposed Solutions (choose one):**
A. **Modal Approach:** Open a review form in a modal/popup
B. **Scroll to Form:** Add the review form section to the page and make button scroll to it
C. **External Integration:** Link to a third-party review system (Judge.me, Yotpo, etc.)
D. **Simple mailto:** Open email client with pre-filled review request

**Recommended Approach:** Option B - Add review form to page and scroll to it

**Your Comments/Feedback:**
```
[Please specify which approach you prefer and any additional requirements]
```

---

## Task 4: CSS Integration with Existing Theme

**Current Issue:** Product tabs CSS may conflict with existing theme styles.

**Proposed Solution:**
1. Audit existing CSS classes and variables
2. Ensure tabs integrate seamlessly with current color scheme
3. Use existing theme typography and spacing variables
4. Make sure tabs work with both light and dark modes (if applicable)

**Your Comments/Feedback:**
```
[Any specific theme integration requirements or constraints]
```

---

## Task 5: Mobile Responsiveness

**Current Issue:** Need to ensure tabs work well on mobile devices.

**Proposed Solution:**
1. Stack tabs vertically on mobile if needed
2. Ensure touch-friendly button sizes
3. Proper spacing and readability on small screens

**Your Comments/Feedback:**
```
[Mobile-specific requirements or preferences]
```

---

## Technical Implementation Notes

**Files to be Modified:**
- `assets/product-tabs.css` - Main styling updates
- `sections/main-product.liquid` - Layout and positioning
- `assets/product-tabs.js` - Enhanced functionality
- `sections/product-reviews-form.liquid` - Review form integration (if needed)

**CSS Strategy:**
- Use CSS Grid/Flexbox for layout
- Leverage existing theme CSS variables
- Ensure compatibility with existing product layout

**JavaScript Enhancements:**
- Improve tab switching animation
- Add review form functionality
- Ensure accessibility compliance

---

## Next Steps

1. **Review this document** - Please add your comments and feedback in the spaces provided
2. **Prioritize tasks** - Let me know which tasks are most important
3. **Approve approach** - Confirm the technical direction for each task
4. **Begin implementation** - I'll start with the highest priority tasks

**Your Overall Comments:**
```
[General feedback, additional requirements, or changes to the plan]
```

---

## UPDATED IMPLEMENTATION PLAN (Based on Feedback)

### **Issue Analysis:**
1. ❌ Tab button styling doesn't match reference image (should be flat, minimal)
2. ❌ "Write a Review" button is non-functional 
3. ❌ Features are showing in Description tab instead of Features tab
4. ❌ Need to rename "Key Features" to "Features"
5. ❌ Need intelligent content parsing to separate description vs features

### **New Implementation Approach:**

#### **Task A: Fix Tab Button Styling**
**Current:** Raised buttons with borders and shadows
**Target:** Flat, minimal tabs matching reference image
**Solution:** 
- Remove borders, shadows, and raised appearance
- Use simple underline for active state
- Clean typography with subtle hover effects
- Match exact reference design

#### **Task B: Fix "Write a Review" Button**
**Current:** Button tries to scroll to non-existent element
**Proposed Solutions:**
1. **Modal Review Form** - Open popup with review form
2. **Anchor to Review Section** - Add review form section and scroll to it
3. **External Integration** - Link to review platform
4. **Contact Form Integration** - Use existing contact form system

**Recommended:** Option 2 - Add review form section below tabs and scroll functionality

#### **Task C: Intelligent Content Parsing**
**Problem:** All content appears in Description tab, Features tab is empty
**Solution:** Create smart parser that:
1. Analyzes product description for feature-like content
2. Extracts bullet points, lists, or feature keywords
3. Automatically populates Features tab
4. Leaves narrative description in Description tab

**Logic:**
- Look for HTML lists (`<ul>`, `<ol>`)
- Detect bullet points or dashes
- Find feature keywords (waterproof, durable, etc.)
- Parse structured content vs prose

#### **Task D: Content Distribution Controller**
**Create JavaScript/Liquid logic:**
```liquid
{% comment %} Parse description for features {% endcomment %}
{% assign description_content = product.description %}
{% assign features_content = '' %}

{% comment %} Extract features using pattern matching {% endcomment %}
{% if description_content contains '<ul>' or description_content contains '<li>' %}
  {% comment %} Extract list items as features {% endcomment %}
{% elsif description_content contains '•' or description_content contains '-' %}
  {% comment %} Extract bullet points as features {% endcomment %}
{% endif %}
```

#### **Task E: Review Integration**
**Add review form section after tabs:**
- Use contact form as backend
- Include product details in submission
- Scroll functionality from "Write a Review" button
- Form validation and success messaging

### **Implementation Order:**
1. ✅ Update tab styling to match reference
2. ✅ Rename "Key Features" to "Features" 
3. ✅ Create content parsing logic
4. ✅ Add review form section and scroll functionality
5. ✅ Test and validate all functionality

### **Technical Files to Modify:**
- `assets/product-tabs.css` - Fix styling to match reference
- `sections/main-product.liquid` - Add content parsing logic
- `sections/product-reviews-form.liquid` - Add to page after tabs
- `assets/product-tabs.js` - Fix button functionality
- `templates/product.json` - Update configuration

**Expected Outcome:**
- Clean, flat tabs matching reference design
- Automatic feature extraction from descriptions
- Working review button with form integration
- Professional, user-friendly interface