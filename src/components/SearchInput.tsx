"use client"
import React, { use, useEffect, useState, useRef } from 'react'
import { Search } from 'lucide-react';
import { useItineraryStore } from '@/store/itineraryStore';
import { searchHotels } from '@/services/hotel.service';
import { searchFlights } from '@/services/flights.service';
import { searchActivities } from '@/services/activities.service';

const SearchInput = () => {
  const { setSearchTerm, setSearching, setSearch, search, activeFilter, isSearchActive,  setIsSearchActive} = useItineraryStore();
  const [searchValue, setSearchValue] = useState('');
  const isInitialMount = useRef(true);


  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(searchValue);
      setSearching(Boolean(searchValue));
      setIsSearchActive(Boolean(searchValue));
      
    }, 2000); // Debounce search input

    return () => clearTimeout(handler); // Cleanup on unmount
  }, [searchValue]);

  useEffect(() => {
    debugger
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    const fetchData = async () => {
      const fetchMap = {
        hotel: searchHotels,
        flight: searchFlights,
        activity: searchActivities,
      }
      const searchFunction = fetchMap[activeFilter];
      if (!searchFunction) return;
      // setSearching(true);
      try {
        const results = await searchFunction(searchValue);
        
        // Handle results as needed
        console.log('Search Results:', results);
      } catch (error) {
        console.error('Search Error:', error);
        setSearch(searchValue, false, false);
      } finally {
        setSearching(false);
      }

      fetchData();
    }
  }, [search.value]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 py-2 rounded bg-gray-100 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
    </div>
  )
}

export default SearchInput