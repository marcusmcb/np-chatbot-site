import './installationpage.css'

const InstallationPage = (): JSX.Element => {
	return (
		<div className='installation-page'>
			<div className='installation-page-header'>Installation</div>
			<div className='installation-page-directions-container'>
				<div className='installation-page-directions-step'>
					1. Download the npChatbot app <a href='#downloadlink'>here</a>.
				</div>
				<div className='installation-page-directions-step'>
					2. Run the installer once the download has completed.
				</div>
				<div className='installation-page-directions-step'>
					3. Once installation has completed, start the npChatbot app.
				</div>
				<div className='installation-page-directions-step'>
					3. Once started, click the "Authorize" button in the upper left to
					authorize npChatbot with Twitch. You will need to be signed into the
					account you want npChatbot to use for its responses (typically your
					channel's chatbot account).
				</div>
				<div className='installation-page-directions-step'>
					4. Once authorized with Twitch, you should be returned to the
					npChatbot app.
				</div>
				<div className='installation-page-directions-step'>
					4. Enter and save your credentials on first use. You will not have to
					resubmit your credentials each time.
				</div>
				<div className='installation-page-directions-step'>
					5. Set your OBS and interval message preferences.
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
					session in Serato DJ Pro.
				</div>
				<div className='installation-page-directions-step'>
					7. On the Serato Live Playlist page that pops up in your browser, edit
					the playlist's settings and ensure that the playlist is set to
					"public".
				</div>
				<div className='installation-page-directions-step'>
					8. Start npChatbot for your stream by clicking 'Connect'.
				</div>
				<div className='installation-page-directions-step'>
					9. Once you begin playing tracks in your stream, responses from the
					npChatbot commands will be visible in your Twitch stream as chat text
					or, optionally, on-screen in your OBS display.
				</div>
			</div>
		</div>
	)
}

export default InstallationPage
