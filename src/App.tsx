import { RouterProvider } from "react-router";
import { router } from "./routes";
import { PaletteProvider } from "./context/PaletteProvider";

function App() {
  return (
    <PaletteProvider>
      <RouterProvider router={router} />
    </PaletteProvider>
  );
}

export default App;
