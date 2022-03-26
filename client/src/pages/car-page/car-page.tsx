import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../component/main-table/MainTable";

import './car-page.css'

const CarPage = () => {    
    
    const navigate = useNavigate()     
    const insertCar = (event) => {
        event.preventDefault()
        navigate('/car/insert')       
    }           
    
    return (
        <div>
            <h1 className="main_header">Car Page</h1>
            <Table/>
            <div id="buttons">                
                <button className="carButton" id='insert' onClick={insertCar}>Add new car</button>                
            </div>
        </div>
    )
}
export default CarPage