# 🩸 LifeDrop — Blood Donation Website

<div align="center">

![LifeDrop Banner](https://img.shields.io/badge/LifeDrop-Blood%20Donation-E63946?style=for-the-badge&logo=heart&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

**🌐 Live Website: [https://riyaraghuwanshi1807-ai.github.io/microproject-1/](https://riyaraghuwanshi1807-ai.github.io/microproject-1/)**

*"Every drop of blood donated is a gift of life. Be a hero today."* 🩸

</div>

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Live Demo](#-live-demo)
3. [Features](#-features)
4. [Project Structure](#-project-structure)
5. [Pages & Sections](#-pages--sections)
6. [Technologies Used](#-technologies-used)
7. [UI Design & Theme](#-ui-design--theme)
8. [Animations & Effects](#-animations--effects)
9. [JavaScript Functions](#-javascript-functions)
10. [CSS Architecture](#-css-architecture)
11. [Color Scheme](#-color-scheme)
12. [Typography](#-typography)
13. [Responsive Design](#-responsive-design)
14. [Forms & Validation](#-forms--validation)
15. [Donor Search System](#-donor-search-system)
16. [Eligibility Criteria](#-eligibility-criteria)
17. [How to Run Locally](#-how-to-run-locally)
18. [Deployment — GitHub Pages](#-deployment--github-pages)
19. [Git Workflow](#-git-workflow)
20. [Future Improvements](#-future-improvements)
21. [Author](#-author)
22. [License](#-license)

---

## 📌 Project Overview

**LifeDrop** is a modern, fully responsive blood donation web platform built with pure **HTML5, CSS3, and Vanilla JavaScript**. It is designed to:

- Connect blood **donors** with **patients** in need
- Allow users to **register** as blood donors with a validated form
- Help people **search** for available donors by blood group and city
- Handle **emergency blood requests** with instant confirmation
- Educate users about blood donation **eligibility, process, and importance**

> This is a **micro project** — a complete static website with zero dependencies, zero build tools, and zero frameworks. It runs directly in any browser and is deployed on GitHub Pages.

---

## 🌐 Live Demo

| Page | URL | Description |
|---|---|---|
| 🏠 Home | [/](https://riyaraghuwanshi1807-ai.github.io/microproject-1/) | Landing page — hero, counters, blood types, steps, testimonials |
| 💉 Donate | [/donate.html](https://riyaraghuwanshi1807-ai.github.io/microproject-1/donate.html) | Full donor registration form |
| 🔍 Find Blood | [/find-blood.html](https://riyaraghuwanshi1807-ai.github.io/microproject-1/find-blood.html) | Donor search + emergency request |
| ℹ️ About | [/about.html](https://riyaraghuwanshi1807-ai.github.io/microproject-1/about.html) | Mission, values, team |
| 📞 Contact | [/contact.html](https://riyaraghuwanshi1807-ai.github.io/microproject-1/contact.html) | Contact info + message form |

---

## ✨ Features

### 🎨 Design & UI
- Modern **empathetic theme** — clean white with crimson red accents
- **Glassmorphism** floating blood drop in the hero section
- **Gradient text** on the main headline
- **Inter font** (Google Fonts) for a premium, modern look
- Consistent design language across all 5 pages
- Polished cards, badges, and section tags

### ⚡ Animations
- **Floating glassmorphism blood drop** with 3 pulsing rings in the hero
- **Count-up counters** — numbers animate from 0 when scrolled into view
- **AOS (Animate On Scroll)** — custom implementation using IntersectionObserver
- **Ripple effect** on every button click (liquid-fill animation)
- **Pulsing glow** on O+ and O- urgent blood type cards
- **Hover lift** on cards, steps, and team members
- **Floating badges** around the hero blood drop

### 🧭 Navigation
- Sticky navbar with **glassmorphism blur** effect
- Navbar gets shadow on scroll
- **Active link underline** animation
- Mobile **hamburger menu** with smooth toggle
- "Donate Now" CTA button in navbar

### 📄 Pages & Forms
- 5 complete HTML pages
- Donor registration form with 13 fields and full validation
- Blood donor search (filter by group + city)
- Emergency blood request form
- Contact form with success feedback

### 📱 Responsive
- Works on all screen sizes — mobile, tablet, desktop
- 3 breakpoints: 1024px, 900px, 768px, 480px
- Hamburger menu on mobile

---

## 📁 Project Structure

```
microproject-1/
│
├── index.html              # 🏠 Home / Landing page
├── donate.html             # 💉 Donor registration page
├── find-blood.html         # 🔍 Find blood & emergency request
├── about.html              # ℹ️  About us — mission, values, team
├── contact.html            # 📞 Contact page
│
├── css/
│   └── style.css           # All styles (1000+ lines)
│                           # Reset, variables, navbar, hero,
│                           # counters, blood types, steps,
│                           # eligibility, testimonials, CTA,
│                           # footer, forms, animations, responsive
│
├── js/
│   └── main.js             # All JavaScript (~150 lines)
│                           # AOS, count-up, ripple, search,
│                           # form handlers, navbar scroll
│
├── .nojekyll               # Disables Jekyll on GitHub Pages
└── README.md               # This documentation file
```

---

## 📄 Pages & Sections

### 1. 🏠 Home Page — `index.html`

| Section | Details |
|---|---|
| **Navbar** | Sticky, glassmorphism blur, logo with icon, nav links with underline animation, "Donate Now" button, hamburger |
| **Hero** | Full-viewport hero, gradient background, badge pill, gradient headline, description, 2 CTA buttons, trust indicators, glassmorphism blood drop with floating badges |
| **Counters** | Dark gradient section — 4.5M+ Lives Saved, 12K+ Donors, 350 Hospitals, 48 Cities — all count up on scroll |
| **Blood Types** | 8 circular cards — A+, A-, B+, B-, O+, O-, AB+, AB- — O+ and O- pulse with urgent glow animation |
| **How It Works** | 4-step process with numbered icons and a connecting line — Register → Schedule → Donate → Save Lives |
| **Eligibility** | Two-column card — green "Can Donate" list and red "Cannot Donate" list |
| **Testimonials** | 3 story cards with quote icon, italic text, author avatar and name |
| **CTA** | Full-width red gradient section with two action buttons |
| **Footer** | Brand description, social icons, quick links, contact info, copyright |

---

### 2. 💉 Donate Blood — `donate.html`

Full donor registration form with these fields:

| Field | Input Type | Validation |
|---|---|---|
| First Name | `text` | Required |
| Last Name | `text` | Required |
| Email Address | `email` | Required, valid email format |
| Phone Number | `tel` | Required |
| Age | `number` | Required, min 18, max 65 |
| Gender | `select` | Required |
| Blood Group | `select` | Required — all 8 types |
| Weight (kg) | `number` | Required, min 50 |
| Full Address | `text` | Required |
| City | `text` | Required |
| Last Donation Date | `date` | Optional |
| Medical Conditions | `textarea` | Optional |
| Agreement Checkbox | `checkbox` | Required |

**On Submit:** Form hides → green success message with checkmark icon appears → "Back to Home" button shown.

---

### 3. 🔍 Find Blood — `find-blood.html`

**Donor Search Box:**
- Dropdown: blood group (all 8 types)
- Text input: city name (partial match)
- Search button triggers `searchDonors()` in JS
- Results rendered as donor cards with name, blood badge, city, last donated, contact button

**Mock Donor Database (8 donors):**

| Name | Blood | City | Last Donated |
|---|---|---|---|
| Amit Sharma | O+ | Delhi | 3 months ago |
| Priya Verma | A+ | Mumbai | 4 months ago |
| Rahul Singh | B+ | Bangalore | 2 months ago |
| Sneha Patel | O- | Delhi | 5 months ago |
| Vikram Nair | AB+ | Chennai | 6 months ago |
| Ananya Gupta | A- | Hyderabad | 3 months ago |
| Rohan Mehta | B- | Delhi | 4 months ago |
| Kavya Reddy | AB- | Pune | 2 months ago |

**Emergency Blood Request Form:**

| Field | Type | Validation |
|---|---|---|
| Patient Name | `text` | Required |
| Blood Group | `select` | Required |
| Hospital Name | `text` | Required |
| Contact Number | `tel` | Required |
| Units Required | `number` | Required, min 1 |

**On Submit:** Form hides → success message confirms emergency request sent to nearby donors.

---

### 4. ℹ️ About Us — `about.html`

| Section | Details |
|---|---|
| **Mission** | Two-column layout — text on left, decorative icon box on right |
| **Core Values** | 4-card grid — Compassion, Safety, Community, Speed |
| **Team** | 4-card grid — Dr. Arjun Mehta, Sneha Kapoor, Dr. Priya Nair, Ravi Kumar |
| **CTA** | Red gradient section — Register + Contact buttons |

---

### 5. 📞 Contact — `contact.html`

**Contact Info (left column):**
- Phone: +91 98765 43210 / +91 11234 56789 (Emergency)
- Email: info@lifedrop.org / emergency@lifedrop.org
- Address: 123 Health Avenue, Connaught Place, New Delhi
- Hours: Mon–Sat 8AM–8PM, Emergency 24/7

**Contact Form (right column):**
- Name, Email, Subject, Message — all required
- On submit: form hides, success message shown

---

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|---|---|---|
| **HTML5** | Latest | Semantic page structure, forms, accessibility |
| **CSS3** | Latest | Layout, animations, glassmorphism, gradients |
| **JavaScript** | ES6+ | DOM manipulation, forms, search, animations |
| **Google Fonts — Inter** | Latest | Modern, clean typography (via CDN) |
| **FontAwesome** | 6.5.0 | Icons throughout all pages (via CDN) |
| **CSS Grid** | Native | Multi-column layouts (counters, blood types, team) |
| **CSS Flexbox** | Native | Navbar, hero, steps, buttons |
| **CSS Custom Properties** | Native | Design tokens — colors, shadows, radii |
| **CSS Animations** | Native | Glassmorphism float, ring pulse, badge float |
| **IntersectionObserver API** | Native | AOS scroll animations + count-up trigger |
| **requestAnimationFrame** | Native | Smooth count-up number animation |

> No npm, no webpack, no React, no jQuery. Pure web standards only.

---

## 🎨 UI Design & Theme

The site uses the **Modern & Empathetic Theme**:

- **Background:** Clean white (`#ffffff`) with soft pink/pastel red gradients (`#fff5f5` → `#ffe8e8`)
- **Primary accent:** Vibrant crimson red (`#E63946`)
- **Hero:** Glassmorphism floating blood drop with backdrop blur, pulsing rings, and floating info badges
- **Counters:** Dark gradient section (`#1a1a2e`) for contrast
- **Cards:** White with subtle shadow, hover lift effect
- **Buttons:** Gradient red with ripple click effect
- **Section tags:** Small pill badges in pink background
- **Footer:** Dark navy with subtle social icon hover

---

## ✨ Animations & Effects

### 1. Glassmorphism Blood Drop (Hero)
```css
.glass-drop {
  background: linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(230,57,70,0.2);
  animation: floatDrop 4s ease-in-out infinite;
}
```
- Floats up and down every 4 seconds
- 3 concentric rings pulse outward around it
- 3 floating info badges animate independently

### 2. Count-Up Counters
```javascript
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  // Uses requestAnimationFrame + cubic easing
  // Formats: 4500000 → "4.5M+", 12000 → "12K+"
}
```
- Triggered by IntersectionObserver when section enters viewport
- Runs only once per page load (`data-counted` flag)
- Eased with `1 - Math.pow(1 - progress, 3)` for smooth deceleration

### 3. AOS — Animate On Scroll
```javascript
function initAOS() {
  // Custom IntersectionObserver implementation
  // Supports: fade-up, fade-right, fade-left, zoom-in
  // Supports: data-aos-delay for staggered animations
}
```
CSS classes applied:
- `[data-aos="fade-up"]` → `translateY(30px)` → `translateY(0)`
- `[data-aos="fade-right"]` → `translateX(-30px)` → `translateX(0)`
- `[data-aos="fade-left"]` → `translateX(30px)` → `translateX(0)`
- `[data-aos="zoom-in"]` → `scale(0.85)` → `scale(1)`

### 4. Ripple Effect on Buttons
```javascript
btn.addEventListener('click', function(e) {
  // Creates a span at click position
  // Animates scale(0) → scale(2.5) with opacity fade
  // Removes itself after 600ms
});
```

### 5. Urgent Blood Type Pulse
```css
@keyframes urgentPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(230,57,70,0.4); }
  50%       { box-shadow: 0 0 0 15px rgba(230,57,70,0); }
}
```
Applied to O+ and O- blood type cards continuously.

### 6. Floating Badges
Three info badges around the hero blood drop float independently with staggered delays (0s, 1s, 2s).

### 7. Navbar Scroll Effect
```javascript
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
```
Adds shadow and reduces padding when user scrolls past 50px.

---

## ⚙️ JavaScript Functions

All code lives in `js/main.js`:

| Function | Trigger | What It Does |
|---|---|---|
| `toggleMenu()` | Hamburger click | Toggles `.open` on nav links and hamburger |
| `initAOS()` | DOMContentLoaded | Sets up IntersectionObserver for all `[data-aos]` elements |
| `initCounters()` | DOMContentLoaded | Observes `.count-up` elements, triggers `animateCounter()` |
| `animateCounter(el)` | IntersectionObserver | Counts from 0 to target using rAF + easing |
| `formatNumber(num)` | Inside counter | Formats 4500000 → "4.5M+", 12000 → "12K+" |
| `initRipple()` | DOMContentLoaded | Adds click ripple to all `.ripple` elements |
| `submitDonation(e)` | Form submit | Hides form, shows success message |
| `submitContact(e)` | Form submit | Hides form, shows success message |
| `submitEmergency(e)` | Form submit | Hides form, shows success message |
| `searchDonors()` | Button click | Filters `mockDonors` array, renders donor cards |

---

## 🎨 CSS Architecture

`css/style.css` is organized into labeled sections:

```
Section 1  — Reset & Base (*, html, body, a, ul)
Section 2  — CSS Custom Properties (:root variables)
Section 3  — Navbar (sticky, glassmorphism, scroll effect)
Section 4  — Buttons (primary, outline, outline-white, danger, sm, ripple)
Section 5  — Hero (layout, gradient bg, badge, gradient text)
Section 6  — Glassmorphism Blood Drop (glass-drop, rings, float animation)
Section 7  — Floating Badges (badge1, badge2, badge3)
Section 8  — Counters (dark grid, count cards)
Section 9  — Section Headers (section-tag, h2, subtitle)
Section 10 — Blood Types (grid, circles, urgent pulse animation)
Section 11 — How It Works (steps grid, step-line, step icons)
Section 12 — Eligibility (two-column cards, can/cannot lists)
Section 13 — Testimonials (grid, quote icon, author)
Section 14 — CTA Section (gradient background, buttons)
Section 15 — Footer (top grid, social links, bottom bar)
Section 16 — Page Header (inner page banner)
Section 17 — Forms (form-container, form-row, inputs, focus states)
Section 18 — Success Messages
Section 19 — Find Blood (search box, search form)
Section 20 — Donor Cards
Section 21 — Emergency Box
Section 22 — About Page (about-grid, values, team)
Section 23 — Contact Page (contact-grid, info-items)
Section 24 — AOS Animation Classes
Section 25 — Responsive Media Queries (1024px, 900px, 768px, 480px)
```

---

## 🎨 Color Scheme

| Name | Hex | CSS Variable | Used For |
|---|---|---|---|
| Primary Red | `#E63946` | `--red` | Buttons, icons, accents, borders |
| Dark Red | `#c1121f` | `--dark-red` | Hover states, gradients, emergency |
| Light Red | `#ff6b6b` | `--light-red` | Gradient accents |
| Pink Light | `#fff0f0` | `--pink-light` | Card backgrounds, badges |
| Pink Mid | `#ffd6d6` | `--pink-mid` | Borders, dividers |
| Dark Navy | `#1a1a2e` | `--dark` | Headings, footer, counter section |
| Off White | `#fafafa` | `--off-white` | Page background, testimonial cards |
| Light Gray | `#f4f6f8` | `--light-gray` | Section backgrounds |
| Medium Gray | `#6c757d` | `--gray` | Body text, subtitles |
| Success Green | `#2d6a4f` | — | Eligibility checks, success messages |

---

## 🔤 Typography

| Property | Value |
|---|---|
| **Primary Font** | `Inter` (Google Fonts CDN) |
| **Fallback** | `'Segoe UI', sans-serif` |
| **Base Size** | 16px |
| **Hero H1** | 4rem, weight 900 |
| **Section H2** | 2.4rem, weight 800 |
| **Card H3** | 1.1–1.2rem, weight 700 |
| **Body Text** | 1rem, weight 400 |
| **Labels** | 0.9rem, weight 600 |
| **Line Height** | 1.6 (body), 1.8 (paragraphs), 1.1 (headings) |

---

## 📱 Responsive Design

The site uses **4 breakpoints**:

| Breakpoint | Layout Changes |
|---|---|
| **≤ 1024px** | Counters → 2×2 grid; values/team → 2 columns |
| **≤ 900px** | Hero stacks vertically; blood drop shrinks; steps → 2 columns; eligibility/about/contact → 1 column; footer → 1 column |
| **≤ 768px** | Hamburger menu shown; "Donate Now" hidden; form rows → 1 column; search form → vertical |
| **≤ 480px** | Blood circles shrink; values/team → 1 column; hero H1 → 2rem |

---

## 📝 Forms & Validation

All forms use **HTML5 native validation** — no external library needed:

| Attribute | Used On | Purpose |
|---|---|---|
| `required` | All mandatory fields | Prevents empty submission |
| `type="email"` | Email fields | Validates email format |
| `type="number"` | Age, weight, units | Numeric input only |
| `min` / `max` | Age (18–65), weight (50+) | Range validation |
| `type="tel"` | Phone fields | Telephone input mode |
| `type="date"` | Last donation date | Date picker |
| `type="checkbox"` | Agreement | Must be checked to submit |

Focus state: `border-color: var(--red)` + `box-shadow: 0 0 0 4px rgba(230,57,70,0.08)`

---

## 🔍 Donor Search System

Client-side search using a hardcoded `mockDonors` array in `main.js`:

```javascript
const mockDonors = [
  { name: 'Amit Sharma',  blood: 'O+',  city: 'Delhi',     phone: '+91 98765 11111', lastDonated: '3 months ago' },
  { name: 'Priya Verma',  blood: 'A+',  city: 'Mumbai',    phone: '+91 98765 22222', lastDonated: '4 months ago' },
  // ... 8 total donors
];
```

**Search Logic:**
```javascript
const filtered = mockDonors.filter(d => {
  const matchBlood = bloodGroup ? d.blood === bloodGroup : true;   // exact match
  const matchCity  = city ? d.city.toLowerCase().includes(city) : true; // partial match
  return matchBlood && matchCity; // AND logic
});
```

**Result rendering:** Dynamic HTML injected into `#searchResults` div with donor cards showing blood badge, name, city, last donated, and a `tel:` contact link.

---

## 🩸 Eligibility Criteria

### ✅ You CAN Donate If:
- Age between **18 and 65 years**
- Weight **above 50 kg**
- Hemoglobin **≥ 12.5 g/dL**
- No major illness in the **last 6 months**
- Have **not donated** in the last **3 months**
- In **good general health**

### ❌ You CANNOT Donate If:
- Currently **pregnant or breastfeeding**
- Have **HIV, Hepatitis B or C**
- Recent **surgery or tattoo** (within 6 months)
- Taking **blood thinners** or certain medications
- Have **low blood pressure or anemia**
- Recently traveled to **malaria-endemic zones**

---

## 🚀 How to Run Locally

### Option 1 — Direct Open (Simplest)
```bash
git clone https://github.com/riyaraghuwanshi1807-ai/microproject-1.git
cd microproject-1
# Double-click index.html or drag it into your browser
```

### Option 2 — VS Code Live Server
1. Install **Live Server** extension in VS Code
2. Open the `microproject-1` folder
3. Right-click `index.html` → **Open with Live Server**
4. Opens at `http://127.0.0.1:5500`

### Option 3 — Python HTTP Server
```bash
cd microproject-1
python -m http.server 8000
# Visit http://localhost:8000
```

### Option 4 — Node.js HTTP Server
```bash
cd microproject-1
npx serve .
# Visit the URL shown in terminal
```

> ✅ No `npm install`, no `node_modules`, no build step. Pure HTML/CSS/JS.

---

## 🌍 Deployment — GitHub Pages

This project is live on **GitHub Pages** (free static hosting).

### Steps to Deploy:
1. Push all files to the `main` branch
2. Go to repo → **Settings → Pages**
3. Under **Source**, select: Branch `main`, Folder `/ (root)`
4. Click **Save**
5. Wait ~2 minutes for deployment

### Live URL:
```
https://riyaraghuwanshi1807-ai.github.io/microproject-1/
```

### Why `.nojekyll`?
The `.nojekyll` file in the root tells GitHub Pages to skip Jekyll processing and serve all files as-is. Without it, files starting with `_` may be ignored.

---

## 🔧 Git Workflow

```bash
# Clone
git clone https://github.com/riyaraghuwanshi1807-ai/microproject-1.git

# Check status
git status

# Stage all changes
git add .

# Commit
git commit -m "Your commit message"

# Push to GitHub
git push origin main
```

### Commit History:
| Commit | Description |
|---|---|
| `Initial commit` | README created |
| `Add complete LifeDrop blood donation website` | All 5 pages + CSS + JS |
| `Add .nojekyll for GitHub Pages` | GitHub Pages config |
| `Add full project documentation to README` | First full README |
| `Redesign: Modern theme with glassmorphism...` | Full UI redesign with animations |
| `Add full project documentation to README` | This updated documentation |

---

## 🔮 Future Improvements

### Backend & Database
- [ ] Firebase / Supabase integration for real donor database
- [ ] User authentication — login/signup for donors
- [ ] Real-time donor availability status (online/offline)
- [ ] Admin dashboard to manage registrations

### Features
- [ ] Email/SMS notifications for emergency requests
- [ ] Google Maps to show nearby blood banks and camps
- [ ] Blood donation camp event calendar
- [ ] Donor milestone badges (5 donations, 10 donations, etc.)
- [ ] Blood compatibility chart (who can donate to whom)

### Technical
- [ ] PWA (Progressive Web App) — offline support + install prompt
- [ ] Dark mode toggle
- [ ] Multi-language support (Hindi, Tamil, Telugu, etc.)
- [ ] Accessibility improvements (ARIA labels, keyboard nav)
- [ ] Performance optimization (lazy loading, image compression)

---

## 👩‍💻 Author

**Riya Raghuwanshi**

| Platform | Link |
|---|---|
| 🐙 GitHub | [@riyaraghuwanshi1807-ai](https://github.com/riyaraghuwanshi1807-ai) |
| 🌐 Live Project | [LifeDrop Blood Donation Website](https://riyaraghuwanshi1807-ai.github.io/microproject-1/) |

---

## 📃 License

This project is **open source** and available for educational purposes.
Feel free to fork, modify, and use it for your own projects with attribution.

---

<div align="center">

Made with ❤️ to save lives

**🩸 [Visit LifeDrop Live →](https://riyaraghuwanshi1807-ai.github.io/microproject-1/) 🩸**

</div>
