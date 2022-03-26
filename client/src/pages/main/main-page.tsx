import React, { FC } from "react";
import { useNavigate } from "react-router-dom";


import './main-page.css'

const Main: FC = () => {
    let navigate = useNavigate()

    const butAct = async (event) => {
        event.preventDefault()
        const id = event.target.id
        if (id == 'car-but') {
            navigate('/car')
        }
        if (id == 'deal-but') {
            navigate('/deal')
        }
    }

    return (<div className = 'Main'>
        <h1>Main Page</h1>
        <div className="buttons">
            <button id='car-but' onClick={butAct}>Go to car page</button>
            <button id='deal-but' onClick={butAct}>Go to deal page</button>
        </div>
    </div>)    
}

export default Main