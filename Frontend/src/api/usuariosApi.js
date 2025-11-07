import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/usuarios/"; // URL del backend Django

// Obtener todos los usuarios
export const getUsuarios = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Token ${token}` },
  });
  return res.data;
};

// Crear un nuevo usuario
export const crearUsuario = async (data, token) => {
  const res = await axios.post(API_URL, data, {
    headers: { Authorization: `Token ${token}` },
  });
  return res.data;
};

// Actualizar usuario
export const actualizarUsuario = async (id, data, token) => {
  const res = await axios.put(`${API_URL}${id}/`, data, {
    headers: { Authorization: `Token ${token}` },
  });
  return res.data;
};

// Eliminar usuario
export const eliminarUsuario = async (id, token) => {
  await axios.delete(`${API_URL}${id}/`, {
    headers: { Authorization: `Token ${token}` },
  });
};
