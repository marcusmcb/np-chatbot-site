import './featurespage.css'

const FeaturesPage = (): JSX.Element => {
	return (
		<div className='features-page'>
			<div className='features-page-header'>Features</div>
			<div className='features-page-subheader'>Interactive Music Discovery</div>
			<div className='features-page-container'>
				<div className='features-page-feature'>
					<p>
						By opening up access to your play history during your live-streamed
						DJ sets, viewers can directly interact with that history in
						real-time, adding a unique layer of interactivity and music
						discovery to each stream.
					</p>
					<p>
						The <span className='highlighted-text'>!np</span> command ("now
						playing") and its options allow your viewers to see the song
						currently playing, the previous song played (in case they missed
						it!), the song you began your set with, and others. There's also a
						"vibe check" option that returns a random selection from your play
						history (title/artist) and how long ago you played it.
					</p>
				</div>
			</div>
			<div className='features-page-subheader'>Search By Song Or Artist</div>
			<div className='features-page-container'>
				<div className='features-page-feature'>
					{/* <p>
						The included <span className='highlighted-text'>!dyp</span> command
						(short for "did you play...?") allows your viewers to digitally
						"dig" through your current Serato Live Playlist data in real time.
					</p> */}
					<p>
						When using the <span className='highlighted-text'>!dyp</span>{' '}
						command (short for "did you play...?") followed by an artist name or
						a song title, your viewers will see the total number of songs that
						match the result along with the most recent song played and how long
						ago it was played.
					</p>
					<p>
						This gives your viewers the ability to digitally "dig" through your
						history and see what kind of music/vibe you've been playing up to
						that point in the set. It also gives you, the DJ, some <i>real</i>{' '}
						insight (and potential inspiration) on where to go next musically
						speaking.
					</p>
				</div>
			</div>
			<div className='features-page-subheader'>Real Time Playlist Stats</div>
			<div className='features-page-container'>
				<div className='features-page-feature'>
					{/* <p>
						npChatbot gives your viewers the ability to see your 'stats' in
						real-time at any point during your stream.
					</p> */}
					<p>
						Using the commmands in npChatbot, they (or you!) can check your
						current
						<span className='highlighted-text'> !stats</span> at any time during
						the stream with options to display the total number of songs you've
						played so far, your average song length for this set currently, and
						whether that average has increased/decreased since the previous song
						played.
					</p>
				</div>
			</div>
			<div className='features-page-subheader'>Deep Playlist Dives</div>
			<div className='features-page-container'>
				<div className='features-page-feature'>
					<p>
						For a deeper dive, viewers have access to commands that determine
						the <span className='highlighted-text'>!shortestsong</span> and{' '}
						<span className='highlighted-text'>!longestsong</span> played so far
						in your set, as well as how many times you've rocked{' '}
						<span className='highlighted-text'>!doubles</span> during your set
						and which songs you were cutting it up with when you did.
					</p>
				</div>
			</div>
			<div className='features-page-subheader'>OBS Integration</div>
			<div className='features-page-container'>
				<div className='features-page-feature'>
					<p>
						With OBS Websockets enabled, you can enter your OBS socket address
						(and password if secured) which will allow npChatbot to send its
						command responses as text to OBS for use on-screen in your streams.
					</p>
				</div>
			</div>
		</div>
	)
}

export default FeaturesPage
