import React from "react";

const PageNavigation: React.FC = () => {
    const navItems = [
        { label: "Lokasyonlar", icon: "location.svg" },
        { label: "Sektörler", icon: "rr.svg" },
        { label: "Ödül Kazan", icon: "joker.svg", extraClass: "w-16 h-16 animate-spin" },
        { label: "İşlerim", icon: "Icon.svg" },
        { label: "Profilim", icon: "ww.svg" },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-around shadow-md items-end">
            {navItems.map(({ label, icon, extraClass }) => (
                <button key={label} className="text-[#BDBDBD] text-[10px] flex flex-col items-center">
                    <img
                        src={`/assets/icons/${icon}`}
                        alt={label}
                        className={` mb-1 ${extraClass || "w-6 h-6"}`}
                    />
                    {label}
                </button>
            ))}
        </nav>
    );
};

export default PageNavigation;
