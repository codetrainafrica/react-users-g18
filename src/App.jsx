import React, { Component } from 'react';
import User from './components/User';
import UserForm from './components/UserForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    handleAddUser = (newUser) => {
        this.setState({ 
            users: [newUser, ...this.state.users] 
        })
    }

    render() {
        const users = this.state.users.map((user, index) => {
            return (
                <User user={user} index={index} />
            )
        })

        return (
            <div style={{ margin: "50px" }}>
                <UserForm addUser={this.handleAddUser} />
                {users}
            </div>
        );
    }
}

export default App;
