import styled from "styled-components";
import {Title} from "../Style/title";

export const FoodGrid = styled.div`
    display :grid;
    grid-template-columns :1fr 1fr;
    gap : 40px;
    
`

export const Food = styled.div`
height :100px;
padding :10px;
background-image : ${({img})=>`url(${img})`}
// background-size :cover;
// background-positon : center;
// filter : contrast(75%);

`

export const FoodLable = styled(Title)`
    position:absolute;
    background-color:white;
    background-size :cover;
    background-positon : center;
    filter : contrast(75%);
    
`