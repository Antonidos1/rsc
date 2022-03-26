import React, { FC, useEffect, useState } from "react";
import TableHeader from "../table-header/TableHeader";
import TableRows from "../table-rows/TableRows";
import { observer } from "mobx-react";


const Table = observer(() => {
    return (
        <table className="table">
            <TableHeader/>
            <TableRows />
        </table>
    )
})


export default Table