import React from "react";
import moment from "moment";
import shortid from "shortid";
import {fire} from '../firebase/firebaseConfig.js';
import {generateMonth} from "./generateMonth";
import {Day} from "./Day.jsx";

export class Calendar extends React.Component {
    constructor() {
        super();

        this.state = {
            monthCount: 0,
            clicked: false
        }
    };

    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    switchMonth(plusMinus){
        this.setState({
            monthCount: this.state.monthCount + plusMinus
        })
    };

    displayCard(target){                
        this.setState({
            clicked: !this.state.clicked
        });
    }

    logout(){
        fire.auth().signOut()
    }

    render() {

        const generatedMonth = generateMonth(this.state.monthCount);
        console.log(generatedMonth.chosenMonthDateToRender, generatedMonth.todayDate(17))

        return (
            <div className="cal">
                <div className="cal-date">
                    <div className="arrow arrow-left" onClick={() => this.switchMonth(-1)}></div>
                    <div className="date">{generatedMonth.dateToRenderFormated} </div>
                    <div className="arrow arrow-right" onClick={() => this.switchMonth(1)}></div>
                </div>

                <div className="cal-head">
                    {this.days.map(day => <div className="cal-dayOfweek" key={shortid.generate()}> {day} </div>)}
                </div>

                <div className="cal-body">
                    { generatedMonth.fullMonth.map(date => <Day key={shortid.generate()} 
                                                                date={date} 
                                                                chosenMonthDateToRender={generatedMonth.chosenMonthDateToRender} 
                                                                today={generatedMonth.todayDate}/>) }
                </div>
                <button onClick={ this.logout }>Logout</button>
            </div>
        )
    }
}