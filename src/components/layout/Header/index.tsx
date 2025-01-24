'use client';

import React, { useState } from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header: React.FC = () => {

  return (
    <header className="bg-[#105D38]">
      {/* <DesktopHeader /> */}
      <MobileHeader  />
      
    </header>
  );
};

export default Header;