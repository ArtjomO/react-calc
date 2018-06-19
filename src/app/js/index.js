import ReactDOM from "react-dom";
import React from "react";
import { Header } from "./Components/Header.jsx";
import { Calendar } from "./Components/Calendar.jsx";
import { Login } from "./Components/Login.jsx"
import firebase from 'firebase'; 
import fire from "./firebase/firebaseConfig.js"

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            user: null

        }
    }

    componentWillMount(){

        fire.auth().onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                this.setState({ user: user });
                console.log("User is set")
            } else {
                this.setState({ user: false });
                console.log("No user")          
            }
        }).then(() => console.log('its a promise?'))   
    }
    
    render() {
        return ( 
            <div>
                { this.state.user === null ? 'loading...' : !this.state.user ? <Login /> : <Calendar/> } 
            </div> 
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));