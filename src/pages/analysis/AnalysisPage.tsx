import IconSpan from '../components/IconSpan'
import './analysispage.css'

const AnalysisPage = (): JSX.Element => {
	return (
		<div className='analysis-page'>
			<div className='analysis-page-header'>Data Quirks</div>			
			<div className='analysis-page-subheader'>
				Determining The Longest Song Played
			</div>
			<div className='analysis-page-container'>
				<div className='analysis-page-item'>
					<p>
						npChatbot collects your Serato<IconSpan/> live playlist data in real time to
						calculate your stats, data which is limited to the title, artist, and the
						start time of each song played. Using this data, it estimates song
						lengths based on when each song started.
					</p>
					<p>
						Since the data only includes start times, npChatbot assumes minimal
						breaks between songs to determine the longest track. Extended breaks
						can cause inaccurate results, as the app can't distinguish between a
						long song played and an extended pause or break during the set.
					</p>

					<p>
						When this scenario occurs during a live playlist set, the{' '}
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
						Extended breaks between songs can also impact the accuracy of the
						average track length calculation, skewing the result.
					</p>
					<p>
						To address this, the `!np stats` command automatically filters out
						any unusually long or short tracks to provide a more accurate
						average.
					</p>
				</div>
			</div>
			<div className='analysis-page-subheader'>Detecting "Doubles" Played</div>
			<div className='analysis-page-container'>
				<div className='analysis-page-item'>
					<p>
						"Doubles" occur when the DJ plays the same song on both decks
						simultaneously (e.g., beat juggles, cut sessions). These are
						typically detected in the live playlist as back-to-back track
						entries.
					</p>
					<p>
						However, due to inconsistencies in Serato's<IconSpan/> playlist logging, the
						!np doubles command may sometimes fail to detect recent doubles or
						display older doubles instead of the latest ones.
					</p>
				</div>
			</div>
			<div className='analysis-page-subheader'>Missing Title/Artist Tags</div>
			<div className='analysis-page-container'>
				<div className='analysis-page-item'>
					<p>
						Note that the title/artist tags from Serato© will appear as-is in
						the chatbot's responses. Cleaner tags ensure better results. Missing
						or incorrect info may affect the !dyp command if the searched term
						isn't found due to empty or malformed tags.
					</p>
				</div>
			</div>
		</div>
	)
}

export default AnalysisPage
