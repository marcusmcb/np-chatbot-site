import IconSpan from '../../components/IconSpan'
import '../installationpage.css'

const InstallationPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<div className='installation-page-header'>
				1. Installation & Initial Setup
			</div>
			<div className='installation-page-directions-step'>
				For <span className='highlighted-installation-text'>PC</span> users,
				download the app{' '}
				<a href='https://npchatbot-downloads.s3.us-west-2.amazonaws.com/npchatbot-setup.exe'>
					here
				</a>
				.
			</div>
			<div className='installation-page-directions-step'>
				Double-click the installer file once the download has completed. You'll
				see a loading image briefly before npChatbot fully installs and loads.
			</div>
			<div className='installation-page-directions-step'>
				<hr />
			</div>
			<div className='installation-page-directions-step'>
				For <span className='highlighted-installation-text'>Mac</span> users,
				download the app{' '}
				<a href='https://npchatbot-downloads.s3.us-west-2.amazonaws.com/npchatbot.dmg'>
					here
				</a>
				.
			</div>
			<div className='installation-page-directions-step'>
				<div>Double-click the dmg file once the download has completed.</div>
				<br />
				<div>
					You should then see a window display an icon for npChatbot's installer
					file. Drag this icon into{' '}
					<span className='highlighted-installation-text'>Applications</span> in
					your Finder utility to install npChatbot.
				</div>
			</div>
			<div className='installation-page-directions-step'>
				<hr />
			</div>
			<div className='installation-page-directions-step'>
				Once loaded, click the{' '}
				<span className='highlighted-installation-text'>
					Twitch
					<IconSpan />
				</span>{' '}
				icon button in the upper left to authorize npChatbot with Twitch
				<IconSpan />.
				<img
					src='/images/installation/setup_01_final.png'
					alt='npChatbot instructions, step 1'
				/>
			</div>

			<div className='installation-page-directions-step'>
				<p>
					You should then see a prompt from Twitch
					<IconSpan /> for you to authorize npChatbot.
				</p>
				<p className='highlighted-installation-text'>NOTE:</p>
				<p>
					Please be sure that you're signed into the Twitch
					<IconSpan /> account that you would like npChatbot to use for its
					responses (typically your main channel's chatbot account).
				</p>

				<p>
					The Twitch
					<IconSpan /> account that you authorize npChatbot with will also need
					to be set as a moderator for your main streaming channel.
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
			<div className='installation-page-header'>
				Spotify
				<IconSpan /> Authorization (Optional)
			</div>
			<div className='installation-page-directions-step'>
				<p>
					To link your{' '}
					<span className='highlighted-text'>
						Spotify
						<IconSpan />
					</span>{' '}
					account with npChatbot, click the Spotify
					<IconSpan /> icon up in the upper left to get started.
				</p>
				<p>
					You should then see a prompt from{' '}
					<span className='highlighted-text'>
						Spotify
						<IconSpan />
					</span>{' '}
					for you to authorize npChatbot.{' '}
				</p>
				<p>
					Make sure that you're logged into the Spotify account that you'd like
					npChatbot to use to create your playlists before tapping or clicking
					Accept.
				</p>
				<img
					src='/images/installation/setup_spotify_auth.png'
					alt='npChatbot instructions, Spotify set 1'
				/>
			</div>
			<div className='installation-page-directions-step'>
				<p>
					After authorizing with Spotify, you'll see a confirmation message from
					npChatbot.
				</p>
				<img
					src='/images/installation/setup_spotify_successful.png'
					alt='npChatbot instructions, Spotify set 2'
				/>
				<p>
					You will now be able to enable the Spotify playlist options in
					npChatbot's preferences. Please see the{' '}
					<span className='highlighted-text'>Preferences</span> section for
					additional information about using these options in npChatbot.
				</p>
			</div>

			<div className='installation-page-header'>
				Discord
				<IconSpan /> Authorization (Optional)
			</div>
			<div className='installation-page-directions-step'>
				<p>
					To link your{' '}
					<span className='highlighted-text'>
						Discord
						<IconSpan />
					</span>{' '}
					server with npChatbot, click the Discord
					<IconSpan /> icon up in the upper left to get started.
				</p>
				<p>
					You should then see a prompt from{' '}
					<span className='highlighted-text'>
						Discord
						<IconSpan />
					</span>{' '}
					for you to authorize npChatbot.{' '}
				</p>
				<p>
					Select the{' '}
					<span className='highlighted-text'>
						Discord
						<IconSpan />
					</span>{' '}
					server and corresponding channel you want to link npChatbot to. This
					will be the server and channel that npChatbot will post your{' '}
					<span className='highlighted-text'>
						Spotify
						<IconSpan />
					</span>
					playlist links.
				</p>
				<img
					src='/images/installation/discord_auth_01.png'
					alt='npChatbot instructions, Spotify set 1'
				/>
			</div>
			<div className='installation-page-directions-step'>
				<p>
					After authorizing with Discord
					<IconSpan />, you'll see a confirmation message from npChatbot.
				</p>
				<img
					src='/images/installation/discord_auth_02.png'
					alt='npChatbot instructions, Spotify set 2'
				/>
				<p>
					You will now be able to share any Spotify
					<IconSpan /> playlists created with npChatbot directly to your
					connected Discord
					<IconSpan /> server. Please see the{' '}
					<span className='highlighted-text'>Summaries</span> section for
					additional information about sharing playlists in npChatbot.
				</p>
			</div>
		</div>
	)
}

export default InstallationPanel
