import React, { Component } from 'react'
import '../styles/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Invite from './Invite'
import Going from './Going'
import NotGoing from './NotGoing'

class App extends Component {
	componentDidMount() {
		axios.get('/api').then(resp => {
			console.log('response:', resp)
		})
	}

  render() {
    return (
      <Router>
	      <div>
	      	<Switch>
						<Route exact path="/" component={Invite} />
						<Route path="/going/:id" component={Going} />
						<Route path="/not-going/:id" component={NotGoing} />
					</Switch>
	      </div>
      </Router>
    )
  }
}

export default App
