import React from 'react';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


interface AsideSectionProps {
  title: string;
  children?: React.ReactNode;
  tooltip: string;
}

const AsideSection: React.FC<AsideSectionProps> = ({ tooltip, title, children }) => {
  return (
    <div className='w-full h-max mb-4'>
      <div className="Section-header w-full h-10 px-2 py-3 font-poppins border-b border-yellow-500 flex flex-row justify-between items-center">
        <h2>{title}</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button className='w-3 h-3 p-3 bg-primary-yellow drop-shadow-sm'>+</Button>
            </TooltipTrigger>
              <TooltipContent>
                <p>Add new {tooltip}</p>
              </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {children? <></>: <p className='text-right p-1 text-[10px] font-normal text-gray-400'>-No {title} yet-</p>}
      <div className='mt-2 w-full'>{children}</div>
    </div>
  );
};

export default AsideSection;
