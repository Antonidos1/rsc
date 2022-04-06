import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Car, CarStore } from "../../../store/CarStore";
import { toJS } from "mobx";
import DealStore from "../../../store/DealStore";

import './table-row.css'

const CarTableRows = observer(() => {
    const [store] = useState(() => new CarStore())
    const [deal] = useState(()=> new DealStore())

    const delElem = (e) => {
        const id = e.target.id.split('/').pop()
        store.deleteCar(parseInt(id))
    }
    const putForSale = (e) => {
        console.log(e.target.id)
        const id = parseInt(e.target.id.split('/').pop())
        let price: number
        do {
            let priceStr = prompt('Input price')
            if (priceStr == null) return;
            price = parseInt(priceStr)
        } while (!price)
        deal.putUpForSale(id,price)
    }
    
    function setRow() {
        let rows
        try {
            rows = store.cars.map(value => {
                let row = Object.values(value).map((item) => {
                    return <td key={`${value.id}/${item}`}>{item}</td>
                })
                return <tr key={value.id}>
                    {row}
                    <td><button className={'tableBut'}
                        id={`del/${value.id}`}
                        key={`del/${value.id}`}
                        onClick={delElem}>delete</button></td>
                    <td><button className={'tableBut'}
                        id={`sell/${value.id}`}
                        key={`sell/${value.id}`}
                    onClick={putForSale}>To Sell</button></td>
                </tr>
            })

        } catch { }
        return rows
    }


    return (
        <tbody>
            {setRow()}
        </tbody>
    )
})


export default CarTableRows