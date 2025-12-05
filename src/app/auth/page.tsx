'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './auth.module.css';

const COUNTRIES = [
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+1', name: 'Canada', flag: '🇨🇦' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+66', name: 'Thailand', flag: '🇹🇭' },
  { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
  { code: '+63', name: 'Philippines', flag: '🇵🇭' },
  { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
  { code: '+46', name: 'Sweden', flag: '🇸🇪' },
  { code: '+47', name: 'Norway', flag: '🇳🇴' },
  { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
  { code: '+43', name: 'Austria', flag: '🇦🇹' },
  { code: '+32', name: 'Belgium', flag: '🇧🇪' },
  { code: '+45', name: 'Denmark', flag: '🇩🇰' },
  { code: '+358', name: 'Finland', flag: '🇫🇮' },
  { code: '+30', name: 'Greece', flag: '🇬🇷' },
  { code: '+48', name: 'Poland', flag: '🇵🇱' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
  { code: '+90', name: 'Turkey', flag: '🇹🇷' },
  { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+974', name: 'Qatar', flag: '🇶🇦' },
  { code: '+968', name: 'Oman', flag: '🇴🇲' },
  { code: '+212', name: 'Morocco', flag: '🇲🇦' },
  { code: '+213', name: 'Algeria', flag: '🇩🇿' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+1', name: 'Mexico', flag: '🇲🇽' },
  { code: '+56', name: 'Chile', flag: '🇨🇱' },
  { code: '+57', name: 'Colombia', flag: '🇨🇴' },
  { code: '+54', name: 'Argentina', flag: '🇦🇷' },
  { code: '+51', name: 'Peru', flag: '🇵🇪' },
  { code: '+591', name: 'Bolivia', flag: '🇧🇴' },
  { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
  { code: '+593', name: 'Ecuador', flag: '🇪🇨' },
  { code: '+595', name: 'Paraguay', flag: '🇵🇾' },
  { code: '+598', name: 'Uruguay', flag: '🇺🇾' },
  { code: '+36', name: 'Hungary', flag: '🇭🇺' },
  { code: '+420', name: 'Czech Republic', flag: '🇨🇿' },
  { code: '+40', name: 'Romania', flag: '🇷🇴' },
  { code: '+359', name: 'Bulgaria', flag: '🇧🇬' },
  { code: '+385', name: 'Croatia', flag: '🇭🇷' },
  { code: '+383', name: 'Kosovo', flag: '🇽🇰' },
  { code: '+389', name: 'North Macedonia', flag: '🇲🇰' },
  { code: '+356', name: 'Malta', flag: '🇲🇹' },
  { code: '+353', name: 'Ireland', flag: '🇮🇪' },
  { code: '+352', name: 'Luxembourg', flag: '🇱🇺' },
  { code: '+354', name: 'Iceland', flag: '🇮🇸' },
  { code: '+374', name: 'Armenia', flag: '🇦🇲' },
  { code: '+380', name: 'Ukraine', flag: '🇺🇦' },
  { code: '+375', name: 'Belarus', flag: '🇧🇾' },
  { code: '+994', name: 'Azerbaijan', flag: '🇦🇿' },
  { code: '+998', name: 'Uzbekistan', flag: '🇺🇿' },
  { code: '+996', name: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: '+992', name: 'Tajikistan', flag: '🇹🇯' },
  { code: '+993', name: 'Turkmenistan', flag: '🇹🇲' },
  { code: '+1', name: 'Jamaica', flag: '🇯🇲' },
  { code: '+1', name: 'Trinidad and Tobago', flag: '🇹🇹' },
  { code: '+1', name: 'Barbados', flag: '🇧🇧' },
  { code: '+1', name: 'Bahamas', flag: '🇧🇸' },
  { code: '+1', name: 'Dominican Republic', flag: '🇩🇴' },
  { code: '+53', name: 'Cuba', flag: '🇨🇺' },
  { code: '+254', name: 'Kenya', flag: '🇰🇪' },
  { code: '+256', name: 'Uganda', flag: '🇺🇬' },
  { code: '+255', name: 'Tanzania', flag: '🇹🇿' },
  { code: '+260', name: 'Zambia', flag: '🇿🇲' },
  { code: '+263', name: 'Zimbabwe', flag: '🇿🇼' },
  { code: '+265', name: 'Malawi', flag: '🇲🇼' },
  { code: '+258', name: 'Mozambique', flag: '🇲🇿' },
  { code: '+267', name: 'Botswana', flag: '🇧🇼' },
  { code: '+264', name: 'Namibia', flag: '🇳🇦' },
  { code: '+291', name: 'Eritrea', flag: '🇪🇷' },
  { code: '+251', name: 'Ethiopia', flag: '🇪🇹' },
  { code: '+675', name: 'Papua New Guinea', flag: '🇵🇬' },
  { code: '+679', name: 'Fiji', flag: '🇫🇯' },
  { code: '+680', name: 'Palau', flag: '🇵🇼' },
  { code: '+676', name: 'Tonga', flag: '🇹🇴' },
  { code: '+678', name: 'Vanuatu', flag: '🇻🇺' },
  { code: '+685', name: 'Samoa', flag: '🇼🇸' },
  { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
  { code: '+977', name: 'Nepal', flag: '🇳🇵' },
  { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
  { code: '+93', name: 'Afghanistan', flag: '🇦🇫' },
  { code: '+98', name: 'Iran', flag: '🇮🇷' },
  { code: '+964', name: 'Iraq', flag: '🇮🇶' },
  { code: '+972', name: 'Israel', flag: '🇮🇱' },
  { code: '+962', name: 'Jordan', flag: '🇯🇴' },
  { code: '+961', name: 'Lebanon', flag: '🇱🇧' },
  { code: '+963', name: 'Syria', flag: '🇸🇾' },
  { code: '+970', name: 'Palestine', flag: '🇵🇸' },
  { code: '+852', name: 'Hong Kong', flag: '🇭🇰' },
  { code: '+853', name: 'Macau', flag: '🇲🇴' },
  { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
  { code: '+855', name: 'Cambodia', flag: '🇰🇭' },
  { code: '+856', name: 'Laos', flag: '🇱🇦' },
  { code: '+95', name: 'Myanmar', flag: '🇲🇲' },
  { code: '+673', name: 'Brunei', flag: '🇧🇳' },
  { code: '+976', name: 'Mongolia', flag: '🇲🇳' },
  { code: '+670', name: 'East Timor', flag: '🇹🇱' },
  { code: '+850', name: 'North Korea', flag: '🇰🇵' },
];

export default function AuthPage() {
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [waError, setWaError] = useState('');
  const [pwError, setPwError] = useState('');
  const [showRegisterPrompt, setShowRegisterPrompt] = useState(false);
  const [registerName, setRegisterName] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [searchCountry, setSearchCountry] = useState('');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('countryDropdown');
      const button = document.getElementById('countryButton');
      if (dropdown && button && !dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setShowCountryDropdown(false);
      }
    };

    if (showCountryDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showCountryDropdown]);

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
    setShowRegisterPrompt(true);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerName.trim()) {
      alert('Please enter your name');
      return;
    }
    const message = `Register ${registerName}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918800607598?text=${encodedMessage}`, '_blank');
    setShowRegisterPrompt(false);
    setRegisterName('');
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
            <span style={{marginRight: '8px', verticalAlign: 'middle'}}>Whatsapp</span>
            <span className={styles.highlight}>"Register + Your Full Name"</span><br />
            <a href="https://wa.me/918800607598" className={styles.link}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{display: 'inline', marginRight: '4px'}}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              +91 8800607598
            </a><br />
            To receive Login Password
          </p>
          
          <form className={styles.form}>
            <input
              type="text"
              placeholder='"Register + Your Full Name"'
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
          
          <form onSubmit={handleSignInSubmit} className={styles.form} autoComplete="off">
            <div className={styles.phoneInputGroup}>
              <div className={styles.countryCodeDropdown}>
                <button
                  id="countryButton"
                  type="button"
                  className={styles.countryCodeBtn}
                  onClick={() => {
                    setShowCountryDropdown(!showCountryDropdown);
                    setSearchCountry('');
                  }}
                >
                  <span className={styles.countryCodeDisplay}>
                    {COUNTRIES.find(c => c.code === countryCode)?.flag} {countryCode}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                {showCountryDropdown && (
                  <div id="countryDropdown" className={styles.countryDropdownMenu}>
                    <div className={styles.countrySearchBox}>
                      <input
                        type="text"
                        placeholder="Search country..."
                        value={searchCountry}
                        onChange={(e) => setSearchCountry(e.target.value.toUpperCase())}
                        className={styles.countrySearchInput}
                        autoFocus
                      />
                    </div>
                    <div className={styles.countryList}>
                      {COUNTRIES.filter((country) => 
                        country.name.toUpperCase().includes(searchCountry) || 
                        country.code.includes(searchCountry)
                      ).map((country) => (
                        <button
                          key={country.code + country.name}
                          type="button"
                          className={styles.countryOption}
                          onClick={() => {
                            setCountryCode(country.code);
                            setShowCountryDropdown(false);
                            setSearchCountry('');
                          }}
                        >
                          <span className={styles.countryFlag}>{country.flag}</span>
                          <span className={styles.countryName}>{country.name}</span>
                          <span className={styles.countryPhoneCode}>{country.code}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.inputWrapper}>
                <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <input
                  type="tel"
                  inputMode="tel"
                  placeholder="Enter your whatsapp number"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  className={styles.input}
                  aria-label="WhatsApp Number"
                  name="signin-phone"
                  autoComplete="off"
                  required
                />
              </div>
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
                name="signin-password"
                autoComplete="new-password"
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

      {/* Register Modal Prompt */}
      {showRegisterPrompt && (
        <>
          <div className={styles.modalOverlay} onClick={() => setShowRegisterPrompt(false)}></div>
          <div className={styles.registerModal}>
            <button
              className={styles.closeBtn}
              onClick={() => setShowRegisterPrompt(false)}
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className={styles.modalTitle}>Ready to Register?</h3>
              <p className={styles.modalSubtitle}>Share your name and start your journey with us</p>
            </div>

            <form onSubmit={handleRegisterSubmit} className={styles.modalForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="registerName" className={styles.inputLabel}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Full Name
                </label>
                <input
                  id="registerName"
                  type="text"
                  placeholder='"Register + Your Full Name"'
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  className={styles.modalInput}
                  autoFocus
                  required
                />
              </div>

              <button type="submit" className={styles.registerModalBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Open WhatsApp Chat
              </button>
            </form>
          </div>
        </>
      )}

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
