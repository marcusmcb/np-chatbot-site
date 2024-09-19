import './analysispage.css'

const AnalysisPage = (): JSX.Element => {
	return (
		<div className='analysis-page'>
			<div className='analysis-page-header'>Data Quirks</div>
			<div className='analysis-page-subheader'>
				Command Responses On Start Up
			</div>
			<div className='analysis-page-container'>
				<div className='analysis-page-item'>
					<p>
						A number of the calculations used in several of npChatbot's commands
						require a minimum of 3-4 tracks to be played in order to generate an
						accurate result.
					</p>
					<p>
						As such, the following commands require a minimum of 3-4 tracks to
						return a proper response.
					</p>
					<p className='highlighted-analysis-text'>!np stats</p>
					<p className='highlighted-analysis-text'>!np longest</p>
					<p className='highlighted-analysis-text'>!np shortest</p>
					<p>
						The response from npChatbot will indicate this if used before the
						minimum number of tracks have been played. Once the threshold's been
						met, all commands will return the expected results.
					</p>
				</div>
			</div>
			<div className='analysis-page-subheader'>
				Determining The Longest Song Played
			</div>
			<div className='analysis-page-container'>
				<div className='analysis-page-item'>
					<p>
						Under the hood, npChatbot collects your Serato
						<span className='icon-span'>©</span> live playlist data in real time
						and uses it to calculate the various stats used in the chatbot's
						responses. Within that data, the title, artist, and the time that
						each song began playing is available and, from those start times,
						npChatbot can determine the length of each song played.
					</p>
					<p>
						The live playlist data only indicates when each song began playing,
						not when it ended. Assuming you're playing music with minimal breaks
						between songs, this should create no issue in determining the
						longest song in your set.{' '}
					</p>
					<p>
						However, with an extended break between songs during a live set,
						making that determination becomes challenging as it's difficult for
						npChatbot to assess whether or not an abnormally long song was
						actually played in full or was simply the result of a pause in the
						music during your set.
					</p>
					<p>
						As such, when this scenario occurs during a live playlist set, the{' '}
						<b>
							<span className='highlighted-analysis-text'>!np longest</span>
						</b>{' '}
						command will display the title and artist of the longest song played
						but will not display its length. For live playlist sets with few or
						no breaks between songs, the length will be displayed.
					</p>
				</div>
			</div>
			<div className='analysis-page-subheader'>
				Calculating Average Track Length
			</div>
			<div className='analysis-page-container'>
				<div className='analysis-page-item'>
					<p>
						The same issue that arises in determining the longest song played
						can also affect the accuracy of the average track length
						calculation. If there are extended breaks between songs, those
						breaks could potentially skew the average calculated.
					</p>
					<p>
						To account for this, the{' '}
						<b>
							<span className='highlighted-analysis-text'>!np stats</span>
						</b>{' '}
						will account for any outliers in that data that could potentially
						skew that average by removing any abnormally long or short song
						lengths from the calculation.
					</p>
				</div>
			</div>
			<div className='analysis-page-subheader'>Detecting "Doubles" Played</div>
			<div className='analysis-page-container'>
				<div className='analysis-page-item'>
					<p>
						"Doubles" occur during a live set when the DJ has the same song
						playing on both decks at the same time (beat juggles, cut sessions,
						etc). This is easily detected within a live playlist set as the song
						duplicated on both decks will appear as back to back track entries
						within the DJ's play history.
					</p>
					<p>
						However, despite extensive testing, we've noticed that the Serato
						<span className='icon-span'>©</span> live playlist feature does not
						always log the duplicate song entry consistently when playing
						doubles. Thus, when using the{' '}
						<b>
							<span className='highlighted-analysis-text'>!np doubles</span>
						</b>{' '}
						command, npChatbot may not display a response even though doubles
						have actually occurred previously during your set. Alternately, it
						may display an older set of doubles as the most recent played
						despite a more recent set having taken place.
					</p>
				</div>
			</div>
			<div className='analysis-page-subheader'>Missing Title/Artist Tags</div>
			<div className='analysis-page-container'>
				<div className='analysis-page-item'>
					<p>
						Just a note that however your title/artist tags appear in the tracks
						played in Serato<span className='icon-span'>©</span> is how they'll
						appear in the chatbot's responses. The cleaner, the better. Missing
						artist or title information could potentially skew the results of
						the{' '}
						<b>
							<span className='highlighted-analysis-text'>!dyp</span>
						</b>{' '}
						command if a searched term is not found in otherwise empty or
						malformed file tags.
					</p>
				</div>
			</div>
		</div>
	)
}

export default AnalysisPage
