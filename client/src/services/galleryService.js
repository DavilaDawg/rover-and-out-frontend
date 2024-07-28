// galleryService.js

const server_API_root = "http://localhost:3000";

export const getNasaInfo = async (sol = 0) => {
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

export const getManifestInfo = async () => {
  try {
    const response = await fetch(`${server_API_root}/api/info`, {
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

export const getMapImgs = async (location) => {
  try {

    let sol;
    let sol2;
    if (location === "LAND") {
      sol = 0;
      sol2 = 3;
    } else if (location === "BEACH") {
      sol = 1608;
    } else if (location === "CURRENT") {
      sol = 4101;
    } else if (location === "DRILL") {
      sol = 2890;
    }

    const response = await fetch(`${server_API_root}/api/images/${sol}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response2 = await fetch(`${server_API_root}/api/images/${sol2}`, {
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
    const data2 = await response2.json();

    const photos = data.photos
    const photos2 = data2.photos

    const arr = [photos, photos2]

    const allPhotos = Array.prototype.concat(...arr)

    console.log(data)

    return { success: true, allPhotos };
  } catch (error) {
    return { success: false, error: "Error fetching images from backend" };
  }
};