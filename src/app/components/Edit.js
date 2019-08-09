import React from "react";
import firebase from "firebase";
import config from "./Config";

export class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.users_ref = firebase.firestore().collection("users");
        this.key = this.props.match.params.key;
        this.state = {
            name: "",
            lastName: "",
            age: 0,
        }
    }

    componentDidMount() {
        this.users_ref.doc(this.key).get()
        .then((doc) => {
            const {name, lastName, age} = doc.data();
            this.setState({
                name,
                lastName,
                age
            })
        }).catch((error) => {
            console.log("Error occured while loading user data: " + error)
        })
    }

    handleChange(e) {
        var edited = this.state;
        edited[e.target.name] = e.target.value;
        this.setState({
            edited
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const  name = this.state.name;
        const  lastName = this.state.lastName;
        const age = this.state.age;

        this.users_ref.doc(this.key).set({
            name,
            lastName,
            age
        }).then((docRef) => {
            this.setState({
                name: "",
                lastName: "",
                age: 0,
            })
            this.props.history.push("/detail/"+this.key)
        }).catch((error) =>{
            console.log("Error updating user: " + error)
        })
    }

    render() {
        
        return(
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3">
                    <br/><br/>
                    <form onSubmit={this.handleSubmit.bind(this)} className="text-center">
                        <h1>Edit user:</h1>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} /> <br/><br/>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange.bind(this)} /> <br/><br/>
                        <input type="number" name="age" value={this.state.age} onChange={this.handleChange.bind(this)} /> <br/><br/>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
    
}
