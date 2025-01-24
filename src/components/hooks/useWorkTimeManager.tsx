import { useState } from "react";
import { WorkTime } from "@/types/types";
import { isTimeValid } from "@/utils/timeUtils.ts";
import { useRouter } from "next/navigation";


export const useWorkTimeManager = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [timeEntryMode, setTimeEntryMode] = useState<"single" | "multiple">(
    "single"
  );
  const [workTimes, setWorkTimes] = useState<WorkTime[]>([]);
  const [tempDay, setTempDay] = useState<string>("");
  const [tempStart, setTempStart] = useState<string>("");
  const [tempEnd, setTempEnd] = useState<string>("");
  const router = useRouter();

  const goNext = () => {
   
  
    if (currentStep === 1) {
      setCurrentStep(2); 
      setTimeEntryMode("single"); 
      return;
    }
  
    
  
    if (currentStep === 2 && timeEntryMode === "multiple") {
      setCurrentStep(1); 
    }
  };
  

  const goBack = () => {
    if (currentStep === 2) {
      if (timeEntryMode === "multiple") {
        setTempDay("");
        setTempStart("");
        setTempEnd("");
        setTimeEntryMode("single");
      } else {
        setCurrentStep(1);
      }
    }
  };


  const handleAddSingleWorkTime = () => {

    setWorkTimes((prev) => [
        ...prev,
        { day: tempDay, start: tempStart, end: tempEnd },
      ]);
  if (currentStep === 2 && timeEntryMode === "single") {
    setTimeEntryMode("multiple");
    return;
  }

  };
  
  const handleAddNewWorkTime = () => {
    setWorkTimes((prev) => [
      ...prev,
      { day: "Hafta içi", start: "9.00", end: "18.00" },
    ]);
  };

  const handleRemoveWorkTime = (index: number) => {
    setWorkTimes((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateWorkTime = (
    index: number,
    field: keyof WorkTime,
    value: string
  ) => {
    setWorkTimes((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleFinish = () => {
    for (let wt of workTimes) {
      if (!isTimeValid(wt.start, wt.end)) {
        alert(
          `Zaman aralığı geçersiz: ${wt.day} (${wt.start} - ${wt.end}). ` +
          `Bitiş saati, başlangıç saatinden küçük olamaz!`
        );
        return;
      }
    }
    router.push("/home")
  };

  return {
    currentStep,
    selected,
    setSelected,
    timeEntryMode,
    setTimeEntryMode,
    workTimes,
    handleAddSingleWorkTime,
    handleAddNewWorkTime,
    handleRemoveWorkTime,
    handleUpdateWorkTime,
    goNext,
    goBack,
    handleFinish, tempDay,
    tempStart,
    tempEnd,
    setTempDay,
    setTempStart,
    setTempEnd,
  };
};
