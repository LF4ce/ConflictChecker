# Fact Search App

A modern React application for searching and discovering interesting facts.

## Features

- **Search Interface**: Clean, modern search input with real-time filtering
- **Fact Display**: Beautiful cards showing facts with categories and references
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **TypeScript**: Fully typed for better development experience

## Data Structure

Each fact contains:
- `id`: Unique identifier
- `fact`: The actual fact content
- `category`: Subject category (History, Biology, Physics, etc.)
- `reference`: Source or reference for the fact

## Search Functionality

The search filters facts by:
- Fact content
- Category
- Reference
- ID

## Components

- `SearchInput`: Reusable search component with clear functionality
- `FactCard`: Individual fact display component with category color coding
- `FactList`: Grid layout for displaying multiple facts
- `useFactSearch`: Custom hook for search logic

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Sample Facts

The app comes with 10 sample facts covering various categories:
- History
- Biology
- Physics
- Chemistry
- Mathematics

Each fact includes interesting trivia with proper references.

## Styling

The app features:
- Gradient background
- Glassmorphism effects
- Smooth hover animations
- Category-specific color coding
- Mobile-responsive design
