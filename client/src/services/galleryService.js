// galleryService.js

const server_API_root = "http://localhost:3000";

export const getNasaInfo = async (sol = 1000) => {
  try {
    const response = await fetch(`${server_API_root}/api/images/${sol}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 403) {
        return { success: false, error: "403 Forbidden: Check your access rights" };
      }
      if (response.status === 503 || response.status === 500) {
        return { success: false, error: "Server Unavailable. Please try again later." };
      }
      return { success: false, error: `Request failed with status ${response.status}` };
    }

    const data = await response.json();

    return { success: true, data };
  } catch (error) {
    return { success: false, error: "Error fetching images from backend" };
  }
};

export const getManifestInfo = async (sol) => {
  try {
    const response = await fetch(`${server_API_root}/api/info/${sol}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 403) {
        return { success: false, error: "403 Forbidden: Check your access rights" };
      }
      if (response.status === 503 || response.status === 500) {
        return { success: false, error: "Server Unavailable. Please try again later." };
      }
      return { success: false, error: `Request failed with status ${response.status}` };
    }

    const data = await response.json();

    return { success: true, data };
  } catch (error) {
    return { success: false, error: "Error fetching manifest info from backend" };
  }
};
