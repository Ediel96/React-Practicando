import { Navigate, Route, Routes } from 'react-router-dom'
import {Navbar} from '../../ui'
import {DcPage, MarvelPage, HeroPage, SearchPage} from '../pages'

export const HeroeRoutes = () => {
  return (
    <>

        <Navbar></Navbar>

        <div className='container'>
            <Routes>
                <Route path="marvel" element={<MarvelPage/>} />
                <Route path="dc" element={<DcPage/>} />

                <Route path="/search" element={<SearchPage/>} />
                <Route path="/hero" element={<HeroPage/>} />

                {/*Search, Hero by id */}
                <Route path="/" element={<Navigate to="/marvel"/>} />
            </Routes>
        </div>
    </>
  )
}
