'use client';

import {
  Home,
  LayoutDashboard,
  Wallet,
  Map,
  Users,
  Bell,
  ShoppingCart,
  Plus,
  Search,
} from 'lucide-react';
import Image from 'next/image';
import { JSX, useEffect, useState } from 'react';
import SearchInput from '../SearchInput';

export default function Navbar() {

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 shadow-md">
      {/* Left: Logo & Search */}
      <div className="flex items-center space-x-4">
        <div className="bg-blue-600 p-2 rounded">
          <Image src="/svg/logo.svg" alt="Logo" width={24} height={24} />
          
        </div>
        <SearchInput />
      </div>

      {/* Middle: Nav Links */}
      <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
        <NavItem icon={<Home className="w-5 h-5" />} label="Home" />
        <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" />
        <NavItem icon={<Wallet className="w-5 h-5" />} label="Wallet" />
        <NavItem icon={<Map className="w-5 h-5" />} label="Plan a trip" active />
        <NavItem icon={<Users className="w-5 h-5" />} label="Commission for life" />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-4">
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700 transition">
          Subscribe
        </button>
        <Bell className="w-5 h-5 cursor-pointer" />
        <ShoppingCart className="w-5 h-5 cursor-pointer" />
        <Plus className="w-5 h-5 cursor-pointer" />
        <Image
          src="/image/image.png"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full border object-cover"
        />
      </div>
    </nav>
  );
}

function NavItem({ icon, label, active = false }: { icon: JSX.Element; label: string; active?: boolean }) {
  return (
    <a
      href="#"
      className={`flex flex-col items-center ${
        active ? 'font-semibold text-black' : 'hover:text-blue-600'
      }`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}