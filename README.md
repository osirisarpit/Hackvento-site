# Stranger Things Experience - Deploy Ready

This is a React-based interactive website with a Stranger Things theme, featuring dynamic mouse effects and animations.

## Features

- Interactive mouse tracking effects
- Responsive design for all devices
- Mobile-friendly navigation with hamburger menu
- Optimized for deployment
- Modern React with Vite build system

## Deployment

The project is ready for deployment to any static hosting service:

### To build for production:
```bash
npm run build
```

### Deployment targets:
- Netlify: Drag and drop the `dist` folder or connect your Git repository
- Vercel: Connect your Git repository and deploy
- GitHub Pages: Upload the contents of the `dist` folder to your GitHub Pages branch
- Any static hosting: Upload the contents of the `dist` folder

### Build output:
- Output directory: `dist`
- Assets are optimized and hashed for caching
- Relative paths for easy subdirectory deployment

## Development

To run the development server:

```bash
npm install
npm run dev
```

The site will be available at http://localhost:5173

## Technologies

- React 19
- Vite 7
- Framer Motion for animations
- CSS for styling
- Responsive design with mobile-first approach