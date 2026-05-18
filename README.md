# 🩸 LifeDrop - Blood Donation Website

🌐 **Live Website:** [https://riyaraghuwanshi1807-ai.github.io/microproject-1/](https://riyaraghuwanshi1807-ai.github.io/microproject-1/)

> *"Every drop of blood donated is a gift of life. Be a hero today."* 🩸

A fully responsive Blood Donation web application built with pure HTML5, CSS3, and Vanilla JavaScript. No frameworks, no build tools — just clean, fast, accessible web code.

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Live Demo](#-live-demo)
3. [Features](#-features)
4. [Project Structure](#-project-structure)
5. [Pages & Sections](#-pages--sections)
6. [Technologies Used](#-technologies-used)
7. [JavaScript Functionality](#-javascript-functionality)
8. [CSS Architecture](#-css-architecture)
9. [Color Scheme](#-color-scheme)
10. [Typography](#-typography)
11. [Responsive Design](#-responsive-design)
12. [Forms & Validation](#-forms--validation)
13. [Donor Search System](#-donor-search-system)
14. [Animations & Effects](#-animations--effects)
15. [Eligibility Criteria](#-eligibility-criteria)
16. [How to Run Locally](#-how-to-run-locally)
17. [Deployment](#-deployment)
18. [Future Improvements](#-future-improvements)
19. [Author](#-author)
20. [License](#-license)

---

## 📌 Project Overview

**LifeDrop** is a front-end blood donation platform designed to:
- Connect blood **donors** with **patients** in need
- Allow users to **register** as blood donors
- Help people **search** for donors by blood group and city
- Handle **emergency blood requests** with instant notifications
- Educate users about blood donation **eligibility and process**

This is a **micro project** built as a static website, deployable on GitHub Pages with zero configuration.

---

## 🌐 Live Demo

| Link | Description |
|---|---|
| [🏠 Home Page](https://riyaraghuwanshi1807-ai.github.io/microproject-1/) | Landing page with all key info |
| [💉 Donate Blood](https://riyaraghuwanshi1807-ai.github.io/microproject-1/donate.html) | Donor registration form |
| [🔍 Find Blood](https://riyaraghuwanshi1807-ai.github.io/microproject-1/find-blood.html) | Search donors + emergency request |
| [ℹ️ About Us](https://riyaraghuwanshi1807-ai.github.io/microproject-1/about.html) | Mission, values, team |
| [📞 Contact](https://riyaraghuwanshi1807-ai.github.io/microproject-1/contact.html) | Contact form and info |

---

## ✨ Features

### Core Features
- ✅ Fully responsive design — works on mobile, tablet, and desktop
- ✅ 5 complete HTML pages with consistent navigation
- ✅ Sticky navbar with active link highlighting
- ✅ Mobile hamburger menu
- ✅ Donor registration form with full validation
- ✅ Blood donor search by blood group and city
- ✅ Emergency blood request form
- ✅ Contact form with success feedback
- ✅ All 8 blood types displayed with urgent indicators (O+, O-)
- ✅ 4-step donation process guide
- ✅ Eligibility checker (can/cannot donate)
- ✅ Testimonials section
- ✅ Team section with member cards
- ✅ Statistics counter section
- ✅ Smooth scroll-triggered animations
- ✅ Pulsing blood drop hero animation
- ✅ FontAwesome 6.5 icons throughout
- ✅ Footer with social links, quick links, contact info

---

## 📁 Project Structure

```
microproject-1/
│
├── index.html              # Home / Landing page
├── donate.html             # Donor registration page
├── find-blood.html         # Find blood & emergency request page
├── about.html              # About us page
├── contact.html            # Contact page
│
├── css/
│   └── style.css           # All styles — layout, components, responsive
│
├── js/
│   └── main.js             # All JavaScript — forms, search, animations
│
├── .nojekyll               # Disables Jekyll processing on GitHub Pages
└── README.md               # Full project documentation
```

---

## 📄 Pages & Sections

### 1. 🏠 Home Page (`index.html`)

| Section | Description |
|---|---|
| **Navbar** | Sticky top nav with logo, links, "Donate Now" CTA button, hamburger for mobile |
| **Hero** | Full-screen hero with headline, description, two CTA buttons, animated blood drop icon |
| **Stats** | 4 stat cards — 4.5M+ Lives Saved, 12K+ Donors, 8 Blood Types, 24/7 Support |
| **Blood Types** | 8 circular blood type cards (O+ and O- pulse with urgent animation) |
| **How It Works** | 4-step process — Register → Schedule → Donate → Save Lives |
| **Eligibility** | Two-column grid — who can and cannot donate |
| **Testimonials** | 3 story cards from donors and recipients |
| **CTA** | Red gradient call-to-action section with register button |
| **Footer** | Brand info, quick links, contact details, social icons |

---

### 2. 💉 Donate Blood Page (`donate.html`)

A complete donor registration form with the following fields:

| Field | Type | Validation |
|---|---|---|
| First Name | Text | Required |
| Last Name | Text | Required |
| Email Address | Email | Required, valid format |
| Phone Number | Tel | Required |
| Age | Number | Required, 18–65 |
| Gender | Select | Required |
| Blood Group | Select | Required (A+/A-/B+/B-/O+/O-/AB+/AB-) |
| Weight | Number | Required, min 50 kg |
| Address | Text | Required |
| City | Text | Required |
| Last Donation Date | Date | Optional |
| Medical Conditions | Textarea | Optional |
| Agreement Checkbox | Checkbox | Required |

On successful submission:
- Form hides
- Green success message appears with confirmation text
- "Back to Home" button shown

---

### 3. 🔍 Find Blood Page (`find-blood.html`)

**Donor Search:**
- Filter by blood group (dropdown) and city (text input)
- Searches a mock database of 8 donors
- Results show donor name, blood group badge, city, last donation date, and a "Contact" button
- Shows "No donors found" message if no match

**Mock Donor Database:**

| Name | Blood Group | City |
|---|---|---|
| Amit Sharma | O+ | Delhi |
| Priya Verma | A+ | Mumbai |
| Rahul Singh | B+ | Bangalore |
| Sneha Patel | O- | Delhi |
| Vikram Nair | AB+ | Chennai |
| Ananya Gupta | A- | Hyderabad |
| Rohan Mehta | B- | Delhi |
| Kavya Reddy | AB- | Pune |

**Emergency Blood Request Form:**

| Field | Type |
|---|---|
| Patient Name | Text |
| Blood Group | Select |
| Hospital Name | Text |
| Contact Number | Tel |
| Units Required | Number |

On submission — success message confirms emergency request sent.

---

### 4. ℹ️ About Us Page (`about.html`)

| Section | Description |
|---|---|
| **Mission** | Two-paragraph mission statement with decorative icon box |
| **Core Values** | 4 value cards — Compassion, Safety, Community, Speed |
| **Team** | 4 team member cards with avatar icons and roles |
| **CTA** | Register as donor call-to-action |

**Team Members:**
- Dr. Arjun Mehta — Founder & Medical Director
- Sneha Kapoor — Operations Head
- Dr. Priya Nair — Medical Advisor
- Ravi Kumar — Tech Lead

---

### 5. 📞 Contact Page (`contact.html`)

**Contact Information displayed:**
- Phone: +91 98765 43210 / +91 11234 56789 (Emergency)
- Email: info@lifedrop.org / emergency@lifedrop.org
- Address: 123 Health Avenue, Connaught Place, New Delhi
- Hours: Mon–Sat 8AM–8PM, Emergency 24/7

**Contact Form Fields:**
- Name, Email, Subject, Message (all required)
- Success message shown on submit

---

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|---|---|---|
| HTML5 | Latest | Semantic page structure and markup |
| CSS3 | Latest | Styling, layout, animations, responsiveness |
| JavaScript | ES6+ | DOM manipulation, form handling, search logic |
| FontAwesome | 6.5.0 | Icons (via CDN) |
| CSS Grid | Native | Multi-column page layouts |
| CSS Flexbox | Native | Navigation, cards, step layouts |
| CSS Custom Properties | Native | Color variables and theming |
| IntersectionObserver API | Native | Scroll-triggered fade-in animations |
| CSS Animations | Native | Pulsing blood drop, hover effects |

---

## ⚙️ JavaScript Functionality

All JavaScript is in `js/main.js`. Key functions:

### `toggleMenu()`
- Toggles the `.open` class on `.nav-links`
- Shows/hides the mobile navigation menu

### `submitDonation(e)`
- Prevents default form submission
- Hides the registration form
- Shows the success message div

### `submitContact(e)`
- Handles contact form submission
- Shows success confirmation

### `submitEmergency(e)`
- Handles emergency blood request
- Shows emergency confirmation message

### `searchDonors()`
- Reads blood group and city input values
- Filters the `mockDonors` array
- Dynamically renders donor cards into `#searchResults`
- Shows "no results" message if nothing found

### Scroll Animation (IntersectionObserver)
- Observes `.stat-card`, `.blood-card`, `.step`, `.value-card`, `.team-card`, `.testimonial-card`
- Sets initial `opacity: 0` and `translateY(20px)`
- Animates to `opacity: 1` and `translateY(0)` when element enters viewport

---

## 🎨 CSS Architecture

`css/style.css` is organized into these sections:

```
1.  Reset & Base Styles
2.  CSS Custom Properties (variables)
3.  Navbar
4.  Buttons (.btn-primary, .btn-secondary, .btn-danger)
5.  Hero Section
6.  Stats Section
7.  Section Titles
8.  Blood Types Grid
9.  How It Works / Steps
10. Eligibility Grid
11. Testimonials
12. CTA Section
13. Footer
14. Page Header (inner pages)
15. Forms (donate, contact, emergency)
16. Success Messages
17. Find Blood / Search
18. Donor Cards
19. Emergency Box
20. About Page Sections
21. Contact Page Layout
22. Responsive Media Queries
```

---

## 🎨 Color Scheme

| Name | Hex Code | Used For |
|---|---|---|
| Primary Red | `#e63946` | Buttons, icons, accents, borders |
| Dark Red | `#c1121f` | Hover states, emergency elements |
| Light Red | `#ff6b6b` | Gradient accents |
| Dark Navy | `#1a1a2e` | Headings, footer background |
| Light Gray | `#f8f9fa` | Alternate section backgrounds |
| Medium Gray | `#6c757d` | Body text, subtitles |
| White | `#ffffff` | Cards, forms, navbar |
| Success Green | `#2d6a4f` | Eligibility checks, success messages |

---

## 🔤 Typography

- **Font Family:** `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- **Base font size:** 16px (browser default)
- **Heading sizes:** 3.5rem (hero) → 2.5rem (section) → 1.8rem (subsection)
- **Body text:** 1rem / 1.05rem
- **Line height:** 1.6 (body), 1.8 (paragraphs)
- **Font weights:** 400 (body), 500 (nav), 600 (labels/buttons), 700–800 (headings)

---

## 📱 Responsive Design

The site uses a **mobile-first approach** with two main breakpoints:

### Breakpoint: 900px (Tablet)
- Hero section stacks vertically (text above, image below)
- Hero text centered
- Eligibility grid becomes single column
- About grid becomes single column
- Contact grid becomes single column
- Footer grid becomes single column
- Steps layout becomes vertical with rotated arrows

### Breakpoint: 768px (Mobile)
- Navbar links hidden, hamburger menu shown
- "Donate Now" button hidden from navbar
- Form rows become single column
- Search form becomes vertical stack
- All grids collapse to single column

---

## 📝 Forms & Validation

All forms use **HTML5 native validation**:
- `required` attribute on mandatory fields
- `type="email"` for email format validation
- `type="number"` with `min`/`max` for age and weight
- `type="tel"` for phone numbers
- Custom checkbox agreement required before submit

No external validation library is used — keeping it lightweight.

---

## 🔍 Donor Search System

The search works client-side using a hardcoded `mockDonors` array:

```javascript
const mockDonors = [
  { name, blood, city, phone, lastDonated }
  // 8 entries covering all blood types and major Indian cities
];
```

**Search logic:**
- If blood group selected → filter by exact match
- If city entered → filter by case-insensitive partial match
- Both filters applied together with AND logic
- Results rendered as HTML donor cards dynamically

---

## ✨ Animations & Effects

| Animation | Element | Type |
|---|---|---|
| Pulsing blood drop | Hero icon | CSS `@keyframes pulse` — scale 1 → 1.08 |
| Urgent blood types | O+, O- cards | Same pulse animation, 1.5s loop |
| Scroll fade-in | Cards, steps, stats | IntersectionObserver + CSS transition |
| Hover lift | Value cards, team cards | `translateY(-5px)` on hover |
| Hover scale | Blood type cards | `scale(1.1)` on hover |
| Button hover | All buttons | Background color change + `translateY(-2px)` |
| Nav link hover | All nav links | Color change to red |

---

## 🩸 Eligibility Criteria

### ✅ You CAN Donate If:
- Age is between **18 and 65 years**
- Weight is **above 50 kg**
- Hemoglobin level is **≥ 12.5 g/dL**
- No major illness in the **last 6 months**
- Have **not donated** in the last **3 months**

### ❌ You CANNOT Donate If:
- Currently **pregnant or breastfeeding**
- Have **HIV, Hepatitis B or C**
- Recently had **surgery or a tattoo**
- Taking **certain medications** (blood thinners, etc.)
- Have **low blood pressure**

---

## 🚀 How to Run Locally

### Option 1 — Direct Open
```bash
# Clone the repo
git clone https://github.com/riyaraghuwanshi1807-ai/microproject-1.git

# Open index.html directly in your browser
# No server needed!
```

### Option 2 — VS Code Live Server
1. Install the **Live Server** extension in VS Code
2. Open the project folder
3. Right-click `index.html` → **Open with Live Server**
4. Site opens at `http://127.0.0.1:5500`

### Option 3 — Python HTTP Server
```bash
cd microproject-1
python -m http.server 8000
# Open http://localhost:8000
```

> ✅ No npm, no node_modules, no build step required.

---

## 🌍 Deployment

This project is deployed using **GitHub Pages**.

### Deployment Steps:
1. Push all files to the `main` branch
2. Go to repo **Settings → Pages**
3. Set Source: `main` branch, `/ (root)` folder
4. Click **Save**
5. Site goes live at: `https://<username>.github.io/<repo-name>/`

### Live URL:
```
https://riyaraghuwanshi1807-ai.github.io/microproject-1/
```

### `.nojekyll` file:
A `.nojekyll` file is included in the root to prevent GitHub Pages from processing the site through Jekyll, ensuring all files are served as-is.

---

## 🔮 Future Improvements

- [ ] Backend integration (Node.js / Firebase) for real donor database
- [ ] User authentication — login/signup for donors
- [ ] Real-time donor availability status
- [ ] Email/SMS notifications for emergency requests
- [ ] Google Maps integration to show nearby blood banks
- [ ] Admin dashboard to manage donor registrations
- [ ] Blood donation camp event listings
- [ ] Multi-language support (Hindi, regional languages)
- [ ] PWA (Progressive Web App) support for offline access
- [ ] Dark mode toggle

---

## 👩‍💻 Author

**Riya Raghuwanshi**

- 🐙 GitHub: [@riyaraghuwanshi1807-ai](https://github.com/riyaraghuwanshi1807-ai)
- 🌐 Project: [LifeDrop Blood Donation Website](https://riyaraghuwanshi1807-ai.github.io/microproject-1/)

---

## 📃 License

This project is open source and available for **educational purposes**.  
Feel free to fork, modify, and use it for your own projects.

---

<div align="center">

Made with ❤️ to save lives

🩸 **[Visit LifeDrop Live](https://riyaraghuwanshi1807-ai.github.io/microproject-1/)** 🩸

</div>
