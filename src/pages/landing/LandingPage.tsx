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
							live-streamed DJ sets
						</p>
						<p>
							The desktop app accomplishes this by connecting your Twitch
							<span className='icon-span'>©</span> channel's chat to your Serato
							<span className='icon-span'>©</span> Live Playlist via a group of
							interactive chat commands.{' '}
						</p>
						<p>
							The commands included allow your viewers to see the song "now
							playing" or any song previously played during your set, as well as
							the ability to directly search your play history by title or
							artist.
						</p>
					</div>
					<div className='details-inset'>
						<div className='details-header'>Real Time Playlist Stats</div>
						<p>npChatbot's commands aren't limited to just music discovery.</p>

						<p>
							The app also has the ability to display a number of real-time
							"stats" during your live streams, giving both viewers and
							streamers alike new insight into these DJ sets.
						</p>
						<p>
							Check the average song length for your set, total songs played so
							far, how many times you've rocked doubles, and more through the
							included chat commands.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default LandingPage
