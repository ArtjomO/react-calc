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

    
   
    
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <span>{generateMonth(this.state.monthCount).dateToRender} </span>
                </div>

                <div className="cal-head row justify-content-center">
                    {this.days.map(day => <div className="cal-dayOfweek" key={day}> {day} </div>)}
                </div>

                <div className="cal-body row justify-content-center">
                    { generateMonth(this.state.monthCount).fullMonth.map(date =>  <Day key={shortid.generate()} date={date}/>) }
                </div>
            </div>
        )
    }
}