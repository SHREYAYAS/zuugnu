'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Step1KYC from './ProfileForm/steps/Step1KYC';
import Step2Profile from './ProfileForm/steps/Step2Profile';
import Step3Contact from './ProfileForm/steps/Step3Contact';
import Step4Address from './ProfileForm/steps/Step4Address';
import Step5Additional from './ProfileForm/steps/Step5Additional';

const TOTAL_STEPS = 5;

export default function ProfileForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    kycType: '',
    kycNumber: '',
    profilePic: '',
    name: '',
    gender: '',
    mobile: '',
    countryCode: '+91',
    email: '',
    dob: '',
    country: '',
    state: '',
    district: '',
    pincode: '',
    place: '',
    languages: [],
    referBy: '',
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Profile submitted successfully! ✅');
    // Redirect to dashboard after successful submission
    router.push('/dashboard');
  };

  const progress = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">My Profile</h1>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 sm:p-4 rounded">
            <p className="text-sm sm:text-base">⚠️ Please update your real time pic (face must be clearly visible) and other info.</p>
            <p className="text-sm sm:text-base">The account may be disabled if any discrepancy is found at any stage.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="bg-gray-200 rounded-full h-2 mb-6 sm:mb-8">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <Step1KYC 
                data={formData}
                updateData={updateFormData}
                onNext={handleNextStep}
              />
            )}

            {currentStep === 2 && (
              <Step2Profile 
                data={formData}
                updateData={updateFormData}
                onNext={handleNextStep}
                onPrev={handlePrevStep}
              />
            )}

            {currentStep === 3 && (
              <Step3Contact 
                data={formData}
                updateData={updateFormData}
                onNext={handleNextStep}
                onPrev={handlePrevStep}
              />
            )}

            {currentStep === 4 && (
              <Step4Address 
                data={formData}
                updateData={updateFormData}
                onNext={handleNextStep}
                onPrev={handlePrevStep}
              />
            )}

            {currentStep === 5 && (
              <Step5Additional 
                data={formData}
                updateData={updateFormData}
                onPrev={handlePrevStep}
                onSubmit={handleSubmit}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
