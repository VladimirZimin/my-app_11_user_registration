import AppBar from "components/AppBar/AppBar";
import Section from "components/Section";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Section>
        <Outlet />
      </Section>
    </>
  );
};

export default Layout;
