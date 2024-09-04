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
					<Link to='/features'>
						<span>Features</span>
					</Link>
					<Link to='/installation'>
						<span>Installation</span>
					</Link>
					{/* <div className='site-title'>npChatbot For Twitch</div> */}
					<Link to='/commands'>
						<span>Command List</span>
					</Link>
				</div>

				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/installation' element={<InstallationPage />} />
					<Route path='/commands' element={<CommandsPage />} />
				</Routes>

				<div className='footer'>
					<Link to='/'>Feedback</Link>
					<div>npChatbot {new Date().getFullYear()}</div>
					<Link to='/'>Data Quirks</Link>
				</div>
			</div>
		</Router>
	)
}

export default App
