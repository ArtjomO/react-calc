import React from "react";
import moment from "moment";
import shortid from "shortid";

import {generateMonth} from "./generateMonth";
import {Day} from "./Day.jsx";

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
    };

    render() {
        return (
            <div className="cal">
                <div className="cal-date">
                    <div className="arrow arrow-left" onClick={() => this.switchMonth(-1)}></div>
                    <div className="date">{generateMonth(this.state.monthCount).dateToRender} </div>
                    <div className="arrow arrow-right" onClick={() => this.switchMonth(1)}></div>
                </div>

                <div className="cal-head">
                    {this.days.map(day => <div className="cal-dayOfweek" key={shortid.generate()}> {day} </div>)}
                </div>

                <div className="cal-body">
                    { generateMonth(this.state.monthCount).fullMonth.map(date => <Day key={shortid.generate()} date={date}/>) }
                </div>
            </div>
        )
    }
}