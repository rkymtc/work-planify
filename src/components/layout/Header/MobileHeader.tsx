'use client';

import React, { useState } from 'react';

const MobileHeader = () => {
    return (
                  
            
<header className="bg-[#105D38] text-white p-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center">
                            <img src="/assets/images/logo.png" alt="Logo" className="h-10" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button ><img src="/assets/icons/help.svg" alt="Logo" /></button>
                        <button className="relative">
                            <span className="absolute bottom-6 right-0 bg-[#FF9500] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
                            <img src="/assets/icons/notification.svg" alt="Logo" />
                        </button>
                        <button ><img src="/assets/icons/settings.svg" alt="Logo" /></button>
                    </div>
                </div>
            </header>
    );
  };
  export default MobileHeader