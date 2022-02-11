import { useState } from "react";

export function useOpenFood(){

    const [OpenFood,setOpenFood] = useState();
   
    return{
        OpenFood,
        setOpenFood
    }
}
