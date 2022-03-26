import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Car, CarStore } from "../../store/CarStore";
import { toJS } from "mobx";

import './table-row.css'

const TableRows = observer((zz) => {
    const [store] = useState(() => new CarStore())

    const delElem = (e) => {
        const id = e.target.id
        store.deleteCar(parseInt(id))
    }

    function setRow() {
        let rows
        try {
            rows = store.car.map(value => {
                let row = Object.values(value).map((item) => {
                    return <td key={`${value.id}/${item}`}>{item}</td>
                })
                return <tr key={value.id}>
                    {row}
                    <td><button className={'deleteBut'}
                        id={value.id.toString()}
                        key={value.id.toString()}
                        onClick={delElem}>delete</button></td>
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


export default TableRows