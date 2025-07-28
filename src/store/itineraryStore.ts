// lib/store/itinerary.ts
import { create } from 'zustand'

type ItineraryItem = {
  id: string
  name: string
  type: 'hotel' | 'flight' | 'activity'
  details: any // Replace with stricter type if available
}

type ItineraryStore = {
  activeFilter: 'hotel' | 'flight' | 'activity'
  searchTerm: string
  searching: boolean
  isSearchActive: boolean
  search: {
    value: string
    active: boolean
    searching: boolean
  }
  itinerary: {
    hotels: ItineraryItem[]
    flights: ItineraryItem[]
    activities: ItineraryItem[]
  }

  // Actions
  setActiveFilter: (filter: 'hotel' | 'flight' | 'activity') => void
  setSearchTerm: (term: string) => void
  addToItinerary: (item: ItineraryItem) => void
  removeFromItinerary: (id: string, type: 'hotel' | 'flight' | 'activity') => void
  setSearching: (isSearching: boolean) => void
  setIsSearchActive: (isActive: boolean) => void
  setSearch: (value: string, active: boolean, searching: boolean) => void
}

export const useItineraryStore = create<ItineraryStore>((set) => ({
  activeFilter: 'hotel',
  searchTerm: '',
  searching: false,
  isSearchActive: false,
  search: {
    value: '',
    active: false,
    searching: false,
  },
  itinerary: {
    hotels: [],
    flights: [],
    activities: [],
  },

  setActiveFilter: (filter) => set({ activeFilter: filter }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSearching: (isSearching) => set({ searching: isSearching }),
  setIsSearchActive: (isActive) => set({ isSearchActive: isActive }),
  
  setSearch: (value, active, searching) =>
    set({
      search: {
        value,
        active,
        searching,
      },
    }),

  addToItinerary: (item) =>
    set((state) => {
      const key = item.type + 's' as keyof ItineraryStore['itinerary']
      if (!state.itinerary[key].find((i) => i.id === item.id)) {
        return {
          itinerary: {
            ...state.itinerary,
            [key]: [...state.itinerary[key], item],
          },
        }
      }
      return state
    }),

  removeFromItinerary: (id, type) =>
    set((state) => {
      const key = type + 's' as keyof ItineraryStore['itinerary']
      return {
        itinerary: {
          ...state.itinerary,
          [key]: state.itinerary[key].filter((item) => item.id !== id),
        },
      }
    }),
}))
