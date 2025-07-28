"use client";
import ItineraryPage from "@/components/itinerary/Itinerary";
import Profile from "@/components/Profile";
import { ArrowLeft } from "lucide-react";
import ItineraryCardMenu from "@/components/itinerary/ItineraryCardMenu";
import { itineraryCardMenu } from "@/lib/constants";
import { poppins_500, poppins_600 } from "@/lib/fonts";
import Flight from "@/components/itinerary/Flight/Flight";
import Hotel from "@/components/itinerary/Hotel/Hotel";
import { useItineraryStore } from "@/store/itineraryStore";
import LandingPage from "./LandingPage";

export default function Home() {
  const { searchTerm, searching, itinerary, activeFilter, search } = useItineraryStore();
  // console.log("State:", searchTerm, searching, itinerary, activeFilter);
  console.log("Itinerary:", itinerary);
  console.log("Active Filter:", activeFilter);
  console.log("Searching:", searching);
  console.log("Search Term:", searchTerm);

  return (
    <section className="w-full">
    {
      search.active ? (
        <div>
          searching active
        </div>
      ) : (
        <LandingPage />
      )
    }
    </section>
  );
}
