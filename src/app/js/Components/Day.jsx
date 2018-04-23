import React from "react";


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
            <div className="day"  onMouseEnter={this.toggleState.bind(this)} onMouseLeave={this.toggleState.bind(this)}>
                <div className="date">
                    <span> {this.props.date} </span>
                </div>
                <div className="shiftType"></div>
                <div className="shiftType"></div>
                <div className="shiftType"></div>
            </div>
        )
    }
}