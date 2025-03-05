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
						npChatbot collects your Serato
						<IconSpan /> live playlist data in real time to calculate your
						stats, data which is limited to the title, artist, and the start
						time of each song played. Using this data, it estimates song lengths
						based on when each song started.
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
						However, due to inconsistencies in Serato's
						<IconSpan /> playlist logging, the !np doubles command may sometimes
						fail to detect recent doubles or display older doubles instead of
						the latest ones.
					</p>
				</div>
			</div>
			<div className='analysis-page-subheader'>Missing Title/Artist Tags</div>
			<div className='analysis-page-container'>
				<div className='analysis-page-item'>
					<p>
						Note that the title/artist tags from Serato
						<IconSpan /> will appear as-is in the chatbot's responses. Cleaner
						tags ensure better results. Missing or incorrect info may affect the
						!dyp command if the searched term isn't found due to empty or
						malformed tags.
					</p>
				</div>
			</div>
			<div className='analysis-page-subheader'>Spotify Playlist Selections</div>
			<div className='analysis-page-container'>
				<div className='analysis-page-item'>
					<p>
						When using the included Spotify
						<IconSpan /> feature to create/update a playlist of the songs you
						play, npChatbot uses the file tag information from each song played
						in Serato
						<IconSpan /> to submit a request to Spotify
						<IconSpan />.{' '}
					</p>
					<p>
						The results of each request are used to determine which song is
						added to your Spotify
						<IconSpan /> playlist.
					</p>
					<p>
						By default, the most popular result for the song information
						submitted is used when adding songs to your current playlist. For
						common, popular songs, the resulting addition should be reasonably
						accurate.
					</p>
					<p>
						For songs not available on Spotify
						<IconSpan />, no addition or change is made to the current playlist.
					</p>
					<p>
						Bearing in mind that the file tag information from Serato
						<IconSpan /> is used to submit the queries to Spotify, less than
						perfect file tags (typos, missing artist/title values, etc) can skew
						the results returned from Spotify
						<IconSpan /> that are used when updating your playlists.
					</p>
					<p>
						We're currently working on improving the accuracy of the Spotify
						results to account for scenarios and instances like the ones
						described above.
					</p>
				</div>
			</div>
		</div>
	)
}

export default AnalysisPage
