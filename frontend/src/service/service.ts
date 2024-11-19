
import axios from "axios";

const base_url = "http://localhost:8000/";


export async function deleteProg(id: number) {
    try {
      const response = await axios.delete(`${base_url}/api/${id}`, {
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  export async function updateProg(id: number, data: { nombre: string; descripcion: string }) {
    try {
      const response = await axios.put(`${base_url}/api/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  