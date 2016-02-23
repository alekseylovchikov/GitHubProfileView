import React, { Component } from 'react';

import RepoList from './RepoList';

export default class Profile extends Component {
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">{this.props.userData.name}</h3>
				</div>
				<div className="panel-body">
					<div className="row">
						<div className="col-md-4">
							<img src={this.props.userData.avatar_url} className="thumbnail" style={{width: '100%'}} />
						</div>
						<div className="col-md-8">
							<div className="row">
								<div className="col-md-4">
									<p><span className="label label-primary">Public repositories: {this.props.userData.public_repos}</span></p>
									<p><span className="label label-success">Public gists: {this.props.userData.public_gists}</span></p>
									<p><span className="label label-info">Followers: {this.props.userData.followers}</span></p>
									<p><span className="label label-danger">Following: {this.props.userData.following}</span></p>
								</div>
								<div className="col-md-8 col-xs-12">
									<ul className="list-group pull-left">
										<li className="list-group-item"><strong>Username: </strong>{this.props.userData.login}</li>
										<li className="list-group-item"><strong>Location: </strong>{this.props.userData.location}</li>
										<li className="list-group-item"><strong>Email: </strong>{this.props.userData.email}</li>
									</ul>
								</div>
								<div className="col-md-12">
									<a href={this.props.userData.html_url} target="_blank" className="btn btn-primary">View Profile</a>
								</div>
							</div>
						</div>
                        <div className="col-md-12">
                            <h4>User Repositories</h4>
                            <RepoList userRepos={this.props.userRepos} />
                        </div>
					</div>
				</div>
			</div>
		);
	}
}