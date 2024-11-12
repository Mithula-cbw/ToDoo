import React from 'react'
import Welcome from './Welcome';

interface mainProps{
   
}


const Main: React.FC<mainProps> = ({  }) => {
    return(
        <div className='ml-52 mr-[320px] w-full h-full px-12'>
                <Welcome /> 
        </div>
    );
  
}

export default Main;