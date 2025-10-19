
 # Likha Site Works - FAQ Page

A modern, responsive FAQ page built with React and Vite. This project was created based on the design specifications from [Figma](https://www.figma.com/design/A4p1Kn3GTA2AuCv3qKLz2Q/www_ohhmyads_com_FAQs_1920w_1440w_1024w_768w_default).

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Interactive Elements**: Smooth animations and user interactions

## Tech Stack

- **React 18.3.1** - Modern React with hooks and concurrent features
- **Vite 6.3.5** - Fast build tool and development server
- **React Router DOM 7.9.4** - Client-side routing
- **Lucide React 0.546.0** - Beautiful icons
- **SnapSVG 0.0.6** - Vector graphics and animations
- **Tech Stack Icons 3.3.2** - Technology icons

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

This project is configured for deployment on **Vercel**. The build process includes automatic permission fixes for the Vite binary to ensure successful deployments.

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deployments will trigger on every push to the main branch

**Note**: The `postinstall` script in `package.json` ensures Vite has proper executable permissions on Vercel's build environment.

## Project Structure

```
├── public/          # Static assets
├── src/            # Source code
│   ├── components/ # Reusable components
│   ├── pages/     # Page components
│   └── styles/    # CSS styles
├── index.html      # Entry point
└── vite.config.js  # Vite configuration
```

## Development

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## License

This project is private and proprietary.