import axios from "axios";

const server_API_root = "http://localhost:3000";
const MANIFEST_URL = "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity";
const API_KEY = "YOUR_NASA_API_KEY"; // Replace with your actual API key

export const getNasaInfo = async (sol = 1000, page = 1, pageSize = 25) => {
  // Default sol 1000 for testing (user clicks timeline date which is the param when calling this service)
  try {
    const response = await axios.get(server_API_root + "/api/images", {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        sol,
        page,
        pageSize
      },
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.log("error: ", error);
    if (error.response && (error.response.status === 503 || error.response.status === 500)) {
      console.error("Server unavailable");
      const message = "Server Unavailable. Please try again later.";
      return { success: false, error: message };
    } else {
      const message = "An unexpected error occurred.";
      console.log("Error fetching images from backend");
      return { success: false, error: message };
    }
  }
};

export const getManifestInfo = async (sol) => {
  try {
    const response = await axios.get(MANIFEST_URL, {
      params: {
        sol,
        api_key: API_KEY,
      },
    });
    
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to fetch mission manifest:", error.message);
    return { success: false, error: 'Failed to fetch mission manifest' };
  }
};
