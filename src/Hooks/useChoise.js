import { useState } from "react";

export function useChoise(defaultChoise){
    const [value,setValue] = useState(defaultChoise);

    function onChange(e){
        setValue(e.target.value)
    }

    return{
        value,
        onChange
    }
}