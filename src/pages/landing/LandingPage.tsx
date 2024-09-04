const LandingPage = (): JSX.Element => {
	return (
		<>
			<div className='download-section'>
				<div className='download-box'>
					<p className='download-header'>Download npChatbot For Twitch</p>
					<button>Download</button>
				</div>
				<div className='description-box'>
					{/* <div className='description-box-header'>
						Add A New Level Of Interactivity To Your Twitch Stream
					</div> */}
					<div className='description-box-text'>
						<p>
							Use the npChatbot app to connect your Twitch© chat with your
							Serato&copy; Live Playlist and add a suite of interactive playlist
							commands to your live-streamed DJ sets.
						</p>
					</div>
					{/* <div className='details-inset'>
						<div className='details-header'>Real Time Playlist Stats</div>
						<p>
							npChatbot gives your viewers the ability to see your 'stats' in
							real-time at any point during your stream.
						</p>
					</div>
					<div className='details-inset'>
						<div className='details-header'>
							Music Discovery In Your Live Streams
						</div>
						<p>
							By opening up access to your real-time play history during your
							live-stream DJ set, your viewers can query that history to see if
							any specific artist or title has been played previously in your
							set.
						</p>
					</div> */}
				</div>
			</div>
			<div className='details-panel'>
				<div className='details-inset'>
					<div className='details-header'>Real Time Playlist Stats</div>
					<p>
						npChatbot gives your viewers the ability to see your 'stats' in
						real-time at any point during your stream.
					</p>
				</div>
				<div className='details-inset'>
					<div className='details-header'>Real Time Music Discovery</div>
					<p>
						By opening up access to your real-time play history during your
						live-stream DJ set, your viewers can query that history to see if
						any specific artist or title has been played previously in your set.
					</p>
				</div>
			</div>
		</>
	)
}

export default LandingPage
