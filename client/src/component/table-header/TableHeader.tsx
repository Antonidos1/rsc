import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { CarStore } from "../../store/CarStore";

const TableHeader = observer(() => {
    const [store] = useState(() => new CarStore())
    
    let returnedHeader = []
    try { 
        for (const value in store.car[0]) {
            returnedHeader.push(<th key={value}>{value}</th>)
        }   
        returnedHeader.join()
    }
    catch {
        
    }

    return (<thead>
        <tr>
        {returnedHeader}
            <th></th>
        </tr>
    </thead>)
})

export default TableHeader