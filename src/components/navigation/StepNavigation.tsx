import React from "react";
import Button from "@/components/ui/Button";

export const StepNavigation = ({
  currentStep,
  timeEntryMode,
  onNext,
  onBack,
  onFinish,
  disableNext,onAdd
}: {
  currentStep: number;
  timeEntryMode: "single" | "multiple";
  onNext: () => void;
  onBack: () => void;
  onFinish: () => void;
  disableNext: boolean; onAdd: () => void;
}) => (
  <div className="w-full max-w-md flex  items-center">
  <div className="flex justify-between items-center w-full  my-8 px-4 absolute z-25 right-0 bottom-0">
    {currentStep === 2  ? (
      <Button variant="secondary" onClick={onBack} iconLeft={
        <img
          src="/assets/icons/back.svg"
          alt="back-icon"
          className="h-5 "
        />
      }>
        Geri
      </Button>
    ) : (
      <div />
    )}
    {currentStep === 1 && (
      <Button onClick={onNext} variant="success" disabled={disableNext} iconRight={
        <img
          src="/assets/icons/right.svg"
          alt="right-icon"
          className="h-5"
        />
      }>
        İleri
      </Button>
    )}
    {currentStep === 2 && timeEntryMode === "single" && (
      <Button onClick={onAdd} variant="success" disabled={disableNext} iconRight={
        <img
          src="/assets/icons/right.svg"
          alt="right-icon"
          className="h-5"
        />
      }>
        İleri
      </Button>
    )}
    {currentStep === 2 && timeEntryMode === "multiple" && (
      <Button onClick={onFinish} variant="success" iconRight={
        <img
          src="/assets/icons/right.svg"
          alt="right-icon"
          className="h-5"
        />
      }>
        Bitti
      </Button>
    )}
  </div>
  </div>
);
