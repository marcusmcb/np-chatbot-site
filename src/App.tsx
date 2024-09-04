import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Routes } from 'react-router-dom'

import InstallationPage from './pages/installation/InstallationPage'
import CommandsPage from './pages/commands/CommandsPage'
import LandingPage from './pages/landing/LandingPage'

import './App.css'

const App = (): JSX.Element => {
	return (
		<Router>
			<div className='App'>
				<div className='banner navbar'>
					<Link to='/'>
						<span className='site-title'>npChatbot For Twitch</span>
					</Link>
					{/* move the remaining navbar links into single div
					and set the flex direction accordingly on
					smaller viewports */}
					<Link to='/features'>
						<div className='navbar-element'>Features</div>
					</Link>
					<Link to='/installation'>
						<div className='navbar-element'>Installation</div>
					</Link>
					{/* <div className='site-title'>npChatbot For Twitch</div> */}
					<Link to='/commands'>
						<div className='navbar-element'>Command List</div>
					</Link>
				</div>

				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/installation' element={<InstallationPage />} />
					<Route path='/commands' element={<CommandsPage />} />
				</Routes>

				<div className='footer'>
					<Link to='/feedback'>
						<span>Feedback</span>
					</Link>
					<div>npChatbot {new Date().getFullYear()}</div>
					<Link to='/analysis'>
						<span>Data Quirks</span>
					</Link>
				</div>
			</div>
		</Router>
	)
}

export default App
