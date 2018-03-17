import React from "react";

export class Day extends React.Component {

    
    render(){

        return (
            <div className="day">
                <div className="date"> {this.props.date} </div>
            </div>
        )
    }
}