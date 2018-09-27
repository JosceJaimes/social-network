import React, { Component } from 'react';
import firebase from 'firebase'

class LoginGoogle extends Component {
    constructor() {
      super();
      this.state = {
        user:null,
      };
    }
    componentWillMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user:user
            });
            // console.log(user)
        })
    }
    handleGoogleAuth = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} Ha iniciado seión con google `))
        .catch(error => console.log(error))       
    
}
    handleGoogleLogout = () =>{
        firebase.auth().signOut()
        .then(result => console.log(`${result.user}Su sesion ha finalizado`))
        .catch(error => console.log(error))
    }
    renderPerfil = ()=>{
        if(this.state.user){ 
            return( 
        <div>
                <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
                <button onClick={this.handleGoogleLogout}>Salir</button>
        </div>
            )
        }else{
            return( 
            <button onClick={this.handleGoogleAuth}>Google</button>
            )
        }
    }
    render(){
      return( 
        <div className="Login">
          <header className="Login-header">
              
              <p> { this.renderPerfil() }</p>
          </header>
        </div>
      );
     }
    }
    
    export default LoginGoogle;



    // if(!this.state.user){
    //     return(
    //         // console.log('blis')
    //          <div> 
    //              <img src={ this.state.user.photoURL} alt={this.state.user.displayName} /> 
    //          </div> 
    //     )