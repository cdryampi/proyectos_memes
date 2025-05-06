import axios from "axios";

export async function obtenerRepos(usuario = "cdryampi") {
  const config = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  };
  try {
    const response = await axios.get(
      `https://api.github.com/users/${usuario}/repos?per_page=100&page=1`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener repos de GitHub:", error);
    return [];
  }
}
