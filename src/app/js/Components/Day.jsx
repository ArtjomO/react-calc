import React from "react";

const smStyle = {
    position: "fixed"
}

export class Day extends React.Component {
    constructor(){
        super();
        this.state = {
            hover: true
        }
    }
    
    toggleState(){
        this.setState({
            hover: !this.state.hover
        })
        console.log(this.state.hover)
    }

    render(){
        return (
            <div className="day container" style={smStyle} onMouseEnter={this.toggleState.bind(this)} onMouseLeave={this.toggleState.bind(this)}>
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