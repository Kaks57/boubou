
import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <Link 
      to="/" 
      className={`font-extrabold tracking-tighter text-2xl md:text-3xl hover:opacity-90 transition-opacity ${className}`}
    >
      <span className="inline-block animate-slide-down animate-delay-100">E</span>
      <span className="inline-block animate-slide-down animate-delay-200">D</span>
      <span className="inline-block animate-slide-down animate-delay-300">K</span>
      <span className="inline-block ml-2 text-gradient animate-fade-in animate-delay-400">EMPIRE</span>
    </Link>
  );
};
