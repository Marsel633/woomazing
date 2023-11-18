import React, { FC } from 'react'
import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
    children: React.ReactNode;
}
export const Layout : FC<LayoutProps> = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}
