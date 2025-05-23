//Externas
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

//Routes
import NotFoundScreen from '../pages/notfound'
import HomeScreen from '../pages/home'
import ContactScreen from '../pages/contact'
import ExperienceScreen from '../pages/exp'
import EducationScreen from '../pages/education'
import ProjectsScreen from '../pages/projects'
import AbilitiesScreen from '../pages/abilities'

export default function RoutesFunction(){

    return(
        <HashRouter
        // basename={process.env.REACT_APP_URL}
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
                    path="/projects"
                    element={
                        <ProjectsScreen/>
                    }
                />
                <Route
                    path="/ability"
                    element={
                        <AbilitiesScreen/>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <ContactScreen/>
                    }
                />
            </Routes>
        </HashRouter>
    )

}