import React, { Component } from 'react'
import axios from 'axios'

class Invite extends Component {
	state = {
		id: '',
		name: '',
		phone: '',
		email: '',
		image: ''
	}

	componentDidMount() {
		axios.get('/api/users').then(resp => {
			console.log(resp.data)
			this.setState({
				name: resp.data[0].name,
				phone: resp.data[0].phone,
				email: resp.data[0].email,
				image: resp.data[0].image
			})
		})
	}

	pleaseCome = e => {
		console.log('PWETTY PLEEASSEEE')
	}

	goAway = e => {
		console.log('NOOOOOOO')
	}

	render() {
		return (
			<div className="invite-card">

				<div className="details">
						<img src={this.state.image} alt=""/>
					
					{/* Name, Phone, Email */}
					<div className="text-field">
						<div className="info">
							<span className="invitee-base">Name:</span><span className="invitee-info">{this.state.name}</span>
						</div>
						<div className="info">
							<span className="invitee-base">Phone:</span><span className="invitee-info">{this.state.phone}</span>
						</div>
						<div className="info">
							<span className="invitee-base">Email:</span><span className="invitee-info">{this.state.email}</span>
						</div>
					</div>

					{/* Invite or Not Invite */}
					<div className="button-field">
						<button onClick={this.goAway} className="no-invite"><i className="fa fa-ban"></i></button>
						<button onClick={this.pleaseCome} className="invite"><i className="fa fa-check"></i></button>
					</div>
				</div>

			</div>
		)
	}
}

export default Invite
