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
            signUpPage: false,
            email: 'test@kek.com',//test@kek.com
            password: 'testkek',//testkek
            passRepeat: ''
        }
    }

    showSignUpPage(){
        console.log(this.state.signUpPage)
        this.setState({
            signUpPage: true
        })
    }

    signIn(){
        console.log('button pressed')
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(user => console.log(user + 'request sent')).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode + errorMessage)
            // ...
          });
    }

    signUp(){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }

    render(){
        return (
            <div>
                {!this.state.signUpPage ?
                        
                    <div>    
                        <h3>Pls login..</h3>
                        <p>
                            <input type="email" value="test@kek.com" onChange={ e => this.setState({email: e.target.value})}/>
                        </p>
                        <p>
                            <input type="password" value="testkek" onChange={ e => this.setState({password: e.target.value})}/>
                        </p>
                        <button onClick={this.signIn}>Go!</button>
                        <p>
                            <a href="#" onClick={this.showSignUpPage.bind(this)}>don't have an account?</a>
                        </p>
                    </div>
                :
                    <div>
                        
                        <p>
                            <input type="email" value="test@kek.com" onChange={ e => this.setState({email: e.target.value})}/>
                        </p>
                        <p>
                            <input type="password" value="testkek" onChange={ e => this.setState({password: e.target.value})}/>
                        </p>
                        <p>
                            <input type="password" value="testkek" onChange={ e => this.setState({passRepeat: e.target.value})}/>
                        </p>
                        <button onClick={this.signUp}>Sign up!</button>
                        <p>
                            <a href="#" onClick={this.setState({signUp: false})}>login page</a> 
                        </p>
                    </div>
                }
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
                console.log("User is set")
            } else {
                this.setState({ user: null });
                console.log("No user")          
            }
        })   
    }
    
    render() {
        return (      
            <div>
                { !this.state.user ? <Login /> : <Calendar/> }
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));