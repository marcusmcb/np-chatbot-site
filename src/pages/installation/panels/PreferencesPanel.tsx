import IconSpan from '../../components/IconSpan'
import '../installationpage.css'

const PreferencesPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<h1 className='installation-page-header'>5. Preferences (optional)</h1>
			<div className='installation-page-directions-step'>
				Set your preferences for npChatbot in this panel. Click{' '}
				<span className='highlighted-installation-text'>Update</span> to save
				your settings when you change them.
				<img
					alt='npChatbot instructions, step 9'
					src='/images/installation/setup_09_final.png'
				/>
			</div>

			<div className='installation-page-directions-step'>
				<h2 className='highlighted-installation-text'>
					Enable Spotify
					<IconSpan /> Playlist:
				</h2>
			</div>
			<div className='installation-page-directions-step'>
				<h3>
					*** This feature is enabled after connecting npChatbot to your{' '}
					<span className='highlighted-text'>
						Spotify
						<IconSpan />
					</span>{' '}
					account.
				</h3>
				<p>
					When enabled, npChatbot will create a new{' '}
					<span className='highlighted-text'>
						Spotify
						<IconSpan />
					</span>{' '}
					playlist each time that you connect the app to Twitch
					<IconSpan />.
				</p>
				<p>
					As your stream progresses, the playlist created will be updated with
					the songs you play as you play them.
				</p>
				<p>
					You can share the link to your current{' '}
					<span className='highlighted-text'>
						Spotify
						<IconSpan />
					</span>{' '}
					playlist in the chat any time during your stream by using the{' '}
					<span className='highlighted-text'>!np playlist</span> command.
				</p>
			</div>

			<div className='installation-page-directions-step'>
				<h2 className='highlighted-installation-text'>Continue Last Playlist:</h2>
			</div>
			<div className='installation-page-directions-step'>
				<p>
					With the{' '}
					<span className='highlighted-text'>
						Enable Spotify
						<IconSpan /> Playlist
					</span>{' '}
					feature enabled, a new playlist will be created{' '}
					<span className='highlighted-text'>
						<i>each time</i>
					</span>{' '}
					that you connect npChatbot to Twitch
					<IconSpan />.
				</p>
				<p></p>
				<p>
					If you'd like to continue updating your most recent playlist instead,
					enable the{' '}
					<span className='highlighted-text'>Continue Last Playlist</span>{' '}
					feature to do so.
				</p>
				<p>
					This is potentially useful if you need to disconnect npChatbot
					momentarily while streaming to change or update your other preferences
					before reconnecting.
				</p>
			</div>

			<div className='installation-page-directions-step'>
				<h2 className='highlighted-installation-text'>Enable Auto ID:</h2>
			</div>
			<div className='installation-page-directions-step'>
				<p>
					When enabled, npChatbot will automatically send a message to your chat
					identifying the artist and title of the current song playing each time
					that it updates.
				</p>
			</div>

			<div className='installation-page-directions-step'>
				<h2 className='highlighted-installation-text'>
					Enable Auto ID Cleanup:
				</h2>
			</div>
			<div className='installation-page-directions-step'>
				<p>
					When enabled, each automatic message from npChatbot will have any
					additional text in parentheses or brackets found in the
					artist/title tags of the current song playing removed before being
					sent to the chat.
				</p>
			</div>

			<div className='installation-page-directions-step'>
				<h2 className='highlighted-installation-text'>
					Enable On-Screen OBS Responses:
				</h2>
			</div>
			<div className='installation-page-directions-step'>
				<h3>
					*** This feature is enabled after entering your OBS Websocket Address
				</h3>
				<p>
					When enabled, this determines the time (in seconds) that each
					command's response will be visible on screen in your OBS setup.
				</p>
				<p>
					If enabled with no value entered, a default time of 5 seconds will be
					used.
				</p>
				<p>
					You may also store your OBS websocket address & password in your
					credentials for later use without enabling this feature.
				</p>
			</div>

			<div className='installation-page-directions-step'>
				<h2 className='highlighted-installation-text'>
					Enable Interval Messages:
				</h2>
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
		</div>
	)
}

export default PreferencesPanel
