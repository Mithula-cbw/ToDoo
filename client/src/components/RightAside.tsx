import React from "react";
import CalendarCom from "./Calendar";

const RightAside: React.FC = () => {
  return (
    <div className="w-[320px] h-full bg-gray-green dark:bg-gray-half flex flex-col items-center pt-10">
      <CalendarCom></CalendarCom>
    </div>
  );
};

export default RightAside;
