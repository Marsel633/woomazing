import React, { FC } from 'react'
import { Footer, Header } from '../components';

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
