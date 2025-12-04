'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './auth.module.css';

export default function AuthPage() {
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [waError, setWaError] = useState('');
  const [pwError, setPwError] = useState('');

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waSanitized = whatsappNumber.replace(/\D/g, '');
    const waValid = waSanitized.length >= 10 && waSanitized.length <= 15;
    const pwValid = password.length >= 4;

    setWaError(waValid ? '' : 'Enter a valid WhatsApp number');
    setPwError(pwValid ? '' : 'Password must be at least 4 characters');

    if (!waValid || !pwValid) return;

    console.log('Sign In:', { whatsappNumber: waSanitized, password });
  };

  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/918800607598', '_blank');
  };

  return (
    <main className={styles.authPage}>
      {/* Top Banner */}
      <div className={styles.topBanner}>
        <h1 className={styles.bannerTitle}>Discover. Decide. Shine</h1>
        <p className={styles.bannerSubtitle}>Where Science Meets Soul</p>
      </div>

      {/* Main Content Container */}
      <div className={styles.authContainer}>
        {/* Register Card */}
        <div className={styles.authCard}>
          <div className={styles.logo}>
            <img src="/zuugnu-removebg-preview.png" alt="Zuugnu Logo" className={styles.logoImg} />
          </div>
          
          <h2 className={styles.title}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="19" y1="8" x2="19" y2="14"></line>
              <line x1="22" y1="11" x2="16" y2="11"></line>
            </svg>
            Register
          </h2>
          
          <p className={styles.description}>
            WhatsApp your Full Name to<br />
            <a href="https://wa.me/918800607598" className={styles.link}>+91 8800607598 →</a><br />
            to receive your login credentials
          </p>
          
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={styles.input}
              aria-label="Full name"
            />
            <button type="button" onClick={handleOpenWhatsApp} className={styles.whatsappBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Open WhatsApp Chat
            </button>
          </form>
        </div>

        {/* Sign In Card */}
        <div className={styles.authCard}>
          <div className={styles.logo}>
            <img src="/zuugnu-removebg-preview.png" alt="Zuugnu Logo" className={styles.logoImg} />
          </div>
          
          <h2 className={styles.title}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            Sign In
          </h2>
          
          <form onSubmit={handleSignInSubmit} className={styles.form}>
            <div className={styles.inputWrapper}>
              <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <input
                type="tel"
                inputMode="tel"
                placeholder="WhatsApp Number"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className={styles.input}
                aria-label="WhatsApp Number"
                required
              />
            </div>
            
            <div className={styles.inputWrapper}>
              <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                aria-label="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.eyeBtn}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
              Submit
            </button>
            
            <Link href="/forgot-password" className={styles.forgotLink}>
              Forgot Password?
            </Link>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footerRow}>
        <div className={styles.footerLeft}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
        </div>
        <div className={styles.footerRight}>
          © 2025 Zuugnu.com | All rights reserved
        </div>
      </footer>
    </main>
  );
}
