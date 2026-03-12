# 🚀 Portfolio - Rushi Kedhar Konduru

A modern, interactive portfolio website featuring stunning 3D graphics, smooth animations, and a sleek black & white aesthetic. Built with Next.js 15, React 19, and cutting-edge web technologies.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-rushikedhar.info-00D9FF?style=for-the-badge&logo=vercel)](https://rushikedhar.info)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## ✨ Features

### 🎨 Visual Excellence
- **Interactive 3D Graphics** - Spline-powered 3D scenes with mouse-responsive animations
- **Custom Cursor Glow** - Liquid-style cursor effect with smooth trailing
- **Scroll Progress Indicator** - Animated gradient progress bar tracking page scroll
- **Spotlight Effects** - Dynamic spotlight animations on cards and sections
- **Smooth Animations** - Framer Motion-powered transitions and micro-interactions

### 📱 Responsive Design
- **Mobile-First Approach** - Fully responsive across all device sizes
- **Hamburger Navigation** - Animated mobile menu with smooth transitions
- **Adaptive 3D Scenes** - Intelligent 3D content loading based on screen size
- **Touch-Optimized** - Gesture-friendly interactions for mobile devices

### 🎯 Sections
- **Hero Section** - Eye-catching introduction with animated text and 3D scene
- **About Me** - Education, achievements, and professional summary
- **Experience Timeline** - Interactive timeline with role details
- **Featured Projects** - Showcase of key projects with tech stacks
- **Skills Grid** - Organized display of technical capabilities
- **Contact Section** - Multiple ways to connect with social links

### ⚡ Performance
- **Next.js 15 with Turbopack** - Lightning-fast development and build times
- **Optimized Assets** - Efficient loading and rendering
- **Smooth Scrolling** - Native smooth scroll behavior
- **SEO Optimized** - Comprehensive metadata and Open Graph tags

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15.5](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first styling

### UI & Animations
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations
- **[Spline](https://spline.design/)** - Interactive 3D graphics
- **[React Spline](https://www.npmjs.com/package/@splinetool/react-spline)** - React integration for Spline

### Deployment
- **[Vercel](https://vercel.com/)** - Hosting and continuous deployment
- **Custom Domain** - Configured with rushikedhar.info

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   ├── globals.css         # Global styles and CSS variables
│   └── favicon.ico         # Site favicon
├── components/
│   └── ui/
│       ├── card.tsx              # Reusable card component
│       ├── cursor-glow.tsx       # Custom cursor effect
│       ├── demo.tsx              # Basic Spline scene component
│       ├── interactive-spline.tsx # Mouse-responsive 3D scene
│       ├── mobile-nav.tsx        # Mobile navigation menu
│       ├── scroll-progress.tsx   # Scroll indicator
│       ├── splite.tsx            # Full-page Spline integration
│       └── spotlight-ibelick.tsx # Spotlight card effect
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rushikedhar04/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint checks
```

## 🎨 Customization

### Updating Content
- **Personal Info**: Edit `app/page.tsx` sections (Hero, About, Experience, Projects)
- **Resume Link**: Update links in Hero and Contact sections
- **Social Links**: Modify GitHub, LinkedIn, and email links throughout
- **3D Scenes**: Replace Spline scene URLs in `components/ui/splite.tsx` and `interactive-spline.tsx`

### Styling
- **Colors**: Modify Tailwind config in `tailwind.config.ts`
- **Animations**: Adjust Framer Motion variants in component files
- **Layout**: Update CSS variables in `app/globals.css`

### Adding New Sections
1. Create the section in `app/page.tsx`
2. Add navigation link in the nav bar
3. Update mobile menu in `components/ui/mobile-nav.tsx`

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Configure custom domain in project settings
4. Add DNS records in your domain provider:
   - A record: `@` → Vercel IP
   - CNAME record: `www` → `cname.vercel-dns.com`

### Other Platforms
This is a standard Next.js app and can be deployed to:
- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Deploy from GitHub
- **AWS Amplify**: Connect and configure build settings
- **Self-hosted**: Build and serve with `npm run build && npm run start`

## 🔑 Key Features Breakdown

### 1. Interactive 3D Scene
The homepage features a mouse-responsive 3D scene created with Spline:
- 3D model rotates based on cursor position
- Smooth perspective transforms
- Optimized for performance

### 2. Custom Cursor Glow
A liquid-style cursor effect that follows mouse movement:
- Dual-layer glow with different speeds
- Smooth spring animations
- Hidden on mobile devices

### 3. Scroll Progress Bar
Gradient progress indicator at the top of the page:
- Updates in real-time as user scrolls
- Smooth spring animation
- Sticky positioning

### 4. Spotlight Card Effects
Interactive spotlight that follows cursor on cards:
- Creates depth and interactivity
- Applied to experience and skill cards
- Subtle and professional appearance

### 5. Responsive Navigation
Desktop navbar with animated mobile hamburger menu:
- Smooth slide-in animation
- Prevents body scroll when open
- One-click navigation to sections

## 📊 Performance Optimizations

- **Code Splitting**: Next.js automatic code splitting
- **Image Optimization**: Next.js Image component (ready for implementation)
- **Lazy Loading**: Components load on-demand
- **CSS Optimization**: Tailwind's JIT compiler for minimal CSS
- **Font Optimization**: Next.js font optimization with Inter
- **Turbopack**: Fast development with Next.js 15's bundler

## 🔧 Configuration Files

### `tailwind.config.ts`
Custom Tailwind configuration with:
- Extended color palette with CSS variables
- Custom animations (spotlight)
- Gradient utilities
- Custom border radius scales

### `tsconfig.json`
TypeScript configuration with:
- Path aliases (`@/`)
- Strict type checking
- Next.js optimizations

### `package.json`
Dependencies and scripts configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Rushi Kedhar Konduru**
- Website: [rushikedhar.info](https://rushikedhar.info)
- GitHub: [@rushikedhar04](https://github.com/rushikedhar04)
- LinkedIn: [rushi-kedhar](https://linkedin.com/in/rushi-kedhar)
- Email: rkonduru@uh.edu

## 🙏 Acknowledgments

- **[Spline](https://spline.design/)** - For the amazing 3D design tool
- **[Vercel](https://vercel.com/)** - For seamless deployment
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - For smooth animations
- **Next.js Team** - For the incredible React framework

## 🐛 Known Issues

- Spline scenes may take a moment to load on slower connections
- 3D interactions are disabled on mobile for performance

## 🚧 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark mode toggle
- [ ] Add more interactive 3D scenes
- [ ] Create case studies for projects
- [ ] Add testimonials section
- [ ] Implement analytics dashboard

---

**Built with ❤️ using Next.js 15, React 19, TypeScript, Tailwind CSS & Spline**

© 2026 Rushi Kedhar Konduru. All rights reserved.
