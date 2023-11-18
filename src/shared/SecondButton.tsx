import React, { FC } from "react";

type ChildrenProps = {
  children: React.ReactNode | string;
};
export const SecondButton: FC<ChildrenProps> = ({ children, ...props }) => {
  return <button className="w-60 h-16 bg-transparent border-solid border-darkGreen text-darkGreen border text-base transition-all duration-300 hover:bg-darkGreen hover:text-white" {...props}>{children}</button>;
};
