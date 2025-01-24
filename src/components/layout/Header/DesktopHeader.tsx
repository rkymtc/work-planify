'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopHeader = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Lokasyon', href: '/locations' },
    { name: 'Sektörler', href: '/sectors' },
    { name: 'Ödül Kazan', href: '/rewards' },
    { name: 'İşlerim', href: '/my-jobs' },
    { name: 'Profilim', href: '/profile' },
  ];

  return (
    <header className="hidden md:flex justify-between items-center py-6 px-8 w-full bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <img src="/assets/images/logo.png" alt="Logo" className="h-10 cursor-pointer" />
        </Link>
      </div>
      <nav aria-label="Main Navigation">
        <ul className="flex items-center space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-gray-700 hover:text-yellow-500 font-semibold ${
                  pathname === item.href ? 'text-yellow-500' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default DesktopHeader;
