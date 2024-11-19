import { useState } from "react";
import { deleteProg } from "../service/service";

export default function DeleteProgram() {
  const [id, setId] = useState<number>(0);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este programa?");
    if (confirmDelete) {
      try {
        const response = await deleteProg(id);
        alert("Programa eliminado con éxito");
        console.log(response);
        // Aquí puedes hacer algo más después de la eliminación, como redirigir o limpiar el formulario
      } catch (error) {
        console.error(error);
        alert("Hubo un error al eliminar el programa.");
      }
    }
  };

  return (
    <div>
      <h2>Eliminar Programa</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
          placeholder="ID del programa"
        />
        <button type="button" onClick={handleDelete}>
          Eliminar
        </button>
      </form>
    </div>
  );
}
