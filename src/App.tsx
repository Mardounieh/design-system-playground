import { RouterProvider } from "react-router";
import { router } from "./routes";
import { DesignSystemProvider } from "./context/DesignSystemProvider";

function App() {
  return (
    <DesignSystemProvider>
      <RouterProvider router={router} />
    </DesignSystemProvider>
  );
}

export default App;
