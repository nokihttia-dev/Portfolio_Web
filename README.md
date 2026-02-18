# `> portfolio_web.exe`

```bash
$ whoami
Aitthikon Makdee | Full-Stack Developer

$ system.status
ONLINE
```

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-0b0f17?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-0b0f17?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-UI_Animation-0b0f17?style=for-the-badge)

Cyber/terminal-inspired portfolio built with Next.js App Router.

---

## `01 // Features`

- Terminal-style UI sections
- Floating live-system panel in Hero
- Global grid + radial glow ambient background
- Custom cursor + scroll progress bar
- Data-driven content from one source file
- Responsive (desktop/mobile)

---

## `02 // Stack`

```txt
Frontend   : Next.js 16 + React 19
Styling    : Tailwind CSS 4
Animation  : Framer Motion
Icons      : Lucide React
Language   : JavaScript / JSX
```

---

## `03 // Project Tree`

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    sections/
      Navbar.jsx
      Hero.jsx
      About.jsx
      Projects.jsx
      Contact.jsx
    ui/
      Background.jsx
      CustomCursor.jsx
      GlitchText.jsx
      SectionHeader.jsx
  data/
    content.js
```

---

## `04 // Run Locally`

```bash
# install
npm install

# dev
npm run dev

# build + prod
npm run build
npm run start
```

Open: `http://localhost:3000`

---

## `05 // Edit Portfolio Data`

Single source of truth:

`src/data/content.js`

Update these blocks:

- `meta`
- `profile`
- `skills`
- `projects`
- `socials`

---

## `06 // NPM Scripts`

```bash
npm run dev    # start dev server
npm run build  # production build
npm run start  # run production
npm run lint   # eslint
```

---

## `07 // Visual Control Points`

- `src/components/ui/Background.jsx` -> ambient grid/glow
- `src/components/sections/Hero.jsx` -> live system panel
- `src/app/globals.css` -> global theme styles

---

```bash
$ echo "Ready for deployment."
Ready for deployment.
```

