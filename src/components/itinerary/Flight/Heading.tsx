import React from 'react'
import Image from "next/image";

const Heading = () => {
  return (
    <div className='flex justify-between items-center mb-6'>
      <div className="flex items-center gap-4">
        <Image src={"/svg/AirplaneInFlight.svg"} alt="Flight" width={32} height={32} className="rounded" />
        <h3>Flights</h3>
      </div>
      <button className="bg-[#FFFFFF] text-[#0D6EFD] text-center text-sm px-4 py-2 rounded ">
        Add Flights
      </button>
    </div>
  )
}

export default Heading