'use client';

import { useState } from 'react';
import styles from '../steps.module.css';

interface Step3Props {
  data: any;
  updateData: (field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Step3Contact({ data, updateData, onNext, onPrev }: Step3Props) {
  const [errors, setErrors] = useState<any>({});

  const validateStep = () => {
    const newErrors: any = {};
    
    if (!data.mobile) newErrors.mobile = 'Mobile number is required';
    if (!data.email) newErrors.email = 'Email is required';
    if (!data.dob) newErrors.dob = 'Date of birth is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      onNext();
    }
  };

  const verifyMobile = () => {
    if (!data.mobile) {
      alert('Please enter mobile number');
      return;
    }
    alert('OTP sent to your mobile number');
  };

  const verifyEmail = () => {
    if (!data.email) {
      alert('Please enter email address');
      return;
    }
    alert('Verification link sent to your email');
  };

  return (
    <div className={styles.step}>
      <div className={styles.stepIndicator}>Step 3 of 5</div>
      
      <div className={styles.formGroup}>
        <label>Mobile Number</label>
        <div className={styles.inputGroup}>
          <select
            className={styles.countryCode}
            value={data.countryCode}
            onChange={(e) => updateData('countryCode', e.target.value)}
          >
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+971">🇦🇪 +971</option>
          </select>
          <input
            type="text"
            placeholder="Enter mobile number"
            value={data.mobile}
            onChange={(e) => updateData('mobile', e.target.value)}
            className={errors.mobile ? styles.error : ''}
          />
          <button 
            type="button" 
            className={styles.btnVerify}
            onClick={verifyMobile}
          >
            Verify
          </button>
        </div>
        {errors.mobile && <span className={styles.errorText}>{errors.mobile}</span>}
      </div>

      <div className={styles.formGroup}>
        <label>Email Address</label>
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Enter email address"
            value={data.email}
            onChange={(e) => updateData('email', e.target.value)}
            className={errors.email ? styles.error : ''}
          />
          <button 
            type="button" 
            className={styles.btnVerify}
            onClick={verifyEmail}
          >
            Verify
          </button>
        </div>
        {errors.email && <span className={styles.errorText}>{errors.email}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          value={data.dob}
          onChange={(e) => updateData('dob', e.target.value)}
          className={errors.dob ? styles.error : ''}
        />
        {errors.dob && <span className={styles.errorText}>{errors.dob}</span>}
      </div>

      <div className={styles.buttonGroup}>
        <button 
          type="button" 
          className={styles.btnSecondary}
          onClick={onPrev}
        >
          Previous
        </button>
        <button 
          type="button" 
          className={styles.btnPrimary}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
