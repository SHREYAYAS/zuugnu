'use client';

import { useState } from 'react';
import styles from '../steps.module.css';

interface Step5Props {
  data: any;
  updateData: (field: string, value: any) => void;
  onPrev: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function Step5Additional({ data, updateData, onPrev, onSubmit }: Step5Props) {
  const [errors, setErrors] = useState<any>({});

  const validateStep = () => {
    const newErrors: any = {};
    
    if (!data.place) newErrors.place = 'Place is required';
    if (!data.languages || data.languages.length === 0) newErrors.languages = 'Please select at least one language';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      onSubmit(e);
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    updateData('languages', selected);
  };

  return (
    <div className={styles.step}>
      <div className={styles.stepIndicator}>Step 5 of 5</div>
      
      <div className={styles.formGroup}>
        <label htmlFor="place">Place</label>
        <select
          id="place"
          value={data.place}
          onChange={(e) => updateData('place', e.target.value)}
          className={errors.place ? styles.error : ''}
        >
          <option value="">Search & Select Place</option>
          <option value="andheri">Andheri</option>
          <option value="bandra">Bandra</option>
          <option value="whitefield">Whitefield</option>
          <option value="koramangala">Koramangala</option>
        </select>
        {errors.place && <span className={styles.errorText}>{errors.place}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="languages">Languages (Hold Ctrl/Cmd for multiple)</label>
        <select
          id="languages"
          multiple
          value={data.languages}
          onChange={handleLanguageChange}
          className={errors.languages ? styles.error : ''}
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="marathi">Marathi</option>
          <option value="kannada">Kannada</option>
          <option value="tamil">Tamil</option>
          <option value="telugu">Telugu</option>
        </select>
        {errors.languages && <span className={styles.errorText}>{errors.languages}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="referBy">Refer By (Optional)</label>
        <input
          type="text"
          id="referBy"
          placeholder="Enter referral code"
          value={data.referBy}
          onChange={(e) => updateData('referBy', e.target.value)}
        />
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
          type="submit" 
          className={styles.btnPrimary}
          onClick={handleSubmit}
        >
          Submit Profile
        </button>
      </div>
    </div>
  );
}
