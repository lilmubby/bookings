import Sidebar from '@/components/layout/SideBar';
import TripOverview from '@/components/itinerary/TripOverview';
import FlightCard from '@/components/itinerary/FlightCard';

export default function ItineraryPage() {
  return (
    <>
      <TripOverview />
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Flights</h3>
        <FlightCard
          airline="American Airlines"
          time="08:35 - 09:55"
          duration="1h 45m"
          price="123,450"
          route="LOS → SIN"
        />
        <FlightCard
          airline="American Airlines"
          time="08:35 - 09:55"
          duration="1h 45m"
          price="123,450"
          route="LOS → SIN"
        />
      </section>
    </>
  )
}
