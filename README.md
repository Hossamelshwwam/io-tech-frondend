# IO Tech Front-End

## Overview
This is a front-end application built with **Next.js**, designed to provide a modern, responsive, and multilingual user experience. The app features a service search, detailed service pages, and a clean, user-friendly interface.

## Key Features
- **Multilingual Support:** Supports multiple languages (e.g., English and Arabic) using locale-based routing.
- **Service Search:** Users can search for services with pagination and filtering.
- **Service Details:** Each service has a dedicated page with detailed information and sub-services.
- **Responsive Design:** Optimized UI for both desktop and mobile devices.
- **Reusable Components:** Modular, reusable components for maintainability.
- **Client and Team Sections:** Dedicated sections for showcasing clients and team members.
- **Custom UI Elements:** Custom buttons, navigation, drawers, and toasters for notifications.

## My Contributions
### 1. Project Setup & Configuration
- Initialized the Next.js project with **TypeScript** for type safety.
- Configured **ESLint** and **Prettier** for code quality and consistency.
- Set up **PostCSS** for advanced CSS processing.

### 2. Internationalization (i18n)
- Implemented locale-based routing and language switching.
- Integrated translation files for **English** and **Arabic**.
- Ensured all UI components support dynamic language changes.

### 3. Service Search & Pagination
- Developed search functionality with real-time filtering.
- Implemented pagination logic for efficient data browsing.
- Created reusable search components (`SearchInput`, `SearchResults`, `Pagination`, etc.).

### 4. Service Details Page
- Built dynamic routes for service details using Next.js routing.
- Designed and implemented `ServiceDetails` and `SubServiceItem` components.

### 5. UI/UX Enhancements
- Designed and implemented the main layout, navigation bar, and footer.
- Developed custom UI components (buttons, drawers, collapses, etc.).
- Ensured mobile responsiveness and accessibility.

### 6. State Management & API Integration
- Integrated with backend APIs for fetching services and search results.
- Managed state using **React hooks** and **Context API** where appropriate.

### 7. Code Quality & Best Practices
- Wrote clean, maintainable, and well-documented code.
- Followed best practices for component structure and file organization.

## Challenges & Solutions
- **Multilingual Layouts:** Ensured RTL support for Arabic and seamless language switching.
- **Dynamic Routing:** Handled complex dynamic routes for services and search pages.
- **Performance Optimization:** Optimized components for faster load times and better UX.

## Technologies Used
- Next.js  
- React  
- TypeScript  
- PostCSS  
- ESLint & Prettier  

## How to Run the Project
1. Install dependencies:
```bash
npm install
# or
yarn install
