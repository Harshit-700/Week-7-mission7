

export default function Step3Review({ formData, onSubmit, onBack }) {

  const formattedDob = formData.dob
    ? new Date(formData.dob + "T00:00:00").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "—";

  return (
    <div className="step">
      <div className="step-heading">
        <span className="step-badge">3</span>
        Review & Submit
      </div>

  
      <div className="review-section">
        <p className="review-section-label">Personal Information</p>
        <div className="review-grid">
          <div className="review-item">
            <span className="review-item-label">First Name</span>
            <span className="review-item-value">{formData.firstName || "—"}</span>
          </div>
          <div className="review-item">
            <span className="review-item-label">Last Name</span>
            <span className="review-item-value">{formData.lastName || "—"}</span>
          </div>
          <div className="review-item full-span">
            <span className="review-item-label">Date of Birth</span>
            <span className="review-item-value">{formattedDob}</span>
          </div>
        </div>
      </div>

      <div className="review-divider" />

      
      <div className="review-section">
        <p className="review-section-label">Account Details</p>
        <div className="review-grid">
          <div className="review-item full-span">
            <span className="review-item-label">Email</span>
            <span className="review-item-value">{formData.email || "—"}</span>
          </div>
          <div className="review-item full-span">
            <span className="review-item-label">Password</span>
            <span className="review-item-value">••••••••</span>
          </div>
        </div>
      </div>

      
      <div className="actions">
        <button className="btn-back" onClick={onBack}>
          ← Back
        </button>
       
        <button className="btn-submit" onClick={onSubmit}>
          Submit ✓
        </button>
      </div>
    </div>
  );
}
