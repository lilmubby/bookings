'use client';

import { poppins_500, poppins_600 } from '@/lib/fonts';
import {
  PlaneTakeoff,
  PlaneLanding,
  Trash2,
  Luggage,
  Tv,
  Utensils,
  Usb,
} from 'lucide-react';
import Image from 'next/image';

export default function FlightCard() {
  return (
    <div className='w-full flex items-center h-max'>
      <div className="shadow-sm p-4 bg-white relative w-full">
        {/* Top: Airline + Times + Price */}
        <div className="flex justify-between items-center">
          {/* Airline Info */}
          <div className="flex items-center space-x-3">
            <Image
              src="/svg/american_airlines_logo.svg"
              alt="Airline Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <div>
              <p className={`${poppins_600.className} `}>American Airlines</p>
              <div className={`${poppins_500.className} flex items-center gap-2 text-xs`}>
                <span className={`text-[#676E7E]`}>AA - 829</span>
                <span className={`text-[#676E7E] pb-2`}>.</span>
                <span className="bg-[#0A369D] text-white px-2 py-1 rounded text-xs">First Class</span>
              </div>
            </div>
          </div>

          {/* Time and Duration */}
          <div className="flex flex-col mx-6 text-center">
            <div className="flex items-center justify-evenly text-sm mb-1 text-gray-600">
              <PlaneTakeoff className="w-4 h-4 mr-1" />
              <span className={`${poppins_500.className} text-[#676E7E]`}>Duration: <strong>1h 45m</strong></span>
              <PlaneLanding className="w-4 h-4 ml-1" />
            </div>
            <div className="flex justify-evenly text-sm text-gray-700 font-medium">
              <div>
                <p className={`${poppins_600.className} text-[#1D2433] text-lg `}>08:35</p>
                <p>Sun, 20 Aug</p>
              </div>
              <div className="bg-[#E7F0FF] h-2 rounded w-56 mx-2 mt-4">
                <div className='bg-[#0D6EFD] w-1/2 h-full rounded mx-auto'>

                </div>
              </div>
              <div>
                <p className={`${poppins_600.className} text-[#1D2433] text-lg `}>09:55</p>
                <p>Sun, 20 Aug</p>
              </div>
            </div>
            <div className="flex justify-evenly text-sm text-gray-700 font-medium">
              <p className="font-bold">LOS</p>
              <p className="font-bold">SIN</p>
            </div>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-lg font-semibold text-black">₦ 123,450.00</p>
          </div>
        </div>

        {/* Facilities */}
        <div className="flex items-center space-x-6 mt-4 text-sm text-gray-600 pt-4 border-t border-t-[#E4E7EC]">
          <span className="flex items-center gap-1">
            Facilities: 
          </span>
          <span className="flex items-center gap-1">
            <Luggage size={16} /> Baggage: 20kg, Cabin Baggage: 8kg
          </span>
          <span className="flex items-center gap-1">
            <Tv size={16} /> In flight entertainment
          </span>
          <span className="flex items-center gap-1">
            <Utensils size={16} /> In flight meal
          </span>
          <span className="flex items-center gap-1">
            <Usb size={16} /> USB Port
          </span>
        </div>

        {/* Footer Links */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-t-[#E4E7EC] text-sm">
          <div className="flex space-x-6 text-blue-600">
            <a href="#">Flight details</a>
            <a href="#">Price details</a>
          </div>
          <a href="#" className="text-blue-600">Edit details</a>
        </div>

        
      </div>
      {/* Delete Button */}
      <button className="bg-[#FBEAE9] shadow-sm h-[230px] px-1.5 text-red-500 hover:text-red-700">
        <Trash2 size={20} />
      </button>
    </div>
  );
}
