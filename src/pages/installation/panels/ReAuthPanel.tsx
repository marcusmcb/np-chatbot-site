import IconSpan from '../../components/IconSpan'
import '../installationpage.css'

const ReAuthPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<h1 className='installation-page-header'>
				6. Re-Authorizing npChatbot with Twitch
				<IconSpan />
			</h1>
			<div className='installation-page-directions-step'>
				<p>
					Changing the password for the Twitch
					<IconSpan /> or Spotify
					<IconSpan /> account that npChatbot is linked to disconnects any
					third-party apps or services previously authorized through those
					accounts, including npChatbot.
				</p>
				<p>
					To re-authorize npChatbot, click either the{' '}
					<span className='highlighted-installation-text'>
						Twitch
						<IconSpan />
					</span>{' '}
					or{' '}
					<span className='highlighted-installation-text'>
						Spotify
						<IconSpan />
					</span>{' '}
					button in the upper left of npChatbot to restart the authorization
					process for that particular app. You will not need to re-enter your
					credentials or preferences.
				</p>
			</div>
			<h1 className='installation-page-header'>
				De-Authorizing npChatbot with Twitch
				<IconSpan />
			</h1>
			<div className='installation-page-directions-step'>
				<p>
					If you'd like to de-authorize npChatbot from your connected Twitch
					<IconSpan />
					account altogether:
				</p>
				<p>
					<p>
						- Log in to the Twitch
						<IconSpan /> account npChatbot is authorized with
					</p>
					<p>
						- Navigate to{' '}
						<span className='highlighted-installation-text'>Settings</span>, and
						then select the{' '}
						<span className='highlighted-installation-text'>Connections</span>{' '}
						tab
					</p>
					<p>
						Scroll down to the{' '}
						<span className='highlighted-installation-text'>
							Other Connections
						</span>{' '}
						section and click the{' '}
						<span className='highlighted-installation-text'>Disconnect</span>{' '}
						button next to npChatbot to remove the authorization.
					</p>
				</p>
			</div>
			<h1 className='installation-page-header'>
				De-Authorizing npChatbot with Spotify
				<IconSpan />
			</h1>
			<div className='installation-page-directions-step'>
				<p>
					If you'd like to de-authorize npChatbot from your connected Spotify
					account:
				</p>
				<p>
					<p>
						- Log in to the Spotify
						<IconSpan /> account npChatbot is authorized with
					</p>
					<p>
						- Click on your{' '}
						<span className='highlighted-installation-text'>user icon</span> in
						the upper right, and then select{' '}
						<span className='highlighted-installation-text'>Account</span> from
						the options
					</p>
					<p>
						Scroll down and select the{' '}
						<span className='highlighted-installation-text'>Manage Apps</span>{' '}
						option. Finally, click the{' '}
						<span className='highlighted-installation-text'>Remove Access</span>{' '}
						button next to npChatbot to remove the authorization.
					</p>
				</p>
			</div>
			<h1 className='installation-page-header'>
				De-Authorizing npChatbot with Discord
				<IconSpan />
			</h1>
			<div className='installation-page-directions-step'>
				<p>
					If you'd like to de-authorize npChatbot from your connected Discord
					server:
				</p>
				<p>
					<p>
						- Log in to the Discord
						<IconSpan /> account npChatbot is authorized with
					</p>
					<p>
						- Click on the{' '}
						<span className='highlighted-installation-text'>settings icon</span>{' '}
						in the lower left (near your profile picture and status), and then
						select{' '}
						<span className='highlighted-installation-text'>
							Authorized Apps
						</span>{' '}
						from the options
					</p>
					<p>
						- Scroll or search until you find npChatbot in the Authorized Apps
						section and click the <span className="highlighted-installation-text">Deauthorize</span> button to remove it.
					</p>
				</p>
			</div>
		</div>
	)
}

export default ReAuthPanel
