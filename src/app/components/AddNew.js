import React from "react";
import firebase from "firebase";
import config from "./Config";

export class AddNew extends React.Component {

    constructor() {
        super();
        this.users_ref = firebase.firestore().collection("users");
    }

    handleSubmit(e){
        e.preventDefault();
        
        const  name = e.target.name.value;
        const  lastName = e.target.lastName.value;
        const age = e.target.age.value;
    
        this.users_ref.add({
            name,
            lastName,
            age
        }).then((docRef) => {
            console.log("User added!");
            this.props.history.push("/detail/" + docRef.id);
          })
          .catch((error) => {
              console.log("Error writing document:" + error)
          })
        
    }

    render() {
        
        return(
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3">
                    <br/><br/>
                    <form onSubmit={this.handleSubmit.bind(this)} className="text-center">
                        <h1>Add new user:</h1>
                        <input type="text" name="name" id="" placeholder="Name"/> <br/><br/>
                        <input type="text" name="lastName" id="" placeholder="Last Name"/> <br/><br/>
                        <input type="number" name="age" id="" placeholder="Age"/> <br/><br/>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
    
}
