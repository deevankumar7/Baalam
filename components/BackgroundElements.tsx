
import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft Brand Tints */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-orange-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-blue-100 rounded-full blur-[100px]" />
      </div>
      
      {/* Academic Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
};

export default BackgroundElements;