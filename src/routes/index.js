//Externas
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFoundScreen from '../pages/notfound'
import HomeScreen from '../pages/homescreen'
import AboutScreen from '../pages/aboutscreen'

export default function RoutesFunction(){

    return(
        <BrowserRouter
        basename='/portfolio'
        >
            <Routes>
                <Route
                    path="*"
                    element={
                        <NotFoundScreen/>
                    }
                />
                <Route
                    path="/"
                    element={
                        <HomeScreen/>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <AboutScreen/>
                    }
                />
            </Routes>
        </BrowserRouter>
    )

}