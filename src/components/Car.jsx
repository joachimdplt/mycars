import React from "react";

const Car = (props) => {
    console.log(props.children);
    return (
        <div style={{ backgroundColor: "pink", fontSize: "20px", fontWeight: "bold", padding: "10px", margin: "10px", borderRadius: "10px", width: "200px"}} >
            <p>Make : {props.children}</p>
            <p>Color : {props.color}</p>
        </div>
    )
}

export default Car;