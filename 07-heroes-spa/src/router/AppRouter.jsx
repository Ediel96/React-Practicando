import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../ui';

import {  } from "../heroes";
import { LoginPage } from '../auth/pages';

export const AppRouter = () => {
  return (
    <>
        <Navbar/>

        <Routes>

            <Route path='login' element={ <LoginPage /> } />


        </Routes>

    </>
  )
}
