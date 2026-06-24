---
name: Atelier Heritage
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#5a413d'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#8e706c'
  outline-variant: '#e2bfb9'
  surface-tint: '#b22b1d'
  primary: '#570000'
  on-primary: '#ffffff'
  primary-container: '#800000'
  on-primary-container: '#ff8371'
  inverse-primary: '#ffb4a8'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#352315'
  on-tertiary: '#ffffff'
  tertiary-container: '#4d3829'
  on-tertiary-container: '#bea18e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#8f0f07'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#fddcc7'
  tertiary-fixed-dim: '#dfc1ac'
  on-tertiary-fixed: '#28180b'
  on-tertiary-fixed-variant: '#584233'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  button:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is a fusion of **High-Fashion Luxury** and **Modern Minimalist Boutique** aesthetics. It is crafted to evoke the feeling of stepping into a private atelier—where heritage craftsmanship meets contemporary convenience. The brand personality balances the authority of forty years of tailoring experience with a fresh, digital-first shopping experience.

The visual style leans heavily into **Editorial Minimalism** with strategic touches of **Glassmorphism**. It utilizes expansive white space to frame high-quality photography, treating every product listing like a magazine feature. The interface remains sophisticated yet functional, ensuring the user feels pampered through a "digital boutique" flow that prioritizes texture, precision, and trust.

## Colors

The palette is rooted in tradition and opulence. 
- **Deep Maroon (#800000)** serves as the primary brand anchor, used for high-impact accents, call-to-actions, and heritage moments.
- **Champagne Gold (#D4AF37)** provides a sense of luxury; it is used sparingly for borders, iconography, and subtle highlights to denote premium quality.
- **Soft Dusty Pink (#F2D2BD)** acts as a sophisticated secondary tone, used for backgrounds or soft transitions to keep the interface warm and inviting.
- **Pure White (#FFFFFF)** and **Deep Black (#000000)** provide the structural contrast required for an editorial layout.

Text should primarily be Deep Black on White for maximum legibility, with Gold or Maroon used for emphasis and navigational hierarchy.

## Typography

This design system uses a classic pairing of a high-contrast serif and a geometric sans-serif. 

**Playfair Display** is reserved for headlines and editorial pull-quotes. Its elegant serifs reflect the "tailor's needle"—precise and timeless. For the largest displays, use a slight negative letter spacing to create a tighter, more prestigious look.

**Montserrat** handles all functional text, including body copy, product descriptions, and navigation. Its clean, open apertures ensure clarity even at small sizes. Use **Label-Caps** for category tags and metadata to add a modern, fashion-forward rhythmic feel to the layout.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous margins to mimic the white space of a luxury catalog. 

- **Desktop:** 12-column grid with a 64px outer margin. Use wide gutters (24px) to allow product images to breathe.
- **Mobile:** 4-column grid with 16px margins. 

The vertical rhythm is built on an 8px base unit. For product displays, use asymmetrical layouts (e.g., a large 8-column image paired with 4-column text) to break the "basic shop" mold and create a more curated, boutique visual interest.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Glassmorphism**. 

- **Surface Layers:** Use very subtle off-white backgrounds (#FAFAFA) for secondary containers to separate them from the primary white background.
- **Glassmorphism:** Navigation bars and "Quick Add" overlays should use a high-blur (20px) backdrop filter with a semi-transparent white tint (70% opacity) and a 1px Champagne Gold border.
- **Shadows:** Avoid heavy, dark shadows. Instead, use "Ambient Glows"—very soft, low-opacity (#000000 @ 5%) shadows with a wide spread (30px) to make cards appear as if they are floating elegantly above the surface.

## Shapes

The shape language is sophisticated and predominantly **Rounded**. 

The design system uses a `rounded-xl` (1.5rem / 24px) standard for product cards and containers to soften the high-contrast color palette. Buttons should remain slightly more structured with a standard `rounded` (0.5rem / 8px) or a full `pill` shape for specific "Style Guide" interactions. 

Thin (1px) Champagne Gold borders should be applied to primary containers and inputs to reinforce the "gold-accented" brand requirement without being overbearing.

## Components

- **Buttons:** Primary buttons are solid Deep Maroon with white text. Secondary buttons use a transparent background with a 1px Champagne Gold border and Gold text. All buttons use uppercase Montserrat with slight letter spacing.
- **Product Cards:** Featuring `rounded-xl` corners and a subtle 1px border (#F2D2BD). The image should occupy the top 75% of the card. Use a soft fade-in animation on hover.
- **Input Fields:** Minimalist design with a bottom-only border in Gold or a full 1px border with high padding. Labels are always `label-caps` positioned above the field.
- **Chips/Tags:** Used for fabric types (Silk, Wool, Cotton). These should be Pill-shaped with a Soft Dusty Pink background and Maroon text.
- **Icons:** Use ultra-thin (1pt) stroke icons in Champagne Gold. 
- **The "Boutique" Feature:** A unique "Tailor’s Note" component—a stylized text box with a light grain texture and a thin gold border, used for heritage storytelling or material care instructions.