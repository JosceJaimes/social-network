import React, { Component } from 'react';
// import firebase from 'firebase';
// import FileUpload from './fileUpload';
import LoginGoogle from './components/LoginGoogle';
import Autentification from './components/Autentification'
import LoginFacebook from './components/LoginFacebook'
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="App-header">
        </div>
        <div className = " form-group "> 
        <Autentification />
        <LoginGoogle />
        <LoginFacebook />

            </div>
        </div>
    )
  }
}



// class App extends Component {
//   constructor(){
//     super();
//     this.state ={
//       user: null,
//     };
//     this.handleAuth = this.handleAuth.bind(this);
//     this.handleLogouth = this.handleLogouth.bind(this);
//   }
//   componentWillMount(){
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({
//         user: user
//       }); 
//     })
//   }
//   handleAuth(){
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//     .then(result => console.log(`${result.email} ha iniciado sesion`))
//     .catch(error => console.log(error)
//     )
//   }
//   handleLogouth(){
//     firebase.auth().signOut()
//     .then(result =>console.log(`${result.user.email} ha finalizado sesion`))
//     .catch(error => console.log(error))
//   }
// renderLoginButton(){
//   if(this.state.user){
// return(
//   <div>
//     <img src={ this.state.user.photoURL} alt={ this.state.user.displayName} />
//     <p>Bienvenido {this.state.user.displayName}!</p>
//     <button onClick={this.handleLogouth}>Salir</button>
//     <FileUpload />
//   </div>
// )
//   }else{
//     return(
//       <button onClick={this.handleAuth}>Google</button>
//      )

//   }

// }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Bienvenido tu red social</h1>
//         </header>
//         <p className="App-intro">
//           { this.renderLoginButton() }
//         </p>
//       </div>
//     );
//   }
// }



export default App;



