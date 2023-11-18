import { FC } from "react";
type ChildrenProps = {
  children: string;
};
export const Button: FC<ChildrenProps> = ({ children, ...props }) => {
  return <button className="w-60 h-16 bg-darkGreen rounded-none text-white text-base transition-all duration-300 hover:bg-[#509498]" {...props}>{children}</button>;
};
