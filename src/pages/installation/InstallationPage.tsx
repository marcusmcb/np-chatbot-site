import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReAuthPanel from './panels/ReAuthPanel'
import PreferencesPanel from './panels/PreferencesPanel'
import OBSConfigurationPanel from './panels/OBSConfigurationPanel'
import NPChatbotStartupPanel from './panels/NPChatbotStartupPanel'
import CredentialsPanel from './panels/CredentialsPanel'
import InstallationPanel from './panels/InstallationPanel'
import SummariesPanel from './panels/SummariesPanel'

import './installationpage.css'

const InstallationPage = (): JSX.Element => {
	const location = useLocation()
	const [activeTab, setActiveTab] = useState<string>('Installation')

	const getQueryParam = (param: string): string | null => {
		const params = new URLSearchParams(location.search)
		return params.get(param)
	}

	useEffect(() => {
		const tab = getQueryParam('tab')
		if (tab) {
			console.log('TAB: ', tab)
			setActiveTab(tab)
		}
	}, [location.search])

	const renderActivePanel = () => {
		switch (activeTab) {
			case 'Installation':
				return <InstallationPanel />
			case 'Credentials':
				return <CredentialsPanel />
			case 'Startup':
				return <NPChatbotStartupPanel />
			case 'OBS':
				return <OBSConfigurationPanel />
			case 'Preferences':
				return <PreferencesPanel />
			case 'ReAuth':
				return <ReAuthPanel />
			case 'Summaries':
				return <SummariesPanel />
			default:
				return <InstallationPanel />
		}
	}

	return (
		<div className='installation-page'>
			{/* Tab Navigation */}
			<div className='tab-navigation'>
				<button
					className={activeTab === 'Installation' ? 'active' : ''}
					onClick={() => setActiveTab('Installation')}
				>
					Installation
				</button>
				<button
					className={activeTab === 'Credentials' ? 'active' : ''}
					onClick={() => setActiveTab('Credentials')}
				>
					Credentials
				</button>
				<button
					className={activeTab === 'Startup' ? 'active' : ''}
					onClick={() => setActiveTab('Startup')}
				>
					Startup
				</button>
				<button
					className={activeTab === 'OBS' ? 'active' : ''}
					onClick={() => setActiveTab('OBS')}
				>
					OBS Configuration
				</button>
				<button
					className={activeTab === 'Preferences' ? 'active' : ''}
					onClick={() => setActiveTab('Preferences')}
				>
					Preferences
				</button>
				<button
					className={activeTab === 'Summaries' ? 'active' : ''}
					onClick={() => setActiveTab('Summaries')}
				>
					Summaries
				</button>
				<button
					className={activeTab === 'ReAuth' ? 'active' : ''}
					onClick={() => setActiveTab('ReAuth')}
				>
					Re-Authorization
				</button>
			</div>

			{/* Render the currently selected panel */}
			<div className='panel-container'>{renderActivePanel()}</div>
		</div>
	)
}

export default InstallationPage
