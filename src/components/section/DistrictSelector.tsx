// components/DistrictSelector.tsx
import React, { useState, useRef, useEffect } from "react";
import { ALL_DISTRICTS } from "@/data/dayHourData";



const DistrictSelector = ({
  setSelected,selected
}:any) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredDistricts = ALL_DISTRICTS.filter((d) =>
    d.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggleDistrict = (district: string) => {
    setSelected((prev:any) =>
      prev.includes(district) ? prev.filter((d:any) => d !== district) : [...prev, district]
    );
  };

  return (
 

            <div className="mt-6 w-full relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 flex justify-between items-center text-sm text-[#737373] leading-5 text-left"
              >
                {selected.length > 0
                  ? `${selected.length} ilçe seçildi`
                  : "İlçeler"}
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="w-full bg-white border border-gray-300 rounded-md mt-1 z-50 absolute">
                 
                  <div className="p-2 border-b border-gray-200 flex items-center space-x-2">
                    <img
                      src="/assets/icons/search.svg"
                      alt="right-icon"
                      className="h-5"
                    />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="ARA"
                      className="text-sm w-full focus:outline-none"
                    />
                  </div>
                
                  <div className="max-h-32 overflow-y-auto p-2">
                    {filteredDistricts.map((dist, index) => {
                      const isChecked = selected.includes(dist);
                      return (
                        <label
                          key={dist + index}
                          className="flex items-center space-x-2 text-sm mb-2 cursor-pointer text-[#262527]"
                        >
                          <input
                            type="checkbox"
                            className="h-5 w-5 accent-green-600 border border-[#8D8D8D] rounded-[4px]"
                            checked={isChecked}
                            onChange={() => handleToggleDistrict(dist)}
                          />
                          <span>{dist}</span>
                          
                        </label>
                      );
                    })}
                    {filteredDistricts.length === 0 && (
                      <p className="text-sm text-gray-500">Sonuç bulunamadı</p>
                    )}
                  </div>
                </div>
              )}
            </div>
       
  );
};

export default DistrictSelector;
