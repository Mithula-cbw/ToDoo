import React, { useEffect } from "react";
import { useNavigate  } from 'react-router-dom'; 
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";
import TaskCard from './TaskCard';
import { useTasks } from "@/contexts/taskProvider"; 
import { useDate } from "../contexts/dateProvider";
import { useUser } from "@/contexts/userProvider";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast"
import NoTask from "./NoTask";


const MainContent: React.FC = () => {
  const navigate = useNavigate();
  const { selectedDate } = useDate();
  const formattedDate = selectedDate?.toLocaleDateString('en-GB').split('/').reverse().join('-');
  const { tasks, dispatch } = useTasks(); // Access tasks and dispatch from context
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const { toast } = useToast()
   
  useEffect(() => {
    const fetchTasks = async () => {
      if (!formattedDate) return; // Don't make the API call if no date is selected
  
      const token = localStorage.getItem('authToken');
      const user_id = localStorage.getItem('user_id');
      setLoading(true);
  
      try {
        const response = await axios.get(`/task/${user_id}?date=${formattedDate}`, {
          headers: {
            Authorization: `Bearer ${token}`  // Attach the JWT token to the request headers
          }
        });
  
        console.log(`/task/${user_id}?date=${formattedDate}`);
        
        // Check if the response contains tasks
        if (Array.isArray(response.data.tasks)) {
          setError('');
          dispatch({ type: "SET_TASKS", payload: response.data.tasks });
        } else {
          setError('No data for today');
        }
  
        setLoading(false);
  
      } catch (err : any) {
        setLoading(false);
  
        // If the error is due to unauthorized access, redirect to login
        if (err.response && err.response.status === 401) {
          setError('Unauthorized access - redirecting to login');
          
          // Use navigate() to redirect to the login page
          navigate('/log-in');
        } else {
          setError("Failed to fetch tasks");
          navigate('/log-in');
        }
      }
    };
  
    fetchTasks();  // Call the function to fetch tasks
  
  }, [formattedDate, dispatch]);  // Dependencies to re-run the effect when these values change
  

  const deleteTask = async (taskId: number) => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.delete(`/task/${taskId}`, {
          headers: {
            Authorization: `Bearer ${token}`  // Attach the JWT token to the request headers
          }
    });
      
      if (response.status === 200) {
        dispatch({ type: "DELETE_TASK", payload: taskId });
        toast({
            description: "Task deleted successfully",
          });
      } else {
        toast({
            variant : "destructive",
            description: "Task deleted successfully"
          });
      }
    } catch (error) {
      console.error("Error deleting task:");
    }
  };

  const editTask = async (taskId: number, task_status: string) => {
    const token = localStorage.getItem('authToken');
    try {
      console.log(taskId, task_status);
        const response = await axios.put(`/task/${taskId}?status=${task_status}`, {
            headers: {
                Authorization: `Bearer ${token}`,  // Attach the JWT token to the request headers
            },
        });

        if (response.status === 200) {
            toast({
                description: "Task edited successfully",
            });
        }
    } catch (error) {
        toast({
            variant: "destructive",
            description: "Task edit unsuccessful",
        });
    }
};



  if (error) {
    return <NoTask></NoTask>
  }

  if (loading) {
    return (
        <div className="flex flex-col space-y-3 w-full">
        <Skeleton className="h-80 md:h-[100px] w-full rounded-xl" />
        <Skeleton className="h-80 md:h-[100px]  w-full rounded-xl" />
        <Skeleton className="h-80 md:h-[100px]  w-full rounded-xl" />
        
      </div>
    );
  }
  return (
    <div className="flex flex-row justify-center items-start">
      <ScrollArea className="h-[450px] w-full max-w-[600px] rounded-md border md:p-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              taskId={task.id}
              title={task.title}
              date={task.due_time}
              priority={task.priority}
              status={task.status}
              editTask={editTask}
              onDelete={() => deleteTask(task.id)} // Pass delete function as prop
            />
          ))
        ) : (
          <NoTask></NoTask>
        )}
      </ScrollArea>
    </div>
  );
};

export default MainContent;
