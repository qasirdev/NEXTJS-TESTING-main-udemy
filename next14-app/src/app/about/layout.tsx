import Header from "@/components/Header";
import React from "react";
import "./about.css"

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>AboutLayout</div>
      <Header>
        This is about header
        {children}
      </Header>
    </>
  );
};

export default AboutLayout;
