import ReAuthPanel from './panels/ReAuthPanel'
import PreferencesPanel from './panels/PreferencesPanel'
import OBSConfigurationPanel from './panels/OBSConfigurationPanel'
import NPChatbotStartupPanel from './panels/NPChatbotStartupPanel'
import CredentialsPanel from './panels/CredentialsPanel'
import InstallationPanel from './panels/InstallationPanel'

import './installationpage.css'

const InstallationPage = (): JSX.Element => {
	return (
		<div className='installation-page'>			
			<InstallationPanel />
			<CredentialsPanel />
			<NPChatbotStartupPanel />
			<OBSConfigurationPanel />
			<PreferencesPanel />
			<ReAuthPanel />
		</div>
	)
}

export default InstallationPage
