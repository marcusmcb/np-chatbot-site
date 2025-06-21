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
				<p>
					You may also want to double check that the start time of your Serato
					Live Playlist is correct as this can affect the accuracy of several of
					npChatbot's stats.
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
					npChatbot will not function properly if your live playlist is NOT set
					to public.
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
			</div>

			<div className='installation-page-directions-step'>
				<hr />
				<p>
					<span className='highlighted-installation-text'>
						Testing your Serato
						<IconSpan /> Live Playlist's status
					</span>
				</p>
				<img
					alt='npChatbot instructions, step 9'
					src='/images/installation/setup_11_final.png'
				/>
				<p>
					To test if your current Serato
					<IconSpan /> Live Playlist is properly set as public and readable by
					npChatbot, you can tap or click the{' '}
					<span className='highlighted-installation-text'>
						Playlist Status
					</span>{' '}
					button.
				</p>
				<p>
					If your live playlist is configured correctly, you'll see a message in
					npChatbot indicating this.
				</p>
				<p>
					Note that npChatbot does not need to be connected to a live Twitch
					stream for this feature to work so you can test this at any time.
				</p>
				<hr />
				<p>
					<span className='highlighted-installation-text'>
						If the Playlist Status test fails...
					</span>
				</p>
				<p>
					If your live playlist is not properly set as public, you'll see a
					message indicating this.
				</p>
				<img
					alt='npChatbot instructions, step 10'
					src='/images/installation/setup_12_final.png'
				/>

				<p>
					This can occur if you forget to start your live playlist in Serato
					<IconSpan />, if your live playlist is not set as public, or if your
					live playlist session is disconnected for any reason during your live
					stream.
				</p>
				<p>
					Simply follow the steps above to start a new live playlist in Serato
					<IconSpan /> and ensure the playlist is set as public.
				</p>
			</div>
			<div className='installation-page-header'>
				Starting a new Spotify
				<IconSpan /> playlist
			</div>
			<div className='installation-page-directions-step'>
				<p>
					*** This feature is available after authorizing npChatbot with{' '}
					<span className='highlighted-text'>
						Spotify
						<IconSpan />
					</span>
				</p>
				<p>
					With the{' '}
					<span className='highlighted-text'>Enable Spotify Playlist</span>{' '}
					option enabled, a new{' '}
					<span className='highlighted-text'>
						Spotify
						<IconSpan />
					</span>{' '}
					playlist will be created each time you connect npChatbot to{' '}
					<span className='highlighted-text'>
						Twitch
						<IconSpan />
					</span>
					.
				</p>
				<p>
					You can view the playlist in your{' '}
					<span className='highlighted-text'>Spotify</span> account once
					created. By default, it's given a name of "Twitch Stream Playlist",
					along with the date of that particular stream.
				</p>
				<img
					alt='npChatbot instructions, step 11'
					src='/images/installation/setup_spotify_playlist_example_final.png'
				/>
				<p>
					You or your viewers can access the link to the playlist at any time
					during the stream by using the{' '}
					<span className='highlighted-text'>!np playlist</span> command.
				</p>
				<p>
					As songs are successfully added to your{' '}
					<span className='highlighted-text'>
						Spotify
						<IconSpan />
					</span>{' '}
					playlist, you'll see a notification indicating such in npChatbot.
				</p>
				<img
					alt='npChatbot instructions, step 12'
					src='/images/installation/setup_spotify_playlist_updated_final.png'
				/>
			</div>
			<div className='installation-page-header'>
				Resuming your last Spotify
				<IconSpan /> playlist
			</div>
			<div className='installation-page-directions-step'>
				<p>
					*** This feature is available after authorizing npChatbot with{' '}
					<span className='highlighted-text'>
						Spotify
						<IconSpan />
					</span>
				</p>
				<p>
					With the{' '}
					<span className='highlighted-text'>Continue Last Playlist</span>{' '}
					option enabled, npChatbot will continue adding the tracks you play to
					the most recent{' '}
					<span className='highlighted-text'>
						Spotify
						<IconSpan />
					</span>{' '}
					playlist created.
				</p>
				<p>
					If you need to disconnect and reconnect npChatbot during your stream
					(to change your preferences, etc), enable this feature to prevent
					npChatbot from creating another new playlist for your current stream.
				</p>
			</div>
		</div>
	)
}

export default NPChatbotStartupPanel
