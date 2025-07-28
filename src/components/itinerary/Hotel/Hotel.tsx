import React from 'react';
import Heading from './Heading';
import HotelCard from './HotelCard';

const Hotel = () => {
  return (
    <div className="bg-[#344054] p-6 rounded-lg shadow-md mb-4">
      <Heading />
      <div className="flex flex-col items-center gap-4 mt-6">
        <HotelCard />
      </div>
    </div>
  )
}

export default Hotel