# Smart Parking Finder - Design System & Styling Guide

## Color Palette

### Primary Colors
- **Primary Orange**: `#FF6B35` (Bright Orange)
- **Secondary Yellow**: `#FFB627` (Golden Yellow)
- **Accent Orange**: `#FF8C42` (Light Orange)

### Neutral Colors
- **Pure White**: `#FFFFFF`
- **Charcoal Black**: `#1A1A1A`
- **Light Gray**: `#F5F5F5`
- **Medium Gray**: `#8E8E93`
- **Dark Gray**: `#2C2C2E`

### Semantic Colors
- **Success Green**: `#34C759`
- **Warning Amber**: `#FF9500`
- **Error Red**: `#FF3B30`
- **Info Blue**: `#007AFF`

## Typography

### Font Families
```css
/* Headers - Product Sans */
font-family: 'Product Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Body Text - Google Product Sans */
font-family: 'Product Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Typography Scale
**H1**: 32px, Bold, Product Sans
**H2**: 28px, Bold, Product Sans
**H3**: 24px, SemiBold, Product Sans
**H4**: 20px, SemiBold, Product Sans
**H5**: 18px, Medium, Product Sans
**H6**: 16px, Medium, Product Sans
- **Body Large**: 16px, Regular, Product Sans
- **Body**: 14px, Regular, Product Sans
- **Body Small**: 12px, Regular, Product Sans
- **Caption**: 11px, Regular, Product Sans

## Component Styling

### Buttons

#### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-family: 'Product Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
  transition: all 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
}
```

#### Secondary Button (White)
```css
.btn-secondary {
  background: rgba(255, 255, 255, 0.95);
  color: #FF6B35;
  border: 2px solid #FF6B35;
  border-radius: 12px;
  padding: 10px 22px;
  font-family: 'Product Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #FF6B35;
  color: #FFFFFF;
}
```

#### Tertiary Button (Black)
```css
.btn-tertiary {
  background: rgba(26, 26, 26, 0.9);
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-family: 'Product Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}

.btn-tertiary:hover {
  background: rgba(26, 26, 26, 1);
  transform: translateY(-1px);
}
```

### Navigation & Toolbars

#### Main Header
```css
.main-header {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 107, 53, 0.1);
  padding: 16px 24px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-family: 'Product Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #FF6B35;
}
```

#### Sidebar Panel
```css
.sidebar {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 107, 53, 0.1);
  padding: 24px;
  min-height: 100vh;
  transition: transform 0.3s ease;
}

.sidebar-header {
  font-family: 'Product Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #1A1A1A;
  margin-bottom: 24px;
}
```

#### Search Bar
```css
.search-container {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 107, 53, 0.2);
  border-radius: 16px;
  padding: 16px 20px;
  margin: 16px;
  box-shadow: 0 8px 32px rgba(255, 107, 53, 0.1);
}

.search-input {
  border: none;
  background: transparent;
  font-family: 'Product Sans', sans-serif;
  font-size: 16px;
  color: #1A1A1A;
  width: 100%;
}

.search-input::placeholder {
  color: #8E8E93;
}
```

### Map Components

#### Map Controls
```css
.map-controls {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 12px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 50;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.control-button {
  background: rgba(255, 107, 53, 0.1);
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 4px;
  color: #FF6B35;
  transition: all 0.2s ease;
}

.control-button:hover {
  background: rgba(255, 107, 53, 0.2);
}
```

#### Map Legend
```css
.map-legend {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  padding: 16px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 50;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.legend-title {
  font-family: 'Product Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #1A1A1A;
  margin-bottom: 12px;
}
```

### Parking Components

#### Parking Card
```css
.parking-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 107, 53, 0.1);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.parking-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border-color: rgba(255, 107, 53, 0.3);
}

.parking-title {
  font-family: 'Product Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #1A1A1A;
  margin-bottom: 8px;
}
```

#### Availability Indicator
```css
.availability-high {
  background: linear-gradient(90deg, #34C759, #30D158);
  color: white;
  border-radius: 20px;
  padding: 4px 12px;
  font-family: 'Product Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
}

.availability-medium {
  background: linear-gradient(90deg, #FFB627, #FF9500);
  color: white;
  border-radius: 20px;
  padding: 4px 12px;
  font-family: 'Product Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
}

.availability-low {
  background: linear-gradient(90deg, #FF3B30, #FF453A);
  color: white;
  border-radius: 20px;
  padding: 4px 12px;
  font-family: 'Product Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
}
```

### Interactive Elements

#### Modal/Dialog
```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}

.modal-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(30px);
  border-radius: 20px;
  padding: 32px;
  max-width: 500px;
  margin: 10% auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-title {
  font-family: 'Product Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #1A1A1A;
  margin-bottom: 16px;
}
```

#### Toast Notifications
```css
.toast {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-left: 4px solid #FF6B35;
  border-radius: 12px;
  padding: 16px 20px;
  margin: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.toast-success {
  border-left-color: #34C759;
}

.toast-error {
  border-left-color: #FF3B30;
}

.toast-warning {
  border-left-color: #FF9500;
}
```

## CSS Custom Properties

```css
:root {
  /* Colors */
  --color-primary: #FF6B35;
  --color-secondary: #FFB627;
  --color-accent: #FF8C42;
  --color-white: #FFFFFF;
  --color-black: #1A1A1A;
  --color-gray-light: #F5F5F5;
  --color-gray-medium: #8E8E93;
  --color-gray-dark: #2C2C2E;
  
  /* Typography */
  --font-header: 'Product Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Product Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.15);
  --shadow-orange: 0 4px 20px rgba(255, 107, 53, 0.3);
  
  /* Backdrop Effects */
  --blur-light: blur(10px);
  --blur-medium: blur(20px);
  --blur-heavy: blur(30px);
}
```

## Responsive Breakpoints

```css
/* Mobile First Approach */
.container {
  padding: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
  
  .sidebar {
    width: 350px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
  }
  
  .main-content {
    margin-left: 350px;
  }
}

/* Large Desktop */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
    margin: 0 auto;
  }
}
```

## Animation Guidelines

### Micro-interactions
- **Button Hover**: 0.2s ease transition
- **Card Hover**: 0.3s ease transform + shadow
- **Modal Entry**: 0.3s ease scale + opacity
- **Page Transitions**: 0.4s ease-in-out

### Loading States
```css
.loading-spinner {
  border: 3px solid rgba(255, 107, 53, 0.1);
  border-top: 3px solid #FF6B35;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Accessibility Features

### Focus States
```css
.focusable:focus {
  outline: 2px solid #FF6B35;
  outline-offset: 2px;
  border-radius: 4px;
}
```

### High Contrast Support
```css
@media (prefers-contrast: high) {
  :root {
    --color-primary: #E55B2B;
    --color-black: #000000;
    --color-white: #FFFFFF;
  }
}
```

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This design system emphasizes the bright orange/yellow color scheme with extensive use of translucent elements and backdrop blur effects, creating a modern, vibrant interface that maintains readability and accessibility across all components.