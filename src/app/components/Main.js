import React from "react";
import firebase from "firebase";
import config from "./Config";
import { BrowserRouter as Route, Link } from "react-router-dom";

export class Main extends React.Component {
    
    constructor(){
        super();
        this.users_ref = firebase.firestore().collection('users');  
        this.state = {
            users : []
        }
    }
    
    componentDidMount() {
        this.users_ref.onSnapshot((querySnapshot) => {
            var users = [];
            querySnapshot.forEach(doc => {
                var {name, lastName, age} = doc.data();
                users.push({
                    key: doc.id,
                    name,
                    lastName,
                    age,
                })
            })
            this.setState({
                users
            })
        });
    }
    
    
    render() {

        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-xl-offset-1">
                            <h1 className="text-center">List of all users:</h1>
                            <hr/>
                        </div>
                    </div>
                </div>
                
                {this.state.users.map((user,i) => 
                    <div className="container" key={user.key}>
                        <div className="row">
                            <div className="col-6">
                            <h2>Name:  {user.name}</h2>
                            <h3>Last name:{user.lastName}</h3>
                            <h3>Age: {user.age}</h3> 
                            <Link to={`/detail/${user.key}`} className="btn btn-link">Detail</Link>
                            <hr/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
        );
    }
    
}