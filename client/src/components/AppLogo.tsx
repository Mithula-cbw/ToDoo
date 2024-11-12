import React from 'react'

const AppLogo: React.FC = () => {
  return (
    <div className="w-full h-[100] mb-12">
    <div className='w-full h-full flex flex-row gap-2 items-center'>
        <div className="w-8 h-8">
          <img src="public/logo.png" alt=" " className="w-full h-full object-contain" />
        </div>
        <h2 className="text-2xl font-bold text-center font-poppins">
          To<span>Doo</span>
        </h2>
    </div>
  </div>
  
  );
}

export default AppLogo;