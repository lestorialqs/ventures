import axios from 'axios';

const API_URL = 'http://localhost:8080';

interface Programa {
  fullName: string;
  descripcion: string;
}



export const getAll = async (skip: number, limit: number) => {
  try {
    const response = await axios.get(`${API_URL}/api/getall`, {
      params: { skip, limit },
    });
    console.log('Productos obtenidos exitosamente');
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};

export const getById = async (programaId: string) => {
  try {
    const response = await axios.get(`${API_URL}/api/getall/${programaId}`);
    console.log('Producto obtenido exitosamente');
    return response.data;
  } catch (error) {
    console.error('Error al obtener producto:', error);
    throw error;
  }
};

export const post = async (programaID: string) => {
  try {
    const response = await axios.put(`${API_URL}/api/postall`, programaID);
    console.log('Producto actualizado exitosamente');
    return response.data;
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    throw error;
  }
};

