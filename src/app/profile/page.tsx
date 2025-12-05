'use client';

import { useState } from 'react';
import ProfileForm from '@/components/ProfileForm';
import styles from './profile.module.css';

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <ProfileForm />
    </div>
  );
}
