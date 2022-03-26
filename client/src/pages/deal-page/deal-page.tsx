import React, { FC } from "react";

interface Deal{
    id: number
    car_id: number,
    price: number,
    status: string
}
const DealPage: FC = () => {
    return (
        <div>
            <h1 className="main_header">Deal Page

            </h1>
        </div>
    )
}
export default DealPage