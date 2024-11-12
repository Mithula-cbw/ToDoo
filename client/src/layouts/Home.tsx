import React from 'react'
import LeftAside from '../components/LeftAside'
import RightAside from '@/components/RightAside';

interface homeProps{
    children: React.ReactNode;
}


const Home: React.FC<homeProps> = ( {children} ) => {

    return (
        <div className='w-full h-screen bg-white dark:bg-gray-full overflow-hidden'>
           <LeftAside />
           {children}
           <RightAside></RightAside>
        </div>
    );
  
}

export default Home;