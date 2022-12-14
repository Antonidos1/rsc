import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarTableHeader from "../../component/car-table/car-table-header/CarTableHeader";
import CarTableRows from "../../component/car-table/car-table-rows/CarTableRows";
import DealStore from "../../store/DealStore";

import './car-page.css'

const CarPage = observer(() => {    
    const [dealStore] = useState(()=> new DealStore())
    const navigate = useNavigate()     
    const insertCar = (event) => {
        event.preventDefault()
        navigate('/car/insert')       
    }  
    
    return (
        <div>
            <h1 className="main_header">Car Page</h1>
            <table id = 'car-table' className="table">
                <CarTableHeader />
                <CarTableRows />
            </table>
            <div id="buttons">                
                <button className="carButton" id='insert' onClick={insertCar}>Add new car</button>                
            </div>           
        </div>
    )
})
export default CarPage