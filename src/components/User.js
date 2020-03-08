import React, { Component } from 'react';
import './User.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    render() {
        return(
            <div className="media user mx-auto py-4">
                <img src={this.props.image} className="mr-3 user-thumbnail" alt={`${this.props.name} ${this.props.lastName}`} />
                <div className="media-body my-auto">
                    <h5>{this.props.name} {this.props.lastName}</h5>
                </div>
            </div>
        )
    }
}

export default User;