'use client';

import { useState } from 'react';
import styles from '../steps.module.css';

interface Step1Props {
  data: any;
  updateData: (field: string, value: any) => void;
  onNext: () => void;
}

export default function Step1KYC({ data, updateData, onNext }: Step1Props) {
  const [errors, setErrors] = useState<any>({});

  const validateStep = () => {
    const newErrors: any = {};
    
    if (!data.kycType) newErrors.kycType = 'KYC Type is required';
    if (!data.kycNumber) newErrors.kycNumber = 'KYC Number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      onNext();
    }
  };

  const verifyKYC = () => {
    if (!data.kycType || !data.kycNumber) {
      alert('Please select KYC type and enter number');
      return;
    }
    alert('KYC verification initiated. You will receive a confirmation shortly.');
  };

  return (
    <div className={styles.step}>
      <div className={styles.stepIndicator}>Step 1 of 5</div>
      
      <div className={styles.formGroup}>
        <label htmlFor="kycType">KYC ID Type</label>
        <select
          id="kycType"
          value={data.kycType}
          onChange={(e) => updateData('kycType', e.target.value)}
          className={errors.kycType ? styles.error : ''}
        >
          <option value="">Select KYC ID Type</option>
          <option value="aadhar">Aadhar Card</option>
          <option value="pan">PAN Card</option>
          <option value="passport">Passport</option>
          <option value="driving">Driving License</option>
          <option value="voter">Voter ID</option>
        </select>
        {errors.kycType && <span className={styles.errorText}>{errors.kycType}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="kycNumber">KYC ID Number</label>
        <div className={styles.inputGroup}>
          <input
            type="text"
            id="kycNumber"
            placeholder="Enter ID Number"
            value={data.kycNumber}
            onChange={(e) => updateData('kycNumber', e.target.value)}
            className={errors.kycNumber ? styles.error : ''}
          />
          <button 
            type="button" 
            className={styles.btnVerify}
            onClick={verifyKYC}
          >
            Verify
          </button>
        </div>
        {errors.kycNumber && <span className={styles.errorText}>{errors.kycNumber}</span>}
      </div>

      <button 
        type="button" 
        className={styles.btnPrimary}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
