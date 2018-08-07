import React, { Component } from 'react'
import { getUsers } from '../actions/inviteFunctions.js'

class Invite extends Component {
	render() {
		return (
			<div className="invite-card">

				<div className="details">
						<img src="https://randomuser.me/api/portraits/men/32.jpg" alt=""/>
					
					{/* Name, Phone, Email */}
					<div className="text-field">
						<div className="info">
							<span className="invitee-base">Name:</span><span className="invitee-info">Joe Schmo</span>
						</div>
						<div className="info">
							<span className="invitee-base">Phone:</span><span className="invitee-info">555-555-5555</span>
						</div>
						<div className="info">
							<span className="invitee-base">Email:</span><span className="invitee-info">whatsittoya@aol.com</span>
						</div>
					</div>

					<div className="button-field">
						<button className="no-invite"><i className="fa fa-ban"></i></button>
						<button className="invite"><i className="fa fa-check"></i></button>
					</div>
				</div>

			</div>
		)
	}
}

export default Invite
