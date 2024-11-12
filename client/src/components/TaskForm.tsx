import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface TaskFormProps {
  onClose: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onClose }) => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [priority, setPriority] = useState<string>("Mid");

  // Handler for form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const taskData = {
      title,
      due_time: date ? date.toISOString() : "",
      priority,
    };

    try {
      const response = await axios.post("/api/tasks", taskData);
      console.log("Task added successfully:", response.data);
      onClose(); // Close form after submission
    } catch (error) {
      console.error("Error adding task:", error);
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

          <div className="flex flex-col justify-start items-start gap-8 my-8 px-5">
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
              <label className="font-semibold mr-5 text-gray-300" htmlFor="">
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

          <div className="w-full flex flex-row justify-end items-center gap-4">
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
