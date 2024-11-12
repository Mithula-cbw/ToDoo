import React, { useState } from 'react'
import LeftAside from '../components/LeftAside'
import RightAside from '@/components/RightAside';
import TaskForm from '@/components/TaskForm';
import Main from '@/components/Main';


interface homeProps{
    
}


const Home: React.FC<homeProps> = ( ) => {

    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    return (
        <div className='w-full h-screen bg-white dark:bg-gray-full overflow-hidden flex flex-row justify-between'>
           <LeftAside handleOpenForm={handleOpenPopup}/>
           <Main handleOpenForm={handleOpenPopup}></Main>
           <RightAside></RightAside>
           {showPopup && <TaskForm onClose={handleClosePopup}></TaskForm>}
        </div>
    );
  
}

export default Home;