import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/instrumentos/instrumentos/";

export const getInstrumentos = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const crearInstrumento = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const actualizarInstrumento = async (id, data) => {
  const res = await axios.put(`${API_URL}${id}/`, data);
  return res.data;
};

export const eliminarInstrumento = async (id) => {
  await axios.delete(`${API_URL}${id}/`);
};
