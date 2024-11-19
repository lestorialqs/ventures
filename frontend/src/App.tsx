import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DeleteProgram from "./pages/deleteService";
import EditProgram from "./pages/putService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Pagina principal</h1>
  },
  {
    path: "/delete",
    element: <DeleteProgram />,
  },
  {
    path: "/edit",
    element: <EditProgram />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
