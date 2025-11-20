# SKIIMS-COLLEGE Website (Ready for GitHub Pages)

This folder contains a complete Bootstrap-based website for **SKIIMS COLLEGE**.
It includes:
- Home page (index.html)
- style.css, script.js
- Placeholder campus and faculty images
- Online admission form configured for Formspree (replace the action URL)
- Footer with your name: MOPURU SUNEEL and contact: +91 6309667664

---

## 1) How to publish on GitHub Pages (recommended)
1. Create a GitHub repository under your account `suneelskiimscollege-gif` named **SKIIMS-COLLEGE**.
2. Upload all files from this folder to the repository root (index.html at root).
3. Commit and push.
4. Go to the repository **Settings → Pages** (left menu).
5. Under **Source**, select `Deploy from → main branch / root` and click Save.
6. After a minute, your site will be available at:
   `https://suneelskiimscollege-gif.github.io/SKIIMS-COLLEGE/`

### Quick Git commands (if you prefer command line)
```bash
git init
git add .
git commit -m "Initial SKIIMS site"
git branch -M main
git remote add origin https://github.com/suneelskiimscollege-gif/SKIIMS-COLLEGE.git
git push -u origin main
```

## 2) Form submissions (Formspree)
- The admission form currently posts to: `https://formspree.io/f/yourformid`
- To receive actual submissions, sign up at https://formspree.io and create a form endpoint, then replace the `action` attribute in `index.html` with the provided URL.
- Alternatively you can use Netlify Forms (if you host on Netlify) — see Netlify docs for `data-netlify="true"` attribute.

## 3) Alternative hosting (drag & drop)
- Netlify: https://app.netlify.com/drop (drag the site folder)
- Vercel: https://vercel.com/new (choose import from GitHub)

## 4) Custom domain
- If you own a domain, add a file named `CNAME` with your domain (e.g., `skiimscollege.example`) and set DNS to point to GitHub Pages. See GitHub Pages docs for details.

---
Created for: **MOPURU SUNEEL** (+91 6309667664)

If you want, I can:
- Replace placeholder images with real campus photos (you can upload them here)
- Add a student dashboard or admin panel
- Convert the form to use a server backend (Node/ASP.NET/PHP) for secure storage
- Provide a ready-made `index.html` preview and help with each Git command step
