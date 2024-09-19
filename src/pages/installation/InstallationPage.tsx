import { useState } from 'react'
import ReAuthPanel from './panels/ReAuthPanel'
import PreferencesPanel from './panels/PreferencesPanel'
import OBSConfigurationPanel from './panels/OBSConfigurationPanel'
import NPChatbotStartupPanel from './panels/NPChatbotStartupPanel'
import CredentialsPanel from './panels/CredentialsPanel'
import InstallationPanel from './panels/InstallationPanel'

import './installationpage.css'

const InstallationPage = (): JSX.Element => {
	// State to manage the current active panel
	const [activeTab, setActiveTab] = useState<string>('Installation')

	// Function to render the active panel based on the selected tab
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
