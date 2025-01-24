import { StepProps } from "@/types/types";
import React from "react";



const Step: React.FC<StepProps> = ({ stepNumber, title, isActive, isCompleted }) => {
  return (
    <div className="flex items-center">
   
      <div
        className={`
          w-8 h-8 flex items-center justify-center rounded-full 
          border-2 
          ${isCompleted ? "bg-green-500 border-green-500 text-white" : ""}
          ${isActive && !isCompleted ? "bg-blue-500 border-blue-500 text-white" : ""}
          ${!isActive && !isCompleted ? "bg-gray-200 border-gray-300 text-gray-600" : ""}
        `}
      >
        {stepNumber}
      </div>
   
      <div className="ml-2 text-sm font-medium">
        {title}
      </div>
    </div>
  );
};

export default Step;
