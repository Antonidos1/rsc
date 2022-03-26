import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Main from "./pages/main/main-page";
import CarPage from "./pages/car-page/car-page";
import DealPage from "./pages/deal-page/deal-page";
import Error404 from "./pages/error404";
import InsertCar from "./pages/insert-car-page/InsertCar";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Main />} />
            
            <Route
                path="/car"
                element={
                <CarPage />
            }
            />
            <Route
                path='/car/insert'
                element={
                    <InsertCar/>
            }/>

            <Route
                path="/deal"
                element={
                <DealPage />
            }
            />

            <Route path="/error-404" element={<Error404 />} />
            <Route path="*" element={<Navigate to="/error-404" />} />


        </Routes>       
        
    )
}

export default AppRoutes