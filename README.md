# Mella Counseling Center Website

This is a web application for the Mella Counseling Center, providing information about the services offered, the team, and a contact form for potential clients to reach out.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Deployment](#deployment)
- [License](#license)


## Features

- **Home Page**: Overview of the counseling center.
- **Services Page**: Detailed information about the services offered.
- **Team Page**: Information about the team members.
- **Contact Page**: A form for potential clients to reach out.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/mella-counseling-center.git
   cd mella-counseling-center
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

This will start the Vite development server and you can view the application at `http://localhost:3000`.

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `lint`: Runs ESLint to check for linting errors.
- `preview`: Previews the production build.
- `deploy`: Deploys the application to GitHub Pages.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React DOM**: Provides DOM-specific methods for React.
- **React Router DOM**: Declarative routing for React applications.
- **Tailwind CSS**: A utility-first CSS framework.
- **Formspree**: A form backend service.
- **Lucide React**: A collection of simple and beautiful SVG icons.

## Development

### ESLint

ESLint is configured to lint TypeScript and React code. The configuration can be found in `eslint.config.js`.

### TypeScript

TypeScript is used for type checking. The configuration files are `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`.

### Tailwind CSS

Tailwind CSS is used for styling. The configuration file is `tailwind.config.js`.

### Vite

Vite is used as the build tool. The configuration file is `vite.config.ts`.

## Deployment

To deploy the application to GitHub Pages, run:
```sh
npm run deploy
```

This will build the application and push the `dist` folder to the `gh-pages` branch.

## License

This project is licensed under the MIT License.
