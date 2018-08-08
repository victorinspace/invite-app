import React, { Component } from 'react'

class Invite extends Component {

	render() {
		return (
			<div className="invite-card">

				<div className="details">
						<img src="https://randomuser.me/api/portraits/men/19.jpg" alt=""/>
					
					{/* Name, Phone, Email */}
					<div className="text-field">
						<div className="info">
							<span className="invitee-base">Name:</span><span className="invitee-info">Joe Schmo</span>
						</div>
						<div className="info">
							<span className="invitee-base">Phone:</span><span className="invitee-info">555-555-555</span>
						</div>
						<div className="info">
							<span className="invitee-base">Email:</span><span className="invitee-info">whatofit@aol.com</span>
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
