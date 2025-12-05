'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from '../steps.module.css';

interface Step2Props {
  data: any;
  updateData: (field: string, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Step2Profile({ data, updateData, onNext, onPrev }: Step2Props) {
  const [preview, setPreview] = useState<string>(data.profilePic || '');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showCamera, setShowCamera] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (!data.profilePic) newErrors.profilePic = 'Profile picture is required';
    if (!data.name) newErrors.name = 'Name is required';
    if (!data.gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) onNext();
  };

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
        track.enabled = false;
      });
      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setIsInitializing(false);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const initializeCamera = async () => {
      if (!showCamera || streamRef.current) return;

      setIsInitializing(true);
      setCameraError(null);

      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('Camera not supported on this device');
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        });

        if (!isMounted) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.muted = true;
          await videoRef.current.play();
        }
      } catch (error: any) {
        console.error('[v0] Camera Error:', error);
        if (isMounted) {
          setCameraError(error?.message || 'Unable to access camera');
        }
      } finally {
        if (isMounted) setIsInitializing(false);
      }
    };

    if (showCamera) {
      initializeCamera();
    } else {
      stopCamera();
    }

    return () => {
      isMounted = false;
      stopCamera();
    };
  }, [showCamera, stopCamera]);

  useEffect(() => {
    if (!preview && !showCamera) {
      setShowCamera(true);
    }
  }, [preview, showCamera]);

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current && !isCapturing) {
      setIsCapturing(true);
      const video = videoRef.current;
      const canvas = canvasRef.current;

      const width = video.videoWidth || 640;
      const height = video.videoHeight || 480;

      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext('2d');
      if (context) {
        // Mirror the capture to match the preview
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.translate(width, 0);
        context.scale(-1, 1);

        context.drawImage(video, 0, 0, width, height);
        context.restore();

        const imageData = canvas.toDataURL('image/jpeg', 0.85);

        setPreview(imageData);
        updateData('profilePic', imageData);

        setTimeout(() => {
          setShowCamera(false);
          setIsCapturing(false);
        }, 300);
      }
    }
  };

  const handleRetake = () => {
    setPreview('');
    updateData('profilePic', '');
    setCameraError(null);
    setIsCapturing(false);
    setShowCamera(true);
  };

  return (
    <div className={styles.step}>
      <div className={styles.stepIndicator}>Step 2 of 5</div>

      <div className={styles.formGroup}>
        <label>Profile Picture (Live Selfie Only)</label>

        {cameraError && (
          <div className={styles.uploadBox} style={{ borderColor: '#ef4444', background: '#fef2f2' }}>
            <div style={{ color: '#dc2626', marginBottom: '12px', fontWeight: 500 }}>⚠️ Camera Error</div>
            <p style={{ color: '#dc2626', fontSize: '14px', marginBottom: '12px' }}>{cameraError}</p>
            <button
              type="button"
              className={styles.btnRetake}
              onClick={() => {
                setCameraError(null);
                setShowCamera(false);
                setTimeout(() => setShowCamera(true), 100);
              }}
            >
              🔄 Try Again
            </button>
          </div>
        )}

        {showCamera && !cameraError ? (
          <div className={styles.cameraContainer}>
            {isInitializing && (
              <div
                style={{
                  padding: '20px',
                  textAlign: 'center',
                  background: 'rgba(0,0,0,0.7)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(2px)',
                }}
              >
                <div style={{ color: 'white' }}>
                  <div style={{ fontSize: '18px', marginBottom: '8px' }}>🎥</div>
                  <div>Starting camera...</div>
                </div>
              </div>
            )}

            {isCapturing && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 20,
                  animation: 'pulse 0.3s ease-in-out',
                  background: 'rgba(255,255,255,0.1)',
                }}
              />
            )}

            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className={styles.videoPreview}
              style={{
                transform: 'scaleX(-1)',
                width: '100%',
                borderRadius: '12px',
                display: 'block',
                aspectRatio: '4/3',
                objectFit: 'cover',
                background: '#000',
              }}
            />
            <canvas ref={canvasRef} style={{ display: 'none' }} />

            <div className={styles.cameraButtons}>
              <button
                type="button"
                className={styles.btnCapture}
                onClick={capturePhoto}
                disabled={isCapturing || isInitializing}
                style={{
                  opacity: isCapturing || isInitializing ? 0.6 : 1,
                  cursor: isCapturing || isInitializing ? 'not-allowed' : 'pointer',
                }}
              >
                {isCapturing ? '⏳ Capturing...' : '📸 Capture'}
              </button>
            </div>
          </div>
        ) : preview && !cameraError ? (
          <div className={styles.uploadBox}>
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '16px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={preview || '/placeholder.svg'}
                alt="Profile Preview"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
            <button type="button" className={styles.btnRetake} onClick={handleRetake}>
              📷 Retake Photo
            </button>
          </div>
        ) : !showCamera && !cameraError ? (
          <div className={styles.uploadBox}>
            <button type="button" className={styles.btnRetake} onClick={() => setShowCamera(true)}>
              📷 Open Camera
            </button>
          </div>
        ) : null}

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
        <button type="button" className={styles.btnSecondary} onClick={onPrev}>
          Previous
        </button>
        <button type="button" className={styles.btnPrimary} onClick={handleNext}>
          Next
        </button>
      </div>

      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
