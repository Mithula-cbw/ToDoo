import React, { useEffect } from "react";
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";
import TaskCard from './TaskCard';
import { useTasks } from "@/contexts/taskProvider"; // Import the useTasks hook

const MainContent: React.FC = () => {
  const { tasks, dispatch } = useTasks(); // Access tasks and dispatch from context
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/task/1");
        if (Array.isArray(response.data.tasks)) {
          dispatch({ type: "SET_TASKS", payload: response.data.tasks });
        } else {
          setError("Unexpected data format");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch tasks");
        setLoading(false);
      }
    };

    fetchTasks();
  }, [dispatch]); // We only need to call dispatch here

  const deleteTask = (taskId: number) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-row justify-center items-start">
      <ScrollArea className="h-[450px] w-full max-w-[600px] rounded-md border md:p-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              date={task.due_time}
              priority={task.priority}
              onDelete={() => deleteTask(task.id)} // Pass delete function as prop
            />
          ))
        ) : (
          <div>No tasks available</div>
        )}
      </ScrollArea>
    </div>
  );
};

export default MainContent;
