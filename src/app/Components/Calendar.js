import React from "react";

export class Calendar extends React.Component {

    days = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Monday']
    daysInMonth = [];
    
    render() {
        return (
            <div className="container">
                <div className="cal-head row justify-content-center">
                    {this.days.map(day => <div className="cal-day" key={day}> {day} </div>)}
                </div>

                <div className="cal-body row justify-content-center">
                    {/* need to render days here. Push days in dayInMonthArray */}
                </div>
            </div>
        )
    }
}