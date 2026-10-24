import React from 'react';

interface OrgLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const OrgLogo: React.FC<OrgLogoProps> = ({ className = '', size = 'md' }) => {
  // Exact original official logo uploaded by the user with zero modifications
  const logoSrc = '/assets/aistudio/file_000000004b20820a8700d1e6274ea214_0d030d75.png';

  const sizeClasses = {
    sm: 'h-12 w-12 sm:h-14 sm:w-14',
    md: 'h-16 w-16 sm:h-20 sm:w-20',
    lg: 'h-24 w-24 sm:h-28 sm:w-28',
    hero: 'h-32 w-32 sm:h-44 sm:w-44 md:h-52 md:w-52'
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <div className="relative inline-flex items-center justify-center p-2 rounded-3xl bg-white shadow-md shadow-sky-950/5 border border-sky-100 transition-transform duration-300 hover:scale-[1.02]">
        <img
          src={logoSrc}
          alt="شعار منظمة أبو الأيتام لكفالة ورعاية الأيتام"
          className={`${sizeClasses[size]} object-contain`}
          style={{ imageRendering: 'auto' }}
          loading="eager"
        />
      </div>
    </div>
  );
};
