# Spline 3D Landing Page

A stunning, modern landing page featuring interactive 3D scenes powered by Spline, built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## Tech Stack

This project is built using cutting-edge web technologies:

- **Next.js 15.1** - React framework with App Router and Turbopack
- **React 19** - Latest React with improved performance
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component system
- **Spline** - Interactive 3D design tool
- **Framer Motion** - Production-ready animation library

## Features

- Interactive 3D scenes with Spline integration
- Fully responsive design
- Modern gradient backgrounds and animations
- Spotlight hover effects (Aceternity + ibelick implementations)
- Lazy-loaded 3D components for optimal performance
- Type-safe with TypeScript
- Beautiful UI components from shadcn/ui
- Smooth animations with Framer Motion
- Dark theme optimized
- Lightning-fast with Next.js 15 Turbopack

## Project Structure

```
claude-p1/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles with Tailwind directives
├── components/
│   └── ui/
│       ├── card.tsx        # shadcn Card component
│       ├── splite.tsx      # SplineScene wrapper with lazy loading
│       ├── demo.tsx        # Demo component showcasing 3D scene
│       ├── spotlight.tsx   # Aceternity spotlight effect
│       ├── spotlight-aceternity.tsx
│       └── spotlight-ibelick.tsx  # Interactive spotlight effect
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Project dependencies

```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone or navigate to the project directory:

```bash
cd claude-p1
```

2. Dependencies are already installed! If you need to reinstall:

```bash
npm install
```

### Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build the production-ready application:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

## Component Documentation

### SplineScene Component

The main 3D scene component with lazy loading and suspense:

```tsx
import { SplineScene } from "@/components/ui/splite";

<SplineScene
  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
  className="w-full h-full"
/>
```

**Props:**
- `scene` (string, required): URL to your Spline scene
- `className` (string, optional): Additional CSS classes

**Features:**
- Lazy loaded for optimal performance
- Custom loading spinner
- Suspense boundary for graceful loading

### Spotlight Components

Two spotlight implementations for different effects:

#### Aceternity Spotlight (Static SVG)

```tsx
import { Spotlight } from "@/components/ui/spotlight";

<Spotlight
  className="-top-40 left-0 md:left-60 md:-top-20"
  fill="white"
/>
```

#### ibelick Spotlight (Interactive)

```tsx
import { SpotlightIbelick } from "@/components/ui/spotlight-ibelick";

<SpotlightIbelick size={300} />
```

**Props:**
- `size` (number, optional): Spotlight diameter (default: 200)
- `className` (string, optional): Additional CSS classes
- `springOptions` (SpringOptions, optional): Framer Motion spring configuration

### Card Component

shadcn/ui Card component with multiple parts:

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content goes here</CardContent>
  <CardFooter>Footer content</CardFooter>
</Card>
```

### Demo Component

Pre-built demo showcasing the SplineScene with spotlight effects:

```tsx
import { SplineSceneBasic } from "@/components/ui/demo";

<SplineSceneBasic />
```

## Customization

### Changing the 3D Scene

1. Create your 3D scene at [spline.design](https://spline.design)
2. Export and get the scene URL
3. Replace the scene URL in the SplineScene component:

```tsx
<SplineScene
  scene="YOUR_SPLINE_SCENE_URL"
  className="w-full h-full"
/>
```

### Modifying Colors

Update colors in [tailwind.config.ts](tailwind.config.ts#L13-L60) or use Tailwind's color utilities in your components.

### Adding New Components

Follow the shadcn/ui pattern:

1. Create component in `components/ui/`
2. Use the `cn()` utility for className merging
3. Export component for use in pages

## Performance Optimization

This project includes several performance optimizations:

1. **Lazy Loading**: Spline components are lazy-loaded to reduce initial bundle size
2. **Suspense Boundaries**: Graceful loading states for 3D content
3. **Turbopack**: Next.js 15's faster bundler in development
4. **Code Splitting**: Automatic code splitting with Next.js App Router
5. **Optimized Images**: Next.js Image component (when images are added)

## Key Dependencies

### Production Dependencies

- `@splinetool/react-spline`: ^4.0.0 - React bindings for Spline
- `@splinetool/runtime`: ^1.9.45 - Spline runtime engine
- `framer-motion`: ^11.15.0 - Animation library
- `next`: ^15.1.6 - React framework
- `react`: ^19.0.0 - UI library
- `react-dom`: ^19.0.0 - React DOM renderer
- `class-variance-authority`: ^0.7.1 - Component variant management
- `clsx`: ^2.1.1 - Conditional class names
- `tailwind-merge`: ^2.6.0 - Tailwind class merging

### Dev Dependencies

- `typescript`: ^5 - Type safety
- `tailwindcss`: ^3.4.1 - CSS framework
- `tailwindcss-animate`: ^1.0.7 - Animation utilities
- `@types/*` - TypeScript type definitions

## Why This Stack?

### Next.js 15
- App Router for improved routing and layouts
- Turbopack for faster development
- Built-in optimizations for production
- Server and Client Components

### TypeScript
- Type safety catches errors at compile time
- Better IDE support and autocomplete
- Self-documenting code
- Easier refactoring

### Tailwind CSS
- Utility-first approach for rapid development
- Consistent design system
- Small production bundle size
- Easy responsive design

### shadcn/ui
- Copy-paste components (no package dependency)
- Full control over component code
- Built on Radix UI for accessibility
- Customizable with Tailwind

### Spline
- Create professional 3D graphics without coding
- Interactive and animated 3D scenes
- Export directly to web
- Lightweight runtime

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

WebGL support required for 3D scenes.

## Troubleshooting

### 3D Scene Not Loading

1. Check your internet connection
2. Verify the Spline scene URL is correct
3. Ensure WebGL is enabled in your browser
4. Check browser console for errors

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Type Errors

Make sure all TypeScript dependencies are installed:

```bash
npm install --save-dev @types/node @types/react @types/react-dom
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

## Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component system
- [Spline](https://spline.design/) - 3D design tool
- [Aceternity UI](https://ui.aceternity.com/) - Spotlight component inspiration
- [ibelick](https://github.com/ibelick) - Interactive spotlight implementation
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Spline Documentation](https://docs.spline.design)
- [shadcn/ui Components](https://ui.shadcn.com)

---

Built with by Claude Code
