import React from 'react';
import { Navbar } from "../../ui";
import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPage, MarvelPage } from '../pages';


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path="marvel" element={<DcPage/>} />
            <Route path="dc" element={<MarvelPage/>} />

            <Route path="/" element={<Navigate/>} />
        </Routes>
    </>
  )
}
