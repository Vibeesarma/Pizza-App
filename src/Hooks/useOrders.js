import { useState } from "react";

export function useOrders(){
const [order,serOrder]=useState([])

    return{
        order,
        serOrder
    }

}