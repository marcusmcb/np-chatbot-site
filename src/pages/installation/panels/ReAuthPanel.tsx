import '../installationpage.css'

const ReAuthPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<div className='installation-page-header'>
				Re-Authorizing / De-Authorizing npChatbot
			</div>
			<div className='installation-page-directions-step'>
				<p>
					Changing the password for the Twitch account that npChatbot is linked
					to disconnects any third-party apps or services previously authorized
					through that account, including npChatbot.
				</p>
				<p>
					To re-authorize npChatbot, click the{' '}
					<span className='highlighted-installation-text'>Authorized</span>{' '}
					button in the upper left of the app to restart the authorization
					process. You will not need to re-enter your credentials or
					preferences.
				</p>
			</div>
		</div>
	)
}

export default ReAuthPanel
