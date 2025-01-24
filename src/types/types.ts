

export  interface WorkTime  {
  day: string;
  start: string;
  end: string;
};

export interface ModalProps {
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger" | "custom" | "customBorder";
  size?: "sm" | "md" | "lg";
  className?: string;
}
export interface StepProps  {
  stepNumber: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
};

export interface  StepsProps  {
  currentStep: number;  
  steps: {
    title: string;
  }[];
};

export interface StatsSectionProps {
  openModal: () => void;
}

export interface SingleWorkTimeEntryProps {
  tempDay: string;
  tempStart: string;
  tempEnd: string;
  setTempDay: (value: string) => void;
  setTempStart: (value: string) => void;
  setTempEnd: (value: string) => void;
}
export interface MultipleWorkTimeEntryProps {
  workTimes: WorkTime[];
  onAddNew: () => void; 
  onRemove: (index: number) => void; 
  onUpdate: (index: number, field: keyof WorkTime, value: string) => void; 
}
export interface MainContentProps {
    referenceEarnings: number;
    selectedDate: string;
    handleDateChange: (date: string) => void;
}
