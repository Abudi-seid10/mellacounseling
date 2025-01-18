# Mella Counseling Center Website

This is a modern, responsive web application for the Mella Counseling Center, providing information about mental health services, the professional team, and easy ways for potential clients to reach out. Built with React, TypeScript, and Tailwind CSS, focusing on accessibility and user experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Deployment](#deployment)
- [Creator](#creator)
- [License](#license)

## Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Dark Mode**: Support for system and user-preferred color schemes
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Performance**: Optimized loading with code splitting and lazy loading
- **Contact Form**: Integrated contact form with Formspree backend
- **SEO Ready**: Meta tags and structured data for better search engine visibility

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Abudi-seid10/mella-counseling.git
   cd mella-counseling
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To start the development server, run:
```sh
npm run dev
```

This will start the Vite development server and you can view the application at `http://localhost:5173`.

## Scripts

- `dev`: Starts the development server
- `build`: Builds the application for production
- `lint`: Runs ESLint to check for linting errors
- `preview`: Previews the production build
- `deploy`: Deploys the application to GitHub Pages

## Dependencies

### Production Dependencies
- **React 18**: Modern UI development
- **React Router DOM**: Client-side routing
- **Formspree**: Form handling and submission
- **Lucide React**: Beautiful SVG icons
- **React Helmet Async**: Document head management
- **React Intersection Observer**: Scroll animations

### Development Dependencies
- **TypeScript**: Type safety
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Development

### Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── styles/        # Global styles and Tailwind config
├── assets/        # Static assets
└── utils/         # Utility functions
```

### Styling
- Uses Tailwind CSS for utility-first styling
- Custom design system with consistent spacing and colors
- Dark mode support with `dark:` variants
- Custom components defined in `@layer components`

### TypeScript
- Strict type checking enabled
- Custom type definitions in `types/`
- Separate configs for app and node

## Deployment

To deploy to GitHub Pages:
```sh
npm run deploy
```

This builds the app and deploys to the `gh-pages` branch.

## Creator

This project was created by [Abudi-seid10](https://github.com/Abudi-seid10) utilizing AI agents for development assistance. The combination of human creativity and AI capabilities has resulted in a modern, efficient, and user-friendly web application.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
