# Little Lemon Booking App

## Overview
A React + TypeScript web application for reserving tables at Little Lemon restaurant.

## Features
- Table booking form
- Client-side validation
- Responsive UI with Bootstrap
- State management using useReducer
- Unit testing with Vitest

## Tech Stack
- React
- TypeScript
- Vite
- Bootstrap
- Vitest + React Testing Library

## Setup Instructions

1. Install dependencies:
   npm install

2. Run the app:
   npm run dev

3. Run tests:
   npm run test

## Validation Rules
- Date cannot be empty or in the past
- Guests must be between 1–10
- Occasion must be selected

## Accessibility
- Labels linked with inputs
- aria-invalid and aria-describedby used

## Future Improvements
- API integration for available times
- Backend booking system