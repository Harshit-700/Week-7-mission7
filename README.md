## Registration Wizard – Multi-Step Form React App

A modern and user-friendly multi-step registration form built with React. This application guides users through a step-by-step onboarding process, ensuring smooth data entry, validation, and review before submission.

🔗 Live Demo: *Add your deployed link here*

📸 Screenshot
image alt.

---

## 📁 Project Structure

```
registration-wizard/
├── public/                
├── src/
│   ├── components/        
│   ├── pages/             
│   │   ├── Step1.js       
│   │   ├── Step2.js       
│   │   ├── Step3.js       
│   │   └── Success.js     
│   ├── App.js             
│   ├── index.js         
│   └── index.css          
├── package.json
└── README.md
```

---

## ✨ Features

**Multi-Step Form** — Breaks large forms into manageable steps.

**State Persistence** — Data remains intact when navigating between steps.

**Controlled Components** — All inputs are fully controlled using React state.

**Real-Time Validation** — Instant feedback for incorrect inputs.

**Password Matching** — Ensures confirm password matches original password.

**Disabled Navigation** — Prevents moving forward until data is valid.

**Progress Indicator** — Shows current step status visually.

**Review Page** — Allows users to verify data before submission.

**Success Screen** — Displays confirmation after form submission.

**Responsive Design** — Works across mobile, tablet, and desktop devices.

---

## 🚀 Getting Started

### 1. Create Project

```
npm create vite@latest registration-wizard
cd registration-wizard
```

### 2. Install dependencies

```
npm install
```

### 3. Start development server

```
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

---

## 🧩 Sections

| Section        | Description                     |
| -------------- | ------------------------------- |
| Step 1         | Personal information form       |
| Step 2         | Account setup (email, password) |
| Step 3         | Review entered data             |
| Success Screen | Confirmation after submission   |
| Progress Bar   | Visual step indicator           |

---

## 🎨 Design Tokens

| Property      | Value                |
| ------------- | -------------------- |
| Font          | System Sans-serif    |
| Primary Color | Blue / Indigo        |
| Background    | Clean minimal UI     |
| Card Style    | Soft shadow cards    |
| Border Radius | 8px                  |
| Layout        | Centered form layout |

---

## 📱 Responsive Layout

| Breakpoint | Layout                   |
| ---------- | ------------------------ |
| Desktop    | Centered multi-step card |
| Tablet     | Adjusted spacing         |
| Mobile     | Full-width form          |

---

## 🔒 Validation Rules

| Field            | Rule                 |
| ---------------- | -------------------- |
| First Name       | Required             |
| Last Name        | Required             |
| Date of Birth    | Required             |
| Email            | Must contain '@'     |
| Password         | Minimum 8 characters |
| Confirm Password | Must match Password  |

---

## 🛠️ Built With

* React.js — Frontend library
* JavaScript (ES6+) — Logic handling
* CSS3 — Styling
* useState Hook — State management

---

## 💡 Future Improvements

* Add backend integration (Node.js / Firebase)
* Store user data in database
* Add form animations
* Implement step validation with libraries (Formik / React Hook Form)
* Add multi-language support

---

## 📄 License

This project is open source and available under the MIT License.
