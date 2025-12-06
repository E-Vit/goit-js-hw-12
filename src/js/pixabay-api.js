import axios from "axios";

const API_KEY = "53458561-7a242f881cc334c9983cae72b";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}