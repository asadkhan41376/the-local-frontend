import React from "react";
import HeaderLayout from "./header";
import FooterLayout from "./footer";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </>
  );
};

export default WebLayout;
