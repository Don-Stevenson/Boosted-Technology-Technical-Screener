## Getting Started

Welcome to the Boosted Technology Technical Screener frontend interview. We're going to perform a quick live-coding react style interview focusing on getting data from an API.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Overview

The project involves building a product catalog with pagination and product details functionality. Candidates will need to demonstrate their understanding of React/Next.js concepts, state management, custom hooks, and best practices.

## Tasks

### 1. Data Fetching Implementation
- Implement data fetching from the provided API endpoint [https://dummyjson.com/products](https://dummyjson.com/products)
- Handle loading and error states

### 2. Pagination Implementation
- Add Next and Previous navigation buttons
- Implement pagination logic with `limit` and `skip` parameters
[https://dummyjson.com/products?limit=10&skip=10](https://dummyjson.com/products?limit=10&skip=10)

### 3. Product Details Page
- Implement data fetching for individual product information [https://dummyjson.com/products/1](https://dummyjson.com/products/1)

### 4. Code Enhancement and Optimization
- Add sorting functionality on all product fields
[https://dummyjson.com/products?sortBy=title&order=asc](https://dummyjson.com/products?sortBy=title&order=asc)

### 5. Custom Hook Refactoring
- Create reusable custom hooks for data fetching (list and single item)

### 6. State Management
- Implement state management (No additional state management packages should be used) to handle app states on all pages:
  - Openning chat widget
  - keeping conversation history
