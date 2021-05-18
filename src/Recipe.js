import React from "react";
import "./App.css";
const Recipe = ({title,image,calories}) => {
    return(

        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
};
export default Recipe;