import React from "react";
import Step from "./Step";
import { StepsProps } from "@/types/types";



const Steps: React.FC<StepsProps> = ({ currentStep, steps }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={index} className="flex items-center">
            <Step
              stepNumber={stepNumber}
              title={step.title}
              isActive={isActive}
              isCompleted={isCompleted}
            />
            {index < steps.length - 1 && (
              <div
                className={`
                  hidden md:block w-16 h-[2px] mx-2 
                  ${isCompleted ? "bg-green-500" : "bg-gray-300"}
                `}
              />
            )}
            {index < steps.length - 1 && (
              <div
                className={`
                  block md:hidden w-[2px] h-6 ml-4 
                  ${isCompleted ? "bg-green-500" : "bg-gray-300"}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
