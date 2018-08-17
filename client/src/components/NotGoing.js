import React, { Component } from 'react'
import { getNotGoing } from '../actions/inviteActions'
import { connect } from 'react-redux'

class NotGoing extends Component {
	componentDidMount() {
		getNotGoing()	
	}

	render() {
		return (
			<div className="collection">
				{this.props.notgoing.map((data, i) => (
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
		notgoing: appState.notgoing
	}
}

export default connect(mapStateToProps)(NotGoing)