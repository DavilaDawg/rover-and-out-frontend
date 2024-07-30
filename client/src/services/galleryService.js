// galleryService.js

const server_API_root = "http://localhost:3000";

// Images and info funcs 
export const getNasaInfo = async (sol = 0) => {
  try {
    const response = await fetch(`${server_API_root}/api/images/${sol}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 403) {
        return {
          success: false,
          error: "403 Forbidden: Check your access rights",
        };
      }
      if (response.status === 503 || response.status === 500) {
        return {
          success: false,
          error: "Server Unavailable. Please try again later.",
        };
      }
      return {
        success: false,
        error: `Request failed with status ${response.status}`,
      };
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
        return {
          success: false,
          error: "403 Forbidden: Check your access rights",
        };
      }
      if (response.status === 503 || response.status === 500) {
        return {
          success: false,
          error: "Server Unavailable. Please try again later.",
        };
      }
      return {
        success: false,
        error: `Request failed with status ${response.status}`,
      };
    }

    const data = await response.json();

    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: "Error fetching manifest info from backend",
    };
  }
};

// Map service:
export const getMapImgs = async (location) => {
  try {
    let sol1;
    let range;
    if (location === "LAND") {
      sol1 = 0;
      range = 3;
    } else if (location === "BEACH") {
      sol1 = 1509;
      range = 10;
    } else if (location === "CURRENT") {
      sol1 = 4065;
      range = 37;
    } else if (location === "DRILL") {
      sol1 = 2371; //2890 and 2405 and 2136
      range = 20;
    }

    let responsePhotosArr = [];
    for (let i = 0; i < range; i++) {
      const sol = sol1 + i;
      const response = await fetch(`${server_API_root}/api/images/${sol}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 403) {
          return {
            success: false,
            error: "403 Forbidden: Check your access rights",
          };
        }
        if (response.status === 503 || response.status === 500) {
          return {
            success: false,
            error: "Server Unavailable. Please try again later.",
          };
        }
        return {
          success: false,
          error: `Request failed with status ${response.status}`,
        };
      }

      const data = await response.json();

      const photos = data.photos;

      responsePhotosArr.push(photos);
    }

    const concatArr = responsePhotosArr.flat();

    return { success: true, concatArr };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Error fetching images from backend" };
  }
};


// Annotation func (not working)
export const postAnnotations = async (dataURL, metaData) => {
  try {
    const response = await fetch(`${server_API_root}/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageData: dataURL, metaData: metaData }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Error details:", result);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    if (result.success) {
      console.log("Image saved successfully");
    } else {
      console.error("Error saving image:", result.error);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};


// Fav funcs:
export const getFavsService = async () => {
  try {
    const response = await fetch(`${server_API_root}/favs`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 503 || response.status === 500) {
      return {
        success: false,
        error: "Server Unavailable. Please try again later.",
      };
    }

    const data = await response.json();

    return { success: true, data };
  } catch (error) {
    return { success: false, error: "Error fetching images from backend" };
  }
};

export const postFavService = async (dataURL) => {
  try {
    const response = await fetch(`${server_API_root}/favs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageData: dataURL }), 
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Error details:", result);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    if (result.success) {
      console.log("Image saved successfully");
    } else {
      console.error("Error saving image:", result.error);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};

export const deleteFavService = async (dataURL) => {
  console.log("deleting: ", dataURL)
}