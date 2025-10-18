# Components

This directory contains all the React components for the Ohhmyads website.

## Components Structure

### `Header.tsx`
- Contains the top banner with marketing message
- Main navigation with logo, menu items, showreel button, and contact button
- Fully responsive design

### `HeroSection.tsx`
- Main hero section with the large "Your new design partner" heading
- Left side description text
- Right side main heading with decorative elements
- Responsive typography and layout

### `AboutSection.tsx`
- "Hello!" section with decorative elements
- Main content describing the company's mission
- Surrounded by decorative service icons (hidden on mobile)
- Responsive text sizing

### `ProcessSection.tsx`
- "Getting started is easy" section
- 4-step process cards: Subscribe, Request, Revise, Enjoy the results
- Responsive grid layout (1 column on mobile, 2 on tablet, 4 on desktop)
- Each card contains an icon, title, and description

### `BottomNavigation.tsx`
- Fixed bottom navigation bar
- 6 navigation items with numbers and labels
- Responsive (shows 3 items on mobile, 6 on desktop)
- Some items hidden on mobile for better UX

## Usage

All components are imported and used in the main `App.tsx` file:

```tsx
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import BottomNavigation from './components/BottomNavigation';
```

## Styling

- All components use Tailwind CSS for styling
- Responsive design with mobile-first approach
- Custom font families: Bricolage Grotesque and Inter
- Consistent color scheme matching the original design
