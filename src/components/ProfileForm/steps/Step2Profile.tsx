'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
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
  const [showCamera, setShowCamera] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isStarting, setIsStarting] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

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

  const startCamera = useCallback(async () => {
    if (isStarting) return;
    // Avoid restarting if already running and healthy
    if (streamRef.current && showCamera && cameraReady) {
      setCameraError(null);
      return;
    }

    setIsStarting(true);
    setCameraReady(false);
    setCameraError(null);

    // Mount the video element before wiring a new stream so ref is available
    setShowCamera(true);
    await new Promise(requestAnimationFrame);

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setCameraError('Camera access is not supported on this device or browser.');
      setIsStarting(false);
      return;
    }

    // If an old stream exists, fully stop it before starting a new one
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => {
        track.stop();
        track.enabled = false;
      });
      streamRef.current = null;
    }

    try {
      // Try with ideal constraints first, fallback to basic if needed
      let stream: MediaStream | null = null;
      
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: 'user' },
            width: { ideal: 1280 },
            height: { ideal: 720 }
          },
          audio: false
        });
      } catch (e) {
        // Fallback for browsers that don't support ideal constraints (Edge older versions)
        console.warn('Trying fallback camera constraints...', e);
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user' },
            audio: false
          });
        } catch (e2) {
          // Last resort - basic video access
          console.warn('Trying basic camera access...', e2);
          stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
          });
        }
      }

      streamRef.current = stream;
      if (videoRef.current) {
        const v = videoRef.current;
        // Use srcObject (modern standard)
        v.srcObject = stream;
        v.muted = true;
        v.playsInline = true;
        
        // Ensure playback starts after metadata is loaded
        const tryPlay = async () => {
          try {
            await v.play();
            setCameraReady(true);
            console.log('Video playback started successfully');
          } catch (err) {
            console.warn('Video playback error (may need user interaction):', err);
          }
        };
        
        if (v.readyState >= 2) {
          // Video already has data
          tryPlay();
        } else {
          // Wait for metadata
          const onLoadedMetadata = () => {
            tryPlay();
            v.removeEventListener('loadedmetadata', onLoadedMetadata);
          };
          
          v.addEventListener('loadedmetadata', onLoadedMetadata);
          
          // Fallback timeout in case loadedmetadata doesn't fire
          const timeoutId = setTimeout(() => {
            tryPlay();
            v.removeEventListener('loadedmetadata', onLoadedMetadata);
          }, 1000);
          
          v.addEventListener('play', () => clearTimeout(timeoutId));
        }
      }
      setShowCamera(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
      
      let errorMessage = 'Unable to access camera. ';
      
      if (error instanceof DOMException) {
        if (error.name === 'NotAllowedError') {
          errorMessage += 'Camera permission was denied. Please allow camera access in browser settings.';
        } else if (error.name === 'NotFoundError') {
          errorMessage += 'No camera device found. Please check if a camera is connected.';
        } else if (error.name === 'NotReadableError') {
          errorMessage += 'Camera is already in use by another application. Please close other camera apps.';
        } else {
          errorMessage += error.message;
        }
      } else {
        errorMessage += 'Please check permissions and ensure the camera is not in use.';
      }
      
      setCameraError(errorMessage);
    } finally {
      setIsStarting(false);
    }
  }, [cameraReady, isStarting, showCamera]);

  const stopCamera = useCallback(() => {
    // Stop tracks in streamRef
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => {
        try {
          track.stop();
          track.enabled = false;
        } catch (e) {
          console.warn('Error stopping track:', e);
        }
      });
      streamRef.current = null;
    }
    
    // Stop video element
    if (videoRef.current) {
      try {
        const v = videoRef.current;
        v.pause();
        v.muted = true;
        
        // Clear srcObject
        if (v.srcObject) {
          const stream = v.srcObject as MediaStream;
          stream.getTracks().forEach(track => {
            try {
              track.stop();
              track.enabled = false;
            } catch (e) {
              console.warn('Error stopping video track:', e);
            }
          });
          v.srcObject = null;
        }
        
        // Clear src attribute
        v.src = '';
        v.removeAttribute('src');
      } catch (e) {
        console.warn('Error stopping camera:', e);
      }
    }
    
    setCameraReady(false);
    setIsStarting(false);
    setShowCamera(false);
  }, []);

  useEffect(() => {
    // Start camera automatically when component mounts and no preview exists
    if (!preview && !showCamera) {
      startCamera();
    }

    return () => {
      stopCamera();
    };
  }, [preview, showCamera, startCamera, stopCamera]);

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      
      // Use video's natural dimensions if available, fallback to current dimensions
      const width = video.videoWidth || video.width || 640;
      const height = video.videoHeight || video.height || 480;
      
      if (width > 0 && height > 0) {
        canvas.width = width;
        canvas.height = height;
        
        if (context) {
          try {
            context.drawImage(video, 0, 0, width, height);
            const imageData = canvas.toDataURL('image/jpeg', 0.8);
            setPreview(imageData);
            updateData('profilePic', imageData);
            stopCamera();
          } catch (error) {
            console.error('Error capturing photo:', error);
            setCameraError('Failed to capture photo. Please try again.');
          }
        }
      } else {
        setCameraError('Video stream not ready. Please wait a moment and try again.');
      }
    }
  };

  const handleRetake = () => {
    setPreview('');
    updateData('profilePic', '');
    setCameraError(null);
    // Reset and restart camera cleanly without flicker
    stopCamera();
    setShowCamera(true);
    requestAnimationFrame(() => {
      startCamera();
    });
  };

  return (
    <div className={styles.step}>
      <div className={styles.stepIndicator}>Step 2 of 5</div>
      
      <div className={styles.formGroup}>
        <label>Profile Picture (Live Selfie Only)</label>
        
        {cameraError && !preview && (
          <div className={styles.uploadBox} style={{ borderColor: '#ef4444', background: '#fff5f5' }}>
            <div style={{ color: '#ef4444', marginBottom: '10px' }}>⚠️ Camera Error</div>
            <p style={{ color: '#ef4444', marginBottom: '15px' }}>{cameraError}</p>
            <div style={{ marginBottom: '15px', fontSize: '12px', color: '#666' }}>
              <p><strong>Troubleshooting:</strong></p>
              <ul style={{ marginLeft: '20px' }}>
                <li>✓ Enable camera permission in browser settings</li>
                <li>✓ Ensure no other app is using the camera</li>
                <li>✓ Try a different browser (Chrome, Firefox, Edge)</li>
                <li>✓ Restart your browser completely</li>
              </ul>
            </div>
            <button
              type="button"
              className={styles.btnRetake}
              onClick={(e) => {
                e.preventDefault();
                setCameraError(null);
                startCamera();
              }}
            >
              🔄 Try Again
            </button>
          </div>
        )}
        
        {showCamera && !cameraError ? (
          <div className={styles.cameraContainer}>
            {(!cameraReady || isStarting) && (
              <div style={{ padding: '12px', textAlign: 'center', background: '#f8f9fa', color: '#666', fontSize: '14px' }}>
                Starting camera...
              </div>
            )}
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline
              muted
              disablePictureInPicture
              controls={false}
              className={styles.videoPreview}
              style={{
                transform: 'scaleX(-1)', // Mirror effect for selfie
                WebkitTransform: 'scaleX(-1)', // For webkit browsers
                msTransform: 'scaleX(-1)', // For IE/Edge
                opacity: cameraReady ? 1 : 0.25,
                filter: cameraReady ? 'none' : 'grayscale(1)',
              } as any}
              onPlay={() => console.log('Video playing')}
              onError={(e) => {
                console.error('Video element error:', e);
              }}
            />
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <div className={styles.cameraButtons}>
              <button 
                type="button" 
                className={styles.btnCapture}
                onClick={capturePhoto}
              >
                📸 Capture Photo
              </button>
              <button 
                type="button" 
                className={styles.btnCancel}
                onClick={stopCamera}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : preview && !cameraError ? (
          <div className={styles.uploadBox}>
            <img src={preview} alt="Profile Preview" className={styles.previewImage} />
            <button 
              type="button" 
              className={styles.btnRetake}
              onClick={handleRetake}
            >
              📷 Retake Photo
            </button>
          </div>
        ) : !cameraError ? (
          <div className={styles.uploadBox}>
            <div className={styles.uploadIcon}>📷</div>
            <p>Live selfie required</p>
            <small style={{color: '#666'}}>Face must be clearly visible</small>
            <button
              type="button"
              className={styles.btnRetake}
              onClick={(e) => {
                e.preventDefault();
                startCamera();
              }}
            >
              Open Camera
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
