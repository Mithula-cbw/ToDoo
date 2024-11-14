import React from 'react'
import AppLogo from './AppLogo'
import AsideSection from '../components/LeftAsideSection'
import LogoutButton from './LogOutBtn';

interface leftAsideProps{
  handleOpenForm: () => void;
}

const LeftAside: React.FC<leftAsideProps> = ({handleOpenForm}) => {
  return(
    <div className='hidden md:block w-52 h-full text-white bg-gray-green dark:bg-gray-half'>
        <div className='w-full h-full flex flex-col justify-between items-center'>
          <div className='w-full px-4 pt-4 flex flex-col justify-start items-start'>
              <AppLogo />
              <AsideSection title='Tasks' tooltip='task' handleOpenForm={handleOpenForm}><></></AsideSection>
              <AsideSection title='Collections' tooltip='collection' handleOpenForm={handleOpenForm}></AsideSection>
          </div>
          <div className='w-full px-4'><LogoutButton/></div>
        </div>
    </div>
  );
}

export default LeftAside;