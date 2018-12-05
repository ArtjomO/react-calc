import moment from "moment";

export function generateMonth(month) {
    var fullMonth = [];
    
    var today = new Date();
    var d = today.getDate();
    var y = today.getFullYear();
    var m = today.getMonth() + month;
    var dateToRender = new Date(y, m, d);
    var lastM = m - 1;
    var daysInCurMonth = new Date(y, m +1, 0).getDate();

    //another piece of magic... if week day, of first date of month is 0 (Sunday), in daysInLastMonth nothing will be substracted from current month beginning, thus reulting
    //to stay on current month rather than swithch backwards to previous and count last dates of last month for rendering.
    var fDayOfMonth = new Date(y, m, 1).getDay() === 0 ? 7 : new Date(y, m, 1).getDay()



    var daysInLastMonth = new Date(y, lastM +1, 0).getDate();
    // -fDayOfMonth  +2 : it fucking works, god knows why.. First date of month is displayed in correct week day. Play to move dates <-- || -->
    var dateFromWhichToStartCurMonth = new Date(y, m, -fDayOfMonth  +2).getDate(); //

    function LastM(){
        if (dateFromWhichToStartCurMonth === 1) {
            return m;
        } else {return lastM;}
    }

    for (var i = 0; i < 42; i++){
        var dates = new Date(y, LastM(), dateFromWhichToStartCurMonth +i).getDate();
        fullMonth.push(dates);
    };

    //See what is happening in generateMonth function
    console.log('sected month: '+ m + '\n' +
    'days in last month: ' + daysInLastMonth + '\n' +
    'days in this month: ' + daysInCurMonth + '\n' +
    'first day of month: ' + fDayOfMonth + '\n' +
    'last day of the month: ' + "lDayOfMonth" + '\n' +
    'date from which array starts: ' + (dateFromWhichToStartCurMonth) + '\n' + 
    'How many dates to add in the end of array: ' + 'lastDatesOfTheMonth');

    return {
        fullMonth: fullMonth,
        todayDate: date => new Date(y, today.getMonth(), date).toDateString(),
        chosenMonthDateToRender: dateToRender.toDateString(),
        dateToRenderFormated: moment(dateToRender).format("Do MMMM YYYY")
    }
};

//See what is happening in generateMonth function
// console.log('sected month: '+ m + '\n' +
// 'days in last month: ' + daysInLastMonth + '\n' +
// 'days in this month: ' + daysInCurMonth + '\n' +
// 'first day of month: ' + fDayOfMonth + '\n' +
// 'last day of the month: ' + "lDayOfMonth" + '\n' +
// 'date from which array starts: ' + (dateFromWhichToStartCurMonth) + '\n' + 
// 'How many dates to add in the end of array: ' + "lastDatesOfTheMonth");
