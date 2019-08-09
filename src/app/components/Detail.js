import React from "react";
import firebase from "firebase";
import config from "./Config";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.user_ref = firebase.firestore().collection("users");
        this.key = this.props.match.params.key;
        this.state = {
            name: "",
            lastName: "",
            age: 0,
        }
    }

    componentDidMount() {
        this.user_ref
        .doc(this.key).get()
        .then(docRef => {
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

    handleDelete() {
        this.user_ref.doc(this.key).delete()
        .then(() => {
            console.log("User deleted!");
            this.props.history.push("/");
        })
        .catch((error) => {
            console.log("Error occured while deleting: " + error)
        })
    }

    handleEdit() {
        this.props.history.push("/edit/"+ this.key)
    }

    render(){
        
        return(
            <div className="col-6 offset-3">
                <h1>Name : {this.state.name}</h1>
                <h2>Last name : {this.state.lastName}</h2>
                <h2>Age : {this.state.age}</h2>
                <hr/>
                <button className="btn btn-danger" onClick={() => this.handleDelete() }>Delete user</button> <br/><br/>
                <button className="btn btn-warning" onClick={() => this.handleEdit() }>Edit user</button> 
            </div>
        )
    }
    
}
