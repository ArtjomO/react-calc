import React from "react";
import moment from "moment";
import shortid from "shortid";

import {generateMonth} from "./generateMonth";
import {Day} from "./Day";

export class Calendar extends React.Component {
    constructor() {
        super();

        this.state = {
            monthCount: 0
        }
    };

    days = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Monday']

    switchMonth(plusMinus){
        this.setState({
            monthCount: this.state.monthCount + plusMinus
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="cal-date row justify-content-center">
                    <div className="arrow arrow-left" onClick={() => this.switchMonth(-1)}></div>
                    <div className="date">{generateMonth(this.state.monthCount).dateToRender} </div>
                    <div className="arrow arrow-right" onClick={() => this.switchMonth(1)}></div>
                </div>

                <div className="cal-head row justify-content-center">
                    {this.days.map(day => <div className="cal-dayOfweek" key={shortid.generate()}> {day} </div>)}
                </div>

                <div className="cal-body row justify-content-center">
                    { generateMonth(this.state.monthCount).fullMonth.map(date =>  <Day key={shortid.generate()} date={date}/>) }
                </div>
            </div>
        )
    }
}