# Product Page Task - ElegantSoft

This is a React-based product details page application with cart functionality, developed as a task for **ElegantSoft**.

## 🎯 Project Overview

A modern, responsive product page application built with React, TypeScript, and Vite. The application features:

- **Product Details Display** - Complete product information with images, pricing, and descriptions
- **Shopping Cart Functionality** - Add/remove items, quantity management, and persistence
- **Product Variations** - Color and size selection with variant matching
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **State Management** - Zustand for cart and product state
- **API Integration** - React Query for data fetching
- **Comprehensive Testing** - Jest and React Testing Library for unit and integration tests

## 🚀 Quick Start

### Option 1: Node.js Installation

#### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

#### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd product-page-task
   ```

2. **Clone the repository**

Before running the project, you need to set up your environment variables.

1.  Create a `.env` file in the root of the project.

2.  Copy the contents from `.env.example` into your new `.env` file.

    Your `.env` file should look like this:

    ```
    VITE_API_URL="https://api.easy-orders.net/api/v1"
    ```

3.  **Install dependencies**

    ```bash
    npm install
    ```

4.  **Start the development server**

    ```bash
    npm run dev
    ```

5.  **Open your browser**
    Navigate to `http://localhost:5173` to view the application.

### Option 2: Docker Installation

#### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd product-page-task
   ```

2. **Clone the repository**

Before running the project, you need to set up your environment variables.

1.  Create a `.env` file in the root of the project.

2.  Copy the contents from `.env.example` into your new `.env` file.

    Your `.env` file should look like this:

    ```
    VITE_API_URL="https://api.easy-orders.net/api/v1"
    ```

#### Prerequisites

- Docker installed on your system

#### Method A: Docker Commands

1. **Build the Docker image**

   ```bash
   docker build -t viteapp .
   ```

2. **Run the container**

   ```bash
   docker run -it --rm -v ${PWD}:/app -p 5173:5173 viteapp
   ```

3. **Access the application**
   Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm test             # Run all tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Generate test coverage report

# Code Quality
npm run lint         # Run ESLint
```

## 🧪 Testing

The project includes comprehensive test coverage using Jest and React Testing Library:

### Test Coverage

- **Cart Store Tests** (96.87% coverage)
  - ✅ Add to cart functionality
  - ✅ Remove from cart functionality
  - ✅ Quantity management
  - ✅ Stock validation
  - ✅ Edge cases (out of stock, max quantity)

- **Product Details API Tests** (100% coverage)
  - ✅ API response handling
  - ✅ Error scenarios
  - ✅ Loading states
  - ✅ Data structure validation

- **API Service Tests** (100% coverage)
  - ✅ HTTP methods (GET, POST, PUT, DELETE)
  - ✅ Request body handling (JSON, FormData)
  - ✅ Error handling
  - ✅ Edge cases

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Structure

```
src/
├── __tests__/              # Test files
│   ├── store/              # Cart store tests
│   ├── hooks/              # Product details tests
│   └── services/           # API service tests
├── setupTests.ts           # Jest setup configuration
└── jest.config.cjs         # Jest configuration
```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Header/          # Header and navigation
│   ├── shared/          # Reusable components
│   └── ReviewsSection/  # Product reviews
├── hooks/               # Custom React hooks
├── pages/                # Page components
├── services/            # API services
├── store/               # State management (Zustand)
├── types/               # TypeScript type definitions
├── assets/              # Static assets (images, icons)
└── __tests__/           # Test files
    ├── store/           # Cart functionality tests
    ├── hooks/           # API hook tests
    └── services/        # API service tests
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 4.1.13
- **State Management**: Zustand 5.0.8
- **Data Fetching**: TanStack Query 5.90.2
- **Icons**: Lucide React 0.544.0
- **Notifications**: React Toastify 11.0.5
- **Testing**: Jest 30.1.3, React Testing Library 16.3.0
- **Test Environment**: jsdom

## 🎨 Key Features

### Product Details

- Dynamic product information display
- High-quality image gallery with zoom functionality
- Price display with sale price support
- Product variations (color, size) with real-time updates
- Stock availability indicators
- Customer reviews and ratings

### Shopping Cart

- Add/remove items with quantity management
- Persistent cart state across sessions
- Real-time stock validation
- Toast notifications for user feedback
- Responsive cart dropdown

### User Experience

- Mobile-first responsive design
- Smooth animations and transitions
- Accessibility features (keyboard navigation, screen readers)
- Loading states and error handling
- SEO-friendly structure

### Code Quality

The project follows modern React and TypeScript best practices:

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Tailwind CSS** for utility-first styling
- **Jest** for comprehensive testing
- **React Testing Library** for component testing

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This project was developed as a task for ElegantSoft. For any questions or feedback, please contact the development team.

## 📄 License

This project is proprietary to ElegantSoft.

---

**Developed for ElegantSoft** 🚀
