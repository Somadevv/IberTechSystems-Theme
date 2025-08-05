# Vitals App Product Tabs Setup Guide

## Overview
This guide shows you how to set up product metafields that the Vitals app can use for its product tabs feature.

## Step 1: Create Metafields in Shopify Admin

1. Go to **Settings > Custom data**
2. Click **Products**
3. Click **Add definition** for each of the following:

### Metafield Definitions to Create:

| Namespace | Key | Name | Type |
|-----------|-----|------|------|
| `custom` | `features` | Key Features | Multi-line text |
| `custom` | `specifications` | Technical Specifications | Multi-line text |
| `custom` | `applications` | Applications | Multi-line text |
| `custom` | `benefits` | Benefits | Multi-line text |
| `custom` | `installation` | Installation Info | Multi-line text |
| `custom` | `warranty` | Warranty Info | Multi-line text |

## Step 2: Add Data to Your Products

### For RHINO 230V Operator:

**Key Features:**
```
• Heavy-duty electromechanical design for reliability
• Built-in mechanical limit stops for precise gate positioning  
• 400mm stroke length optimized for most gate configurations
• Handles swing gates up to 3.5m leaf width effectively
• 230V AC power supply for consistent performance
• Irreversible operation enhances security when powered
• IP54 weather protection rating for outdoor durability
• Bronze gearing system for smooth, quiet operation
• Thermal protection prevents motor damage from overuse
• Quick emergency manual release system included
```

**Technical Specifications:**
```
Power Supply: 230V AC
Stroke Length: 400mm  
Max Leaf Width: 3.5m
Operation Type: Irreversible
Protection Class: IP54
Temperature Range: -20°C to +55°C
Duty Cycle: Heavy-duty continuous
Control Unit: Q80A compatible
```

**Applications:**
```
• Residential swing gate automation for enhanced security
• Commercial property access control systems
• Industrial facility entrance automation  
• Security installations requiring reliable daily operation
• Retrofit applications for existing manual gates
```

**Benefits:**
```
• Enhanced security through irreversible operation
• Weather-resistant construction for year-round reliability
• Precise positioning with built-in mechanical stops
• Low maintenance with thermal protection
• Professional-grade performance and build quality
• Compatible with all standard gate automation accessories
```

**Installation:**
```
Professional installation required. Concrete foundation needed for proper mounting. Standard 230V electrical connection required. Compatible with all control systems including photocells, LED blinkers, and remote control systems. Mounting hardware and comprehensive installation manual included.
```

**Warranty:**
```
3-year motor warranty covering all mechanical components. 1-year warranty on electronic components. Professional installation support available. Extended warranty options available for commercial applications.
```

## Step 3: Configure Vitals App

1. Open your **Vitals app** in Shopify admin
2. Go to **Product Tabs** section
3. **Enable Product Tabs**
4. Configure which metafields to display:
   - Map `custom.features` to "Key Features" tab
   - Map `custom.specifications` to "Specifications" tab  
   - Map `custom.applications` to "Applications" tab
   - Map `custom.benefits` to "Benefits" tab
   - Map `custom.installation` to "Installation" tab
   - Map `custom.warranty` to "Warranty" tab

## Step 4: Test Your Product Tabs

1. Visit any product page where you've added the metafields
2. The Vitals product tabs should now appear below the product description
3. Each tab will show the content from the corresponding metafield

## Enhanced CSV Import

The `Product-list-Enhanced.csv` file contains all this data pre-formatted. You can:

1. Use a CSV import app that supports metafields (like Matrixify)
2. Map the metafield columns during import
3. All products will be populated with the enhanced content

## Troubleshooting

**Tabs not showing?**
- Check that metafields are created with the exact namespace and keys
- Ensure metafields have content for the specific product
- Verify Vitals app is configured to use the correct metafields

**Content not formatting properly?**
- Use multi-line text field type for better formatting
- Use bullet points (•) for lists
- Keep technical specs in key: value format

**Need help?**
- Check Vitals app documentation for latest configuration options
- Test with one product first before bulk importing
- Contact Vitals support for app-specific configuration help