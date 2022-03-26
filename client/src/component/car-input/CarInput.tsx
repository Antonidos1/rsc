import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarService from "../../service/CarService";
import { Car } from "../../store/CarStore";

import './car-input.css'
const CarInput = () => {
    const [mark, setMark] = useState('');
    const [model, setModel] = useState('');
    const [hp, setHp] = useState('');
    const [year, setYear] = useState('');
    const [country, setCountry] = useState('');    
    let navigate = useNavigate()

    const onChangeFunc = (event) => {
        switch (event.target.id) {
            case 'mark': {
                setMark(event.target.value)               
                break;
            }
            case 'model': {
                setModel(event.target.value)                
                break;
            }
            case 'hp': {
                setHp(event.target.value)                
                break;
            }
            case 'year': {
                setYear(event.target.value)                
                break;
            }
            case 'country':{
                setCountry(event.target.value)                
                break;
            }
        }
    }


    const saveCar = () => { 
        const car: Car = {            
            mark: mark,
            model: model,
            horsepower: parseInt(hp),
            year: parseInt(year),
            country:country
        }
        console.log(car);
        CarService.inputCar(car)
    }

    return (<div className="inputCar">
        <h1 className="main_header">Insert new car  </h1>
        <button id='back_but' value='Back' onClick={() => { navigate('/car') }}>Back</button>
        <div className='inputs'>
            <label>Mark</label>
            <input id='mark' type={'text'} placeholder="Ford" value={mark} onChange={onChangeFunc}></input>
            <label>Model</label>
            <input id='model' type={'text'} placeholder="Mustang" value={model} onChange={onChangeFunc}></input>
            <label>Horsepower</label>
            <input id='hp' type={'text'} placeholder="500" value={hp} onChange={onChangeFunc}></input>
            <label>Year of release</label>
            <input id='year' type={'text'} placeholder="2018" value={year} onChange={onChangeFunc}></input>
            <label>Country</label>
            <input id='country' type={'text'} placeholder="USA" value={country} onChange={onChangeFunc}></input>
        </div>
        <button id='save_but' value='Save' onClick={saveCar}>Save Car</button>
    </div>)
}

export default CarInput