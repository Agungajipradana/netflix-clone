import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { AppShellProps } from "@/types";

const AppShell = (props: AppShellProps) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default AppShell;
