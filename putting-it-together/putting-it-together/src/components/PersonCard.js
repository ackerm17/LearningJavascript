import { Component } from "react";


class PersonCard extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    add = (e) => {
        this.setState({count: this.state.count + 1});
    }
    
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h3>Age: {age + this.state.count}</h3>
                <h3>Hair Color: {hairColor}</h3>
                <button onClick={this.add}>{firstName}'s Birthday</button>
            </div>
        );
    }
}

export default PersonCard