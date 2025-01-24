import React, { useRef, useState } from "react";
import { MultipleWorkTimeEntryProps, WorkTime } from "@/types/types";
import { DAYS, TIME_SLOTS } from "@/data/dayHourData";
import Button from "../ui/Button";


const MultipleWorkTimeEntry: React.FC<MultipleWorkTimeEntryProps> = ({
  workTimes,
  onAddNew,
  onRemove,
  onUpdate,
}) => {
  const [openDropdown, setOpenDropdown] = useState<{
    type: "day" | "start" | "end";
    index: number;
  } | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<"down" | "up">("down");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (
    type: "day" | "start" | "end",
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const buttonRect = (event.target as HTMLButtonElement).getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (buttonRect.bottom + 250 > viewportHeight) {
      setDropdownPosition("up");
    } else {
      setDropdownPosition("down");
    }

    setOpenDropdown((prev) =>
      prev?.type === type && prev.index === index ? null : { type, index }
    );
  };

  const filteredDays = DAYS.filter((day) =>
    day.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="text-center w-full">
        <div className="space-y-3 mb-2">
          {workTimes.map((wt, index) => (
            <div key={index} className="flex items-center gap-1">
            
              <div className="relative w-[40%]">

                <button
                  type="button"
                  onClick={(e) => toggleDropdown("day", index, e)}


                  className="w-full bg-white border border-gray-300 rounded-md px-2 py-3 flex justify-between items-center text-sm text-[#737373] leading-5 text-left"
                >
                  <div className="flex items-center gap-1">

                    <img
                      src="/assets/icons/delete.svg"
                      alt="Logo"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemove(index);
                      }}
                    />
                    <span className="truncate">{wt.day ? wt.day : "Gün"}</span>
                  </div>
                  <img
                    src={`/assets/icons/${openDropdown?.type === "day" && openDropdown?.index === index
                        ? "caret_up"
                        : "caret_down"
                      }.svg`}
                    alt="Caret"
                  />
                </button>
                {openDropdown?.type === "day" && openDropdown?.index === index && (
                  <div
                    ref={dropdownRef}
                    className={`absolute z-50 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto p-1 w-full ${dropdownPosition === "up" ? "bottom-full mb-1" : "top-full mt-1"
                      }`}
                  >

                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Ara"
                      className="w-full px-3 py-2 text-[#737373] border-0 border-b border-b-[#E6E6E6] rounded-b-[8px] focus:outline-none mb-1"
                    />
                    {filteredDays.map((day) => (
                      <div
                        key={day}
                        onClick={() => {
                          onUpdate(index, "day", day);

                          setSearchTerm("");
                        }}
                        className={`
                        px-2 py-2 flex align-center justify-between
                        cursor-pointer text-sm leading-5 text-left
                        ${wt.day === day
                            ? "bg-[#DCFFEF] border border-[#07B464] rounded-[8px] text-[#1A1A1A] font-medium"
                            : "text-[#484848] hover:bg-gray-50"
                          }
                      `}
                      >
                        {day}
                        {wt.day === day && (
                          <img
                            src="/assets/icons/selected.svg"
                            alt="Selected Icon"
                          />
                        )}
                      </div>
                    ))}
                    {filteredDays.length === 0 && (
                      <div className="px-2 py-2 text-xs text-gray-400">Sonuç yok</div>
                    )}
                  </div>
                )}
              </div>


              <div className="relative w-[30%]">
                <button
                  type="button"
                  className="w-full bg-white border border-gray-300 rounded-md px-2 py-3 flex justify-between items-center text-sm text-[#737373] leading-5 text-left"
                  onClick={(e) => toggleDropdown("start", index, e)}
                >
                  <span className="truncate">{wt.start || "Başlangıç"}</span>
                  <img
                    src={`/assets/icons/${openDropdown?.type === "start" &&
                        openDropdown?.index === index
                        ? "caret_up"
                        : "caret_down"
                      }.svg`}
                    alt="Caret"
                  />
                </button>
                {openDropdown?.type === "start" &&
                  openDropdown?.index === index && (
                    <div
                      ref={dropdownRef}
                      className={`absolute z-50 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto p-1 w-full ${dropdownPosition === "up" ? "bottom-full mb-1" : "top-full mt-1"
                        }`}
                    >
                      {TIME_SLOTS.map((slot) => (
                        <div
                          key={slot}
                          onClick={() => {
                            onUpdate(index, "start", slot);

                          }}
                          className={`
                          px-2 py-2 flex align-center justify-between
                          cursor-pointer text-sm leading-5 text-left
                          ${wt.start === slot
                              ? "bg-[#DCFFEF] border border-[#07B464] rounded-[8px] text-[#1A1A1A] font-medium"
                              : "text-[#484848] hover:bg-gray-50"
                            }
                        `}
                        >
                          {slot}
                          {wt.start === slot && (
                            <img
                              src="/assets/icons/selected.svg"
                              alt="Selected Icon"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
              </div>


              <div className="relative w-[30%]">
                <button
                  type="button"
                  className="w-full bg-white border border-gray-300 rounded-md px-2 py-3 flex justify-between items-center text-sm text-[#737373] leading-5 text-left"
                  onClick={(e) => toggleDropdown("end", index, e)}
                >
                  <span className="truncate">{wt.end || "Bitiş"}</span>
                  <img
                    src={`/assets/icons/${openDropdown?.type === "end" && openDropdown?.index === index
                        ? "caret_up"
                        : "caret_down"
                      }.svg`}
                    alt="Caret"
                  />
                </button>
                {openDropdown?.type === "end" && openDropdown?.index === index && (
                  <div
                    ref={dropdownRef}
                    className={`absolute z-50 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto p-1 w-full ${dropdownPosition === "up" ? "bottom-full mb-1" : "top-full mt-1"
                      }`}
                  >
                    {TIME_SLOTS.map((slot) => (
                      <div
                        key={slot}
                        onClick={() => {
                          onUpdate(index, "end", slot);

                        }}
                        className={`
                        px-2 py-2 flex align-center justify-between
                        cursor-pointer text-sm leading-5 text-left
                        ${wt.end === slot
                            ? "bg-[#DCFFEF] border border-[#07B464] rounded-[8px] text-[#1A1A1A] font-medium"
                            : "text-[#484848] hover:bg-gray-50"
                          }
                      `}
                      >
                        {slot}
                        {wt.end === slot && (
                          <img
                            src="/assets/icons/selected.svg"
                            alt="Selected Icon"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>


      </div>

      <Button
        onClick={onAddNew}
        disabled={workTimes.length >= 4
        }
        variant="custom"
        size="md"
        className="float-right mb-4"
      >
        Yeni Ekle
      </Button>
    </>
  );
};

export default MultipleWorkTimeEntry;
