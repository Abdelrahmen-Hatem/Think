# Think Creative Agency Landing Page

A modern, responsive landing page for Think Creative Agency with a dark theme, built with semantic HTML, SASS, and vanilla JavaScript.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Dark theme with accent colors
- Animated statistics counters
- Video modal with YouTube embed
- Mobile-friendly navigation
- Accessible markup and interactions
- Optimized performance
- SEO-friendly with meta tags and structured data

## Project Structure

```
think-agency/
├─ index.html
├─ assets/
│  ├─ logo/
│  │  ├─ think-logo-horizontal.svg
│  │  └─ think-logo-vertical.svg
│  ├─ icons/
│  └─ images/
├─ src/
│  ├─ scss/
│  │  ├─ _variables.scss
│  │  ├─ _mixins.scss
│  │  ├─ _base.scss
│  │  ├─ _layout.scss
│  │  ├─ _header.scss
│  │  ├─ _hero.scss
│  │  ├─ _services.scss
│  │  └─ main.scss
│  └─ js/
│     ├─ main.js
│     └─ counters.js
├─ dist/
│  ├─ css/
│  └─ js/
├─ package.json
└─ README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd think-agency
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Development

To compile SASS and watch for changes:
```
npm run dev
```

This will:
- Compile SCSS to CSS in the `dist/css` directory
- Watch for changes in the `src/scss` directory

### Build

To build for production:
```
npm run build
```

This will:
- Compile and minify SCSS to CSS
- Output both regular and minified versions to `dist/css`

## Customization

### Colors

Colors are defined in `src/scss/_variables.scss`:
- Background Dark: `#0B0B0B`
- Primary Black: `#000000`
- Off-White: `#F8F8F8`
- Accent Neon Blue: `#00AEEF`

### Typography

The site uses:
- English: Poppins or Montserrat (loaded from Google Fonts)
- Arabic: Cairo or Tajawal (loaded from Google Fonts)

### Sections

1. **Header**: Sticky navigation with logo and menu
2. **Hero**: Full-screen section with animated entrance
3. **About**: Two-column layout with features and stats
4. **Video Strip**: Full-width video section with play button
5. **Services**: Grid of service cards
6. **Portfolio**: Masonry grid of projects
7. **Contact**: Form and contact information
8. **Footer**: Logo, links, and social media

## JavaScript Features

- Sticky header that shrinks on scroll
- Animated counters that trigger when scrolled into view
- Mobile-friendly navigation menu
- Video modal with YouTube embed
- Form validation and submission handling

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Reduced motion support

## Performance

- Critical CSS inlined for hero section
- Lazy loading for images
- Optimized asset sizes
- Minified CSS and JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

Simply upload the following files to your web server:
- `index.html`
- `dist/css/main.min.css`
- `dist/js/main.js`
- `assets/` directory

## CMS Integration

For portfolio updates, consider:
- Headless WordPress with custom post types
- Netlify CMS with Git backend
- Contentful or similar headless CMS

## License

MIT License - feel free to use and modify for your projects.