import React, { Component } from 'react'
import { getGoing } from '../actions/inviteActions'
import { connect } from 'react-redux'

class Going extends Component {
	componentDidMount() {
		getGoing()	
	}

	render() {
		return (
			<div>
				{this.props.going.map((data, i) => (
					<div key={data.id}>
						<div>
							<img src={data.image} alt=""/>
						</div>
						
						<div>
							<div>
								<span>Name: {data.name}</span>
							</div>
							<div>
								<span>Phone: {data.phone}</span>
							</div>
							<div>
								<span>Email: {data.email}</span>
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