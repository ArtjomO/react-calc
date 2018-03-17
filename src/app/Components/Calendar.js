import React from "react";
import moment from "moment";
import shortid from "shortid";

import {Day} from "./Day";

export class Calendar extends React.Component {

    days = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Monday']
    daysInMonth = [];

    monthCount = 3;
    renderMonth (month){
        var fullMonth = [];
        
        var today = new Date();
        var d = today.getDate();
        var y = today.getFullYear();
        var m = today.getMonth() + month;
        var dateToRender = new Date(y, m, d);
        var lastM = m - 1;
        var daysInCurMonth = new Date(y, m +1, 0).getDate();

        var fDayOfMonth = new Date(y, m, 1).getDay();
        var daysInLastMonth = new Date(y, lastM +1, 0).getDate();
        var dateFromWhichToStartCurMonth = new Date(y, m, -fDayOfMonth +1 ).getDate();

        function LastM(){
            if (dateFromWhichToStartCurMonth === 1) {
                return m;
            } else {return lastM;}
        }

        for (var i = 0; i < 35; i++){
            var dates = new Date(y, LastM(), dateFromWhichToStartCurMonth +i).getDate();
            fullMonth.push(dates);
        };

        return {
            fullMonth: fullMonth
        }
    }
    
    render() {
        return (
            <div className="container">
                <div className="cal-head row justify-content-center">
                    {this.days.map(day => <div className="cal-dayOfweek" key={day}> {day} </div>)}
                </div>

                <div className="cal-body row justify-content-center">
                    { this.renderMonth(this.monthCount).fullMonth.map(date =>  <Day key={shortid.generate()} date={date}/>) }
                </div>
            </div>
        )
    }
}

//See what is happening in renderMonth function
// console.log('sected month: '+ m + '\n' +
// 'days in last month: ' + daysInLastMonth + '\n' +
// 'days in this month: ' + daysInCurMonth + '\n' +
// 'first day of month: ' + fDayOfMonth + '\n' +
// 'last day of the month: ' + "lDayOfMonth" + '\n' +
// 'date from which array starts: ' + (dateFromWhichToStartCurMonth) + '\n' + 
// 'How many dates to add in the end of array: ' + "lastDatesOfTheMonth");