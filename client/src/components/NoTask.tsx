import React from "react";
import { useDate } from "@/contexts/dateProvider";

interface NoTaskProps {}

const NoTask: React.FC<NoTaskProps> = () => {
  const { selectedDate } = useDate();
  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-GB').split('/').reverse().join('-')
    : '';

  return (
    <div className="flex flex-col items-center justify-center text-center p-4 mt-4">
      
      <img
        src="/public/empty.png" // Replace with the actual path to your image file
        alt="No Tasks"
        className="w-32 h-32 md:w-52 md:h-52 mb-4 opacity-70"
      />

      {/* Message and formatted date */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Tasks Yet</h2>
      <p className="text-gray-500">You have no tasks scheduled for {formattedDate}.</p>
    </div>
  );
};

export default NoTask;
