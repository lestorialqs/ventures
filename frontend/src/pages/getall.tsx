import React from "react";
import { useForm } from "react-hook-form"; 
import { getAll } from "../api/api";

interface LoginFormInputs {
  username: string;
  discripcion: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate(); // Creamos el objeto navigate para redirigir a otras páginas

  const {

    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await login(data.username, data.password);
      console.log("Inicio de sesión exitoso");
      navigate("/post"); // Redirigimos a la página ProductoDetails tras iniciar sesión
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Obtener todos los programas
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Usuario
              </label>
              <input
                  {...register("nombre", { required: "El nombre es requerido" })}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre"
              />
              {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                  type="descripcion"
                  {...register("descripcion", {
                    required: "La contraseña es requerida",
                  })}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  
              />
              {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
              )}
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
  );
};

export default LoginPage;