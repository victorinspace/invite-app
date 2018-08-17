import React, { Component } from 'react'
import { getUser, changeStatusGoing, changeStatusNotGoing, getGoing, getNotGoing } from '../actions/inviteActions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Invite extends Component {
	state = {
		status: []
	}

	componentDidMount() {
		getUser()
		getGoing()
		getNotGoing()	
	}

	going = (e) => {
		changeStatusGoing(e.target.value, 'going')
	}

	notGoing = (e) => {
		changeStatusNotGoing(e.target.value, 'notgoing')
	}

	render() {
		return (
			<div className="overall-container">

				<div className="going-notgoing">
					<Link to="/going">
						Going: {this.props.going.length}
					</Link>
					<Link to="/notgoing">
						Not Going: {this.props.notgoing.length}
					</Link>
				</div>

				<div className="user-container">
					<div>
						<img className="profile-image" src={this.props.user.image} alt=""/>
					</div>
					
					<div className="text-field">
						<div className="info">
							<span className="invitee-info">
								Name: {this.props.user.name}
							</span>
						</div>
						<div className="info">
							<span className="invitee-info">
								Phone: {this.props.user.phone}
							</span>
						</div>
						<div className="info">
							<span className="invitee-info">
								Email: {this.props.user.email}
							</span>
						</div>
					</div>

					<div className="button-field">
						<button value={this.props.user.id} onClick={this.notGoing} className="no-invite">
							<i className="fa fa-ban"></i>
						</button>
						<button value={this.props.user.id} onClick={this.going} className="invite">
							<i className="fa fa-check"></i>
						</button>
					</div>
				</div>

			</div>
		)
	}
}

function mapStateToProps(appState) {
	return {
		user: appState.user,
		going: appState.going,
		notgoing: appState.notgoing
	}
}

export default connect(mapStateToProps)(Invite)
