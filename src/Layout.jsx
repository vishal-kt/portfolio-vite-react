import  {React,useState,useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { ThemeProvider } from './context/theme';

function Layout() {
  
    
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
  
   </ThemeProvider>
  )
}

export default Layout