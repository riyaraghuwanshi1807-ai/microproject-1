# 🩸 LifeDrop - Blood Donation Website

A fully responsive Blood Donation web application built with HTML, CSS, and JavaScript.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [How to Run](#how-to-run)
- [Screenshots](#screenshots)
- [Eligibility Criteria](#eligibility-criteria)
- [Author](#author)

---

## 📌 Project Overview

**LifeDrop** is a blood donation platform designed to connect blood donors with patients in need. The website allows users to register as donors, search for available donors by blood group and city, submit emergency blood requests, and learn about the importance of blood donation.

---

## ✨ Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Donor registration form with validation
- ✅ Blood donor search by blood group and city
- ✅ Emergency blood request form
- ✅ All 8 blood types displayed with urgent indicators
- ✅ Step-by-step donation process guide
- ✅ Eligibility checker section
- ✅ Testimonials from real-life stories
- ✅ Contact form with success feedback
- ✅ Smooth scroll animations
- ✅ Mobile hamburger navigation menu
- ✅ FontAwesome icons throughout

---

## 📁 Project Structure

```
micro project 1/
│
├── index.html          # Home page
├── donate.html         # Donor registration page
├── find-blood.html     # Find blood / emergency request page
├── about.html          # About us page
├── contact.html        # Contact page
│
├── css/
│   └── style.css       # All styles (responsive)
│
├── js/
│   └── main.js         # All JavaScript functionality
│
└── README.md           # Project documentation
```

---

## 📄 Pages

### 1. Home (`index.html`)
- Hero section with call-to-action buttons
- Live statistics (lives saved, donors, blood types)
- All 8 blood types with urgent indicators for O+ and O-
- How it works — 4-step donation process
- Eligibility criteria (can donate / cannot donate)
- Testimonials from donors and recipients
- Call-to-action section

### 2. Donate Blood (`donate.html`)
- Full donor registration form
- Fields: Name, Email, Phone, Age, Gender, Blood Group, Weight, Address, City, Last Donation Date, Medical Conditions
- Form validation (HTML5 + required fields)
- Success message on submission

### 3. Find Blood (`find-blood.html`)
- Search donors by blood group and city
- Mock donor database with 8 sample donors
- Donor cards showing name, blood group, city, last donation
- Emergency blood request form with patient details
- Instant notification simulation on emergency submit

### 4. About Us (`about.html`)
- Mission and vision of LifeDrop
- Core values: Compassion, Safety, Community, Speed
- Team section with 4 team members
- Call-to-action to register as donor

### 5. Contact (`contact.html`)
- Contact information (phone, email, address, hours)
- Contact form with name, email, subject, message
- Success message on form submission

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, animations, responsive layout |
| JavaScript (Vanilla) | Form handling, search, DOM manipulation |
| FontAwesome 6.5 | Icons throughout the site |
| CSS Grid & Flexbox | Responsive layouts |
| IntersectionObserver API | Scroll-triggered animations |

---

## 🚀 How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/riyaraghuwanshi1807-ai/microproject-1.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd microproject-1
   ```

3. **Open in browser:**
   - Simply open `index.html` in any modern web browser
   - Or use VS Code Live Server extension for live reload

> No build tools, no dependencies, no installation required. Pure HTML/CSS/JS.

---

## 🩸 Eligibility Criteria

### You CAN donate if:
- Age between 18–65 years
- Weight above 50 kg
- Hemoglobin ≥ 12.5 g/dL
- No major illness in last 6 months
- Not donated in last 3 months

### You CANNOT donate if:
- Currently pregnant or breastfeeding
- Have HIV, Hepatitis B or C
- Recently had surgery or tattoo
- Taking certain medications
- Have low blood pressure

---

## 🎨 Color Scheme

| Color | Hex | Usage |
|---|---|---|
| Primary Red | `#e63946` | Buttons, accents, icons |
| Dark Red | `#c1121f` | Hover states |
| Dark | `#1a1a2e` | Headings, footer |
| Light Gray | `#f8f9fa` | Section backgrounds |
| White | `#ffffff` | Cards, forms |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| > 900px | Full desktop layout |
| 768px – 900px | Tablet — stacked grids |
| < 768px | Mobile — hamburger menu, single column |

---

## 👩‍💻 Author

**Riya Raghuwanshi**
- GitHub: [@riyaraghuwanshi1807-ai](https://github.com/riyaraghuwanshi1807-ai)

---

## 📃 License

This project is open source and available for educational purposes.

---

> *"Every drop of blood donated is a gift of life. Be a hero today."* 🩸
