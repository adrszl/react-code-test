import React, { Component, Suspense } from 'react';
import Loader from './Loader';

const User = React.lazy(() => import('./User')); // Lazy-loaded

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users?page=1')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ users: data.data });
            })
        let tmpData = [];
        fetch('https://reqres.in/api/users?page=2')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                tmpData = this.state.users;
                data.data.forEach(user => {
                    tmpData.push(user);
                });
                this.setState({ users: tmpData });
            })
    }

    render() {
        let allUsers = '';
        if (this.state.users.length !== 0) {
            allUsers = this.state.users.map((user) => {
                return (
                    <Suspense key={`user ${user.first_name} ${user.last_name}`} fallback={<Loader loading={true} />}>
                        <User  
                            name={user.first_name} 
                            lastName={user.last_name} 
                            image={user.avatar} />
                    </Suspense>
                );
            });
        }
        return (
            <>
                {!this.props.loading ? 
                    <div className="container">
                        {allUsers}
                    </div>
                : null }
            </>
        );
    }
}

export default Users;