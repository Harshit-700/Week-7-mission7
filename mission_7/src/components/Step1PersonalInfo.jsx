

import { useState } from "react";
const NAME_REGEX = /^[A-Za-z\s'-]{2,50}$/;
function validateDOB(dob) {
  if (!dob) return "Date of birth is required";

  const [yearStr, monthStr, dayStr] = dob.split("-");
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10); // 1–12
  const day = parseInt(dayStr, 10); // 1–31

  const currentYear = new Date().getFullYear();

  if (year < 1900) return `Year ${year} is too old — must be 1900 or later`;
  if (year > currentYear) return `Year ${year} is in the future`;
  if (month < 1 || month > 12) return `Month ${month} is invalid — must be 1–12`;


  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const daysInMonth = [0, 31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (day < 1 || day > daysInMonth[month])
    return `Day ${day} is invalid for month ${month} (max: ${daysInMonth[month]})`;


  const today = new Date();
  const age = today.getFullYear() - year - (
    today < new Date(year + 5, month - 1, day) ? 1 : 0
  );
  if (currentYear - year < 5) return "You must be at least 5 years old";

  return "";
}


function validateStep1(data) {
  const errors = {};

  if (!data.firstName.trim()) {
    errors.firstName = "First name is required";
  } else if (!NAME_REGEX.test(data.firstName.trim())) {
    errors.firstName = "Only letters, spaces, hyphens or apostrophes allowed";
  }

  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
  } else if (!NAME_REGEX.test(data.lastName.trim())) {
    errors.lastName = "Only letters, spaces, hyphens or apostrophes allowed";
  }

  const dobErr = validateDOB(data.dob);
  if (dobErr) errors.dob = dobErr;

  return errors;
}

export default function Step1PersonalInfo({ formData, onChange, onNext }) {
  const [touched, setTouched] = useState({});

  const errors = validateStep1(formData);
  const isValid = Object.keys(errors).length === 0;

  const handleBlur = (e) =>
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  const fieldClass = (name) =>
    touched[name]
      ? errors[name] ? "input-error" : "input-valid"
      : "";

  return (
    <div className="step">
      <div className="step-heading">
        <span className="step-badge">1</span>
        Personal Information
      </div>

      <div className="row-2">

        <div className="field">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder=" "
            value={formData.firstName}
            onChange={onChange}
            onBlur={handleBlur}
            className={fieldClass("firstName")}
          />
          {touched.firstName && errors.firstName && (
            <p className="error-msg">⚠ {errors.firstName}</p>
          )}
        </div>


        <div className="field">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder=" "
            value={formData.lastName}
            onChange={onChange}
            onBlur={handleBlur}
            className={fieldClass("lastName")}
          />
          {touched.lastName && errors.lastName && (
            <p className="error-msg">⚠ {errors.lastName}</p>
          )}
        </div>
      </div>


      <div className="field">
        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={onChange}
          onBlur={handleBlur}
          className={fieldClass("dob")}
          max={new Date().toISOString().split("T")[0]}
          min="1900-01-01"
        />
        {touched.dob && errors.dob && (
          <p className="error-msg">⚠ {errors.dob}</p>
        )}
        {touched.dob && !errors.dob && formData.dob && (
          <p className="success-msg">✓ Valid date</p>
        )}
        <p className="field-hint">Format: YYYY-MM-DD Must be between 1900 and today</p>
      </div>

      <div className="actions">
        <span />
        <button className="btn-next" onClick={onNext} disabled={!isValid}>
          Next →
        </button>
      </div>
    </div>
  );
}
