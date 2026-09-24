# Perikala Jeevana Sruthi — React Portfolio

A modern React + Vite version of the portfolio.

## 1. Requirements

Install Node.js first. A current LTS version is recommended.

Check:

```bash
node -v
npm -v
```

## 2. Install dependencies

Open a terminal inside this project:

```bash
npm install
```

## 3. Add your existing files

Copy your existing profile image to:

```text
public/images/photo_jeevana.jpeg
```

Copy your resume to:

```text
public/resume/Perikala Jeevana Sruthi - CV.pdf
```

## 4. Start the development server

```bash
npm run dev
```

Open the localhost URL shown by Vite.

## 5. Create production build

```bash
npm run build
```

## 6. Preview production build

```bash
npm run preview
```

## Main structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SectionHeading.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Internships.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── portfolioData.js
├── App.jsx
├── main.jsx
└── index.css
```

## Features

- React component architecture
- Vite development/build setup
- Responsive mobile navigation
- Dark/light theme with localStorage
- Sticky glassmorphism navbar
- Active navigation section
- Responsive hero section
- Project cards
- Internship timeline
- Education cards
- Contact section
- Resume download
- GitHub and LinkedIn links
- Responsive mobile/tablet/desktop layout
- Reduced-motion accessibility support

## Updating content

Most portfolio content is centralized in:

```text
src/data/portfolioData.js
```

You can add or edit projects, skills, internships and education there without rewriting the components.
