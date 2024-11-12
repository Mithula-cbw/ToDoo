import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the interface for the context value
interface DateContextProps {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
}

// Initialize the context
const DateContext = createContext<DateContextProps | undefined>(undefined);

// Provider component
const DateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </DateContext.Provider>
  );
};

// Custom hook to use the DateContext
const useDate = (): DateContextProps => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useDate must be used within a DateProvider");
  }
  return context;
};

export { DateProvider, useDate };
