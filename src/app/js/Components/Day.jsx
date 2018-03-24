import React from "react";

export class Day extends React.Component {

    
    render(){

        return (
            <div className="day container">
                <div className="date row  justify-content-end">
                    <span> {this.props.date} </span>
                </div>
                <div className="shiftType row"></div>
                <div className="shiftType row"></div>
                <div className="shiftType row"></div>
            </div>
        )
    }
}