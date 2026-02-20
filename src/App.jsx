import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './pages/Homepage.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Critical assets to preload
    const assets = [
      '/src/assets/herotooth.webp',
      '/src/assets/footer.webp',
      '/src/assets/teeths.webp',
      '/src/assets/smile.webp'
    ];

    let loadedCount = 0;
    const startTime = Date.now();
    const minLoadingTime = 2000; // Minimum 2s for "premium" feel

    const checkDone = () => {
      loadedCount++;
      if (loadedCount === assets.length) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

        // Wait for remaining minimum time if needed
        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      }
    };

    assets.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = checkDone;
      img.onerror = checkDone; // Don't block forever if one fails
    });
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <Routes key="content">
            <Route path="/" element={<Homepage />} />
          </Routes>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;