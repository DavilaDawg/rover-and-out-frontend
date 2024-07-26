import axios from "axios";

const server_API_root = "http://localhost:3000";
const MANIFEST_URL = "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity";

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
      const message = "Server Unavailable. Please try again later.";
      return { success: false, error: message };
    } else if (error.response && (error.response.status === 403)) {
      console.log(`Error API limit reached: ${error}`);
      return { success: false, data: 'Error API limit reached, try again in one hour' };
    } else {
      console.log(`Error fetching images from backend: ${error}`);
      return { success: false, data: "Error fetching images from backend" };
    }
  }
};

export const getManifestInfo = async (sol) => { //For total num of pics and other stats for charts 
  try {
    const response = await axios.get(MANIFEST_URL, {
      params: {
        sol,
        api_key: API_KEY, /// nooooo
      },
    });
    
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to fetch mission manifest:", error.message);
    return { success: false, data: "Failed to fetch mission manifest"};
  }
};

/*
    setLoading(true);

    try {
      // Fetch images and manifest
      const result = await getNasaInfo(sol, currentPage);
      console.log('API result:', result);

      if (result.success) {
        setImages(result.data);
        setTotalPhotos(result.total_images);
        setTotalPages(result.total_pages);
        setError(null);
      } else {
        setImages([]);
        setError(result.error || 'An unexpected error occurred in service.');
      }
    } catch (error) {
      console.error('Unexpected error in client:', error);
      setImages([]);
      setError('An unexpected error occurred in client.');
    } finally {
      setLoading(false);
    }
  };
*/