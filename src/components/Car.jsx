import React from "react";

const Car = ({children, color}) => {
    return (
        <div style={{ backgroundColor: "pink", fontSize: "20px", fontWeight: "bold", padding: "10px", margin: "10px", borderRadius: "10px", width: "200px"}} >
            <p>Make : {children}</p>
            <p>Color : {color}</p>
        </div>
    )
}

export default Car;