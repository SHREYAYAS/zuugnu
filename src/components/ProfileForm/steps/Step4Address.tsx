'use client';

import { useState } from 'react';
import styles from '../steps.module.css';

interface Step4Props {
  data: any;
  updateData: (field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Step4Address({ data, updateData, onNext, onPrev }: Step4Props) {
  const [errors, setErrors] = useState<any>({});

  const validateStep = () => {
    const newErrors: any = {};
    
    if (!data.country) newErrors.country = 'Country is required';
    if (!data.state) newErrors.state = 'State is required';
    if (!data.district) newErrors.district = 'District is required';
    if (!data.pincode) newErrors.pincode = 'Pin code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      onNext();
    }
  };

  return (
    <div className={styles.step}>
      <div className={styles.stepIndicator}>Step 4 of 5</div>
      
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="country">Country</label>
          <select
            id="country"
            value={data.country}
            onChange={(e) => updateData('country', e.target.value)}
            className={errors.country ? styles.error : ''}
          >
            <option value="">Search & Select Country</option>
            <option value="india">India</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="uae">United Arab Emirates</option>
          </select>
          {errors.country && <span className={styles.errorText}>{errors.country}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="state">State</label>
          <select
            id="state"
            value={data.state}
            onChange={(e) => updateData('state', e.target.value)}
            className={errors.state ? styles.error : ''}
          >
            <option value="">Search & Select State</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="delhi">Delhi</option>
            <option value="karnataka">Karnataka</option>
            <option value="gujarat">Gujarat</option>
          </select>
          {errors.state && <span className={styles.errorText}>{errors.state}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="district">District</label>
          <select
            id="district"
            value={data.district}
            onChange={(e) => updateData('district', e.target.value)}
            className={errors.district ? styles.error : ''}
          >
            <option value="">Search & Select District</option>
            <option value="mumbai">Mumbai</option>
            <option value="pune">Pune</option>
            <option value="bangalore">Bangalore</option>
            <option value="delhi">Delhi</option>
          </select>
          {errors.district && <span className={styles.errorText}>{errors.district}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="pincode">Pin Code</label>
          <input
            type="text"
            id="pincode"
            placeholder="Enter pin code"
            value={data.pincode}
            onChange={(e) => updateData('pincode', e.target.value.slice(0, 6))}
            maxLength={6}
            className={errors.pincode ? styles.error : ''}
          />
          {errors.pincode && <span className={styles.errorText}>{errors.pincode}</span>}
        </div>
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
