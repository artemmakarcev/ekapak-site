import React from "react";
import { Outlet } from "react-router-dom";
import HeaderTop from "../components/Header/HeaderTop";
import HeaderSticky from "../components/Header/HeaderSticky";

const MainLayout: React.FC = () => {
  return (
    <>
      <HeaderTop />
      <HeaderSticky />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
