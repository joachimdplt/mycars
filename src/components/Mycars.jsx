import React, { Component } from "react";
import Car from "./Car";

class Mycars extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <Car color="red">Ford</Car>
                <Car color="blue">Mercedes</Car>
                <Car color="">BMW</Car>

            </div>
        )
    }
}

export default Mycars;