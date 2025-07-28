// Hotels
export const HOTELS_ENDPOINT = (query: string) => `/hotels/searchDestination?query=${query}`;

// Flights
export const FLIGHTS_ENDPOINT = (query: string) => `flights/searchDestination?query=${query}`;

// Activities
export const ACTIVITIES_ENDPOINT = (query: string) => `/attraction/searchLocation/?languagecode=en-us&query=${query}`;