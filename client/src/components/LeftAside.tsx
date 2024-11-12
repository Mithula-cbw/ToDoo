import React from 'react'
import AppLogo from './AppLogo'
import AsideSection from '../components/LeftAsideSection'
import TaskSection from './taskSection'

const LeftAside: React.FC = () => {
  return(
    <div className='fixed w-52 h-full text-white bg-gray-green dark:bg-gray-half'>
        <div className='w-full px-4 pt-4 flex flex-col justify-start items-start'>
            <AppLogo />
            <AsideSection title='Tasks' tooltip='task' ></AsideSection>
            <AsideSection title='Collections' tooltip='collection'></AsideSection>
        </div>
    </div>
  );
}

export default LeftAside;