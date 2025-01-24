"use client";

import React, { useState } from "react";
import DistrictSelector from "@/components/section/DistrictSelector";
import SingleWorkTimeEntry from "@/components/section/SingleWorkTimeEntry";
import Button from "@/components/ui/Button";
import { StepNavigation } from "@/components/navigation/StepNavigation";
import { useWorkTimeManager } from "@/components/hooks/useWorkTimeManager";
import MultipleWorkTimeEntry from "@/components/section/MultipleWorkTimeEntry";

export default function HomePage() {
  const {
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
  } = useWorkTimeManager();
 

  return (
    <main className=" body-bg min-h-screen w-full flex flex-col items-center justify-start px-2 relative">
     
  
        <div className="mt-8 mb-4 flex items-center justify-center">
          <img src="/assets/images/logo.png" alt="Logo" className="h-50" />
        </div>

        <div className="w-full max-w-md flex flex-col items-center">
          {currentStep === 1 && (
            <div className="text-center py-4 w-full">
              <p className="text-white mt-2 text-[16px] leading-[20px]">
                Lütfen hizmet verdiğiniz ilçe veya ilçeleri seçiniz.
              </p>
              <DistrictSelector selected={selected} setSelected={setSelected} />
            </div>
          )}

        
          {currentStep === 2 && (
            <div className="text-center py-4 w-full">
              <p className="text-white mt-2 text-[16px] leading-[20px] mb-6">
                Lütfen çalışma saatlerinizi girin. Çalışma saatlerinizi hesap
                oluşturduktan sonra detaylı bir şekilde düzenleyebilirsiniz.
              </p>
              {timeEntryMode === "single" ? (
                <SingleWorkTimeEntry tempDay={tempDay}
                  tempStart={tempStart}
                  tempEnd={tempEnd}
                  setTempDay={setTempDay}
                  setTempStart={setTempStart}
                  setTempEnd={setTempEnd}

                />
              ) : (
                <MultipleWorkTimeEntry
                  workTimes={workTimes}
                  onAddNew={handleAddNewWorkTime}
                  onRemove={handleRemoveWorkTime}
                  onUpdate={handleUpdateWorkTime}
                />

              )}
            </div>
          )}
        </div>

  
        <StepNavigation
          currentStep={currentStep}
          timeEntryMode={timeEntryMode}
          onNext={goNext}
          onBack={goBack}
          onFinish={handleFinish}
          onAdd={handleAddSingleWorkTime}
          disableNext={
            (currentStep === 1 && selected.length === 0) ||
            (currentStep === 2 &&
              timeEntryMode === "single" &&
              (!tempDay || !tempStart || !tempEnd)) ||
            (currentStep === 2 &&
              timeEntryMode === "multiple" &&
              workTimes.some((wt) => !wt.day || !wt.start || !wt.end))
          }
        />
     

    </main>
  );
}
