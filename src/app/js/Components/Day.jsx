import React from "react";
import CSSTransitionGroup from 'react-transition-group';

export class Day extends React.Component {
    constructor(){
        super();
        this.state = {
            clicked: false
        }
    }
    
    displayCard(target){
        this.setState({
            clicked: !this.state.clicked
        });
    }    

    render(){
        return (
            <div className="day">
                <div key="some" className="popup-card" style={this.state.clicked ? cardStyle : null} onClick={e => this.displayCard(e.target)}>
                    <div className="date">
                        <span> {this.props.date} </span>
                        <div className="shiftType"></div>
                        <div className="shiftType"></div>
                        <div className="shiftType"></div>
                    </div>
                </div>
            </div>
        )
    }
}

const cardStyle = {
    width: 150,
    height: 170,
    borderRadius: 5,
    margin: 1,
    visibility: 'visible',
    position: 'relative',
    zIndex: 5
}

// toggleState(){
    //     this.setState({
    //         hover: !this.state.hover
    //     })
    //     console.log(this.state.hover)
    // }
    // onMouseEnter={this.toggleState.bind(this)} onMouseLeave={this.toggleState.bind(this)}
