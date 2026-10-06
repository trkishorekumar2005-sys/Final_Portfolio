# Kishore Kumar T.R – Developer Portfolio

My personal portfolio website, built with **React.js** and **Vite**. It's a frontend-only site with no backend or database.

## Tech Stack
React.js · JavaScript · HTML · CSS · Vite · React Icons

## Run Locally
```bash
npm install
npm run dev      # opens at http://localhost:5173
npm run build    # production build into /dist
```

## Project Structure
```
src/
├── components/   Navbar, Hero, About, Skills, Projects, Education, Certifications, Contact, Footer
├── links.js      All external URLs (GitHub, LinkedIn, live demos) in one place
├── App.jsx       Puts all sections together + scroll fade-in animation
├── main.jsx      Entry point
└── index.css     All styles (CSS variables, animations, responsive breakpoints)
```

## Update Links
Open `src/links.js` and replace each `'#'` placeholder with the real URL.
A button whose link is still `'#'` shows as a greyed-out "(soon)" button.

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**.
3. Import the repository. Vercel detects Vite on its own (build: `npm run build`, output: `dist`).
4. Click **Deploy**. Every later `git push` redeploys the site automatically.
