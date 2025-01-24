import React from "react";
import Button from "@/components/ui/Button";
import { MainContentProps } from "@/types/types";


const MainContent: React.FC<MainContentProps> = ({ referenceEarnings, selectedDate, handleDateChange }) => {
    return (
        <>
            <div className="bg-[#105D38] rounded-lg p-3 shadow-md mt-8 text-white">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="text-sm text-gray-200">Referans Gelirleri</div>
                        <div className="text-2xl font-bold">{referenceEarnings.toFixed(2)} TL</div>
                    </div>
                    <div className="relative">
                        <select
                            value={selectedDate}
                            onChange={(e) => handleDateChange(e.target.value)}
                            className="bg-white text-[#757575] p-2 rounded-md focus:outline-none appearance-none pl-8 pr-2 text-[8px]"
                        >
                            <option value="Dün">Dün</option>
                            <option value="Bugün">Bugün</option>
                        </select>
                        <img
                            src="/assets/icons/date.svg"
                            alt="Date"
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none"
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4 gap-5">
                    <div className="text-[14px] text-[#E0E0E0]">
                        Hemen referans vererek ömür boyu düzenli gelir kazan!
                    </div>
                    <Button
                        variant="customBorder"
                        size="sm"
                        iconRight={
                            <img
                                src="/assets/icons/fly.svg"
                                alt="right-icon"
                                className="h-9 w-9"
                            />
                        }
                    >
                        Referans Ver
                    </Button>
                </div>
            </div>

            <div className="shadow-md mt-4">
                <div className="flex gap-2 items-center">
                    <div className="bg-[#105D38] text-white text-sm font-medium p-3 rounded-bl-lg rounded-tl-lg">
                        Aktif
                    </div>
                    <span className="text-sm text-[#0F5332] text-[10px] text-normal">
                        Her şey yolunda, aktif durumdasınız ve iş almaya hazırsınız!
                    </span>
                </div>
            </div>

            <div className="flex mt-4 gap-4 w-full">
                <button className="w-1/3 bg-yellow-100 text-yellow-600 py-3 px-3 rounded-lg flex items-center justify-between">
                    <span className="text-[12px]">İşe Ara Ver</span>
                    <img src="/assets/icons/mdi_pause.svg" alt="Duraklat" className="w-5 h-5" />
                </button>
                <div className="flex-1 bg-green-50 text-green-600 py-3 px-3 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-[12px] font-medium">Toplam Kazancım</span> 
                        <img src="/assets/icons/money.svg" alt="Para" className="w-6 h-6" />
                    </div>
                    <span className="text-green-900 text-[10px] font-semibold">10.500 TL</span>
                </div>
            </div>

            <div className="mt-4 bg-green-50 rounded-lg p-2 flex items-center justify-between">
                <div className="text-[#4CD080] text-sm font-semibold text-[12px]">
                    Bizi Onlardan Dinleyin
                </div>
                <div className="flex items-center gap-2">
                    {[1339, 1340, 1341, 1343].map((id) => (
                        <img
                            key={id}
                            src={`/assets/icons/Rectangle ${id}.png`}
                            alt={`Dinleyici ${id}`}
                            className="w-8 h-8 rounded-full border-1 border-white shadow-md"
                        />
                    ))}
                </div>
                <img
                    src="/assets/icons/rightt.svg"
                    alt="Daha Fazla"
                    className="w-6 h-6 cursor-pointer text-green-600"
                />
            </div>
        </>
    );
};

export default MainContent;
