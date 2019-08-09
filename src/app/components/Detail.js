import React from "react";
import firebase from "firebase";
import config from "./Config";

export class Detail extends React.Component {

    constructor() {
        super();
        this.user_ref = firebase.firestore().collection("users");
        this.state = {
            name: "",
            lastName: "",
            age: 0,
        }
    }

    componentWillMount() {
        this.user_ref
        .doc(this.props.match.params.key).get()
        .then(docRef =>{
            const {name, lastName, age} = docRef.data();
            this.setState({
                name,
                lastName,
                age
            })
        }).catch((error) => {
            console.log("error: " + error)
        })   
    }

    render(){
        
        return(
            <div className="col-6 offset-3">
                <h1>Name : {this.state.name}</h1>
                <h2>Last name : {this.state.lastName}</h2>
                <h2>Age : {this.state.age}</h2>
            </div>
        )
    }
    
}
