import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { useUser } from '@/contexts/userProvider';
import { useNavigate } from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTasks } from "@/contexts/taskProvider";

interface TaskFormProps {
  onClose: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onClose }) => {
  const {user_id} = useUser();
  const { dispatch } = useTasks();
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [priority, setPriority] = useState<string>("Mid");
  const { toast } = useToast()
  const navigate = useNavigate();
  
  const user_id_2 = localStorage.getItem('user_id');

  const token = localStorage.getItem('authToken');
  // Handler for form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const taskData = {
      task: {
      title, 
      body: '',
      due_time: date ? date.toLocaleDateString('en-GB').split('/').reverse().join('-'): "",
      priority,
      status: 'pending',
      user_id: user_id || user_id_2
      }
    };
    const Task = {
      id: 1,
      title,
      status: 'pending',
      due_time: date ? date.toLocaleDateString('en-GB').split('/').reverse().join('-'): "",
      priority
    };
  
    try {
      console.log(taskData);
      const response = await axios.post("/task/create-task", taskData , {
        headers: {
          Authorization: `Bearer ${token}`  // Attach the JWT token to the request headers
        }
      });
      dispatch({ type: "ADD_TASK", payload: Task});
      onClose(); 
      console.log("Task created:", response.data);
      toast({
        variant:"success",
        title: "Task Added successfully",
        description: `Pending for ${taskData.task.due_time}`,
      })
      if(response.status === 401){
        navigate('/log-in');
      }

    } catch (error) {
      console.error("Error adding task:", error);
      onClose();
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `${error}`
      })
      
    }
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center font-poppins bg-black bg-opacity-70">
      <div className="bg-white dark:bg-gray-half p-6 rounded-lg shadow-lg w-[90%] md:w-1/2 max-w-md flex flex-col gap-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="mb-2 w-full mt-1 p-2 text-2xl border font-bold dark:bg-black rounded placeholder:font-bold outline-none focus-within:border-primary-yellow"
            required
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="flex flex-col justify-start items-start gap-8 my-8 px-1 md:px-5">
            <div>
              <label className="font-semibold mr-5 text-gray-300" htmlFor="">
                Date:
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-row justify-start items-center">
              <label className="font-semibold md:mr-5 text-gray-300" htmlFor="">
                Priority:
              </label>
              <RadioGroup
                value={priority}
                onValueChange={setPriority}
                defaultValue="Mid"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="High" id="High" />
                  <Label htmlFor="High">High</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Mid" id="Mid" />
                  <Label htmlFor="Mid">Mid</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Low" id="Low" />
                  <Label htmlFor="Low">Low</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="w-full flex flex-row justify-end items-center gap-2 md:gap-4">
            <button
              type="button"
              className="dark:bg-black text-white py-2 px-4 rounded mt-4"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border border-primary-yellow dark:text-white hover:bg-primary-yellow hover:text-black text-white py-2 px-4 rounded mt-4 mr-2"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
