import ReactDOM from "react-dom";
import React from "react";
import { Header } from "./Components/Header.jsx";
import { Calendar } from "./Components/Calendar.jsx";
import firebase from 'firebase'; 
import fire from "./firebase/firebaseConfig.js"

class Login extends React.Component {
    constructor(){
        super();
        this.signIn = this.signIn.bind(this);
        this.state = {
            email: '',//test@kek.com
            password: ''//testkek
        }
    }

    signIn(){
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(user => console.log(user)).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }

    render(){
        return (
            <div>
                <h3>Pls login..</h3>
                <p>
                    <input type="email" onChange={ e => this.setState({email: e.target.value})}/>
                </p>
                <p>
                    <input type="password" onChange={ e => this.setState({password: e.target.value})}/>
                </p>
                <button onClick={this.signIn}>Go!</button>
            </div>
        )
    }
}


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
                // localStorage.setItem('user', user.uid)
            } else {
                this.setState({ user: null });
                // localStorage.removeItem('user');
            }
        })
    }
    
    render() {
        return (
            <div>
                { !this.state.user ? <Login/> : <Calendar/> }
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));