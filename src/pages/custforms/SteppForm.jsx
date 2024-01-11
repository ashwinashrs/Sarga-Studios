// SteppForm.js
import React, { useState } from 'react'
import CustForm from './CustForm'

const SteppForm = () => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handleNextStep = () => {
    // Handle any logic you need for moving to the next step
  };
  return (
    <div>
      <CustForm formData={formData} setFormData={setFormData} nextStep={handleNextStep} />  
    </div>
  )
}

export default SteppForm


