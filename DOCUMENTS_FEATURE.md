# Product Documents Feature

## Overview
The Product Documents feature allows you to display downloadable documents (PDFs, manuals, etc.) on product pages.

## Setup Instructions

### 1. Create Document Metafields
In your Shopify admin, create these custom metafields for products:

- `custom.document_1_title` (Single line text) - Title of first document
- `custom.document_1_url` (URL) - File URL for first document  
- `custom.document_1_description` (Single line text) - Optional description

Repeat for up to 5 documents:
- `custom.document_2_title`, `custom.document_2_url`, `custom.document_2_description`
- `custom.document_3_title`, `custom.document_3_url`, `custom.document_3_description`
- `custom.document_4_title`, `custom.document_4_url`, `custom.document_4_description`
- `custom.document_5_title`, `custom.document_5_url`, `custom.document_5_description`

### 2. Upload Documents
1. Go to Settings > Files in your Shopify admin
2. Upload your PDF/document files
3. Copy the file URLs
4. Add these URLs to the product metafields

### 3. Configure Products
For each product with documents:
1. Edit the product
2. Scroll to metafields section
3. Fill in the document title and URL
4. Optionally add a description

## Section Settings

The Product Documents section includes these customizable settings:

- **Heading**: Section title (default: "Product Documents")
- **Description**: Optional text shown above documents
- **Layout**: Grid or List view
- **Show descriptions**: Toggle document descriptions
- **Button text**: Download button text (default: "Download")  
- **Button style**: Primary, Secondary, or Tertiary
- **Empty state**: Show section even when no documents

## Template Integration

The documents section is automatically added to:
- `templates/product.json`
- `templates/product.dynamic.json`
- `templates/product.enhanced.json`

## File Types Supported

The section automatically detects file types and shows appropriate icons:
- PDF files (.pdf)
- Word documents (.doc, .docx)
- Generic files (other extensions)

## Example Usage

```
Document Title: "Installation Manual"
Document URL: "https://cdn.shopify.com/s/files/1/1234/5678/files/manual.pdf"
Document Description: "Complete installation guide with diagrams"
```

This will display a downloadable card with PDF icon, title, description, and download button.