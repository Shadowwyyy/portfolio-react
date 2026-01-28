# Jeet Sharma - Portfolio Website

A portfolio website built with React, featuring interactive animations, mouse-tracking effects, and a modern design aesthetic.

🔗 **Live Site:** [jeetsharma.dev](https://jeetsharma.dev)

## Features

- **Signature red/black color scheme with diagonal stripes, bold typography, and smooth animations
- **Interactive Mouse Effects**: Dynamic shadow tracking on text elements that follows cursor movement
- **Smooth Navigation**: Animated transitions between sections using Framer Motion
- **Contact Form**: Integrated with FormSubmit for direct email submissions
- **Resume Download**: One-click resume download functionality
- **SEO Optimized**: Meta tags for search engines and social media sharing
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Custom 404 Page**: Styled error page maintaining design consistency
- **Analytics**: Google Analytics integration for visitor tracking

## Tech Stack

- **Frontend**: React 18, Vite
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Styling**: CSS3 with custom animations
- **Form Handling**: FormSubmit
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## Projects Featured

1. **3D Audio Visualizer** - Real-time audio-reactive visualizer using Three.js and Web Audio API
2. **Figroup** - Full-stack SaaS finance platform for group expense management
3. **FinSync** - Financial management system with automated transaction tracking
4. **Keyboard Scraper** - Python web scraping tool for mechanical keyboard data aggregation
5. **Portfolio Website** - This portfolio (meta!)

## Local Development

1. Clone the repository:
```bash
   git clone https://github.com/Shadowwyyy/portfolio-react.git
   cd portfolio-react
```

2. Install dependencies:
```bash
   npm install
```

3. Start development server:
```bash
   npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production
```bash
npm run build
```

The build output will be in the `dist` folder.

## Deployment

Deployed on Vercel with automatic deployments from the `main` branch.

### Custom Domain Setup

The site is hosted at `jeetsharma.dev` with DNS configured through Namecheap pointing to Vercel.


## Key Features Implementation

### Mouse-Tracking Shadow Effect
Custom React hook (`useMouseShadow`) that calculates cursor position and applies dynamic text shadows to create an interactive 3D effect.

### Section Navigation
State-based navigation system with smooth transitions using Framer Motion's `AnimatePresence` and page-level animations.

### Form Integration
Contact form connected to FormSubmit service for serverless form handling and email delivery.

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact

- **Email**: sharma.je@northeastern.edu
- **GitHub**: [@Shadowwyyy](https://github.com/Shadowwyyy)
- **LinkedIn**: [jeet-sharma14](https://www.linkedin.com/in/jeet-sharma14/)
- **Portfolio**: [jeetsharma.dev](https://jeetsharma.dev)

## License

---

© 2026 Jeet Sharma. All rights reserved.

---

Built with ❤️ and inspired by Persona 5's iconic UI design.
