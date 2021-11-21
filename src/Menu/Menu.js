import React from "react";
import styled from "styled-components";
import { foods } from "../Data/foodData";
import { Food, FoodGrid,FoodLable } from "./FoodGrid";

const MenuStyled = styled.div`
height : 1000px;
// background-color :red;
magin : 0px 400px 50px 20px;
`

const Menu = ()=>{

    return(
        <MenuStyled>
            <h1> Menu</h1>
            <FoodGrid>
            {
            foods.map(food =>(
                <Food img ={food.img}>
                   <FoodLable> {food.name}</FoodLable>
                </Food>
                
            ))
            }
            </FoodGrid>
        </MenuStyled>
    )
}

export default Menu;