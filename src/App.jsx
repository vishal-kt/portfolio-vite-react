import {React,useState,useEffect} from 'react'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from './components/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Layout from './Layout'
import { Projects } from './components/Projects'
import { ThemeProvider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light");
    const lightTheme=()=>{
      setThemeMode("light")
    
    }
    const darkTheme = ()=>{
      setThemeMode("dark")
    }

    useEffect(() => {
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(themeMode)
    }, [themeMode]);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ="/" element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element= {<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='projects'element={<Projects/>}/>
      </Route>
    )
  )

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <RouterProvider router={router}/>
    
    </ThemeProvider>
  )
}

export default App