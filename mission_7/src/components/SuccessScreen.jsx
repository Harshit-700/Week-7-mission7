

export default function SuccessScreen({ formData }) {
  return (
    <div className="app-wrapper">
      <div className="wizard-container">
        <div className="wizard-card success-screen">
          <div className="success-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B6D11" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="success-title">You're all set!</h2>
          <p className="success-msg-text">
            Welcome, <strong>{formData.firstName}</strong>! Your account has been
            created successfully.
          </p>
          <p className="success-hint">
            Check the browser console for the submitted data object.
          </p>
        </div>
      </div>
    </div>
  );
}
