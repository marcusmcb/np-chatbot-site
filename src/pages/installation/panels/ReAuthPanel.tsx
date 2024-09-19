import IconSpan from '../../components/IconSpan'
import '../installationpage.css'

const ReAuthPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<div className='installation-page-header'>
				6. Re-Authorizing npChatbot
			</div>
			<div className='installation-page-directions-step'>
				<p>
					Changing the password for the Twitch
					<IconSpan /> account that npChatbot is linked to disconnects any
					third-party apps or services previously authorized through that
					account, including npChatbot.
				</p>
				<p>
					To re-authorize npChatbot, click the{' '}
					<span className='highlighted-installation-text'>Authorized</span>{' '}
					button in the upper left of the app to restart the authorization
					process. You will not need to re-enter your credentials or
					preferences.
				</p>
			</div>
			<div className='installation-page-header'>De-Authorizing npChatbot</div>
			<div className='installation-page-directions-step'>
				<p>
					If you'd like to de-authorize npChatbot from your connected Twitch
					<IconSpan />
					account altogether:
				</p>
				- Log in to the Twitch
				<IconSpan /> account npChatbot is authorized with
				<p>
					<p>
						- Select{' '}
						<span className='highlighted-installation-text'>Settings</span> from
						the dropdown menu in the upper right
					</p>
					<p>
						- Navigate to{' '}
						<span className='highlighted-installation-text'>Settings</span>, and
						then select the{' '}
						<span className='highlighted-installation-text'>Connections</span>{' '}
						tab
					</p>
					<p>
						Scroll down to the{' '}
						<span className='highlighted-installation-text'>
							Other Connections
						</span>{' '}
						section and click the{' '}
						<span className='highlighted-installation-text'>Disconnect</span>{' '}
						button next to npChatbot app to remove the authorization.
					</p>
				</p>
			</div>
		</div>
	)
}

export default ReAuthPanel
