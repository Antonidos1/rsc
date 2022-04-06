import { observer } from "mobx-react";
import { useState } from "react";
import DealStore from "../../../store/DealStore";

const DealHeader = observer(() => {
    const [dealStore] = useState(() => new DealStore)

    let returnedHeader = []
    for (const value in dealStore.deals[0]) {
        returnedHeader.push(<th key={value}>{value}</th>)
    }
    returnedHeader.join()

    return (<thead>
        <tr>
            {returnedHeader}
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>)
})

export default DealHeader