import React, { Component } from 'react'
import { getNotGoing } from '../actions/inviteActions'
import { connect } from 'react-redux'

class NotGoing extends Component {
	componentDidMount() {
		getNotGoing()	
	}

	render() {
		return (
			<div>
				{this.props.notgoing.map((data, i) => (
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
		notgoing: appState.notgoing
	}
}

export default connect(mapStateToProps)(NotGoing)