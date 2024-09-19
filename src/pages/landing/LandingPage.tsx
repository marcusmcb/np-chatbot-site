const CopyRightIcon = (): JSX.Element => {
	return <span className='icon-span'>©</span>
}

const LandingPage = (): JSX.Element => {
	return (
		<>
			<div className='download-section'>
				<div className='download-box'>
					<p className='download-header'>Download npChatbot</p>
					<button>Download</button>
				</div>
				<div className='description-box'>
					{/* <div className='description-box-header'>
						Add A New Level Of Interactivity To Your Twitch Stream
					</div> */}
					<div className='description-box-text'>
						<p>
							Connect your Twitch<span className='icon-span-header'>©</span>{' '}
							chat with your Serato<span className='icon-span-header'>©</span>{' '}
							Live Playlist to add a collection of interactive music discovery
							commands to your channel
						</p>
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
							<CopyRightIcon /> chat to your Serato
							<CopyRightIcon /> Live Playlist and includes:
						</p>
						<p>* Real-time display of the track "now playing"</p>
						<p>* Access to any previously played song during your set</p>
						<p>
							* Search functionality by song title and artist in your live play
							history
						</p>
					</div>
					<div className='details-inset'>
						<div className='details-header'>Instant Playlist Stats</div>
						<p>
							npChatbot's commands aren't limited to just music discovery. The
							app also provides real-time "stats" during your live streams,
							offering unique insights to both viewers and streamers these DJ
							sets. These includes:
						</p>
						<p>* Average song length for your set</p>
						<p>* Total songs played at any point during your set</p>
						<p>* The shortest or longest song of your set</p>
						<p>* How many times you've played "doubles" during your set</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default LandingPage
