import React from "react";
import { render } from "react-dom";
import firebase from "firebase";
import config from "./config"

import { Main } from "./components/Main";

class App extends React.Component {

    constructor(){
        super();
    }
    
      

    render() {
        var users = firebase.firestore().collection('users');
        
        users.get().then(snapshot => {

            snapshot.forEach(doc => {
          
              console.log( doc.data().name );    
              console.log( doc.data().lastName );
              console.log( doc.data().age );
          
            });
        });

        return(
            <h1>Amar</h1>
        );
    }
    
}

render(<App/>, window.document.getElementById("app"))