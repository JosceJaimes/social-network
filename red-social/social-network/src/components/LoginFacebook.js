import React, { Component } from 'react';
import firebase from 'firebase';


class LoginFacebook extends Component {
    constructor(){
        super();
        this.state={
            user:null
        }
    }
    componentWillMount(){
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({
                user:user
            })
        })
    }
handleFacebooklogin =()=>{
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} Ya se encuentra iniciada la sesión`))
    .catch(error => console.log(error))

}
handleFacebooklogout=()=>{
    firebase.auth().signOut()
    .then(result => console.log(`${result.user} su sesion ha finalizado`))
    .catch(error => console.log(error))

}


autentification =()=>{
    if(this.state.user){
        return(
            <div>
            <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
            <button onClick={this.handleFacebooklogout}>Salir</button>
            </div>
        )
    }else{
        return( 
        <div>
        <button onClick={this.handleFacebooklogin}>Facebook</button>
        </div>
        )
    }

}
    
    render(){
        return( 
            <div className = "LoginFacebook">
             <p>
              { this.autentification() }
             </p>
            </div>

        )
    }
}

export default LoginFacebook;