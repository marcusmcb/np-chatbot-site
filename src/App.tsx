import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Routes } from 'react-router-dom'

import InstallationPage from './pages/installation/InstallationPage'
import CommandsPage from './pages/commands/CommandsPage'
import LandingPage from './pages/landing/LandingPage'
import FeaturesPage from './pages/features/FeaturesPage'
import FeedbackPage from './pages/feedback/FeedbackPage'
import AnalysisPage from './pages/analysis/AnalysisPage'

import './App.css'

const App = (): JSX.Element => {
	return (
		<Router>
			<div className='App'>
				<div className='banner navbar'>
					<Link to='/'>
						<span className='site-title'>npChatbot</span>
					</Link>
					<Link to='/features'>
						<div className='navbar-element'>Features</div>
					</Link>
					<Link to='/installation'>
						<div className='navbar-element'>Installation & Setup</div>
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
					<Route path='/features' element={<FeaturesPage />} />
					<Route path='/feedback' element={<FeedbackPage />} />
					<Route path='/analysis' element={<AnalysisPage />} />
				</Routes>

				<div className='footer'>
					<Link to='/feedback'>
						<span>Support</span>
					</Link>
					<Link to='/'>
						<div>npChatbot {new Date().getFullYear()}</div>
					</Link>
					<Link to='/analysis'>
						<span>Data Quirks</span>
					</Link>
				</div>
			</div>
		</Router>
	)
}

export default App
