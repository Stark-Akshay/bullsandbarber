import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/Home.module.css'
import { Button, Card, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const InstallButton = () => {
  const [showButton, setShowButton] = useState(false);
  const deferredPrompt = useRef(null);

  useEffect(() => {
    // Check if the browser supports PWA and if the app is not already installed
    if (window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone ||
        document.referrer.includes('android-app://')) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }

    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      // Save the event for later use
      deferredPrompt.current = event;
      setShowButton(true);
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt.current) {
      // Show the install prompt
      deferredPrompt.current.prompt();
      // Wait for the user to make a choice
      deferredPrompt.current.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        // Clear the deferred prompt
        deferredPrompt.current = null;
        setShowButton(false);
      });
    }
  };

  return (
    <>
    <div className={styles.flexo}>
    {showButton && (
        <Button variant='contained' onClick={handleInstallClick} startIcon={<DownloadIcon />} sx={{mt:3}}>Download the app</Button>
      )}
    </div>
    </>
  );
};

export default InstallButton;
