import { RouterProvider } from "react-router";
import { router } from "./routes";
import { DesignSystemProvider } from "./context/DesignSystemProvider";
import "./App.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isRTL = i18n.language === "fa";

    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  
  return (
    <DesignSystemProvider>
      <RouterProvider router={router} />
    </DesignSystemProvider>
  );
}

export default App;
