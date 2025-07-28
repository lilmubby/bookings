
type Props = {
  airline: string
  time: string
  duration: string
  price: string
  route: string
}

export default function FlightCard({ airline, time, duration, price, route }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-lg font-semibold">{airline}</h4>
          <p className="text-sm text-gray-500">{route}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">{time}</p>
          <p className="text-xs text-gray-400">Duration: {duration}</p>
        </div>
        <p className="text-blue-600 text-lg font-bold">₦ {price}</p>
      </div>
      <div className="text-xs mt-2 text-gray-500">
        Facilities: Baggage: 20kg, In-flight meal, USB Port
      </div>
    </div>
  )
}
