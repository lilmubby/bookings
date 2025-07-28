

export default function TripOverview() {
  return (
    <div className="bg-white rounded-xl p-6 shadow mb-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 mb-1">21 March 2024 → 21 April 2024</p>
          <h2 className="text-2xl font-semibold">Bahamas Family Trip</h2>
          <p className="text-gray-600">New York, United States of America | <i>Solo Trip</i></p>
        </div>
        <div className="flex gap-4">
          <button className="bg-blue-700 text-white px-4 py-2 rounded-xl">Add Activities</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">Add Hotels</button>
          <button className="bg-blue-400 text-white px-4 py-2 rounded-xl">Add Flights</button>
        </div>
      </div>
    </div>
  )
}