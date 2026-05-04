import React, { useState } from 'react';

// Using the raw GitHub link as images directly from blob pages don't work in img src tags usually.
const LOGO_URL = "https://raw.githubusercontent.com/CColladoR/apa/main/logo_apa.png";

export const Logo: React.FC<{ className?: string }> = ({ className = "h-16" }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className={`flex items-center text-xl font-bold font-brand text-teal-700 ${className}`}>
        APA Myanimalsm
      </span>
    );
  }

  return (
    <img 
      src={LOGO_URL} 
      alt="APA Myanimalsm Logo" 
      className={`object-contain ${className}`}
      onError={() => setHasError(true)}
    />
  );
};