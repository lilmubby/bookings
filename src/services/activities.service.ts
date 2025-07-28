import axiosInstance from "@/util/axios";
import { ACTIVITIES_ENDPOINT } from "@/constants/endpoints";

export const searchActivities = async (query: string) => {
  try {
    const response = await axiosInstance.get(ACTIVITIES_ENDPOINT(query));
    return response.data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
}