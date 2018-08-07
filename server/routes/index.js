const express = require('express')
const router = express.Router() 
const axios = require('axios')

const data = {
	users: [],
	going: [],
	notGoing: []
}

router.get('/users', (req, res,next) => {
	
	// Make axios call to API & fill up data
	axios.get('https://randomuser.me/api/?results=100').then(resp => {
		const users = resp.data.results.map( (user, i) => {
			return {
				id: i + 1,
				name: `${user.name.first} ${user.name.last}`,
				email: user.email,
				phone: user.phone,
				image: user.picture.large
			}
		})

		data.users = users

		res.json(users)
	})
})

module.exports = router
