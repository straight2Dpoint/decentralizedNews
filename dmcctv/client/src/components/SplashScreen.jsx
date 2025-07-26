import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 500); // Wait for fade out animation to complete
    }, 2000); // Show splash screen for 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient animate-gradient" />
      
      {/* Logo container with animation */}
      <div className={`relative transform ${fadeOut ? 'scale-95' : 'scale-100'} transition-transform duration-500`}>
        <img
          src="/logo512.png"
          alt="DMCCTV"
          className="w-32 h-32 md:w-48 md:h-48 object-contain animate-pulse"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
