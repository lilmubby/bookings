import React, { FC } from 'react'
import { poppins_400, poppins_500, poppins_600 } from "@/lib/fonts";

interface ItineraryCardMenuProps {
  bg: string;
  heading: {
    label: string;
    style: string;
  };
  buttonText: {
    label: string;
    style: string;
  };
}

const ItineraryCardMenu:FC<ItineraryCardMenuProps> = ({heading, bg, buttonText}) => {
  return (
    <div className={`w-[300px] p-4 ${bg} rounded`}>
      <h3 className={`${poppins_600.className} ${heading.style} text-[1rem]`}>{heading.label}</h3>
      <p className={`${poppins_400.className} ${heading.style} text-sm mt-4 mb-8`}>Build, personalize, and optimize your itineraries with our trip planner.</p>
      <button className={`${poppins_500.className} ${buttonText.style} px-4 py-2 rounded transition`}>
        {buttonText.label}
      </button>
    </div>
  )
}

export default ItineraryCardMenu