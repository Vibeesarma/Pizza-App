import { useState } from "react";

export function useQuentitiy(DefaultQuantity){

    const [value,setValue]=useState(DefaultQuantity || 1)

function onChange(e){
    if(+e.target.value >=1){
        setValue(1);
        return;
    }

    // this is like convert to integer format in java script
    setValue(+e.taget.value);
}

return{
    value,
    setValue,
    onChange
}

}