import React from "react";
import moment from "moment";
import shortid from "shortid";

import {generateMonth} from "./generateMonth"
import {Day} from "./Day";

export class Calendar extends React.Component {

    days = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Monday']
    daysInMonth = [];

    monthCount = 3;
   
    
    
    render() {
        return (
            <div className="container">
                <div className="cal-head row justify-content-center">
                    {this.days.map(day => <div className="cal-dayOfweek" key={day}> {day} </div>)}
                </div>

                <div className="cal-body row justify-content-center">
                    { generateMonth(this.monthCount).fullMonth.map(date =>  <Day key={shortid.generate()} date={date}/>) }
                </div>
            </div>
        )
    }
}

//See what is happening in generateMonth function
// console.log('sected month: '+ m + '\n' +
// 'days in last month: ' + daysInLastMonth + '\n' +
// 'days in this month: ' + daysInCurMonth + '\n' +
// 'first day of month: ' + fDayOfMonth + '\n' +
// 'last day of the month: ' + "lDayOfMonth" + '\n' +
// 'date from which array starts: ' + (dateFromWhichToStartCurMonth) + '\n' + 
// 'How many dates to add in the end of array: ' + "lastDatesOfTheMonth");