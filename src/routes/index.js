//Externas
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Routes
import NotFoundScreen from '../pages/notfound'
import HomeScreen from '../pages/home'
import ContactScreen from '../pages/contact'
import ExperienceScreen from '../pages/exp'
import EducationScreen from '../pages/education'

export default function RoutesFunction(){

    return(
        <BrowserRouter
        basename={process.env.REACT_APP_URL}
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
                    path="/exp"
                    element={
                        <ExperienceScreen/>
                    }
                />
                <Route
                    path="/education"
                    element={
                        <EducationScreen/>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <ContactScreen/>
                    }
                />
            </Routes>
        </BrowserRouter>
    )

}