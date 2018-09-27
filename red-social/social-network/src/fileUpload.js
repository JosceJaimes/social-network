
import React, { Component } from 'react';
import firebase from 'firebase';


class FileUpload extends Component{
    constructor() {
        super();
        this.state = {
            uploadValue: 0,
            picture: null
        };
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload(e){
        const file = e.target.file[0];
        const storageRef = firebase.storage().ref(`/fotos/${file.name}`)
        const task = storageRef.put(file);

        task.on('state_changed', snapshot => {
            let porcentage = (snapshot.bytesTransfered / snapshot.totalBytes) * 100;
            this.setState({
                uploadValue:porcentage
            })
         })
    }
    render(){
        return( 
            <div>
                <progress value={this.state.uploadValue} max="100px"></progress>
                <br/>
                <input type="file" onChange={this.handleUpload}/>
                <br/>
                <img width = "320" src={this.state.picture} />
            </div>
        );
    }
}

export default FileUpload;