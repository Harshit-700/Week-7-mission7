# Registration Wizard — React Project

## Tech Stack
- **React 18** (Vite)
- **useState** — State management (controlled components)
- **Conditional Rendering** — Step switching
- **Regex** — Email validation
- **Form Validation** — Real-time, per-field

---

## Project Structure

```
src/
├── App.jsx                          ← Parent: holds ALL form state
├── App.css                          ← All styles
├── main.jsx                         ← Entry point
└── components/
    ├── ProgressBar.jsx              ← Step X of Y + fill bar + dots
    ├── Step1PersonalInfo.jsx        ← First name, Last name, DOB
    ├── Step2AccountDetails.jsx      ← Email, Password, Confirm PW
    ├── Step3Review.jsx              ← Read-only review of all data
    └── SuccessScreen.jsx            ← Shown after submit
```

---

## Key Concepts Covered

| Concept | Where |
|---|---|
| `useState` for form data | `App.jsx` — `formData` state |
| Controlled components | All inputs use `value={formData.X}` + `onChange` |
| State lifting | `handleChange` passed as prop to all steps |
| Conditional rendering | `{currentStep === 1 && <Step1 />}` in App |
| Regex validation | `Step2AccountDetails.jsx` — `EMAIL_REGEX` |
| Real-time validation | `validateStep2()` called on every keystroke |
| Disabled button | `disabled={!isValid}` on Next buttons |
| Show/Hide password | `useState(showPw)` toggles `type="text"/"password"` |
| Progress bar | `ProgressBar.jsx` — width = `(step/total) * 100%` |

---

## Setup & Run

```bash
npm install
npm run dev
```

Then open: http://localhost:5173
