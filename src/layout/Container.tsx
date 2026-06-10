import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const Container = () => {
  return (
    <div className="flex min-h-screen gap-4">
      <Sidebar />
      <div className="flex flex-col flex-1 gap-4">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Container;
