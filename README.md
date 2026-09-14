# WDD 430 – Portfolio Project

This is a Next.js portfolio project built with the App Router, TypeScript, and Tailwind CSS.  
It was created using `create-next-app` and deployed on Vercel.

---

## 🚀 Deployment

**Live Site:**  
https://wdd430-portfolio-navy.vercel.app/

**GitHub Repository:**  
https://github.com/mrmerarif/wdd430-portfolio

---

## 📁 Project Overview

This portfolio displays several projects I have built in previous courses (WDD130, WDD131).  
Each project includes a title, description, technologies used, and a working deployed link.

### Featured Projects

- **Few Steps Meals**  
  A simple meal planning app that helps users create easy recipes with minimal steps.  
  https://mrmerarif.github.io/wdd131/few-steps-meals/index.html

- **Few Steps Meals Blog**  
  A companion blog page featuring recipe posts and responsive layout.  
  https://mrmerarif.github.io/wdd131/few-steps-meals/blog.html

- **Basic Layout (WDD130)**  
  A responsive layout demonstrating structured design principles using CSS.  
  https://mrmerarif.github.io/wdd130/week02/basic-layout.html

- **Media Query (WDD131)**  
  A project showcasing responsive design using CSS media queries.  
  https://mrmerarif.github.io/wdd131/week02/media-query.html

---

## 🧩 Custom Component

**Filename:** `SkillsCard.tsx`  
**Description:**  
A server component that displays a list of technical skills using Tailwind CSS styling.

---

## 📘 Assignment Questions

### 1. What is the purpose of `app/layout.tsx` in the Next.js App Router?
`app/layout.tsx` defines the root layout shared across all pages. It loads global styles, wraps the application with common UI (Header, Footer), and ensures consistent structure across routes.

### 2. Why are the components in this assignment Server Components rather than Client Components?
Server Components improve performance by rendering on the server, reduce JavaScript sent to the browser, and are the recommended default in the Next.js App Router unless client-side interactivity is required.

---

## 🛠 Getting Started

Run the development server:

```bash
npm run dev
