import React, { useEffect, useState } from "react";
import { useDate } from "../contexts/dateProvider";
import { Button } from "./ui/button";

interface WelcomeProps {
  handleOpenForm: () => void; // Function prop type for opening the task form
}

const Welcome: React.FC<WelcomeProps> = ({handleOpenForm}) => {
  const { selectedDate } = useDate();
  const currentDate = new Date(); // Get the current date

  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  const dateReadable = selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', options) : currentDate.toLocaleDateString('en-US', options);

  const [isToday, setIsToday] = useState<boolean>(true);

  // Check if the selected date is today
  useEffect(() => {
    const selectedDateObj = selectedDate ? new Date(selectedDate) : currentDate;
    const isSameDate = selectedDateObj.toDateString() === currentDate.toDateString(); // Compare with today's date
    setIsToday(isSameDate);
  }, [selectedDate, currentDate]); // Ensure we react to changes in both selectedDate and currentDate

  return (
    <div className="w-full h-min flex flex-col md:flex-row items-center justify-center md:justify-start py-10 gap-8 md:gap-16">
      <div className="flex flex-row w-full md:w-max justify-start items-center gap-5">
        <div className="fixed text-lg md:text-2xl font-bold w-8 md:w-16 text-center flex flex-col">
          {isToday && <span className="text-primary-yellow text-sm w-full text-center">Today</span>}
          {dateReadable}
        </div>
        <div className="flex flex-col w-max items-start justify-center pl-10 ml-8 md:ml-16">
          <div className={`text-xl md:text-3xl font-bold text-gray-950 dark:text-gray-50 transition-opacity duration-500`}>
            Welcome Back
          </div>
          <div className={`text-sm md:text-2xl font-bold text-gray-400 opacity-80 transition-opacity duration-500`}>
            What are your plans for today?
          </div>
        </div>
      </div>   
      <Button 
      onClick={handleOpenForm}
    className="border bg-transparent w-full md:w-max text-gray-half dark:text-gray-200 border-primary-yellow hover:bg-primary-yellow hover:text-gray-950">
      Add a Task
    </Button>
    </div>
  );
};

export default Welcome;
