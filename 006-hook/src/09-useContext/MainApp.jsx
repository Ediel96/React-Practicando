import { Navigate, Route, Routes, Link } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./context/UserProvider"
import { HomePages } from "./HomePages"
import { LoginPages } from "./LoginPages"
import { Navbar } from "./Navbar"


export const MainApp = () => {
  return (
   
    <UserProvider>

     
        <h1>MainApp</h1>
        
        <Navbar/>
        
        <br />

        <Routes>
            <Route path="/" element={ <HomePages/> } />
            <Route path="login" element={ <LoginPages/> } />
            <Route path="about" element={ <AboutPage/> } />

            {/* <Route path="/*" element={ <LoginPages/> } /> */}
            <Route path="/*" element={ <Navigate to="about"/> }/>


        </Routes>

    </UserProvider>
  )
}
