import React from "react";
import {fire} from '../firebase/firebaseConfig.js'

export class Login extends React.Component {
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
            signUpPage: !this.state.signUpPage
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
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
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
                        <p>
                            <input type="email" value="test@kek.com" onChange={ e => this.setState({email: e.target.value})}/>
                        </p>
                        <p>
                            <input type="password" value="testkek"  onChange={ e => this.setState({password: e.target.value})}/>
                        </p>
                        <button onClick={this.signIn}>Go!</button>
                        <p>
                            <a href="#" onClick={this.showSignUpPage.bind(this)}>don't have an account?</a>
                        </p>
                    </div>
                :
                    <div>
                        <h3>Sign Up..</h3>
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
                            <a href="#" onClick={this.showSignUpPage.bind(this)}>login page</a> 
                        </p>
                    </div>
                }
            </div>
        )
    }
}