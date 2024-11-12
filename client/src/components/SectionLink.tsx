import React from 'react';
import { Link } from 'react-router-dom';

interface SectionLinkProps {
    label: string;
    isActive: boolean;
    onClick: (e: React.MouseEvent) => void; // Accept the event as an argument
  }
  
  const SectionLink: React.FC<SectionLinkProps> = ({ label, isActive, onClick }) => {
    return (
    <div
      className={`w-full px-3 py-1 rounded-sm text-left font-poppins font-light text-sm cursor-pointer ${
        isActive ? 'bg-gray-500 dark:bg-primary-yellow text-white dark:text-black' : 'text-gray-300'
      }`}
      onClick={onClick} // Add the onClick handler to the Link element
    >
      {label}
    </div>
  );
};

export default SectionLink;
