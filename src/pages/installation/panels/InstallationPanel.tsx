import '../installationpage.css'

const InstallationPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<div className='installation-page-header'>
				Installation & Initial Setup
			</div>
			<div className='installation-page-directions-step'>
				Download the npChatbot desktop app <a href='#downloadlink'>here</a>.
			</div>

			<div className='installation-page-directions-step'>
				Double-click the installer file once the download has completed. You'll
				see a loading image briefly before npChatbot fully loads.
			</div>

			<div className='installation-page-directions-step'>
				Once loaded, click the{' '}
				<span className='highlighted-installation-text'>Authorize</span> button
				in the upper left to authorize npChatbot with Twitch
				<span className='icon-span'>©</span>.
				<img
					src='/images/installation/setup_01_final.png'
					alt='npChatbot instructions, step 1'
				/>
			</div>

			<div className='installation-page-directions-step'>
				<p>
					You should then see a prompt from Twitch
					<span className='icon-span'>©</span> for you to authorize npChatbot.
				</p>
				<p className='highlighted-installation-text'>NOTE:</p>
				<p>
					Please be sure that you're signed into the Twitch
					<span className='icon-span'>©</span> account that you would like
					npChatbot to use for its responses (typically your main channel's
					chatbot account).
				</p>

				<p>
					The Twitch
					<span className='icon-span'>©</span> account that you authorize
					npChatbot with will also need to be set as a moderator for your main
					streaming channel.
				</p>
				<p>
					Click <span className='highlighted-installation-text'>Authorize</span>{' '}
					to continue.
				</p>

				<img
					alt='npChatbot instructions, step 2'
					src='/images/installation/setup_02_final.png'
				/>
			</div>

			<div className='installation-page-directions-step'>
				npChatbot will confirm the authorization and the app is now ready for
				your credentials and preferences.
				<img
					alt='npChatbot instructions, step 3'
					src='/images/installation/setup_03_final.png'
				/>
			</div>
		</div>
	)
}

export default InstallationPanel
