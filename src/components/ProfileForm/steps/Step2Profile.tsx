'use client';

import { useState } from 'react';
import styles from '../steps.module.css';

interface Step2Props {
  data: any;
  updateData: (field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Step2Profile({ data, updateData, onNext, onPrev }: Step2Props) {
  const [preview, setPreview] = useState<string>(data.profilePic || '');
  const [errors, setErrors] = useState<any>({});

  const validateStep = () => {
    const newErrors: any = {};
    
    if (!data.profilePic) newErrors.profilePic = 'Profile picture is required';
    if (!data.name) newErrors.name = 'Name is required';
    if (!data.gender) newErrors.gender = 'Gender is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      onNext();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPreview(result);
        updateData('profilePic', result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.step}>
      <div className={styles.stepIndicator}>Step 2 of 5</div>
      
      <div className={styles.formGroup}>
        <label>Profile Picture (Selfie)</label>
        <div 
          className={styles.uploadBox}
          onClick={() => document.getElementById('profilePic')?.click()}
        >
          {preview ? (
            <img src={preview} alt="Profile Preview" />
          ) : (
            <>
              <div className={styles.uploadIcon}>📷</div>
              <p>Click to upload your selfie</p>
              <small style={{color: '#666'}}>Face must be clearly visible</small>
            </>
          )}
        </div>
        <input
          type="file"
          id="profilePic"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        {errors.profilePic && <span className={styles.errorText}>{errors.profilePic}</span>}
      </div>

      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            value={data.name}
            onChange={(e) => updateData('name', e.target.value)}
            className={errors.name ? styles.error : ''}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={data.gender}
            onChange={(e) => updateData('gender', e.target.value)}
            className={errors.gender ? styles.error : ''}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className={styles.errorText}>{errors.gender}</span>}
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
