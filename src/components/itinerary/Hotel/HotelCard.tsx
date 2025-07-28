'use client';

import {
  MapPin,
  Star,
  BedDouble,
  Trash2,
  CalendarCheck,
  GlassWater,
  Wine,
} from 'lucide-react';
import Image from 'next/image';

const HotelCard = () => {
  return (
    <div className="w-full flex rounded-md shadow-sm bg-white">
      <div className="w-full flex p-4">
        <div className="w-56 h-52 relative rounded overflow-hidden ">
          <Image
            src="/image/hotel.png"
            alt="Hotel"
            fill
            className="object-cover rounded"
          />
        </div>

        <div className='w-full'>
          <div className="flex justify-between px-4">
            {/* Image */}
            {/* <div className="w-36 h-36 relative rounded overflow-hidden">
          <Image
            src="/image/hotel.png"
            alt="Hotel"
            fill
            className="object-cover rounded"
          />
        </div> */}

            {/* Info */}
            <div className="flex-1">
              <h2 className="font-semibold text-lg">Riviera Resort, Lekki</h2>
              <p className="text-sm text-gray-600">
                18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1
              </p>

              {/* Map link, rating, room */}
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                <a href="#" className="text-blue-600 flex items-center gap-1">
                  <MapPin size={14} /> Show in map
                </a>
                <span className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500" />
                  8.5 (436)
                </span>
                <span className="flex items-center gap-1">
                  <BedDouble size={14} /> King size room
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className="text-lg font-semibold text-black">₦ 123,450.00</p>
              <p className="text-xs text-gray-500 mt-1">
                Total Price: NGN 560,000 <br />
                1 room x 10 nights incl. taxes
              </p>
            </div>
          </div>

          {/* Facilities & Dates */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600 border-t pt-3 px-4">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1">
                Facilities:
              </span>
              <span className="flex items-center gap-1">
                <GlassWater size={16} /> Pool
              </span>
              <span className="flex items-center gap-1">
                <Wine size={16} /> Bar
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <CalendarCheck size={16} /> Check In: 20–04–2024
              </span>
              <span className="flex items-center gap-1">
                <CalendarCheck size={16} /> Check Out: 29–04–2024
              </span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex justify-between items-center mt-3 border-t pt-3 text-sm">
            <div className="flex gap-6 text-blue-600">
              <a href="#">Hotel details</a>
              <a href="#">Price details</a>
            </div>
            <a href="#" className="text-blue-600">Edit details</a>
          </div>
        </div>
      </div>
      <button className="block h-52 px-1.5 bg-[#FBEAE9] text-red-500 hover:text-red-700">
        <Trash2 size={20} />
      </button>
    </div>
  );
}

export default HotelCard