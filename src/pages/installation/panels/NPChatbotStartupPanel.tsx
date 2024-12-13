import IconSpan from '../../components/IconSpan'
import '../installationpage.css'

const NPChatbotStartupPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<div className='installation-page-header'>3. Starting npChatbot</div>
			<div className='installation-page-directions-step'>
				<p>
					In Serato
					<IconSpan /> DJ Pro, click the{' '}
					<span className='highlighted-installation-text'>History</span> tab.
				</p>
				<p>
					Next, click{' '}
					<span className='highlighted-installation-text'>Start Session</span>{' '}
					to reset Serato's
					<IconSpan /> play history.
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
					Your Serato
					<IconSpan /> Live Playlist page will open in your browser. Scroll down
					to the bottom of the page to start your Live Playlist.
				</p>
				<p>
					Serato
					<IconSpan /> Live Playlists are set to private by default. Click the
					option to{' '}
					<span className='highlighted-installation-text'>Edit Details</span> on
					the right.
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
				
				<p>
					<span className='highlighted-installation-text'>
						IMPORTANT - Playlist Visibility{' '}
					</span>
				</p>
				<p>
					npChatbot will not function properly if your live playlist is NOT
					set to public.
				</p>

				<hr />
				<p>
					<span className='highlighted-installation-text'>
						IMPORTANT - Playlist Titles
					</span>
				</p>
				<p>
					By default, Serato
					<IconSpan /> will set a default title for your live playlist as the
					current date.
				</p>
				<p>
					For npChatbot to properly retrieve this data during your stream, it
					relies on the default title set by Serato
					<IconSpan />. Do not edit or update this before or during your live
					stream.
				</p>
				<p>
					If you happen to edit the title by mistake, resetting it to the
					previous value or simply starting a new live playlist will resolve the
					issue.
				</p>
				<hr />
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
					<IconSpan /> stream as chat text or, optionally, on-screen as text in
					your OBS configuration.
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
