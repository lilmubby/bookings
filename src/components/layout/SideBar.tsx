'use client'
import {
  MountainSnow,
  Hotel,
  Plane,
  GraduationCap,
  BadgeCheck,
  Landmark,
  Stethoscope,
  Package,
  ChevronDown,
} from 'lucide-react';
import { JSX } from 'react';
import { useItineraryStore } from '@/store/itineraryStore'


export default function Sidebar() {
  const { activeFilter, setActiveFilter } = useItineraryStore();

  return (
    <aside className="w-64 h-full p-4 bg-white">
      <div className="space-y-6">
        <SidebarItem icon={<MountainSnow size={20} />} label="Activity" activeFilter={activeFilter} setActiveFilter={() => setActiveFilter("activity")} />
        <SidebarItem icon={<Hotel size={20} />} label="Hotel" activeFilter={activeFilter} setActiveFilter={() => setActiveFilter("hotel")} />
        <SidebarItem icon={<Plane size={20} />} label="Flight" activeFilter={activeFilter} setActiveFilter={() => setActiveFilter("flight")} />
        <SidebarItem icon={<GraduationCap size={20} />} label="Study" />
        <SidebarItem icon={<BadgeCheck size={20} />} label="Visa" />
        <SidebarItem icon={<Landmark size={20} />} label="Immigration" />
        <SidebarItem icon={<Stethoscope size={20} />} label="Medical" />
        <SidebarItem icon={<Package size={20} />} label="Vacation Packages" />
      </div>
      {/* Bottom Account Section */}
      <div className="bg-gray-100 p-2 rounded flex items-center justify-between mt-10">
        <button className="bg-[#0D6EFD] text-white text-sm px-4 py-1.5 rounded mr-2">Go</button>
        <span className="text-sm text-gray-700">Personal Account</span>
        <ChevronDown size={18} className="text-gray-500 ml-2" />
      </div>
    </aside>
  )
}

// #0D6EFD

function SidebarItem({ icon, label, setActiveFilter, activeFilter  }: { icon: JSX.Element; label: string; setActiveFilter?: () => void; activeFilter?: string }) {
  return (
    <button onClick={() => {
      if (setActiveFilter) {
        setActiveFilter();
      }
    }} className={`" flex px-2 py-0.5 cursor-pointer items-center space-x-3  ${activeFilter === label.toLowerCase() ? "bg-[#0D6EFD] text-white" : "text-[#647995]"} transition"`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}