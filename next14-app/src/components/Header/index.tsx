"use client";
import React from "react";
import Logo from "@/components/Header/Logo";
import Menu from "@/components/Header/Menu";

interface Props {
	name: string;
	age: number;
	isMan: boolean;
	children: React.ReactNode;
};

const Header = ({name,age,isMan, children}:any) => {
  return (
    <>
      <Logo />
      <div>Header items, name:{name}, age:{age}, isMan:{isMan ? 'true' : 'false'}</div>
			{children}
      <Menu />
    </>
  );
};

export default Header;
