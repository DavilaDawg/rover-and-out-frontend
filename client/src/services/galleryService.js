import axios from "axios";

const server_API_root = "http://localhost:3000";

export const getNasaInfo = async (sol = 1000) => {
  // Defult day 1000 for testing (user clicks timeline date which is the param when calling this service)
  try {
    const response = await axios.get(server_API_root + "/api/images", {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        sol,
      },
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log("error: ", error)
    if (error.response && error.response.status === 503||500) {
      console.error("Server unavailable");
      const message = "Server Unavailable. Please try again later."
      return { success: false, error: message };
    } else {
        const message = "An unexpected error occurred.";
        console.log("Error fetching images from backend");
        return { success: false, error: message };
    }
  }
};
