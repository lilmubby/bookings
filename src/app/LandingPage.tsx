import React from 'react'
import { ArrowLeft } from 'lucide-react';
import Profile from '@/components/Profile';
import ItineraryCardMenu from '@/components/itinerary/ItineraryCardMenu';
import { itineraryCardMenu } from '@/lib/constants';
import { poppins_500, poppins_600 } from '@/lib/fonts';
import Flight from '@/components/itinerary/Flight/Flight';
import Hotel from '@/components/itinerary/Hotel/Hotel';


const LandingPage = () => {
  return (
    <section className="w-full">
      <div className="h-44 bg-cover bg-no-repeat bg-[url('/image/banner.png')] w-[100%] rounded relative">
        <button className="absolute top-4 left-4 bg-[#CFE9FF] p-2 rounded shadow hover:bg-gray-100 transition">
          <ArrowLeft className="text-black cursor-pointer" size={24} />
        </button>
      </div>
      <Profile />
      <div className="mb-10 flex items-center gap-4">
        {
          itineraryCardMenu.map((item, index) => (
            <ItineraryCardMenu
              key={index}
              bg={item.bg}
              heading={item.heading}
              buttonText={item.buttonText}
            />
          ))
        }
      </div>
      <section className="px-6">
        <h2 className={`text-2xl ${poppins_600.className} text-black mb-4`}>
          Trip Itinerary
        </h2>
        <p className={`text-[#647995] ${poppins_500.className} mb-6`}>Your trip itineraries are placed here</p>
        <Flight />
        <Hotel />
      </section>
    </section>
  )
}

export default LandingPage