import React from 'react'
import LeftAside from '../components/LeftAside'

const Home: React.FC = () => {

    return (
        <div className='w-full h-screen bg-white dark:bg-gray-full overflow-hidden'>
           <LeftAside />
        </div>
    );
  
}

export default Home;