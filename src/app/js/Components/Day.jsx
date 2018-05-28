import React from "react";
import CSSTransitionGroup from 'react-transition-group';
import generateMonth from './generateMonth';

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
                    <div className="date" style={this.props.chosenMonthDateToRender === this.props.today(this.props.date) ? {backgroundColor: 'rgb(15,230,20,0.4)'} : null}>
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
    height: 150,
    width: 170,
    borderRadius: 5,
    boxShadow: '0px 0px 5px 2px rgb(90, 159, 223)',
    position: 'relative',
    left: -10,
    top: -5,
    zIndex: 1,
    transition: 'left 0.3s, top 0.3s, width 0.3s, height 0.3s, border-radius, z-index 0s',
}
