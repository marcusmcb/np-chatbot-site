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
					</div>
				</div>
				<div className='description-box'>
					<div className='description-box-text'>
						<h3>
							Connect your Twitch
							<IconSpan /> chat to your Serato
							<IconSpan /> Live Playlist to add a collection of interactive
							music discovery features to your channel
						</h3>
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
						<h3 className='details-header'>Real Time Music Discovery</h3>
						<p>
							npChatbot enables a unique level of music discovery during your
							live-streamed DJ sets by connecting your Twitch
							<IconSpan /> chat (aka, your viewers!) to your Serato
							<IconSpan /> Live Playlist through a set of interactive chat
							commands.
						</p>
					</div>
					<div className='details-inset'>
						<h3 className='details-header'>Instant Playlist Stats</h3>
						<p>
							npChatbot's commands aren't limited to just music discovery. The
							app also provides real-time "stats" about your DJ set during your
							live streams, offering up unique insight about your current set in
							real time.
						</p>
					</div>
				</div>
			</div>
			<div className='details-panel details-panel-bottom'>
				<div className='details-panel-container'>
					<div className='details-inset'>
						<h3 className='details-header'>Spotify Playlist Creation + Discord Integration</h3>
						<p>
							Linking your Spotify
							<IconSpan /> account with npChatbot gives you the ability to
							create and share playlists of your DJ sets with your Twitch
							<IconSpan /> viewers directly in your chat!  You can also link npChatbot with your Discord<IconSpan/> server to share them there as well!
						</p>
					</div>
					<div className='details-inset'>
						<h3 className='details-header'>Playlist Summaries</h3>
						<p>
							npChatbot also provides a final Playlist Summary for each streamed
							DJ set with all of your set's stats and command use during that
							stream, giving you, the DJ streamer, deeper insights into those
							streamed sets.
						</p>
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
