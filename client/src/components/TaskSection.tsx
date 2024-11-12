import React, { useState } from 'react';
import SectionLink from './SectionLink';
import { useDate } from '../contexts/dateProvider';

const TaskSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('today'); // Track the active tab
  const { selectedDate, setSelectedDate } = useDate(); // Destructure from DateContext

  const day = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(day.getDate() + 1); // Set tomorrow's date

  const startOfWeek = new Date();
  startOfWeek.setDate(day.getDate() - day.getDay()); // Set the start of the current week (Sunday)

  const handleTabChange = (tab: string, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default anchor behavior (URL change)
    setActiveTab(tab); // Set the active tab
    if (tab === 'today') {
      setSelectedDate(day); // Set to today
    } else if (tab === 'tomorrow') {
      setSelectedDate(tomorrow); // Set to tomorrow
    } else if (tab === 'this-week') {
      setSelectedDate(startOfWeek); // Set to start of the week
    } else if (tab === 'all') {
      setSelectedDate(undefined); // Reset the selected date
    }
  };

  return (
    <div className="w-full flex flex-col gap-1 mt-1">
      {/* Button for Today */}
      <SectionLink
        label="Today"
        isActive={activeTab === 'today'}
        onClick={(e) => handleTabChange('today', e)} // Prevent URL change and set the active tab
      />
      {/* Button for Tomorrow */}
      <SectionLink
        label="Tomorrow"
        isActive={activeTab === 'tomorrow'}
        onClick={(e) => handleTabChange('tomorrow', e)} // Prevent URL change and set the active tab
      />
      {/* Button for This Week */}
      <SectionLink
        label="This Week"
        isActive={activeTab === 'this-week'}
        onClick={(e) => handleTabChange('this-week', e)} // Prevent URL change and set the active tab
      />
      {/* Button for All Tasks */}
      <SectionLink
        label="All Tasks"
        isActive={activeTab === 'all'}
        onClick={(e) => handleTabChange('all', e)} // Prevent URL change and set the active tab
      />
    </div>
  );
};

export default TaskSection;
