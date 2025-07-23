# IberTechSystems Theme - Development Planning Document

## Project Context
Based on Brief.md, this is a Shopify theme for IberTechSystems with a critical 404 issue on product pages that needs to be resolved at the store configuration level before proceeding with theme development.

## Current Requirements from notes.txt

### 1. Documents Download Support
**Requirement:** Add support for document downloads (PDFs, installation manuals, etc.) with customizable section settings.

**Approach:**
- Create a new section `sections/product-documents.liquid`
- Add document metafields to products (e.g., `custom.document_title`, `custom.document_url`, `custom.document_description`)
- Implement section settings for:
  - Section title customization
  - Display format options (list, grid, cards)
  - Show/hide document descriptions
  - Button styling options
- Add CSS styling for download buttons and document information display
- Integrate with existing product templates

**Technical Implementation:**
- Use Shopify's file upload metafields for document storage
- Create responsive download interface
- Add icon support for different file types
- Include file size and type information display

---

### 2. Fix Standard Pages - Remove Custom Liquid Duplication
**Requirement:** Eliminate duplicate content on standard pages caused by custom liquid implementations.

**Approach:**
- Audit all page templates in `/templates/` directory
- Identify pages with duplicate content (likely using both standard Shopify content and custom liquid)
- Review section implementations in `/sections/` for over-rendering
- Standardize page content delivery method across all templates

**Investigation Steps:**
1. Map all page templates and their content sources
2. Identify which pages show duplicate content
3. Determine if duplication comes from:
   - Multiple section renders
   - Custom liquid conflicting with standard page content
   - Incorrect template assignments
4. Create standardized approach for page content rendering

**Technical Implementation:**
- Remove redundant liquid code from page templates
- Ensure single source of truth for page content
- Update section logic to prevent double-rendering
- Test all page types after changes

---

### 3. Fix Page Duplications (Returns Policy Example)
**Requirement:** Resolve specific page duplication issues, with returns policy mentioned as an example.

**Approach:**
- Focus on returns policy page as primary example
- Identify the specific duplication pattern
- Apply fix methodology to other affected pages
- Implement prevention measures for future pages

**Investigation Process:**
1. Examine `templates/page.returns-policy.json` (if exists) or relevant template
2. Check corresponding sections for duplicate content rendering
3. Review page creation process in Shopify admin
4. Document duplication root cause for systematic fix

**Technical Implementation:**
- Create clean, single-source page templates
- Establish page content guidelines
- Implement template inheritance where appropriate
- Add comments in templates to prevent future duplication

---

## Implementation Priority
1. **HOLD** - First resolve the 404 product page issue mentioned in Brief.md
2. Investigate and fix page duplications (highest impact)
3. Implement documents download support (new feature)
4. Establish prevention measures and documentation

## Testing Strategy
- Test all page types after duplication fixes
- Verify document download functionality across devices
- Ensure no new conflicts with existing product tabs system
- Validate metafields integration

## User Comments Section
*Please add your feedback, additional requirements, or modifications to the approach below:*

---

**Your Comments:**
[SPACE FOR USER COMMENTS - Please add any feedback, changes, or additional requirements here]

---
