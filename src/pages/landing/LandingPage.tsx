import IconSpan from '../components/IconSpan'
import { useNavigate } from 'react-router-dom'

const LandingPage = (): JSX.Element => {
	const navigate = useNavigate()
	const handleLearnMore = () => {
		navigate('/features')
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
	}
	return (
		<div>
			<div className='download-section'>
				<div className='download-box'>
					<div className='download-header'>Download npChatbot</div>
					<div className='download-version'>(version 1.0.3)</div>
					<div className='download-button-group'>
						<a href='https://npchatbot-downloads.s3.us-west-2.amazonaws.com/npchatbot-setup.exe'>
							<button>Download (PC)</button>
						</a>
						<a href='https://npchatbot-downloads.s3.us-west-2.amazonaws.com/npchatbot.dmg'>
							<button>Download (Mac)</button>
						</a>
						{/* <div className='mac-installer-text'>(macOS version coming soon)</div> */}
					</div>
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
			<div className='details-panel details-panel-top'>
				<div className='details-panel-container'>
					<div className='details-inset'>
						<div className='details-header'>Real Time Music Discovery</div>
						<p>
							npChatbot enables a unique level of music discovery during your
							live-streamed DJ sets by connecting your Twitch
							<IconSpan /> chat (aka, your viewers!) to your Serato
							<IconSpan /> Live Playlist through a set of interactive chat
							commands.
						</p>
						{/* <p>* Real-time display of the track "now playing"</p>
			<p>* Access to any previously played song during your set</p>
			<p>
			  * Search functionality by song title and artist directly in your
			  Twitch
			  <IconSpan /> chat
			</p>
			<p>
			  * A "vibe check" command that provides some viewer insight as to
			  what type of set you've been playing
			</p> */}
					</div>
					<div className='details-inset'>
						<div className='details-header'>Instant Playlist Stats</div>
						<p>
							npChatbot's commands aren't limited to just music discovery. The
							app also provides real-time "stats" about your DJ set during your
							live streams, offering up unique insight about your current set in
							real time.
						</p>
						{/* <p>* The average song length for your set</p>
			<p>* Total songs played at any point during your set</p>
			<p>* The shortest or longest song of your set</p>
			<p>* How many times you've rocked "doubles" during your set</p> */}
					</div>
				</div>
			</div>
			<div className='details-panel details-panel-bottom'>
				<div className='details-panel-container'>
					<div className='details-inset'>
						<div className='details-header'>Spotify Playlist Creation</div>
						<p>
							Linking your Spotify
							<IconSpan /> account with npChatbot gives you the ability to
							create and share playlists of your DJ sets with your Twitch
							<IconSpan /> viewers directly in your chat!
						</p>
						{/* <p>
			  Under the hood, npChatbot will update your Spotify
			  <IconSpan /> playlist directly from your Serato
			  <IconSpan /> play history with each new song you play during your
			  set.
			</p>
			<p>
			  With a simple command, viewers can access the Spotify playlist for
			  your current set in the chat at any time!
			</p> */}
					</div>
					<div className='details-inset'>
						<div className='details-header'>Playlist Summaries</div>
						<p>
							npChatbot also provides a final Playlist Summary for each streamed
							DJ set, with a final tally of the songs played, their average
							length, which songs you rocked doubles with, the discovery
							commands used during each set, and more!
						</p>
						{/* <p>
			  Each summary also shows npChatbot's command use during your set,
			  showing which songs, artists, and phrases your viewers searched
			  for during that stream.
			</p>
			<p>
			  With the Spotify feature enabled, your playlist link is available
			  in your summary to easily share with your streaming community.
			</p> */}
					</div>
				</div>
			</div>
			{/* Learn More Button */}
			<div className='learn-more-button-container'>
				<button className='learn-more-button' onClick={handleLearnMore}>
					Learn More
				</button>
			</div>
		</div>
	)
}

export default LandingPage
