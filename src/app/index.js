import ReactDOM from "react-dom";
import React from "react";


class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));