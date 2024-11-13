import React from 'react'
import Welcome from './Welcome';
import MainContent from './MainContent';

interface mainProps{
    handleOpenForm : ()=> void;
}


const Main: React.FC<mainProps> = ({ handleOpenForm }) => {
    return(
        <div className='h-full px-12 w-full md:w-max'>
                <Welcome handleOpenForm={handleOpenForm}/>
                <MainContent></MainContent>
        </div>
    );
  
}

export default Main;