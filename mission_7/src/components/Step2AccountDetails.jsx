

import { useState } from "react";


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateStep2(data) {
  const errors = {};

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Email must include "@" and a valid domain';
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
}


function getStrength(pw) {
  if (!pw) return { level: 0, label: "", color: "" };
  if (pw.length < 8) return { level: 1, label: "Weak", color: "#E24B4A" };
  if (pw.length < 12) return { level: 2, label: "Fair", color: "#EF9F27" };
  return { level: 3, label: "Strong", color: "#1D9E75" };
}


function EyeIcon({ open }) {
  return open ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export default function Step2AccountDetails({ formData, onChange, onNext, onBack }) {
  const [touched, setTouched] = useState({});
  const [showPw, setShowPw] = useState(false);
  const [showCpw, setShowCpw] = useState(false);

  const errors = validateStep2(formData);
  const isValid = Object.keys(errors).length === 0;
  const strength = getStrength(formData.password);

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleChange = (e) => {
    onChange(e);
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  return (
    <div className="step">
      <div className="step-heading">
        <span className="step-badge">2</span>
        Account Details
      </div>


      <div className="field">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="jane@example.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            touched.email && errors.email
              ? "input-error"
              : touched.email && !errors.email
                ? "input-valid"
                : ""
          }
        />

        {touched.email && errors.email && (
          <p className="error-msg">{errors.email}</p>
        )}
      </div>


      <div className="field">
        <label htmlFor="password">Password</label>
        <div className="pw-wrap">
          <input
            id="password"
            name="password"
            type={showPw ? "text" : "password"}
            placeholder="Min. 8 characters"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.password && errors.password
                ? "input-error"
                : touched.password && !errors.password
                  ? "input-valid"
                  : ""
            }
          />

          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowPw((v) => !v)}
            tabIndex={-1}
          >
            <EyeIcon open={showPw} />
          </button>
        </div>


        {formData.password && (
          <div className="strength-wrap">
            <div className="strength-track">
              <div
                className="strength-fill"
                style={{
                  width: `${(strength.level / 3) * 100}%`,
                  background: strength.color,
                }}
              />
            </div>
            <span className="strength-label" style={{ color: strength.color }}>
              {strength.label}
            </span>
          </div>
        )}

        {touched.password && errors.password && (
          <p className="error-msg">{errors.password}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="pw-wrap">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showCpw ? "text" : "password"}
            placeholder="Repeat your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.confirmPassword && errors.confirmPassword
                ? "input-error"
                : touched.confirmPassword && !errors.confirmPassword
                  ? "input-valid"
                  : ""
            }
          />
          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowCpw((v) => !v)}
            tabIndex={-1}
          >
            <EyeIcon open={showCpw} />
          </button>
        </div>
        {touched.confirmPassword && errors.confirmPassword && (
          <p className="error-msg">{errors.confirmPassword}</p>
        )}
        {touched.confirmPassword && !errors.confirmPassword && formData.confirmPassword && (
          <p className="success-msg">✓ Passwords match</p>
        )}
      </div>


      <div className="actions">
        <button className="btn-back" onClick={onBack}>
          ← Back
        </button>

        <button className="btn-next" onClick={onNext} disabled={!isValid}>
          Next →
        </button>
      </div>
    </div>
  );
}
