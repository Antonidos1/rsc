import React, { FC } from "react";
import DealHeader from "../../component/deal-table/deal-header/DealHeader";
import DealRows from "../../component/deal-table/deal-rows/DealRows";

interface Deal{
    id: number
    car_id: number,
    price: number,
    status: string
}
const DealPage: FC = () => {
    return (
        <div>
            <h1 className="main_header">Deal Page</h1>
                <table id='deal-table' className="table">
                    <DealHeader />
                    <DealRows/>
            </table>
            
        </div>
    )
}
export default DealPage