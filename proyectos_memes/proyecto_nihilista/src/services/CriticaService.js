import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_BACKEND_URL + "critica/";

export async function obtenerCriticaCruel({
  nombre,
  descripcion,
  tags = [],
  estrellas = 0,
  forks = 0,
  issues = 0,
}) {
  try {
    const response = await axios.post(API_URL, {
      nombre,
      descripcion,
      tags,
      estrellas,
      forks,
      issues,
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    });

    return response.data.critica || "Sin respuesta.";
  } catch (error) {
    console.error("Error al obtener crítica:", error);
    return "El modelo explotó de risa.";
  }
}
