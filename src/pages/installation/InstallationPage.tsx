import './installationpage.css'

const InstallationPage = (): JSX.Element => {
	return (
		<div className='installation-page'>
			<div className='installation-page-header'>Installation</div>
			<div className='installation-page-directions-container'>
				<div className='installation-page-directions-step'>
					1. Download the npChatbot desktop app <a href='#downloadlink'>here</a>
					.
				</div>

				<div className='installation-page-directions-step'>
					2. Double-click the installer file once the download has completed.
					You'll see a loading image briefly before npChatbot fully loads.
				</div>

				<div className='installation-page-directions-step'>
					3. Once loaded, click the{' '}
					<span className='highlighted-installation-text'>Authorize</span>{' '}
					button in the upper left to authorize npChatbot with Twitch
					<span className='icon-span'>©</span>.
					<img src='/images/installation/setup_01_final.png' />
				</div>

				<div className='installation-page-directions-step'>
					4. You should then see a prompt from Twitch
					<span className='icon-span'>©</span> for you to authorize npChatbot.
					Please be sure that you're signed into the Twitch
					<span className='icon-span'>©</span> account that you would like
					npChatbot to use for its responses (typically your channel's chatbot
					account). Click{' '}
					<span className='highlighted-installation-text'>Authorize</span> to
					continue.
					<img src='/images/installation/setup_02_final.png' />
				</div>

				<div className='installation-page-directions-step'>
					5. npChatbot will confirm the authorization and the app is now ready
					for your credentials and preferences.
					<img src='/images/installation/setup_03_final.png' />
				</div>

				<div className='installation-page-directions-step'>
					6. Enter in your primary Twitch<span className='icon-span'>©</span>{' '}
					channel, your Twitch<span className='icon-span'>©</span> chatbot's
					name, and your Serato<span className='icon-span'>©</span> profile
					display name. Click{' '}
					<span className='highlighted-installation-text'>Update</span> to save
					your settings and credentials.
					<img src='/images/installation/setup_05_final.png' />
				</div>	

				<div className='installation-page-directions-step'>
					8. Start npChatbot for your stream by clicking 'Connect'.
					<img src='/images/installation/setup_10_final.png' />
				</div>		

				<div className='installation-page-directions-step'>
					8. If you'd like to send npChatbot's responses to your OBS display,
					enter in your OBS WebSocket address and password (if secured). Click{' '}
					<span className='highlighted-installation-text'>Update</span> to save
					your settings.
					<img src='/images/installation/setup_08_final.png' />
				</div>

				<div className='installation-page-directions-step'>
					9. Set your chatbot preferences for OBS display and interval messages.
					Click <span className='highlighted-installation-text'>Update</span> to
					save your settings.
					<img src='/images/installation/setup_09_final.png' />
				</div>

				

				<div className='installation-page-directions-step'>
					6. Start a{' '}
					<a
						href='https://support.serato.com/hc/en-us/articles/228019568-Live-Playlists'
						rel='noreferrer'
						target='_blank'
					>
						Live Playlist
					</a>{' '}
					session in Serato<span className='icon-span'>©</span> DJ Pro.
				</div>

				<div className='installation-page-directions-step'>
					7. On the Serato<span className='icon-span'>©</span> Live Playlist
					page that pops up in your browser, edit the playlist's settings and
					ensure that the playlist is set to "public".
				</div>

				<div className='installation-page-directions-step'>
					8. Start npChatbot for your stream by clicking 'Connect'.
				</div>

				<div className='installation-page-directions-step'>
					9. Once you begin playing tracks in your stream, responses from the
					npChatbot commands will be visible in your Twitch
					<span className='icon-span'>©</span> stream as chat text or,
					optionally, on-screen in your OBS display.
				</div>

				<div className='installation-page-directions-step'>
					10. If you change the password for the account that npChatbot is
					linked to, you'll need to reauthorize the app.
				</div>
			</div>
		</div>
	)
}

export default InstallationPage
