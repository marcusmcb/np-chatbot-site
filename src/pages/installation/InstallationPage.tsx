import './installationpage.css'

const InstallationPage = (): JSX.Element => {
	return (
		<div className='installation-page'>
			<div className='installation-page-header'>
				Installation & Initial Setup
			</div>
			<div className='installation-page-directions-container'>
				<div className='installation-page-directions-step'>
					Download the npChatbot desktop app <a href='#downloadlink'>here</a>.
				</div>

				<div className='installation-page-directions-step'>
					Double-click the installer file once the download has completed.
					You'll see a loading image briefly before npChatbot fully loads.
				</div>

				<div className='installation-page-directions-step'>
					Once loaded, click the{' '}
					<span className='highlighted-installation-text'>Authorize</span>{' '}
					button in the upper left to authorize npChatbot with Twitch
					<span className='icon-span'>©</span>.
					<img src='/images/installation/setup_01_final.png' />
				</div>

				<div className='installation-page-directions-step'>
					<p>
						You should then see a prompt from Twitch
						<span className='icon-span'>©</span> for you to authorize npChatbot.
					</p>
					<p>
						Please be sure that you're signed into the Twitch
						<span className='icon-span'>©</span> account that you would like
						npChatbot to use for its responses (typically your channel's chatbot
						account).
					</p>
					<p>
						Click{' '}
						<span className='highlighted-installation-text'>Authorize</span> to
						continue.
					</p>

					<img src='/images/installation/setup_02_final.png' />
				</div>

				<div className='installation-page-directions-step'>
					npChatbot will confirm the authorization and the app is now ready for
					your credentials and preferences.
					<img src='/images/installation/setup_03_final.png' />
				</div>
			</div>

			<div className='installation-page-directions-container'>
				<div className='installation-page-header'>Storing Your Credentials</div>
				<div className='installation-page-directions-step'>
					Enter your primary Twitch<span className='icon-span'>©</span> channel,
					your Twitch<span className='icon-span'>©</span> chatbot's name, and
					your Serato<span className='icon-span'>©</span> profile display name.
					Click <span className='highlighted-installation-text'>Update</span> to
					save your settings and credentials.
					<img src='/images/installation/setup_05_final.png' />
				</div>
			</div>

			<div className='installation-page-directions-container'>
				<div className='installation-page-header'>Starting npChatbot</div>
				<div className='installation-page-directions-step'>
					<p>
						In Serato<span className='icon-span'>©</span> DJ Pro, click the{' '}
						<span className='highlighted-installation-text'>History</span> tab.
					</p>
					<p>
						Next, click{' '}
						<span className='highlighted-installation-text'>Start Session</span>{' '}
						to reset Serato's play history.
					</p>
					<p>
						Finally, click{' '}
						<span className='highlighted-installation-text'>
							Start Live Playlist
						</span>
						. More information about live playlists can be found{' '}
						<a
							href='https://support.serato.com/hc/en-us/articles/228019568-Live-Playlists'
							rel='noreferrer'
							target='_blank'
						>
							here
						</a>
						.
					</p>

					<img src='/images/installation/serato_01_final.png' />
				</div>

				<div className='installation-page-directions-step'>
					<p>Your Serato Live Playlist page will open in your browser.</p>
					<p>
						Serato Live Playlists are set to private by default. Click the
						option to{' '}
						<span className='highlighted-installation-text'>Edit Details</span>.
					</p>

					<img src='/images/installation/serato_02_final.png' />
				</div>

				<div className='installation-page-directions-step'>
					<p>
						Select the{' '}
						<span className='highlighted-installation-text'>
							Public - Visible to everyone
						</span>{' '}
						option, scroll down, and select{' '}
						<span className='highlighted-installation-text'>Save Changes</span>.
					</p>

					<img src='/images/installation/serato_03_final.png' />
				</div>

				<div className='installation-page-directions-step'>
					<p>
						Back in the npChatbot app, click{' '}
						<span className='highlighted-installation-text'>Connect</span> to
						start the app.
					</p>
					<p>
						You'll see a confirmation message once npChatbot is successfully
						connected to Twitch.
					</p>
					<img src='/images/installation/setup_10_final.png' />
				</div>

				<div className='installation-page-directions-step'>
					<p>
						Once you begin playing tracks in your stream, responses from the
						npChatbot commands will be visible in your Twitch
						<span className='icon-span'>©</span> stream as chat text or,
						optionally, on-screen in your OBS display.
					</p>
					<p className='highlighted-installation-text'>NOTE:</p>
					<p>
						Several npChatbot commands can only begin calculating the various
						stats returned in its responses after three or four tracks have been
						played in your set. Any of these commands used before this occurs
						will return a response to the chat indicating this.
					</p>
				</div>
			</div>

			<div className='installation-page-directions-container'>
				<div className='installation-page-header'>
					OBS Configuration (optional)
				</div>
				<div className='installation-page-directions-step'>
					<p>
						If you'd like to send npChatbot's responses to your OBS, enter in
						your OBS WebSocket address and password (if secured).
					</p>
					<p>
						Your OBS Websocket address needs to be given in the format shown in
						the example below (server-address:server-port).
					</p>
					<p>
						Click <span className='highlighted-installation-text'>Update</span>{' '}
						to save your settings.
					</p>

					<img src='/images/installation/setup_08_final.png' />
				</div>
				<div className='installation-page-directions-step'>
					<p>
						You can find your OBS Websocket address and password (if secured) by
						going to the{' '}
						<span className='highlighted-installation-text'>Tools</span> menu
						and selecting{' '}
						<span className='highlighted-installation-text'>
							Websocket Sever Settings
						</span>
						.
					</p>
					<p>
						Select{' '}
						<span className='highlighted-installation-text'>
							Show Connect Info
						</span>{' '}
						to view your websocket's Server IP, Server Port, and Server
						Password.
					</p>

					<img src='/images/installation/obs_setup_01_final.png' />
				</div>
			</div>

			<div className='installation-page-directions-container'>
				<div className='installation-page-header'>Preferences (optional)</div>
				<div className='installation-page-directions-step'>
					Set your chatbot preferences for OBS display and interval messages.
					Click <span className='highlighted-installation-text'>Update</span> to
					save your settings.
					<img src='/images/installation/setup_09_final.png' />
				</div>
			</div>

			<div className='installation-page-directions-container'>
				<div className='installation-page-directions-step'>
					If you change the password for the account that npChatbot is linked
					to, you'll need to reauthorize the app.
				</div>
			</div>
		</div>
	)
}

export default InstallationPage
