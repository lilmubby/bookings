import React from 'react';
import CurrentItinerary from "@/components/CurentItinerary";
import Image from "next/image";
import { Ellipsis, Settings } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <CurrentItinerary />
      <div className="flex flex-col items-center gap-4">
        <div>
          <button className="bg-[#E7F0FF] w-32 p-2 rounded mr-2">
            <Image
              src="/svg/UserPlus.svg"
              alt="Add User"
              width={24}
              height={24}
              className="block mx-auto"
            />
          </button>
          <button className="bg-transparent p-2 cursor-pointer">
            <Ellipsis className="text-[#344054]" size={24} />
          </button>
        </div>
        <div className="flex items-center">
          <button className="border border-[#E7F0FF] rounded-full">
            <Image
              src="/image/profile.png"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full border object-cover"
            />
          </button>
          <hr className="text-[#E7F0FF] w-6 border rounded" />
          <button className="border-[#E7F0FF] border-2 p-2 rounded-full">
            <Settings className="text-black cursor-pointer" size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile