import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Car, CarStore } from "../../../store/CarStore";
import { toJS } from "mobx";
import DealStore from "../../../store/DealStore";

import './table-row.css'

const CarTableRows = observer((zz) => {
    const [store] = useState(() => new CarStore())
    const [deal] = useState(()=> new DealStore())
    const [modalActive, setModalActive]= useState(false)

    const delElem = (e) => {
        const id = e.target.id
        store.deleteCar(parseInt(id))
    }
    const putForSale = (e) => {
        const id = e.target.id
        deal.putUpForSale(id,'')
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
                    <td><button className={'deleteBut'}
                        id={'del/'+value.id.toString()}
                        key={'del/'+value.id.toString()}
                        onClick={delElem}>delete</button></td>
                    <td><button className={'deleteBut'}
                        id={'sel/' + value.id.toString}
                        key={'sel/' + value.id.toString}
                    onClick={putForSale}></button></td>
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