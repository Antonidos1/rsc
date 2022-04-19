import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Car, CarStore } from "../../../store/CarStore";
import { toJS } from "mobx";
import DealStore from "../../../store/DealStore";


const DealRows = observer(() => {
    const [dealStore] = useState(() => new DealStore())
    const [carStore] = useState(() => new CarStore())


    const updatePrice = (e) => {
        let id = e.target.id.split('/').pop()
        let price = parseInt(prompt('Insert new price'))
        dealStore.updatePrice(parseInt(id),price)
    }

    const updateStatus = (e) => {
        
        let item = e.target.id
        let [act, id] = item.split('/') 
        dealStore.updateStatus(id, act)
        let butt1 = document.getElementById(`sold/${id}`)
        let butt2 = document.getElementById(`cancelled/${id}`)
        let butt3 = document.getElementById(`updPrice/${id}`)
        for (let but of [butt1, butt2]) {
            but.setAttribute('disabled', 'true')
        }
    }

    const showCar = (e) => {
        let id = e.target.id
        id = (id).split('/').pop()
        let car = carStore.cars.find(value => value.id == id)
        let str = Object.keys(car).reduce((summary, value) => {
            return summary += `${value} = ${car[value]}\n`
        }, '')
        alert(str);
    }

    function setRow() {
        let rows
        rows = dealStore.deals.map(value => {
            let row = Object.keys(value).map((item) => {
                if (item == 'car_id') {
                    return <td key={`${item}/${value.id}`}>
                        <button className='tableBut' id={`show/${value[item]}`} onClick={showCar}>{value[item]}</button></td>
                } else {
                    return <td key={`${value.id}/${value[item]}`}>{value[item]}</td>
                }
            })           

            return (<tr key={value.id}>
                {row}
                <td>
                    <button className={'tableBut'}
                        id={`sold/${value.id}`}
                        key={`sold/${value.id}`}
                        disabled={value.status != `for_sale`}
                        onClick={updateStatus}>sold</button>
                </td>
                <td>
                    <button className={'tableBut'}
                        id={`cancelled/${value.id}`}
                        key={`cancelled/${value.id}`}
                        disabled = {value.status != `for_sale`}
                        onClick={updateStatus}>cancell</button>
                </td>
                <td>
                <button className="tableBut"
                    id={`updPrice/${value.id}`}
                        key={`updPrice/${value.id}`}
                        disabled={value.status != `for_sale`}
                    onClick={updatePrice}>update price</button>
                </td>
            </tr>
            )
        })
        return rows
    }

    return (
        <tbody>
            {setRow()}
        </tbody>
    )
})



    export default DealRows