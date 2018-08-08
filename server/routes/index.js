const express = require('express')
const router = express.Router() 
const axios = require('axios')
const shortid = require('shortid')

const data = {
  users: [],
  going: [],
  notoing: []
}

router.get('/users', (req, res, next) => {

	if (data.users.length === 0) { // make sure we need a call

		axios.get(api).then(resp => {
			// Fill up that data!
			const users = resp.data.results.map( user => {
				return {
					id: shortid.generate(), // Make super unique ID for each user
					name: `${user.name.first} ${user.name.last}`,
					email: user.email,
					phone: user.phone,
					image: user.picture.large,
					status: 'pending'
				}
			})
			data.users = users
			res.json(users)
		})
	} else {
		res.json(data.users)
	}
})

// type: PATCH
router.patch('/users/:id', (req, res, next) => {
	const id = req.params.id // grab the ID
	const status = req.body.status // status will come from user
	const user = data.users.find(user => user.id === id) // 'user' is the ID matched to ID

	user.status = status
	data[status].push(user)
	data.users = data.users.filter(user => user.id !== id)
	res.json
})


router.get('/users/:id', (req, res, next) => {
	const id = req.params.id
	const user = data.users.find(user => user.id === id)
	res.json(user)
})

// Who is going?
router.get('/going', (req, res, next) => {
	res.json(data.going)
})

// Who isn't going?
router.get('/notgoing', (req, res, next) => {
	res.json(data.notgoing)
})

module.exports = router
