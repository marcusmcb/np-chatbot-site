const LandingPage = (): JSX.Element => {
	return (
		<>
			<div className='download-section'>
				<div className='download-box'>
					<p className='download-header'>Download npChatbot For Twitch</p>
					<button>Download</button>
				</div>
				<div className='description-box'>
					<div className='description-box-header'>
						Add A New Level Of Interactivity To Your Twitch Stream
					</div>
					<div className='description-box-text'>
						<p>
							Use the npChatbot app to connect your Twitch© chat with your
							Serato&copy; Live Playlist and add a suite of interactive playlist
							commands to your live-streamed DJ sets.
						</p>
					</div>
				</div>
			</div>
			<div className='details-panel'>
				<div className='details-inset'>
					<div className='details-header'>Real Time Playlist Stats</div>
					<p>
						npChatbot gives your viewers the ability to see your 'stats' in
						real-time at any point during your stream.
					</p>
					<p>
						For a quick check, they can simply enter the{' '}
						<i>
							<b>!stats</b>
						</i>{' '}
						command to see the total number of songs you've played so far, your
						average song length for this set, and whether that average has
						increased/decreased since the previous song.
					</p>
					<p>
						For a deeper dive, viewers have access to commands that determine
						the shortest and longest songs played so far in your set, as well as
						how many times you've rocked doubles during your set and which songs
						you were cutting it up with.
					</p>
					<p></p>
				</div>
				<div className='details-inset'>
					<div className='details-header'>
						Music Discovery In Your Live Streams
					</div>
					<p>
						By opening up access to your real-time play history during your
						live-stream DJ set, your viewers can query that history to see if
						any specific artist or title has been played previously in your set.
					</p>
					<p>
						By entering the{' '}
						<i>
							<b>!dyp</b>
						</i>{' '}
						command ("did you play...?") followed by an artist's name or song
						title, your viewers can specifically see what you have (or haven't)
						played yet during your stream.
					</p>
					<p>
						The{' '}
						<i>
							<b>!np</b>
						</i>{' '}
						command ("now playing") and its options allow your viewers to see
						the song currently playing, the previous song played (in case they
						missed it!), the song you began your set with, and a "vibe check"
						that returns a random selection from your play history
						(title/artist) and how long ago you played it.
					</p>
				</div>
			</div>
		</>
	)
}

export default LandingPage
