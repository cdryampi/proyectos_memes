import axios from "axios";

export async function obtenerRepos() {
  const API_URL = import.meta.env.VITE_BASE_BACKEND_URL + "repos/";

  try {
    const response = await axios.get(API_URL, {
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener repos de GitHub:", error);
    return [];
  }
}
