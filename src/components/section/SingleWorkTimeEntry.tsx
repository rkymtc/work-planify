import React, { useState, useEffect } from "react";
import { DAYS, TIME_SLOTS } from "@/data/dayHourData";
import { SingleWorkTimeEntryProps } from "@/types/types";


const SingleWorkTimeEntry: React.FC<SingleWorkTimeEntryProps> = ({
 
  tempDay,
  tempStart,
  tempEnd,
  setTempDay,
  setTempStart,
  setTempEnd,
}) => {
  const [daySearch, setDaySearch] = useState<string>("");
  const [isDayOpen, setIsDayOpen] = useState<boolean>(false);
  const [isStartOpen, setIsStartOpen] = useState<boolean>(false);
  const [isEndOpen, setIsEndOpen] = useState<boolean>(false);

  const handleSelect = (
    value: string,
    setter: (val: string) => void,
    checkCompletion: boolean = false
  ) => {
    setter(value);
 
  
  }
  
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-1 w-full">
        {/* Gün Seçimi */}
        <div className="w-[40%] relative">
          <button
            type="button"
            onClick={() => setIsDayOpen(!isDayOpen)}
            className="w-full bg-white border border-gray-300 rounded-md px-2 py-3 flex justify-between items-center text-sm text-[#737373] leading-5 text-left"
          >
            <span className="block truncate">{tempDay || "Gün"}</span>
            <img
              src={`/assets/icons/${isDayOpen ? "caret_up" : "caret_down"}.svg`}
              alt="caret-icon"
            />
          </button>
          {isDayOpen && (
            <div className="w-full bg-white rounded-lg mt-1 absolute z-50 shadow-lg max-h-60 overflow-y-auto">
              <div className="p-2">
                <input
                  type="text"
                  value={daySearch}
                  onChange={(e) => setDaySearch(e.target.value)}
                  placeholder="Ara"
                  className="w-full px-3 py-2 text-[#737373] border-0 border-b border-b-[#E6E6E6] focus:outline-none"
                />
              </div>
              <div className="p-1">
                {DAYS.filter((day) =>
                  day.toLowerCase().includes(daySearch.toLowerCase())
                ).map((day) => (
                  <div
                    key={day}
                    onClick={() => handleSelect(day, setTempDay, true)}
                    className={`px-2 py-2 flex align-center justify-between cursor-pointer text-sm leading-5 text-left ${
                      tempDay === day
                        ? "bg-[#DCFFEF] border border-[#07B464] rounded-[8px] text-[#1A1A1A] font-medium"
                        : "text-[#484848] hover:bg-gray-50"
                    }`}
                  >
                    {day}
                    {tempDay === day && (
                      <img
                        src="/assets/icons/selected.svg"
                        alt="selected-icon"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Saat Seçimleri */}
        <div className="flex-1 flex gap-1">
          {/* Başlangıç */}
          <div className="flex-1 relative">
            <button
              type="button"
              onClick={() => setIsStartOpen(!isStartOpen)}
              className="w-full bg-white border border-gray-300 rounded-md px-2 py-3 flex justify-between items-center text-sm text-[#737373] leading-5 text-left"
            >
              <span className="block truncate">{tempStart || "Başlangıç"}</span>
              <img
                src={`/assets/icons/${
                  isStartOpen ? "caret_up" : "caret_down"
                }.svg`}
                alt="caret-icon"
              />
            </button>
            {isStartOpen && (
              <div className="w-full bg-white rounded-lg mt-1 absolute z-50 shadow-lg max-h-60 overflow-y-auto p-1">
                {TIME_SLOTS.map((time) => (
                  <div
                    key={time}
                    onClick={() => handleSelect(time, setTempStart, true)}
                    className={`px-2 py-2 flex align-center justify-between cursor-pointer text-sm leading-5 text-left ${
                      tempStart === time
                        ? "bg-[#DCFFEF] border border-[#07B464] rounded-[8px] text-[#1A1A1A] font-medium"
                        : "text-[#484848] hover:bg-gray-50"
                    }`}
                  >
                    {time}
                    {tempStart === time && (
                      <img
                        src="/assets/icons/selected.svg"
                        alt="selected-icon"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bitiş */}
          <div className="flex-1 relative">
            <button
              type="button"
              onClick={() => setIsEndOpen(!isEndOpen)}
              className="w-full bg-white border border-gray-300 rounded-md px-2 py-3 flex justify-between items-center text-sm text-[#737373] leading-5 text-left"
            >
              <span className="block truncate">{tempEnd || "Bitiş"}</span>
              <img
                src={`/assets/icons/${isEndOpen ? "caret_up" : "caret_down"}.svg`}
                alt="caret-icon"
              />
            </button>
            {isEndOpen && (
              <div className="w-full bg-white rounded-lg mt-1 absolute z-50 shadow-lg max-h-60 overflow-y-auto p-1">
                {TIME_SLOTS.map((time) => (
                  <div
                    key={time}
                    onClick={() => handleSelect(time, setTempEnd, true)}
                    className={`px-2 py-2 flex align-center justify-between cursor-pointer text-sm leading-5 text-left ${
                      tempEnd === time
                        ? "bg-[#DCFFEF] border border-[#07B464] rounded-[8px] text-[#1A1A1A] font-medium"
                        : "text-[#484848] hover:bg-gray-50"
                    }`}
                  >
                    {time}
                    {tempEnd === time && (
                      <img
                        src="/assets/icons/selected.svg"
                        alt="selected-icon"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWorkTimeEntry;
