import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";

interface taskCardProps {
  taskId: number;
  title: string;
  date: string;
  priority: "high" | "medium" | "low" | "";
  taskStatus: string;
  onDelete: () => void;
  editTask: (taskId: number, task_status: string) => void;
}

const TaskCard: React.FC<taskCardProps> = ({
  taskId,
  title,
  date,
  editTask,
  priority,
  taskStatus,
  onDelete,
}) => {
  if (priority === "") {
    priority = "medium";
  }

  const formattedDate = new Date(date);

  const priorityColor = {
    high: "text-orange-500",
    medium: "text-orange-300",
    low: "text-green-100",
  };

  const [status, setStatus] = useState<string>(taskStatus); // Set initial status based on taskStatus prop
  const { toast } = useToast();

  useEffect(() => {
    setStatus(taskStatus); // Update status when taskStatus prop changes
  }, [taskStatus]);

  const handleStatusChange = () => {
    setStatus((prevStatus) => {
      const newStatus = prevStatus === "completed" ? "pending" : "completed"; // Toggle between "completed" and "pending"

      // Call the editTask function with the updated status
      editTask(taskId, newStatus);

      // Return the new status for the state update
      return newStatus;
    });
  };

  return (
    <div className="mb-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="w-full h-full flex flex-row gap-5 justify-between items-center">
              <div className="w-full h-full flex flex-row gap-5 justify-start items-center">
                <button
                  className={`w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-primary-yellow ${
                    status === "completed" ? "bg-primary-yellow" : "bg-transparent"
                  }`}
                  onClick={handleStatusChange}
                ></button>
                <div className="flex flex-col md:gap-1">
                  <div
                    className={`font-medium font-poppins text-sm md:text-lg w-full md:h-6 dark:bg-gray-half rounded-md ${
                      status === "pending" ? "" : "text-decoration: line-through text-gray-500"
                    }`}
                  >
                    {title.slice(0, 1).toUpperCase() + title.slice(1)}
                  </div>
                  <div className="text-xs text-gray-500">{formattedDate.toLocaleDateString('en-GB').split('/').reverse().join('-')}</div>
                </div>
              </div>
              <div className={`px-6 font-light ${priorityColor[priority]}`}>
                {priority}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-full flex flex-row justify-end items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button onClick={onDelete} className="bg-transparent p-1 text-red-600">
                      <FaTrash size={20} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>delete task</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default TaskCard;
