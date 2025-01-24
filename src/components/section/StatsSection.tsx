import { StatsSectionProps } from "@/types/types";
import React from "react";



const StatsSection: React.FC<StatsSectionProps> = ({ openModal }) => {
    return (
        <div className="bg-[#105D38] h-36 relative">
            <div className="bg-[#4CD080]">
                <div className="grid grid-cols-4 text-center text-white">
                    <div className="py-4">
                        <div className="text-[12px] font-regular mb-1">Lider Tablosu</div>
                        <div className="text-[14px] font-semibold">
                            <img src="/assets/icons/rank.svg" alt="Lider Tablosu" className="mx-auto" />
                        </div>
                    </div>
                    <div className="py-4">
                        <div className="text-[12px] font-regular pb-1">Puanım</div>
                        <div className="text-[14px] font-semibold">47.953</div>
                    </div>
                    <div className="py-4">
                        <div className="text-[12px] font-regular pb-1">İndirim Oranım</div>
                        <div className="text-[14px] font-semibold">% 0</div>
                    </div>
                    <div className="py-4">
                        <div className="text-[12px] font-regular pb-1">Bakiyem</div>
                        <div className="text-[14px] font-semibold">₺ 49.579</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#4CD080] absolute inset-x-4 -bottom-10 rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-3">
                    <button onClick={openModal} className="flex flex-col items-center py-4 text-white">
                        <img src="/assets/icons/plus.svg" alt="Bakiye Yükle" className="mb-1" />
                        <span>Bakiye Yükle</span>
                    </button>
                    <button className="flex flex-col items-center py-4 text-white">
                        <img src="/assets/icons/rocket.svg" alt="Beni Öne Çıkar" className="mb-1" />
                        <span>Beni Öne Çıkar</span>
                    </button>
                    <button className="flex flex-col items-center py-4 text-white">
                        <img src="/assets/icons/bag.svg" alt="Acil İş Ver" className="mb-1" />
                        <span>Acil İş Ver</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
