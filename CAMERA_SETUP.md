# Camera Feature - Browser Setup Guide

## Issue
The camera feature requires browser permissions to access your device's camera. If you see an error, follow these steps:

---

## **Chrome/Chromium Setup**

1. **Check Browser Permissions:**
   - Go to **Settings** → **Privacy and Security** → **Site Settings** → **Camera**
   - Find `localhost:3000` in the list
   - Click on it and select **Allow**

2. **If not listed:**
   - Reload the page (`F5` or `Ctrl+R`)
   - Click "Open Camera" button
   - A permission popup should appear
   - Click **Allow**

3. **If still not working:**
   - Clear browser cache: `Ctrl+Shift+Delete`
   - Close all browser windows completely
   - Reopen and try again

---

## **Microsoft Edge Setup**

1. **Check Settings:**
   - Go to **Settings** → **Privacy, search, and services** → **Camera**
   - Turn ON "Camera access"
   - Scroll down to "Camera access" and turn ON "Allow sites to ask for camera access"

2. **Grant Permission:**
   - Navigate to `localhost:3000/profile`
   - Click "Open Camera" button
   - Select **Allow** in the permission popup

3. **If still not working:**
   - Go to **Settings** → **Privacy** → **Camera**
   - Add `localhost:3000` to the allowed list
   - Clear browsing data: `Ctrl+Shift+Delete`
   - Restart browser completely

---

## **Firefox Setup**

1. **Check Permissions:**
   - Go to `about:preferences#privacy`
   - Scroll to "Permissions" → "Camera"
   - Click **Settings** next to Camera
   - Add `http://localhost:3000` and select **Allow**

2. **Grant Permission:**
   - Reload the page
   - Click "Open Camera"
   - Click **Allow** in the popup

---

## **Common Issues & Solutions**

| Issue | Solution |
|-------|----------|
| "Camera is already in use" | Close other apps using camera (Zoom, Teams, etc.) |
| "No camera device found" | Check if camera hardware is connected/enabled in BIOS |
| "Permission denied" | Unplug and replug the camera, restart browser |
| Still not working | Try incognito/private window first, then regular |

---

## **Technical Requirements**

- **HTTPS or localhost** required (not HTTP on remote domains)
- **Modern browser** (Chrome 60+, Edge 79+, Firefox 55+, Safari 14.1+)
- **Camera hardware** must be physically connected
- **No other app** should be using the camera

---

## **Code Changes Made**

✅ Better error messages with specific error types  
✅ Multi-fallback camera constraint strategy  
✅ Improved video stream cleanup  
✅ Enhanced browser compatibility  
✅ Better error handling for Edge/Safari  

---

## **Testing**

1. Open developer tools (`F12`)
2. Go to Console tab
3. Look for messages like:
   - `"Video playback started successfully"` ✓ (working)
   - `"Trying fallback camera constraints..."` (browser compatibility mode)

If you see specific error messages in the console, share them for further debugging.
