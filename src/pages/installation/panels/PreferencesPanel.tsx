import '../installationpage.css'

const PreferencesPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<div className='installation-page-header'>5. Preferences (optional)</div>
			<div className='installation-page-directions-step'>
				Set your preferences for OBS response and interval messages. Click{' '}
				<span className='highlighted-installation-text'>Update</span> to save
				your settings.
				<img
					alt='npChatbot instructions, step 9'
					src='/images/installation/setup_09_final.png'
				/>
			</div>

			<div className='installation-page-directions-step'>
				<p className='highlighted-installation-text'>
					Enable On-Screen OBS Responses:
				</p>
			</div>
			<div className='installation-page-directions-step'>
				<p>
					*** This feature is enabled after entering your OBS Websocket Address
				</p>
				<p>
					When enabled, this determines the time (in seconds) that each
					command's response will be visible on screen in your OBS setup.
				</p>
				<p>
					If enabled with no value entered, a default time of 5 seconds will be
					used.
				</p>
			</div>
			<div className='installation-page-directions-step'>
				<p className='highlighted-installation-text'>
					Enable Interval Messages:
				</p>
			</div>
			<div className='installation-page-directions-step'>
				<p>
					When enabled, npChatbot will periodically send a message to your chat
					during your stream with a prompt to your viewers on how to use the
					commands in this app.
				</p>
				<p>
					The value entered (in minutes) determines how often these messages
					will appear.
				</p>
				<p>
					If enabled with no value entered, a default time of 15 minutes will be
					used.
				</p>
			</div>
			<div className='installation-page-directions-step'></div>
			<div className='installation-page-directions-step'></div>
		</div>
	)
}

export default PreferencesPanel
