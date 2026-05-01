

export default function ProgressBar({ currentStep, totalSteps, stepTitles }) {
  const percent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="progress-wrap">

      <div className="progress-meta">
        <span className="progress-step-label">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="progress-step-name">{stepTitles[currentStep - 1]}</span>
      </div>


      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>


      <div className="progress-dots">
        {stepTitles.map((title, i) => {
          const stepNum = i + 1;
          let dotClass = "dot";
          if (stepNum < currentStep) dotClass += " dot-done";
          else if (stepNum === currentStep) dotClass += " dot-active";
          return <div key={title} className={dotClass} title={title} />;
        })}
      </div>
    </div>
  );
}
