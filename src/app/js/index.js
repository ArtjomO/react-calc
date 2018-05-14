import ReactDOM from "react-dom";
import React from "react";
import {Header} from "./Components/Header.jsx";
import {Calendar} from "./Components/Calendar.jsx";

class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Calendar/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));