import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define types for the task and actions
type Task = {
  id: number;
  title: string;
  due_time: string;
  priority: string;
};

type Action =
  | { type: "SET_TASKS"; payload: Task[] }
  | { type: "ADD_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: number };

const taskReducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;
    case "ADD_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

// Create the context
const TaskContext = createContext<{
  tasks: Task[];
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// Create a provider to wrap around your app
export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use task context
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
