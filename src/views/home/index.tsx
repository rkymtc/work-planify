import MainContent from "@/components/content/MainContent";
import Header from "@/components/layout/Header";
import PageNavigation from "@/components/navigation/PageNavigation";
import StatsSection from "@/components/section/StatsSection";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import React, { useState } from "react";


const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState("Dün");
    const [referenceEarnings, setReferenceEarnings] = useState(0);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleDateChange = (date: string) => {
        setSelectedDate(date);
        setReferenceEarnings(date === "Bugün" ? 150 : 0);
    };

    return (
        <div>
            
            <Header />

            
            <StatsSection openModal={openModal} />

           
            <main className="p-4 pb-[120px]">
                <MainContent
                    referenceEarnings={referenceEarnings} 
                    selectedDate={selectedDate} 
                    handleDateChange={handleDateChange} 
                />
            </main>

          
            <PageNavigation />

           
            {isModalOpen && (
                <Modal onClose={closeModal} title="Bakiye Yükle">
                    <p className="text-sm text-gray-600 mb-4">
                        Bakiye yüklemek için bir yöntem seçin.
                    </p>
                    <button
                        onClick={closeModal}
                        className="bg-green-500 text-white w-full p-2 rounded-md"
                    >
                        Tamam
                    </button>
                </Modal>
            )}
        </div>
    );
};

export default Home;
