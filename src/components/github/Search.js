import React, { Component } from 'react';

export default class Search extends Component {
    onSubmit(e) {
        e.preventDefault();

        let username = this.refs.username.value.trim();

        if (!username) {
            alert("Please enter user name!");
            return;
        }

        this.props.onFormSubmit(username);
        this.refs.username.value = "";
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <h4>Search GitHub Users</h4>
                    <p><input className="form-control" ref="username" type="text" placeholder="Search profile users" /></p>
                    <p><button type="submit" className="btn btn-success">Search</button></p>
                </form>
            </div>
        );
    }
}