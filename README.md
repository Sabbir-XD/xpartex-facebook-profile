# XPARTEX Frontend Developer Assessment

This project is a frontend assessment task to demonstrate planning, design sense, reusable component architecture, and clean frontend workflow using Next.js, TypeScript, and Tailwind CSS.

---

**Live Demo:** [Click here](https://xpartex-facebook-profile.vercel.app/)


## 1. Planning Approach

Before starting development, the project was carefully planned to ensure scalability, reusability, and clean structure.

### Page Layout Overview

The application is a single-page Facebook-style profile layout consisting of:

- Profile Header (cover image, avatar, name, basic info)
- Left Sidebar (Intro, Photos, Friends sections)
- Main Feed Area (Post list)
- Responsive layout adapting for desktop, tablet, and mobile screens

The left sidebar remains sticky while scrolling but stays flexible (not fully fixed).

---

### Component Breakdown

--------------------------------------------------------
|                   Profile Header                     | 
--------------------------------------------------------
   -------------------------------------------------
   |        Cover Image & Profile avatar           |
   -------------------------------------------------
   | Left Sidebar  |        Post Feed              |
   | (Intro etc.)  |   PostCard 1                  |
   |               |   PostCard 2                  |
   -------------------------------------------------


#### Reusable Components
These components are designed to be generic and reusable across the application:

- Avatar  
- Button  
- PostCard  
- SkeletonLoader  
- SectionCard  

#### Page-Specific Components
These components are specific to the profile page:

- ProfileHeader  
- IntroSection  
- PhotosSection  
- FriendsSection  
- Feed  

This separation ensures better maintainability and scalability.

---

### Color, Spacing & Design Guidelines

The design follows a Facebook-like clean UI approach:

- Primary Color: `#1877F2`
- Background Color: `#F0F2F5`
- Card Background: `#FFFFFF`
- Text Primary: `#050505`
- Border Radius: 8px – 12px
- Spacing Scale: 4, 8, 12, 16, 24

Tailwind CSS utility classes are used consistently to maintain spacing and responsiveness.

---

### Folder Structure

A clean and scalable folder structure is used:

├── app/
│   └── page.tsx
│
├── components/
│   ├── layout/
│   │   └── TopNavbar.tsx
│   │
│   ├── profile/
│   │   ├── ProfileHeader.tsx
│   │   ├── IntroSection.tsx
│   │   ├── PhotosSection.tsx
│   │   └── LeftSidebar.tsx
│   │
│   ├── post/
│   │   ├── PostFeed.tsx
│   │   └── PostCard.tsx
│   │
│   └── ui/
│       ├── Avatar.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Skeleton.tsx
│
├── data/
│   ├── profile.json
│   └── posts.json
│
├── types/
│   ├── profile.ts
│   └── post.ts
│
└── styles/


- `components/` contains reusable and page-specific UI components
- `data/` stores local JSON files for demo data
- `types/` contains TypeScript interfaces
- `styles/` is reserved for custom global styles if needed

---

### Data Flow & State Management

- No backend or external APIs are used
- Profile and post data are loaded from local JSON files
- Data is passed to components via props
- A skeleton loading state is shown while data is being prepared

---

### Responsiveness Strategy

- Mobile-first approach
- Tailwind responsive utilities (`md`, `lg`)
- Sidebar hides or stacks on smaller screens
- Feed layout adjusts naturally based on screen size

---

### Development Principles

- Component-driven development
- Strong TypeScript typing
- Clean and readable code
- Meaningful Git commit messages
- Incremental development with frequent commits

---

This planning phase was completed before development to ensure a structured and efficient workflow.
