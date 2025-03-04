import IconSpan from '../components/IconSpan'

const LandingPage = (): JSX.Element => {
	return (
		<>
			<div className='download-section'>
				<div className='download-box'>
					<p className='download-header'>Download npChatbot</p>
					<a href='https://npchatbot-downloads.s3.us-west-2.amazonaws.com/npchatbot-setup.exe'>
						<button>Download (PC)</button>
					</a>
					<div className='mac-installer-text'>(macOS version coming soon)</div>
				</div>
				<div className='description-box'>
					<div className='description-box-text'>
						<p>
							Connect your Twitch
							<IconSpan /> chat with your Serato
							<IconSpan /> Live Playlist to add a collection of interactive
							music discovery commands to your channel
						</p>
					</div>
					<div className='description-box-text'>
						<div className='features-page-feature video-element'>
							<video controls width='100%'>
								<source src='/videos/npchatbot_demo.MP4' type='video/mp4' />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>
			</div>
			<div className='details-panel'>
				<div className='details-panel-container'>
					<div className='details-inset'>
						<div className='details-header'>Real Time Music Discovery</div>
						<p>
							npChatbot enables a unique level of music discovery during your
							live-streamed DJ sets by connecting your Twitch
							<IconSpan /> chat to your Serato
							<IconSpan /> Live Playlist and includes:
						</p>
						<p>* Real-time display of the track "now playing"</p>
						<p>* Access to any previously played song during your set</p>
						<p>
							* Search functionality by song title and artist directly in your
							Twitch
							<IconSpan /> chat
						</p>
						<p>
							* A "vibe check" command that provides viewer insight as to what
							type of set you've been playing
						</p>
					</div>
					<div className='details-inset'>
						<div className='details-header'>Instant Playlist Stats</div>
						<p>
							npChatbot's commands aren't limited to just music discovery. The
							app also provides real-time "stats" about your DJ set during your
							live streams, offering unique insights to both viewers and
							streamers alike. These include:
						</p>
						<p>* The average song length for your set</p>
						<p>* Total songs played at any point during your set</p>
						<p>* The shortest or longest song of your set</p>
						<p>* How many times you've rocked "doubles" during your set</p>
					</div>
					<div className='details-inset'>
						<div className='details-header'>Spotify Playlist Creation</div>
						<p>
							Linking your Spotify
							<IconSpan /> account with npChatbot gives you the ability to
							create and share playlists of your DJ sets with your Twitch
							<IconSpan /> viewers directly in your chat.
						</p>
						<p>
							Under the hood, npChatbot will update your Spotify
							<IconSpan /> playlist in real-time directly from your Serato
							<IconSpan /> play history with each new song you play during your
							set.
						</p>
						<p>
							With a simple command, viewers can access the Spotify playlist for
							your current set at any time!
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default LandingPage
