import React from "react";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"  
import { Button } from "./ui/button";
  


interface taskCardProps {
  title:string;
  date: string;
  priority: "high" | "mid" | "low";
  onDelete: ()=> void;
}

const TaskCard:React.FC<taskCardProps> = ({title, date , priority ,onDelete}) => {

    const priorityColor = {
        high: "text-orange-500", 
        mid: "text-orange-300", 
        low: "text-gray-300", 
      };

    const [status, setStatus] = useState<boolean>(false);
    const { toast } = useToast()

    const handleStatusChange = () => {
        setStatus(prevStatus => !prevStatus);

        if(!status){
            toast({
                title: "Well Done!",
                description: `One less task for today!`,
              })
        }
        console.log(status)
      };
      

  return(
    <div className="mb-4">
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <div className="w-full h-full flex flex-row gap-5 justify-between items-center">
                        <div className="w-full h-full flex flex-row gap-5 justify-start items-center">
                            <button className={`w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-primary-yellow ${status ? "bg-primary-yellow" : "bg-transparent"}`}
                            onClick={handleStatusChange}>
                            </button>
                            <div className="flex flex-col md:gap-1">
                                <div className={`font-medium font-poppins text-sm md:text-lg w-full md:h-6 bg-gray-half rounded-md ${!status? "" : "text-decoration: line-through text-gray-500" }`}>
                                    {title.slice(0, 1).toUpperCase() + title.slice(1)}
                                </div>
                                <div className="text-xs text-gray-500">{date}</div>
                            </div>
                        </div>
                        <div className={`px-6 font-light ${priorityColor[priority]}`}>{priority}</div>
                    </div>
                </AccordionTrigger>
                    <AccordionContent>
                       <div className="w-full flex flex-row justify-end items-center">
                       <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                        <Button 
                                        onClick={onDelete}
                                        className="bg-transparent p-1 text-red-600">
                                            <FaTrash size={20} />
                                        </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    delete task
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                            
                       </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  );
}

export default TaskCard;