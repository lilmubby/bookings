import { Hotel } from '@/types/hotel'
import { useItineraryStore } from '@/store/itineraryStore'

type Props = {
  hotel: Hotel
}

export default function HotelCard({ hotel }: Props) {
  const removeHotel = useItineraryStore((state) => state.removeFromItinerary)

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border mb-4">
      <div className="flex flex-col md:flex-row gap-4">
        <img src={hotel.image} alt={hotel.name} className="w-full md:w-48 h-32 object-cover rounded-lg" />
        <div className="flex-1">
          <h4 className="text-lg font-semibold">{hotel.name}</h4>
          <p className="text-sm text-gray-500">{hotel.address}</p>
          <p className="text-sm text-blue-600 font-semibold">₦ {hotel.price.toLocaleString()}</p>
          <p className="text-sm text-gray-600">
            {hotel.roomType} | Check-in: {hotel.checkIn} | Check-out: {hotel.checkOut}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Facilities: {hotel.facilities.join(', ')}
          </p>
        </div>
        <button
          onClick={() => removeHotel(hotel.id)}
          className="text-red-500 text-sm hover:underline self-start"
        >
          Remove
        </button>
      </div>
    </div>
  )
}