import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReAuthPanel from './panels/ReAuthPanel'
import PreferencesPanel from './panels/PreferencesPanel'
import OBSConfigurationPanel from './panels/OBSConfigurationPanel'
import NPChatbotStartupPanel from './panels/NPChatbotStartupPanel'
import CredentialsPanel from './panels/CredentialsPanel'
import InstallationPanel from './panels/InstallationPanel'
import AnalyticsPanel from './panels/AnalyticsPanel'
import Seo from '../components/Seo'

import './installationpage.css'

const tabDescriptions: Record<string, string> = {
	Installation:
		'Download npChatbot for Windows or macOS and complete initial Twitch, Spotify, and Discord setup for Serato DJ live playlist chat commands.',
	Credentials:
		'Configure the Twitch, Serato DJ Live Playlist, Spotify, Discord, and app credentials needed to use npChatbot during live streams.',
	Startup:
		'Start npChatbot and connect it to your Twitch chat and Serato DJ live playlist before a streamed DJ set.',
	OBS: 'Configure npChatbot OBS integration to show Twitch chat command responses in live stream overlays.',
	Preferences:
		'Adjust npChatbot preferences for Twitch commands, Serato DJ playlist data, Spotify playlist tools, and Discord sharing.',
	ReAuth:
		'Re-authorize Twitch, Spotify, or Discord accounts used by npChatbot when credentials expire or account access changes.',
	Analytics:
		'Review npChatbot playlist analytics, DJ set summaries, command usage, Spotify playlists, and Discord sharing options.',
}

const InstallationPage = (): JSX.Element => {
	const location = useLocation()
	const [activeTab, setActiveTab] = useState<string>('Installation')

	useEffect(() => {
		const tab = new URLSearchParams(location.search).get('tab')
		if (tab && tabDescriptions[tab]) {
			setActiveTab(tab)
		}
	}, [location.search])

	const handleTabChange = (tab: string) => {
		setActiveTab(tab)
		const params = new URLSearchParams(location.search)
		params.set('tab', tab)
		window.history.replaceState(null, '', `${location.pathname}?${params}`)
	}

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
			case 'Analytics':
				return <AnalyticsPanel />
			default:
				return <InstallationPanel />
		}
	}

	return (
		<div className='installation-page'>
			<Seo
				title={`${activeTab} Setup | npChatbot Installation Guide`}
				description={tabDescriptions[activeTab]}
				path={`/installation?tab=${activeTab}`}
			/>
			{/* Tab Navigation */}
			<div className='tab-navigation'>
				<button
					className={activeTab === 'Installation' ? 'active' : ''}
					onClick={() => handleTabChange('Installation')}
				>
					Installation
				</button>
				<button
					className={activeTab === 'Credentials' ? 'active' : ''}
					onClick={() => handleTabChange('Credentials')}
				>
					Credentials
				</button>
				<button
					className={activeTab === 'Startup' ? 'active' : ''}
					onClick={() => handleTabChange('Startup')}
				>
					Startup
				</button>
				<button
					className={activeTab === 'OBS' ? 'active' : ''}
					onClick={() => handleTabChange('OBS')}
				>
					OBS Configuration
				</button>
				<button
					className={activeTab === 'Preferences' ? 'active' : ''}
					onClick={() => handleTabChange('Preferences')}
				>
					Preferences
				</button>
				<button
					className={activeTab === 'Analytics' ? 'active' : ''}
					onClick={() => handleTabChange('Analytics')}
				>
					Analytics
				</button>
				<button
					className={activeTab === 'ReAuth' ? 'active' : ''}
					onClick={() => handleTabChange('ReAuth')}
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
