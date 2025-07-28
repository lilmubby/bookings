import axiosInstance from "@/util/axios";
import { HOTELS_ENDPOINT } from "@/constants/endpoints";

export const searchHotels = async (query: string) => {
  try {
    const response = await axiosInstance.get(HOTELS_ENDPOINT(query));
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
}