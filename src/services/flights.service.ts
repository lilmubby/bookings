import axiosInstance from "@/util/axios";
import { FLIGHTS_ENDPOINT } from "@/constants/endpoints";

export const searchFlights = async (query: string) => {
  try {
    const response = await axiosInstance.get(FLIGHTS_ENDPOINT(query));
    return response.data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
}