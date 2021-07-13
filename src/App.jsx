import React, { Component } from 'react';
import UserList from './components/UserList';
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

        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <UserForm addUser={this.handleAddUser} />
                    </div>
                    <div className="col">
                        <UserList users={this.state.users} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
