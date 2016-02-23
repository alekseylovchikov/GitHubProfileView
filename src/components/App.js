import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Profile from './github/Profile';
import RepoList from './github/RepoList';
import Search from './github/Search';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'alekseylovchikov',
            userData: [],
            userRepos: [],
            perPage: 5
        };
    }

    getUserData() {
        $.ajax({
            url: `https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    userData: data
                });
            }.bind(this),
            error: function(xhr, status, error) {
                this.setState({
                    username: null
                });

                alert(error);
            }.bind(this)
        });
    }

    getUserRepos() {
        $.ajax({
            url: `https://api.github.com/users/${this.state.username}/repos?per_page=${this.state.perPage}&client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}&sort=created`,
            dataType: 'json',
            cache: true,
            success: function(data) {
                this.setState({
                    userRepos: data
                });
            }.bind(this),
            error: function(xhr, status, error) {
                // alert(error);
            }.bind(this)
        });
    }

    handleFormSubmit(username) {
        this.setState({
            username: username
        }, function() {
            this.getUserData();
            this.getUserRepos();
        });
    }

    componentDidMount() {
        this.getUserData();
        this.getUserRepos();
    }

    render() {
        return (
            <div>
                <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
                <Profile {...this.state} />
            </div>
        );
    }
}

App.propTypes = { clientId: React.PropTypes.string, clientSecret: React.PropTypes.string };
App.defaultProps = { clientId: 'adddb4af303c471e768d', clientSecret: '5a59c2169bf5c620790f53ba9f64f5e73c0dbcd4' };