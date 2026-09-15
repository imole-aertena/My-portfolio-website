# GlowCode Media

Personal portfolio site for **Adeyeye Gabriella** — self-taught full-stack developer, cinematographer, and aspiring mechatronics engineer.

🔗 Live site: _add your deployed link here once it's hosted_

## About

GlowCode Media is a dark, scroll-animated one-page portfolio built with vanilla HTML/CSS/JS and [GSAP](https://gsap.com/) for scroll-triggered animation. No frameworks, no build step — open `index.html` and it runs.

## Sections

- **Home** — intro, name treatment, socials
- **About ("My Engine")** — bio, typewriter role animation, short film placeholder
- **Skills ("The Arsenal")** — skillset grouped into Create / Write / Build
- **Projects ("Filed Work")** — project showcase _(placeholder cards — swap in real work)_
- **Contact** — email CTA

## Tech stack

- HTML5 / CSS3 (custom properties, Grid, Flexbox, no framework)
- Vanilla JavaScript (DOM, `IntersectionObserver`)
- [GSAP](https://gsap.com/) + ScrollTrigger for scroll animations
- [Font Awesome](https://fontawesome.com/) for icons
- Google Fonts: Orbitron, Michroma, Unbounded

## Project structure

```
├── index.html
├── style.css
├── JS/
│   └── script.js
└── images/
    └── me.png        ← add your own photo here
```

## Running locally

No build tools needed. Clone the repo and open `index.html` in a browser, or serve it locally:

```bash
git clone https://github.com/imole-aertena/<repo-name>.git
cd <repo-name>
# then just open index.html, or run a local server:
python3 -m http.server 5500
```

## To-do

- [ ] Add real photo at `images/me.png`
- [ ] Add real projects to the Projects section
- [ ] Add résumé link
- [ ] Add "Through My Eyes" short film to the About section
- [ ] Deploy (GitHub Pages / Netlify / Vercel) and add the live link above

## Credits

Design & development by Adeyeye Gabriella ([@imole-aertena](https://github.com/imole-aertena)).

## License

© 2026 GlowCode Media. All rights reserved.
