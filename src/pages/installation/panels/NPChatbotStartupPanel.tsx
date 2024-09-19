import '../installationpage.css'

const NPChatbotStartupPanel = (): JSX.Element => {
	return (
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
					. More information about the Live Playlist feature can be found{' '}
					<a
						href='https://support.serato.com/hc/en-us/articles/228019568-Live-Playlists'
						rel='noreferrer'
						target='_blank'
					>
						here
					</a>
					.
				</p>

				<img
					alt='npChatbot instructions, step 5'
					src='/images/installation/serato_01_final.png'
				/>
			</div>

			<div className='installation-page-directions-step'>
				<p>
					Your Serato Live Playlist page will open in your browser. Scroll down
					to the bottom of the page to start your Live Playlist.
				</p>
				<p>
					Serato Live Playlists are set to private by default. Click the option
					to <span className='highlighted-installation-text'>Edit Details</span>{' '}
					on the right.
				</p>

				<img
					alt='npChatbot instructions, step 6'
					src='/images/installation/serato_02_final.png'
				/>
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

				<img
					alt='npChatbot instructions, step 7'
					src='/images/installation/serato_03_final.png'
				/>
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
				<img
					alt='npChatbot instructions, step 8'
					src='/images/installation/setup_10_final.png'
				/>
			</div>

			<div className='installation-page-directions-step'>
				<p>
					Once you begin playing tracks in your stream, responses from the
					npChatbot commands will be visible in your Twitch
					<span className='icon-span'>©</span> stream as chat text or,
					optionally, on-screen as text in your OBS configuration.
				</p>
				<p className='highlighted-installation-text'>NOTE:</p>
				<p>
					Several npChatbot commands can only begin calculating the various
					stats returned in its responses after three or four tracks have been
					played in your set. Any of these commands used before this occurs will
					return a response to the chat indicating this.
				</p>
			</div>
		</div>
	)
}

export default NPChatbotStartupPanel
