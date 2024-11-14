import React, { useState } from 'react';
import LeftAside from '../components/LeftAside';
import RightAside from '@/components/RightAside';
import TaskForm from '@/components/TaskForm';
import Main from '@/components/Main';
import { FaPen } from "react-icons/fa";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    return (
        <div className='w-full h-screen bg-white dark:bg-gray-full overflow-hidden flex flex-row justify-between'>
           <LeftAside handleOpenForm={handleOpenPopup} />
           <Main handleOpenForm={handleOpenPopup} />
           <RightAside />
           {showPopup && <TaskForm onClose={handleClosePopup} />}
           
           <div
               onClick={handleOpenPopup} 
               className='w-10 h-10 md:hidden fixed bottom-10 cursor-pointer drop-shadow-md right-5 bg-primary-yellow text-white flex justify-center items-center rounded-full'>
               <FaPen size={20} />
           </div>
        </div>
    );
}

export default Home;
