import React, { Component } from 'react'
import { getGoing } from '../actions/inviteActions'
import { connect } from 'react-redux'

class Going extends Component {
	componentDidMount() {
		getGoing()	
	}

	render() {
		return (
			<div className="collection">
				{this.props.going.map((data, i) => (
					<div key={data.id}>
						<div>
							<img className="profile-image" src={data.image} alt=""/>
						</div>
						
						<div className="text-field">
							<div className="info">
								<span className="invitee-info">Name: {data.name}</span>
							</div>
							<div className="info">
								<span className="invitee-info">Phone: {data.phone}</span>
							</div>
							<div className="info">
								<span className="invitee-info">Email: {data.email}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		)
	}
}

function mapStateToProps(appState) {
	return {
		going: appState.going
	}
}

export default connect(mapStateToProps)(Going)