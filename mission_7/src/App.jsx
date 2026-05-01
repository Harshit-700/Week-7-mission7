import { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar";
import Step1PersonalInfo from "./components/Step1PersonalInfo";
import Step2AccountDetails from "./components/Step2AccountDetails";
import Step3Review from "./components/Step3Review";
import SuccessScreen from "./components/SuccessScreen";
import "./App.css";

const STORAGE_KEY = "reg_wizard_data";
const STEP_KEY    = "reg_wizard_step";


const INITIAL_FORM_DATA = {
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const STEP_TITLES = ["Personal Info", "Account Details", "Review & Submit"];

export default function App() {
 
  const [currentStep, setCurrentStep] = useState(() => {
    const saved = localStorage.getItem(STEP_KEY);
    return saved ? Number(saved) : 1;
  });

  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...INITIAL_FORM_DATA, ...JSON.parse(saved) } : INITIAL_FORM_DATA;
    } catch {
      return INITIAL_FORM_DATA;
    }
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    
    const { password, confirmPassword, ...safeData } = formData;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(safeData));
  }, [formData]);

  
  useEffect(() => {
    localStorage.setItem(STEP_KEY, String(currentStep));
  }, [currentStep]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const goNext = () => setCurrentStep((s) => s + 1);
  const goBack = () => setCurrentStep((s) => s - 1);

  
  const handleSubmit = () => {
    const finalData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.dob,
      email: formData.email,
      password: formData.password,
    };
    console.log("✅ Registration Submitted:", finalData);
    
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STEP_KEY);
    setSubmitted(true);
  };


  if (submitted) return <SuccessScreen formData={formData} />;

  return (
    <div className="app-wrapper">
      <div className="wizard-container">

        <div className="wizard-header">
          <h1 className="wizard-title">Create Account</h1>
          <p className="wizard-subtitle">Complete all steps to get started</p>
        </div>

       
        <ProgressBar
          currentStep={currentStep}
          totalSteps={3}
          stepTitles={STEP_TITLES}
        />

       
        <div className="wizard-card">
          {/* Step 1 */}
          {currentStep === 1 && (
            <Step1PersonalInfo
              formData={formData}
              onChange={handleChange}
              onNext={goNext}
            />
          )}

        
          {currentStep === 2 && (
            <Step2AccountDetails
              formData={formData}
              onChange={handleChange}
              onNext={goNext}
              onBack={goBack}
            />
          )}

       
          {currentStep === 3 && (
            <Step3Review
              formData={formData}
              onSubmit={handleSubmit}
              onBack={goBack}
            />
          )}
        </div>
      </div>
    </div>
  );
}
