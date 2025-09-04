# Overview

MellowMoon is a premium Ayurvedic e-commerce landing page designed for a women's wellness brand specializing in natural period pain relief products. The application is built as a full-stack web application featuring a React frontend with modern UI components and an Express.js backend, designed to showcase and sell Ayurvedic wellness products with a focus on feminine health.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with custom design tokens optimized for luxury wellness branding
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Design System**: Component-based architecture with reusable UI components following atomic design principles

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the entire stack
- **Development Setup**: Vite middleware for development with hot module replacement
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **API Design**: RESTful API structure with centralized route registration

## Database and Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL with Neon Database serverless configuration
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database schema migrations

## Design and UX
- **Mobile-First**: Responsive design optimized for mobile devices
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance
- **Performance**: Lightweight implementation avoiding heavy JavaScript libraries
- **Branding**: Luxury wellness aesthetic with soft feminine colors (blush, cream, gold accents)
- **Typography**: Custom font stack with Inter for sans-serif and Playfair Display for serif headings

## Development Workflow
- **Build System**: Separate build processes for client (Vite) and server (esbuild)
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Code Quality**: Consistent alias patterns for clean imports
- **Environment**: Development server with error overlay and debugging capabilities

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18 with TypeScript, React Query for state management
- **Build Tools**: Vite for frontend building, esbuild for server bundling
- **Express.js**: Web framework for the backend API

## Database and ORM
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL dialect
- **Drizzle Kit**: Database migration and schema management tool

## UI and Design
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built component library based on Radix UI

## Development Tools
- **TypeScript**: Static type checking across the entire application
- **PostCSS**: CSS processing with Tailwind integration
- **Replit Integration**: Development environment optimization for Replit platform

## Additional Libraries
- **TanStack React Query**: Server state management and caching
- **Wouter**: Lightweight routing for React applications
- **date-fns**: Date manipulation utilities
- **clsx & tailwind-merge**: Utility functions for conditional CSS classes
- **class-variance-authority**: Type-safe CSS variant management