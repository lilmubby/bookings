import React from 'react'
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { poppins_500, poppins_600 } from '@/lib/fonts';

const CurentItinerary = () => {
  return (
    <div className="w-max my-4">
      <div className={`${poppins_500.className} bg-[#FEF4E6] p-2 text-[#7A4504] flex gap-2 items-center`}>
        <Calendar className="inline-block mr-2" size={16} />
        <span className="font-semibold">21 March 2024 </span>
        <ArrowRight className="inline-block" size={16} />
        <span className="font-semibold">1 April 2024</span>
      </div>
      <h2 className={`${poppins_600.className} text-black font-semibold text-xl my-1`}>Bahamas Family Trip</h2>
      <div className={`${poppins_500.className} text-[#676E7E] flex items-center gap-1`}>
        {/* <p className="text-gray-600">New York, United States of America | <i>Solo Trip</i></p> */}
        <span>New York, United States of America</span>
        <hr className="text-[#D0D5DD] w-4 rotate-90 " />
        <span>Solo Trip</span>
      </div>
    </div>
  )
}

export default CurentItinerary