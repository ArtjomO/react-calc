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
        this.state.clicked ? target.style.visibility = 'hidden' : target.style.visibility = 'visible'
    }    

    render(){
        return (
            <div className="day" onClick={e => this.displayCard(e.target)}>
                <div className="date">
                    <span> {this.props.date} </span>
                </div>
                { this.state.clicked ? 
                    <div key="some" className="popup-card">
                        <div className="date">
                            <span> {this.props.date} </span>
                        </div>
                    </div> : null }
                <div className="shiftType"></div>
                <div className="shiftType"></div>
                <div className="shiftType"></div>
            </div>
        )
    }
}

// toggleState(){
    //     this.setState({
    //         hover: !this.state.hover
    //     })
    //     console.log(this.state.hover)
    // }
    // onMouseEnter={this.toggleState.bind(this)} onMouseLeave={this.toggleState.bind(this)}
