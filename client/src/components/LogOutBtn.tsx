import { toast } from "@/hooks/use-toast";
import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation
import { Button } from "./ui/button";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove auth token from localStorage (if you're storing it there)
    localStorage.removeItem("authToken");

    toast({
      description: "You have been logged out successfully",
      variant: "success", // Choose a variant like "destructive" or "success"
    });

    navigate("/log-in"); // Or use "/home" depending on your app structure
  };

  return (
    <Button
      onClick={handleLogout}
      className="w-full bg-red-500 md:bg-black mb-6 text-white py-2 px-4 rounded-md hover:bg-red-500"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
