import { FC, MouseEventHandler } from "react";
type ChildrenProps = {
  children: string;
  onClick?: MouseEventHandler;
  type?: "submit" | "reset" | "button" | undefined
  classname?: string
};

export const Button: FC<ChildrenProps> = ({ children, classname, ...props }) => {
  return <button className={`${classname} w-60 h-16 bg-darkGreen rounded-none text-white text-base transition-all duration-300 hover:bg-[#509498]`} {...props}>{children}</button>;
};
