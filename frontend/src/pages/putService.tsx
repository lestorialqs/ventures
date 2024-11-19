import { useState } from "react";
import { updateProg } from "../service/service";

export default function EditProgram() {
  const [nombre, setNombre] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");

  const handleSubmit = async (id: number) => {
    try {
      const data = { nombre, descripcion };
      const response = await updateProg(id, data);
      console.log(response);
      // Puedes hacer algo con la respuesta, como redirigir o mostrar un mensaje
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
      />
      <textarea
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Descripción"
      />
      <button onClick={() => handleSubmit(1)}>Actualizar</button>
    </div>
  );
}
