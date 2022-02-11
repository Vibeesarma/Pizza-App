import { useState } from "react";

export function useToppings(defaultTopping){

    const[toppings,setToppings] = useState(
        defaultTopping|| getDefaultToppings()
    );

    function checkToppings(index){
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked
        setToppings(newToppings)
    }

    return{
        checkToppings,
        toppings
    }

}

function getDefaultToppings(){
    return toppingList.map(topping =>({
        name: toppings,
        checked: false
    }))
}

const toppingList =[
    "Extrachhet",
    "pepper",
    "saus",
    "onoipo",
    "ham",
    "pineapple",
    "jam",
    "mushroom",
    "bannana",
    "tapping"
]