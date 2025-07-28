import React from 'react'
import FlightCard from './FlightCard';
import Heading from './Heading';

const Flight = () => {
  return (
    <div className="bg-[#F0F2F5] p-6 rounded-lg shadow-md mb-4">
      <Heading />
      <div className="flex flex-col items-center gap-4 mt-6">
        <FlightCard />
      </div>
    </div>
  )
}

export default Flight