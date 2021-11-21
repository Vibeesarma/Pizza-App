
import React from "react";
import NavBar from "./NavBar/NavBar";
import GlobalStyle from "./Style/GlobalStyle";
import Menu from "./Menu/Menu";
import { Banner } from "./Banner/Banner";
import { Count } from "./Practise/count";

function App(){
    return(
    
        <div>
        <GlobalStyle/>
        {/* <h1>Hello World </h1> */} 
        <NavBar/>
        <Banner/>
        <Menu/>
        <Count/>
        </div>
    )
}

export default App;