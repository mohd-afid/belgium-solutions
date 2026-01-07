# Belgium Solutions - Corporate Website

A professional corporate website for an oil/industrial solutions company built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with full responsiveness
- **Hero Slider**: Auto-rotating image slider with "Complete Supply Chain Solution" tagline
- **Product Showcase**: Featured products and other products sections
- **Sole Distributor Section**: Grid layout displaying distributor logos
- **About Section**: Accordion-style Mission and Vision sections
- **Regional Presence**: Cards for Kuwait and UAE offices
- **Smooth Animations**: Scroll-to-top button and smooth scrolling throughout
- **Professional Design**: Clean, minimal corporate aesthetic with red and dark gray color scheme

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- HTML5 / CSS3

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero slider section
│   ├── FeaturedProducts.tsx
│   ├── SoleDistributors.tsx
│   ├── OtherProducts.tsx
│   ├── AboutSection.tsx # Mission/Vision accordion
│   ├── RegionalSections.tsx
│   ├── Footer.tsx
│   └── ScrollToTop.tsx
├── public/              # Static assets
└── package.json
```

## Color Scheme

- Primary Red: `#FF3333`
- Secondary Dark: `#2C2C2C`
- Secondary Gray: `#1A1A1A`
- Background: White / Gray-50

## Customization

- Update company information in component files
- Replace placeholder images with actual product/distributor images
- Modify color scheme in `tailwind.config.js`
- Add more sections or pages as needed

## Build for Production

```bash
npm run build
npm start
```

