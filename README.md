
# Nasser's Portfolio
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Freitas-MA/nasser-porfolio/blob/main/LICENSE.md) 

## Overview

This project is a personal portfolio website built using React, a popular JavaScript library for building user interfaces. The project is located in the `nasser-portfolio` repository on GitHub and can be accessed at [https://space-nasser.vercel.app/](https://space-nasser.vercel.app/).

## Project Structure

The project is structured using the Vite build tool and follows a standard React project layout. The main files and directories are:

- `pages`: This directory contains the main pages of the website, including the index page (`index.jsx`) and other pages such as about, projects, and contact.
- `components`: This directory contains reusable React components used throughout the website.
- `styles`: This directory contains CSS styles for the website, using the `styled-components` library.
- `public`: This directory contains static assets such as images and fonts.
- `package.json`: This file contains project dependencies and scripts.

## Dependencies

The project uses the following dependencies:

- `@splidejs/splide`: A lightweight and flexible slider/carousel library.
- `@vercel/analytics`: A package for adding analytics to your Vercel projects.
- `emailjs`: A library for sending emails using JavaScript.
- `emailjs-com`: A library for sending emails using JavaScript (alternative version).
- `framer-motion`: A production-ready motion library for React.
- `react`: A JavaScript library for building user interfaces.
- `react-dom`: A package that provides DOM-specific methods for React.
- `react-icons`: A library that provides a set of icons for React.
- `react-responsive-carousel`: A carousel component for React.
- `react-router-dom`: A library for routing in React applications.
- `react-simple-typewriter`: A package that provides a typewriter effect as a React component.
- `react-social-icons`: A package that provides social media icons as React components.
- `styled-components`: A library for styling React components.

## Development Scripts

This project includes the following development scripts:

```json
"dev": "vite",
"build": "vite build",
"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
"preview": "vite preview"
```

```
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Runs the ESLint linter to check for code quality issues.
- `npm run preview`: Starts a preview server to view the built project.
```

## Usage

To use this project, follow these steps:

1. Clone the repository to your local machine.
2. Open the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Run `npm run dev` to start the development server.
5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Additional Notes

- The `react-social-icons` package is used to display social media icons. To use it, import the `SocialIcon` component from the package and pass the desired URL as a prop.
- The `react-simple-typewriter` package is used to create a typewriter effect. To use it, import the `Typewriter` component from the package and pass the desired text as a prop.
- The `styled-components` library is used for styling React components. You can define styled components using the `styled` function provided by the library.

## Author

Marcos Alves Freitas

[https://www.linkedin.com/in/freitas-marcos](https://www.linkedin.com/in/freitas-marcos)
