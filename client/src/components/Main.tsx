import React from 'react'
import Welcome from './Welcome';

interface mainProps{
    handleOpenForm : ()=> void;
}


const Main: React.FC<mainProps> = ({ handleOpenForm }) => {
    return(
        <div className=' h-full px-12'>
                <Welcome handleOpenForm={handleOpenForm}/>
        </div>
    );
  
}

export default Main;