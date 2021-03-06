import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/userActions'

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            gen: "",
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewUser(this.state);
        this.setState({
            name: "",
            email: "",
            gen: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="gen">Gen</label>
                    <input
                        type="number"
                        name="gen"
                        value={this.state.gen}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <button type="submit">Add user</button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = {
    addNewUser: addUser
}

export default connect(null, mapDispatchToProps)(UserForm);
